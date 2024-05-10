const Brands = () => {
  return (
    <div className="relative grid sm:grid-cols-1 sm:grid-rows-8 md:grid-cols-2 md:grid-rows-4  lg:grid-rows-3 lg:grid-cols-3 2xl:grid-rows-2 2xl:grid-cols-4 container mx-auto max-w-[1540px] gap-x-[28px] sm:gap-y-0 xl:gap-y-[65px] items-center">
      <div className="flex z-10 justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/pngwing4.png"
          className="flex w-[360px] h-[275px] h-[160px]"
          alt="pngwing4"
        />
      </div>
      <div className="flex z-10 justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/pngwing3.png"
          className="flex w-[245px] h-[139px]"
          alt="pngwing4"
        />
      </div>
      <div className="flex z-10 justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/uber.svg"
          className="flex w-[245px] h-[139px]"
          alt="Uber"
        />
      </div>
      <div className="flex-col z-10 flex justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/Arrow.png"
          className="flex w-[32px] h-[34px]"
          alt="Arrow"
        />
        <img
          src="/img/accenture.png"
          className="flex w-[331px] h-[50px]"
          alt="Accenture"
        />
      </div>
      <div className="flex-col z-10 flex justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/WestJet.png"
          className="flex w-[340px] h-[69px]"
          alt="WestJet"
        />
      </div>
      <div className="flex-col z-10 flex justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/Ontario.png"
          className="flex w-[321px] h-[106px]"
          alt="Ontario"
        />
      </div>
      <div className="flex-col z-10 flex justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/Telus.png"
          className="flex w-[335px] h-[69px]"
          alt="Telus"
        />
      </div>
      <div className="flex-col z-10 flex justify-center rounded-[5.173px] border-[1px] border-solid border-[#D2D2D2] bg-brand-background backdrop-blur-sm items-center w-[360px] h-[275px] container mx-auto">
        <img
          src="/img/Emirates.png"
          className="flex w-[277px] h-[277px]"
          alt="Emirates"
        />
      </div>
      <span className="absolute hidden 2xl:block top-[130px] z-0 xl:text-[200px] 2xl:text-[288px] left-[20px] font-chakra text-secondary font-bold">
        Trusted By
      </span>
    </div>
  );
};

export default Brands;
