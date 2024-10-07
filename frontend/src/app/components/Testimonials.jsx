"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Viviency ile yaklaşık 6 aydır çalışma fırsatına sahip olduk ve kendileri son derece destekleyici, profesyonel, verimli ve süreç içinde ayarlamalar yapma konusunda da esnek oldular. ZAFARI markasını sosyal medyada oluştururken birlikte harika ilerleme kaydettik ve son 6 ayda ZAFARI'nın Facebook ve Instagram profillerinde 1,5 milyondan fazla gösterim elde ettik.",
    name: "Kiki",
    role: "Tatlılık Direktörü",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Viviency, sosyal medya varlığımızı büyütmemize yardımcı olan harika bir ortak oldu. Ekibi yaratıcı, profesyonel ve başarımızı sağlamak için her zaman ekstra çaba göstermeye istekli.",
    name: "Alex Johnson",
    role: "Pazarlama Lideri",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Viviency'nin stratejileri sayesinde, tüm sosyal medya platformlarımızda etkileşimde önemli bir artış gördük. Gerçekten alanlarında uzmandırlar!",
    name: "Maria Martinez",
    role: "Sosyal Medya Yöneticisi",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Viviency ile çalışmak tam bir zevkti. Profesyonellikleri ve başarımıza olan bağlılıkları, sosyal medya varlığımız üzerinde büyük bir etki yarattı.",
    name: "James Lee",
    role: "Yaratıcı Direktör",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Viviency'nin ekibi sürekli olarak birinci sınıf içerikler ve içgörüler sunuyor. Stratejik yaklaşımları, pazarlama hedeflerimizi aşmamıza yardımcı oldu.",
    name: "Sophia Taylor",
    role: "İçerik Stratejisti",
    image: "/assets/about-assets/kiki.webp",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="w-[90%] mx-auto font-bold my-6 flex flex-col gap-6">
        <h1 className=" text-5xl font-bold my-6 sm:text-6xl lg:text-7xl">
          referanslar
        </h1>
        <p className="text-lg lg:text-xl font-light">
          Ortaklarımızdan gelen geri bildirimleri keşfedin ve etkimizi ve iş
          birliği tarzımızı anlayın.
        </p>
      </div>

      <div className="w-[90%] mx-auto rounded-xl my-6 relative">
        <Carousel
          className="bg-[#242424] rounded-xl min-h-full h-auto"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-around mb-12 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto relative gap-6 mt-4 h-auto sm:h-[80vh] md:h-[70vh] lg:h-[80vh]"
            >
              <div className="flex justify-center">
                <Image
                  src="/assets/double-quotes.png"
                  width={50}
                  height={50}
                  className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2"
                  alt="quote icon"
                />
              </div>
              <p className="text-gray-300 text-center mb-6 w-[90%] sm:w-[80%] md:w-[70%] mx-auto text-sm sm:text-base md:text-lg">
                {testimonial.quote}
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-4 object-cover"
                />
                <p className="font-semibold text-gray-100 text-sm sm:text-base md:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#FA7268]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
