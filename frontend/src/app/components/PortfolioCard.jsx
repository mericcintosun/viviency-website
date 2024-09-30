import Link from "next/link";

export default function PortfolioCard() {
  const works = [
    {
      img: "/assets/portfolio-assets/work1.webp",
      content: "FOOD & DRINK",
      title: "Sosyal Medya Yönetimi",
      link: "/",
    },
    {
      img: "/assets/portfolio-assets/work2.webp",
      content: "HEALTH & BEAUTY",
      title: "Prodüksiyon",
      link: "/about",
    },
    {
      img: "/assets/portfolio-assets/work3.webp",
      content: "FINANCE & TECHNOLOGY",
      title: "Web Site Tasarımı",
      link: "/portfolio",
    },
    {
      img: "/assets/portfolio-assets/work4.webp",
      content: "FASHION & LIFESTYLE",
      title: "Reklam Yönetimi",
      link: "/contact",
    },
    {
      img: "/assets/portfolio-assets/work1.webp",
      content: "SOFTWARE & BLOCKCHAIN",
      title: "Hukuki Danışmanlık",
      link: "/blog",
    },
    {
      img: "/assets/portfolio-assets/work2.webp",
      content: "PRODUCTION & DEVELOPMENT",
      title: "Marka Geliştirme",
      link: "/works",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {works.map((work, index) => (
          <Link key={index} href={work.link} target="_blank">
            
            <div
              className="relative bg-cover bg-center h-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ backgroundImage: `url(${work.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end items-center text-center p-4">
                <h3 className="text-white text-sm opacity-70">
                  {work.content}
                </h3>
                <h2 className="text-white text-2xl font-bold mt-2">
                  {work.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
