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

        <div className="absolute inset-x-0 bottom-0 mx-auto mb-48 w-full max-w-[330px] md:w-96 md:max-w-none">
          <div className="absolute right-2 flex w-40 items-start md:right-5 ">
            <hr className="mr-4 mt-10 flex-1 border-black" />
            <div className="flex flex-col text-center text-sm font-normal leading-tight text-black">
              <span className="text-lg font-semibold leading-9 md:text-3xl">
                5
              </span>
              projects
            </div>
          </div>
          <div className="text group absolute bottom-0 right-20 mx-auto w-24">
            <div className="z-10 -mr-24 mb-12 flex flex-col text-center text-sm font-normal leading-tight text-black group-hover:font-semibold group-hover:underline ">
              Whatsapp
            </div>
            <hr className="-rotate-45 border-black" />
          </div>
          <div className="group absolute bottom-8 left-0 right-0 mx-auto w-24">
            <div className="z-10 mb-14 flex flex-col text-center text-sm font-normal leading-tight text-black group-hover:font-semibold group-hover:underline ">
              LinkedIn
            </div>
            <hr className="rotate-90 border-black" />
          </div>
          <div className="text group absolute bottom-0 left-20 mx-auto w-24">
            <div className="z-10 -ml-20 mb-12 flex flex-col text-center text-sm font-normal leading-tight text-black group-hover:font-semibold group-hover:underline ">
              Whatsapp
            </div>
            <hr className="rotate-45 border-black" />
          </div>
          <div className="absolute left-2 flex w-40 items-start md:left-5 ">
            <div className="flex flex-col text-center text-sm font-normal leading-tight text-black">
              <span className="text-lg font-semibold leading-9 md:text-3xl">
                +2
              </span>
              years of
              <br />
              Experience
            </div>
            <hr className=" mt-10 flex-1 border-black" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full justify-center bg-side-bottom bg-center bg-no-repeat"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 animate-updown lg:bottom-2">
        <div className="relative z-10 mx-auto h-60 w-20 rounded-full border border-black bg-gradient-to-b from-amber-100/100 to-amber-300/20 to-40% backdrop-blur-xl  md:h-60 md:w-24"></div>
        <img
          className="absolute left-0 right-0 top-3 z-10 mx-auto h-48 w-32 md:h-56 md:w-36"
          src="/profile.png"
        />
      </div>
    </div>
  );
};
export default Sidebar;
