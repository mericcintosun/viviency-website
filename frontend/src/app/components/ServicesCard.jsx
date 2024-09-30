"use client";

import Link from "next/link";

export default function ServicesCard() {
  const services = [
    {
      image: "/assets/services-assets/strategy.webp",
      title: "Social Media Strategy",
      description:
        "Benefit from a data-driven social media strategy, transforming deep insights and your brand’s DNA into a dynamic roadmap toward your business goals.",
      link: "/works",
    },
    {
      image: "/assets/services-assets/advertising.webp",
      title: "Social Media Advertising",
      description:
        "Turn every ad into a powerful brand encounter with our relentless split testing and data-informed adjustments, ensuring your message not only reaches but resonates and engages.",
      link: "/works",
    },
    {
      image: "/assets/services-assets/human-first.webp",
      title: "Human-First Social",
      description:
        "Take the first step into transforming your social media presence with our human-first approach, helping you stand out from every competitor.",
      link: "/works",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold  mb-8 lg:text-center">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="font-bold tracking-widest inline-block text-white bg-[#F07F55] rounded-xl px-6 py-3 transition-colors duration-300 hover:bg-[#92b188] hover:text-black focus:outline-none focus:ring-4 focus:ring-[#F07F55]/50 mt-auto w-[51%] lg:w-[42%] "
                >
                  learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
