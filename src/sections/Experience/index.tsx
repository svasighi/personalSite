import classNames from "classnames";
import Section from "../../components/Section";
import { MY_EXPERIENCES } from "../../constants/texts";

const Experience = () => {
  return (
    <Section title="Experiences">
      <div className="flex flex-col">
        {MY_EXPERIENCES.map((experience, i, MY_EXPERIENCES) => {
          return (
            <div className="group flex space-x-4" key={experience.title}>
              <div
                className={classNames("flex w-[22px] flex-col items-center ")}
              >
                <div
                  className={classNames(
                    " h-6 w-6 rounded-full bg-amber-200 transition-colors duration-500 ease-in-out group-hover:bg-amber-400",
                  )}
                ></div>
                {i + 1 != MY_EXPERIENCES.length && (
                  <div className="w-0 flex-1 border-l border-dashed border-gray-400"></div>
                )}
              </div>
              <div className="mb-3.5 flex flex-1 flex-col space-y-2">
                <div className=" text-base font-semibold leading-normal text-gray-700">
                  {experience.title}
                  <span className="text-sm font-medium leading-tight text-gray-400">
                    {" | "} {experience.subtitle}
                  </span>
                </div>
                <div className="text-sm font-normal leading-tight text-gray-400">
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
