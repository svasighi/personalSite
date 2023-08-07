import Section from "../../components/Section";
import { MY_BIO } from "../../constants/texts";
const Bio = () => {
  return (
    <Section className="flex flex-col space-y-8">
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center">
          <hr className="mr-1.5 w-12 border-gray-800" />
          <div className="text-xl font-semibold leading-7 text-gray-800">
            I’m Shadmehr Vasighi
          </div>
        </div>
        <div className=" text-3xl font-semibold leading-9">
          <span className="text-gray-800">
            Frontend developer
            <img className="mb-2 ml-2 inline" src="/flash.svg" alt="flash" />
            <br />
          </span>
          <span className="text-gray-400">Ex-Backend developer</span>
        </div>
      </div>
      <div>
        <p className="text-base font-medium leading-normal text-gray-700">
          {MY_BIO}
        </p>
      </div>
    </Section>
  );
};
export default Bio;
