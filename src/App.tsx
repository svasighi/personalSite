import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('wheel', (event: WheelEvent) => {
      ref && ref.current && (ref.current.scrollTop += event.deltaY / 7);

      console.log(ref.current?.scrollTop);
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 38:
          // pressed up arrow
          ref && ref.current && (ref.current.scrollTop -= 20);
          break;
        case 40:
          // pressed down arrow
          ref && ref.current && (ref.current.scrollTop += 20);
          break;
      }
    });
  }, []);

  return (
    <div className="container flex space-x-7 justify-between h-screen box-border mx-auto">
      <div>
        <div className="w-16  h-16 absolute rounded-full bg-pink-500 right-8 top-20 -z-10 blur-3xl"></div>
        <div className="w-28 h-28 absolute rounded-full  bg-yellow-500 -z-10 right-32 -top-12 blur-3xl"></div>
      </div>
      {/* picture */}
      <div className="w-96 pb-12 mb-16 pt-16 relative">
        <div className="flex flex-col items-stretch relative h-full bg-amber-100 border border-slate-800 rounded-2xl  justify-between before:bg-grid before:w-full before:bg-repeat before:content-[''] before:h-full before:absolute overflow-hidden">
          <div className="flex justify-between pt-10 px-7 text-gray-900">
            <div className=" font-bold leading-9 text-3xl text-left">
              Shadmehr
              <br />
              Vasighi
            </div>
            <div className=" font-semibold leading-7 text-lg text-right">
              frontend <br />
              developer
            </div>
          </div>

          <div className="w-full mb-48 relative">
            <div className="flex items-start w-36 absolute right-5 ">
              <hr className="border-black flex-1 mr-4 mt-10" />
              <div className="text-black text-sm font-normal leading-tight flex flex-col text-center">
                <span className="text-black text-3xl font-semibold leading-9">
                  5
                </span>
                projects
              </div>
            </div>
            <div className=" w-24 absolute right-24 mx-auto bottom-0 group text">
              <div className="text-black text-sm font-normal group-hover:font-semibold group-hover:underline leading-tight flex flex-col mb-12 -mr-24 text-center z-10 ">
                Whatsapp
              </div>
              <hr className="border-black -rotate-45" />
            </div>
            <div className=" w-24 absolute right-0 left-0 mx-auto bottom-4 group">
              <div className="text-black text-sm font-normal group-hover:font-semibold group-hover:underline leading-tight flex flex-col mb-14 text-center z-10 ">
                LinkedIn
              </div>
              <hr className="border-black rotate-90" />
            </div>
            <div className=" w-24 absolute left-24 mx-auto bottom-0 group text">
              <div className="text-black text-sm font-normal group-hover:font-semibold group-hover:underline leading-tight flex flex-col mb-12 -ml-20 text-center z-10 ">
                Whatsapp
              </div>
              <hr className="border-black rotate-45" />
            </div>
            <div className="flex items-start w-36 absolute left-5 ">
              <div className="text-black text-sm font-normal leading-tight flex flex-col text-center">
                <span className="text-3xl font-semibold leading-9">+2</span>
                years of
                <br />
                Experience
              </div>
              <hr className="border-black flex-1 ml-2 mt-10" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 bg-side-bottom bg-center bg-no-repeat w-full h-16 justify-center"></div>
        </div>

        <div className="absolute bottom-2 right-0 left-0 animate-updown">
          <div className="relative mx-auto w-24 h-60 z-10 bg-amber-300/20 backdrop-blur-xl rounded-full  border border-black"></div>
          <img
            className="z-10 mx-auto w-36 h-56 absolute top-3 right-0 left-0"
            src="/profile.png"
          />
        </div>
      </div>
      {/* sidebar */}
      <div className="flex flex-col w-6 ">
        <div className="flex flex-col items-center space-x-2 ">
          <p className="">webpack</p>
          <img className="w-6" src="/stack/webpack.svg" alt="logo" />
        </div>
        <div className="flex flex-col items-center space-y-10 ">
          <p className="-rotate-90 h-2 origin-bottom-center">webpack</p>
          <img className="w-6 -rotate-90" src="/stack/webpack.svg" alt="logo" />
        </div>
      </div>
      <div
        ref={ref}
        className=" bg-slate-200 flex-1 text-gray-700 px-12 py-8 mt-16 h-auto rounded-xl text-justify  overflow-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam atque
        quisquam asperiores expedita dolorem. Vero, laudantium ullam autem
        laborum asperiores harum, adipisci nihil laboriosam repellendus dicta
        quod ad saepe! Maiores! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Aperiam atque quisquam asperiores expedita dolorem.
        Vero, laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Aperiam atque quisquam asperiores expedita dolorem. Vero,
        laudantium ullam autem laborum asperiores harum, adipisci nihil
        laboriosam repellendus dicta quod ad saepe! Maiores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Aperiam atque quisquam
        asperiores expedita dolorem. Vero, laudantium ullam autem laborum
        asperiores harum, adipisci nihil laboriosam repellendus dicta quod ad
        saepe! Maiores!
      </div>
    </div>
  );
}

export default App;
