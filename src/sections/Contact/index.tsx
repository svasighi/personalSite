import Section from "../../components/Section";

const Contact = () => {
  return (
    <Section
      title={
        <>
          I’m Open to Hiring ️
          <img className="mb-2 ml-2 inline" src="/flash.svg" alt="flash" />
        </>
      }
    >
      <div className="flex flex-col space-y-20">
        <div className="text-base font-normal leading-normal text-gray-700">
          <div>
            I am interested in companies that provide a dynamic and progressive
            working environment, and offer challenging opportunities in my field
            of expertise.
          </div>
          <div className="mt-10 flex items-center">
            I am available for both
            <div className="mx-3 inline-flex w-20 items-center justify-center space-x-2">
              <img src="/wavy.svg" aria-hidden="true" className="h-full " />
              <ul className="min-w-max flex-1 space-y-2 text-base font-semibold leading-normal text-gray-700">
                <li>remote</li>
                <li>in-office</li>
              </ul>
            </div>
            work and relocation is not a concern for me.
          </div>
        </div>
        <div className="mx-auto mt-10 inline-flex max-w-lg items-center justify-center gap-1.5 rounded-3xl border-b-4 border-slate-800 bg-amber-100 px-6 py-2 text-base font-medium leading-normal text-gray-800 transition-all duration-300 hover:bg-amber-200 active:border-b">
          👋🏼 say me hello
        </div>
      </div>
    </Section>
  );
};

export default Contact;
