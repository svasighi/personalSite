import StackSlider from './sections/StackSlider/';
import { useEffect, useRef } from 'react';

import Bio from './sections/Bio';
import Sidebar from './sections/Sidebar';
import Testimonials from './sections/Testimonials';
import Experience from './sections/Experience';

import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

function App() {
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('wheel', (event: WheelEvent) => {
      scrollableRef &&
        scrollableRef.current &&
        (scrollableRef.current.scrollTop += event.deltaY / 7);
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 38:
          // pressed up arrow
          scrollableRef &&
            scrollableRef.current &&
            (scrollableRef.current.scrollTop -= 20);
          break;
        case 40:
          // pressed down arrow
          scrollableRef &&
            scrollableRef.current &&
            (scrollableRef.current.scrollTop += 20);
          break;
      }
    });
  }, []);

  return (
    <>
      <div className="container flex space-x-7 justify-between h-screen box-border mx-auto px-14">
        {/* picture */}
        <Sidebar />

        <StackSlider />
        <div
          ref={scrollableRef}
          className="flex-1 px-12 py-8 mt-16 h-auto rounded-xl text-justify overflow-auto">
          <div className="flex flex-col space-y-12">
            <Bio />
            <Testimonials />
            <Experience />
            <Portfolio />
            <Contact />
            <div className="py-8 flex-col justify-start items-center inline-flex">
              <div className="text-black text-base font-normal leading-normal text-center">
                designed and developed By me
              </div>
              <div className="text-black text-base font-normal leading-normal">
                with️ ❤️‍️ in a day and half
              </div>
            </div>
          </div>
        </div>
        <div className="w-14 h-80 px-4 mt-16 py-8 bg-gray-50 bg-opacity-10 rounded-3xl border border-gray-400 backdrop-blur-lg flex-col justify-start items-start gap-8 inline-flex"></div>
      </div>
      <div className="w-16  h-16 absolute rounded-full bg-pink-500 right-8 top-20 -z-10 blur-3xl"></div>
      <div className="w-32 h-32 absolute rounded-full  bg-yellow-500 -z-10 right-32 -top-12 blur-3xl"></div>
    </>
  );
}

export default App;
