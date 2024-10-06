// components/ServicesCard.jsx

import Link from "next/link";

const services = [
  {
    title: "Sosyal Medya Yönetimi",
    description:
      "Markanızın dijital varlığını güçlendirmek ve hedef kitlenizle etkileşim kurmak için profesyonel sosyal medya yönetimi hizmetleri sunuyoruz.",
    slug: "sosyal-medya-yonetimi",
  },
  {
    title: "Prodüksiyon",
    description:
      "İçerik prodüksiyon ihtiyaçlarınızı en kaliteli şekilde karşılıyor ve yaratıcı çözümler sunarak markanızın hikayesini en etkili şekilde anlatıyoruz.",
    slug: "produksiyon",
  },
  {
    title: "Web Site Tasarımı",
    description:
      "Modern ve kullanıcı dostu web siteleri tasarlayarak dijital dünyada markanızı güçlü bir şekilde temsil etmenizi sağlıyoruz.",
    slug: "web-site-tasarimi",
  },
  {
    title: "Reklam Yönetimi",
    description:
      "Dijital platformlarda markanız için hedef odaklı reklam kampanyaları oluşturarak daha fazla etkileşim ve dönüşüm sağlıyoruz.",
    slug: "reklam-yonetimi",
  },
  {
    title: "Hukuki Danışmanlık",
    description:
      "İşletmenizin yasal süreçlerinde profesyonel hukuki danışmanlık hizmeti sunuyor, tüm süreçlerinizi güvence altına alıyoruz.",
    slug: "hukuki-danismanlik",
  },
  {
    title: "Marka Geliştirme",
    description:
      "Marka bilinirliğinizi artırmak ve hedef kitlenize ulaşmak için stratejik marka geliştirme hizmetlerimizden faydalanın.",
    slug: "marka-gelistirme",
  },
];

export default function ServicesCard() {
  const imageSrc = "/assets/services-assets/strategy.webp";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold mb-8 lg:text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              src={imageSrc}
              alt={service.title}
              className="w-full h-48 object-cover object-top"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              <Link
              target = "_blank"
                href={`/works/${service.slug}`}
                className="font-bold tracking-widest inline-block text-white bg-[#F07F55] rounded-xl px-6 py-3 transition-colors duration-300 hover:bg-[#92b188] hover:text-black focus:outline-none focus:ring-4 focus:ring-[#F07F55]/50 mt-auto w-[51%] lg:w-[45%]"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
