export default function Hero() {
  return (
    <section className="md:relative md:p-6 pb-[4rem] flex sm:flex-row flex-col-reverse items-center justify-start min-h-screen bg-veryLightGray overflow-hidden">
      {/* TEXT BLOCK */}
      <div className="z-10 px-4 w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-7 md:px-8 mt-[31.5rem] sm:mt-[41.5rem] md:mt-0 xl:pr-[6rem]">
        <h1 className="md:text-5xl xl:text-7xl text-[3rem] text-darkBlue leading-snug sm:leading-tight">
          Next generation <br /> digital banking
        </h1>
        <p className="text-grayishBlue text-base sm:text-lg xl:text-2xl leading-relaxed sm:leading-wide ">
          Take your financial life online. Your EasyBank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much more
        </p>
        <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-pureWhite px-6 py-2 rounded-full font-semibold transition hover:opacity-50">
          Request Invite
        </button>
      </div>

      {/* ABSOLUTE IMAGE BLOCK */}
      <div className="hidden md:block absolute -top-[6rem] -right-[6.5rem] w-[60%] z-0">
        <img
          src="/images/bg-intro-desktop.svg"
          alt=""
          className="w-full h-auto"
        />
        <img
          src="/images/image-mockups.png"
          alt=""
          className="absolute top-0 right-0 w-full"
        />
      </div>

      {/* ABSOLUTE IMAGE BLOCK FOR MOBILE */}
      <div className="md:hidden absolute -top-[2rem] sm:-top-[10rem] h-[250px] xs:h-[100px] w-screen z-0">
        <img
          src="/images/bg-intro-mobile.svg"
          alt=""
          className="w-full h-auto"
        />
        <img
          src="/images/image-mockups.png"
          alt=""
          className="absolute top-0 right-0 w-full"
        />
      </div>
    </section>
  );
}
