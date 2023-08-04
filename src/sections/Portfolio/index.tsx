import { ReactNode, useState } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { LinkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
//Todo refactor code
type tabHeaderProps = {
  tabs: {
    id: string;
    label: string;
    component: ReactNode;
  }[];
  activeTab: string;
  setActiveTab: (index: string) => void;
};

const EXERCISES = [
  {
    id: 'maherha',
    title: 'Maherha.com',
    description: 'Landing page of SmarterTrading411 created',
    image: '/portfolio/site1.jpg',
    link: 'https://maherha.com',
  },
  {
    id: 'maherha',
    title: 'Maherha.com',
    description: 'cleaning service',
    image: '/portfolio/site1.jpg',
    link: 'https://maherha.com',
  },
];
type itemPropsType = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};
//Todo add modal
function PortfolioItem(props: itemPropsType) {
  const { link, image, title, description } = props;
  return (
    <div className="relative border overflow-hidden h-full w-full rounded-2xl group">
      <img
        src={image}
        className="w-full h-60 object-cover object-center"
        alt={title}
      />
      <div className="block bg-slate-700 absolute rounded-2xl inset-0 bg-opacity-30 group-hover:bg-opacity-70 group-hover:bg-amber-300 transition-all duration-500">
        <div className="opacity-0 flex-col justify-center text-center p-6 group-hover:opacity-100 flex transition duration-500 h-full my-auto space-y-2">
          <p className="text-gray-700 text-2xl font-semibold leading-7">
            {title}
          </p>
          <p className=" text-center text-gray-600 text-base font-normal leading-normal">
            {description}
          </p>
          <div className="flex items-center justify-center space-x-3">
            <a href={link} className="bg-white rounded-full w-10 p-2">
              <LinkIcon className=" text-slate-600" />
            </a>
            <InformationCircleIcon className="w-10 p-2 text-slate-600 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectsTab = () => {
  return (
    <div className="grid grid-cols-2 gap-7">
      {EXERCISES.map((item) => {
        return <PortfolioItem key={item.id} {...item}></PortfolioItem>;
      })}
    </div>
  );
};

const ExercisesTab = () => {
  return (
    <div className="grid grid-cols-2 gap-7">
      {EXERCISES.map((item) => {
        return <PortfolioItem key={item.id} {...item}></PortfolioItem>;
      })}
    </div>
  );
};

const tabs = [
  { id: 'project', label: 'Projects', component: <ProjectsTab /> },
  { id: 'exercises', label: 'Exercises', component: <ExercisesTab /> },
];

function TabHeader({ tabs, activeTab, setActiveTab }: tabHeaderProps) {
  return (
    <div className="relative w-full px-4 py-4 bg-gray-900 rounded-2xl justify-center items-center space-x-4 flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={classNames(
            'relative w-full  py-4 text-xl font-medium outline-sky-400 transition focus-visible:outline-2',
            {
              'text-slate-300': activeTab === tab.id,
              'hover:text-slate-400 text-slate-500': activeTab != tab.id,
            }
          )}>
          {activeTab === tab.id && (
            <motion.span
              layoutId="underline"
              className="absolute top-0 right-0 left-0 bottom-0 bg-slate-800 rounded-2xl"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.6,
                damping: 30,
              }}
            />
          )}
          <span className="z-10 relative">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

const Portfolio = () => {
  let [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="flex flex-col space-y-6">
      <TabHeader
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}></TabHeader>
      <>
        <motion.div
          key={activeTab ?? 'empty'}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}>
          {tabs.filter((tab) => tab.id == activeTab)[0]?.component}
        </motion.div>
      </>
    </div>
  );
};

export default Portfolio;
