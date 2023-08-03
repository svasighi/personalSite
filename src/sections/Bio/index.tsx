import { MY_BIO } from '../../constants/texts';
const Bio = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center">
          <hr className="w-12 mr-1.5 border-gray-800" />
          <div className="text-gray-800 text-xl font-semibold leading-7">
            I’m Shadmehr Vasighi
          </div>
        </div>
        <div className=" text-3xl font-semibold leading-9">
          <span className="text-gray-800">
            Frontend developer
            <img className="inline ml-2 mb-2" src="/flash.svg" alt="flash" />
            <br />
          </span>
          <span className="text-gray-400">Ex-Backend developer</span>
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-base font-medium leading-normal">
          {MY_BIO}
        </p>
      </div>
    </div>
  );
};
export default Bio;
