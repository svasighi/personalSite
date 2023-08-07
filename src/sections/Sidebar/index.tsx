const Sidebar = () => {
  return (
    <div className="relative mb-16 h-auto w-full pb-4 pt-12 md:pt-16 lg:w-96 lg:pb-12 lg:pt-20">
      <div className="relative flex h-[535px] flex-col items-stretch justify-between overflow-hidden rounded-2xl border border-slate-800 bg-amber-100 before:absolute before:h-full before:w-full before:bg-grid before:bg-repeat md:h-[612px] lg:h-[700px] lg:overflow-hidden">
        <div className="flex justify-between px-7 pt-10 text-gray-900">
          <div className=" text-left text-3xl font-bold leading-9">
            Shadmehr
            <br />
            Vasighi
          </div>
          <div className=" text-right text-lg font-semibold leading-7">
            frontend <br />
            developer
          </div>
        </div>

        <div className=" relative inset-x-0 mx-auto mb-48 w-96">
          <div className="absolute right-5 flex w-36 items-start ">
            <hr className="mr-4 mt-10 flex-1 border-black" />
            <div className="flex flex-col text-center text-sm font-normal leading-tight text-black">
              <span className="text-3xl font-semibold leading-9 text-black">
                5
              </span>
              projects
            </div>
          </div>
          <div className=" text group absolute bottom-0 right-24 mx-auto w-24">
            <div className="z-10 -mr-24 mb-12 flex flex-col text-center text-sm font-normal leading-tight text-black group-hover:font-semibold group-hover:underline ">
              Whatsapp
            </div>
            <hr className="-rotate-45 border-black" />
          </div>
          <div className=" group absolute bottom-8 left-0 right-0 mx-auto w-24">
            <div className="z-10 mb-14 flex flex-col text-center text-sm font-normal leading-tight text-black group-hover:font-semibold group-hover:underline ">
              LinkedIn
            </div>
            <hr className="rotate-90 border-black" />
          </div>
          <div className=" text group absolute bottom-0 left-24 mx-auto w-24">
            <div className="z-10 -ml-20 mb-12 flex flex-col text-center text-sm font-normal leading-tight text-black group-hover:font-semibold group-hover:underline ">
              Whatsapp
            </div>
            <hr className="rotate-45 border-black" />
          </div>
          <div className="absolute left-5 flex w-36 items-start ">
            <div className="flex flex-col text-center text-sm font-normal leading-tight text-black">
              <span className="text-3xl font-semibold leading-9">+2</span>
              years of
              <br />
              Experience
            </div>
            <hr className="ml-2 mt-10 flex-1 border-black" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full justify-center bg-side-bottom bg-center bg-no-repeat"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 animate-updown lg:bottom-2">
        <div className="to-amber-300/۲0 relative z-10 mx-auto h-60 w-24 rounded-full border border-black bg-gradient-to-b from-amber-100/100  to-40% backdrop-blur-xl"></div>
        <img
          className="absolute left-0 right-0 top-3 z-10 mx-auto h-56 w-36"
          src="/profile.png"
        />
      </div>
    </div>
  );
};
export default Sidebar;
