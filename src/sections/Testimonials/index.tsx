import Section from "../../components/Section";
import Player from "../../components/Player";

const Testimonials = () => {
  return (
    <Section title="Trusted by Great people">
      <div className="flex h-72 w-full flex-col space-y-4 rounded-3xl border border-gray-300 bg-gray-50 px-10 py-9">
        <div className="inline-flex items-center justify-start gap-4">
          <img className="h-12 w-12 rounded-3xl" src="/mr-gholami.png" />
          <div className="inline-flex flex-col items-start justify-start gap-px">
            <div className="text-base font-semibold leading-normal text-gray-700">
              Mohsen Gholam
            </div>
            <div className="text-sm font-normal leading-tight text-gray-400">
              founder at MaherHa.com
            </div>
            <div className="flex space-x-1">
              <img></img>
              <></>
            </div>
          </div>
        </div>
        <p className="line-clamp-3 text-base font-normal leading-normal text-gray-700">
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
