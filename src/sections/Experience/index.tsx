import classNames from 'classnames';
import Section from '../../components/Section';
import { MY_EXPERIENCES } from '../../constants/texts';

const Experience = () => {
  return (
    <Section title="Experiences">
      <div className="flex flex-col">
        {MY_EXPERIENCES.map((experience, i, MY_EXPERIENCES) => {
          return (
            <div className="flex space-x-4 group">
              <div
                className={classNames('w-[22px] flex flex-col items-center', {
                  'items-end': i === 0,
                  'items-start': i != 0,
                })}>
                {i != 0 && (
                  <div className="w-1 flex-1 border-l items-center border-dashed border-gray-400"></div>
                )}
                <div
                  className={classNames('bg-amber-200 h-6 w-6 rounded-full', {
                    'mt-12': i == 0,
                    'mb-12': i + 1 == MY_EXPERIENCES.length,
                  })}></div>
                {i + 1 != MY_EXPERIENCES.length && (
                  <div className="w-1 flex-1 border-l border-dashed border-gray-400"></div>
                )}
              </div>
              <div className="flex-1 flex flex-col space-y-2 group-first:mt-4 group-last:mb-4 my-3.5">
                <div className=" text-gray-700 text-base font-semibold leading-normal">
                  {experience.title}
                  <span className="text-gray-400 text-sm font-medium leading-tight">
                    {' | '} {experience.subtitle}
                  </span>
                </div>
                <div className="text-gray-400 text-sm font-normal leading-tight">
                  {experience.description}
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default Experience;
