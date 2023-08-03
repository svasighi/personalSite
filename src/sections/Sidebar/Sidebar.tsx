const Sidebar = () => {
  return (
    <div className="w-96 pb-12 mb-16 pt-16 relative max-h-[800px]">
      <div className="flex flex-col items-stretch relative h-full  bg-amber-100 border border-slate-800 rounded-2xl  justify-between before:bg-grid before:w-full before:bg-repeat before:content-[''] before:h-full before:absolute overflow-hidden">
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
          <div className=" w-24 absolute right-0 left-0 mx-auto bottom-8 group">
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
        <div className="relative mx-auto w-24 h-60 z-10 bg-gradient-to-b from-amber-100/100 to-40% to-amber-300/۲0 backdrop-blur-xl rounded-full  border border-black"></div>
        <img
          className="z-10 mx-auto w-36 h-56 absolute top-3 right-0 left-0"
          src="/profile.png"
        />
      </div>
    </div>
  );
};
export default Sidebar;
