export default function About() {
  const services = [
    {
      id: 1,
      image: "/images/icon-online.svg",
      title: "Online Banking",
      desc: "Our modern web and mobile applications to keep track of your finances wherever you are in the world.",
    },
    {
      id: 2,
      image: "/images/icon-budgeting.svg",
      title: "Simple Budgeting",
      desc: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      id: 3,
      image: "/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      desc: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      id: 4,
      image: "/images/icon-api.svg",
      title: "Open API",
      desc: "Manage your savings and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <>
      <section className="md:px-6 py-8 bg-lightGrayishBlue p-3 ">
        <div className="md:w-[65%] space-y-4 p-4 mb-[4rem] sm:mb-[2rem] md:mb-[4rem] flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center xl:text-6xl text-darkBlue">
            Why choose EasyBank?
          </h1>
          <p className="text-grayishBlue xl:text-3xl sm:text-left text-center">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="sm:grid flex flex-col gap-8 justify-center items-center md:grid-cols-4 sm:grid-cols-2 sm:gap-6 md:gap-12 sm:p-4 py-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="space-y-4 flex flex-col justify-center items-center"
            >
              <div>
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <h3 className="text-xl xl:text-3xl font-light text-darkBlue">
                {service.title}
              </h3>
              <p className="text-base xl:text-lg text-center w-80 sm:w-60 md:text-left text-grayishBlue">
                {" "}
                {service.desc}{" "}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
