"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AgencyCard() {
  const agencyData = [
    {
      image: "/assets/agency/member1.png",
      title: "sosyal medya stratejisi",
      description:
        "Veri odaklı bir sosyal medya stratejisinden faydalanarak, derin içgörüler ve markanızın DNA'sını dinamik bir yol haritasına dönüştürün ve iş hedeflerinize ulaşın.",
    },
    {
      image: "/assets/agency/member2.webp",
      title: "insan odaklı sosyal",
      description:
        "Sosyal medya varlığınızı dönüştürmek için ilk adımı insan odaklı yaklaşımımızla atın.",
    },
    {
      image: "/assets/agency/member3.webp",
      title: "sosyal medya reklamcılığı",
      description:
        "Her reklamı güçlü bir marka etkileşimine dönüştürün; sürekli A/B testleri ve veriyle bilgilendirilmiş ayarlamalarla, mesajınızın yalnızca ulaşmasını değil, aynı zamanda yankılanmasını ve etkileşim sağlamasını garanti edin.",
    },
    {
      image: "/assets/agency/member4.webp",
      title: "sosyal medya yönetimi",
      description:
        "Sosyal medya yönetimimizden yararlanarak, trendleri yakalayan hashtag araştırmasından güçlü bağlantılar kuran topluluk etkileşimlerine kadar etkileşimin sanatını öğrenin.",
    },
    {
      image: "/assets/agency/member5.webp",
      title: "içerik oluşturma",
      description:
        "Markanızdan daha fazla içerik talebine ayak uydurun; özel grafiklerden etkileyici videolara kadar her parça, etkileşimi artırmak ve pazarlama etkinizi güçlendirmek için tasarlanmıştır.",
    },
    {
      image: "/assets/agency/member6.webp",
      title: "influencer pazarlama",
      description:
        "Otantikliği değer veren influencer pazarlaması ile etkileşimde bulunun; kampanyalarımız, marka değerlerinizle yankılanacak ve mesajınızı gerçekten destekleyen seslerle iletecek şekilde hassasiyetle hazırlanmıştır.",
    },
  ];

  return (
    <div className="agency-card-container w-[90%] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {agencyData.map((agency, index) => (
        <AgencyCardItem key={index} agency={agency} />
      ))}
    </div>
  );
}

function AgencyCardItem({ agency }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: -50 });
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="agency-card relative overflow-hidden rounded-xl mt-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={agency.image}
        alt={agency.title}
        className="agency-image w-full h-auto"
      />
      <div
        ref={ref}
        className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 hover:bg-opacity-70"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-white text-xl font-bold mb-2"
        >
          {agency.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-white text-sm"
        >
          {agency.description}
        </motion.p>
      </div>
    </div>
  );
}
