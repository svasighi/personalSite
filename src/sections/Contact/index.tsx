import Section from '../../components/Section';

const Contact = () => {
  return (
    <Section
      title={
        <>
          I’m Open to Hiring ️
          <img className="inline ml-2 mb-2" src="/flash.svg" alt="flash" />
        </>
      }>
      <div className="flex flex-col space-y-20">
        <div className="text-gray-700 text-base font-normal leading-normal">
          <div>
            I am interested in companies that provide a dynamic and progressive
            working environment, and offer challenging opportunities in my field
            of expertise.
          </div>
          <div className="flex items-center mt-10">
            I am available for both
            <div className="inline-flex justify-center items-center mx-3 w-20 space-x-2">
              <img src="/wavy.svg" aria-hidden="true" className="h-full " />
              <ul className="flex-1 text-gray-700 text-base font-semibold leading-normal space-y-2 min-w-max">
                <li>remote</li>
                <li>in-office</li>
              </ul>
            </div>
            work and relocation is not a concern for me.
          </div>
        </div>
        <div className="max-w-lg px-6 py-2 mx-auto mt-10 bg-amber-100 border-b-4 border-slate-800 rounded-3xl justify-center items-center gap-1.5 inline-flex text-gray-800 text-base font-medium leading-normal hover:bg-amber-200 active:border-b transition-all duration-300">
          👋🏼 say me hello
        </div>
      </div>
    </Section>
  );
};

export default Contact;
