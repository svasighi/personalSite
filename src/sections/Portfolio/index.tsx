import { ReactNode, useState } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";
import { LinkIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
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
    id: "maherha",
    title: "Maherha.com",
    description: "Landing page of SmarterTrading411 created",
    image: "/portfolio/site1.jpg",
    link: "https://maherha.com",
  },
  {
    id: "TaherHa",
    title: "TaherHa.com",
    description: "cleaning service",
    image: "/portfolio/site1.jpg",
    link: "https://taherha.com",
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
    <div className="group relative h-full w-full overflow-hidden rounded-2xl border">
      <img
        src={image}
        className="h-60 w-full object-cover object-center"
        alt={title}
      />
      <div className="absolute inset-0 block rounded-2xl bg-slate-700 bg-opacity-30 transition-all duration-500 group-hover:bg-amber-300 group-hover:bg-opacity-70">
        <div className="my-auto flex h-full flex-col justify-center space-y-2 p-6 text-center opacity-0 transition duration-500 group-hover:opacity-100">
          <p className="text-2xl font-semibold leading-7 text-gray-700">
            {title}
          </p>
          <p className=" text-center text-base font-normal leading-normal text-gray-600">
            {description}
          </p>
          <div className="flex items-center justify-center space-x-3">
            <a href={link} className="w-10 rounded-full bg-white p-2">
              <LinkIcon className=" text-slate-600" />
            </a>
            <InformationCircleIcon className="w-10 rounded-full bg-white p-2 text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectsTab = () => {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
      {EXERCISES.map((item) => {
        return <PortfolioItem key={item.id} {...item}></PortfolioItem>;
      })}
    </div>
  );
};

const ExercisesTab = () => {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
      {EXERCISES.map((item) => {
        return <PortfolioItem key={item.id} {...item}></PortfolioItem>;
      })}
    </div>
  );
};

const tabs = [
  { id: "project", label: "Projects", component: <ProjectsTab /> },
  { id: "exercises", label: "Exercises", component: <ExercisesTab /> },
];

function TabHeader({ tabs, activeTab, setActiveTab }: tabHeaderProps) {
  return (
    <div className="relative flex w-full items-center justify-center space-x-4 rounded-2xl bg-gray-900 px-4 py-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={classNames(
            "relative w-full py-4 text-xl font-medium outline-sky-400 transition focus-visible:outline-2",
            {
              "text-slate-300": activeTab === tab.id,
              "text-slate-500 hover:text-slate-400": activeTab != tab.id,
            },
          )}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="underline"
              className="absolute bottom-0 left-0 right-0 top-0 rounded-2xl bg-slate-800"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
                damping: 30,
              }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
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
        setActiveTab={setActiveTab}
      ></TabHeader>
      <>
        <motion.div
          key={activeTab ?? "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {tabs.filter((tab) => tab.id == activeTab)[0]?.component}
        </motion.div>
      </>
    </div>
  );
};

export default Portfolio;
