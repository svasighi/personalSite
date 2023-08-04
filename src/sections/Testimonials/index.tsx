import Section from '../../components/Section';
import Player from '../../components/Player';

const Testimonials = () => {
  return (
    <Section title="Trusted by Great people">
      <div className="w-full h-72 px-10 py-9 bg-gray-50 rounded-3xl border border-gray-300 flex flex-col space-y-4">
        <div className="justify-start items-center gap-4 inline-flex">
          <img className="w-12 h-12 rounded-3xl" src="/mr-gholami.png" />
          <div className="flex-col justify-start items-start gap-px inline-flex">
            <div className="text-gray-700 text-base font-semibold leading-normal">
              Mohsen Gholam
            </div>
            <div className="text-gray-400 text-sm font-normal leading-tight">
              founder at MaherHa.com
            </div>
            <div className="flex space-x-1">
              <img></img>
              <></>
            </div>
          </div>
        </div>
        <p className="line-clamp-3 text-gray-700 text-base font-normal leading-normal">
          "Shadmehr was a real pleasure to work with and we look forward to
          working with him again. He's definitely the kind of designer that you
          can trust with any project from A-Z." "Shadmehr was a real pleasure to
          work with and we look forward to working with him again. He's
          definitely the kind of designer that you can trust with any project
          from A-Z."
        </p>
        <Player className="h-14 w-80" file="data" />
      </div>
    </Section>
  );
};
export default Testimonials;
