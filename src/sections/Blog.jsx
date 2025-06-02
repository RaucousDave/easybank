export default function Blog() {
  const articles = [
    {
      id: 1,
      image: "/images/image-currency.jpg",
      author: "By Clare Robinson",
      title: "Receive money in any currency with no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    },
    {
      id: 2,
      author: "By Wilson Hutton",
      image: "/images/image-restaurant.jpg",
      title: "Treat yourself without worrying about money",
      desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    },
    {
      id: 3,
      author: "By Wilson Hutton",
      image: "/images/image-plane.jpg",
      title: "Take your EasyBank card wherever you go",
      desc: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
    },
    {
      id: 4,
      author: "By Clare Robinson",
      image: "/images/image-confetti.jpg",
      title: "Our invite-only Beta accounts are now live!",
      desc: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
    },
  ];
  return (
    <>
      <section className="md:px-6 md:py-8 px-3 py-10 bg-veryLightGray">
        <h1 className="text-3xl text-darkBlue mb-[1rem] text-center sm:text-left">
          Latest Articles
        </h1>
        <div className="py-4 grid md:grid-cols-4 px-6 sm:grid-cols-2 grid-cols-1 gap-12 md:gap-6 sm:gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className=" bg-pureWhite h-[370px] shadow rounded-t-lg pb-4"
            >
              <div className="md:max-h-36 max-h-40 overflow-hidden mb-4">
                <img
                  src={article.image}
                  className="rounded-t-lg object-contain h-auto"
                  alt={article.title}
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center flex-col px-6 py-4">
                <p className="text-sm mb-2 text-darkBlue/50">
                  {article.author}
                </p>
                <h3 className="font-light hover:text-limeGreen transition cursor-pointer leading-tight text-base mb-2 text-darkBlue">
                  {article.title}
                </h3>
                <p className="text-darkBlue/50 text-sm">{article.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
