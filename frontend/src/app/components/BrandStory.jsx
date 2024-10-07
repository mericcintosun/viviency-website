"use client";

import Image from "next/image";

export default function BrandStory() {
  return (
    <>
      <div
        id="brand-story"
        className="flex flex-col justify-center items-center w-[90%] mx-auto"
      >
        <div
          id="left-section-about"
          className="flex flex-col justify-center items-center gap-6"
        >
          <h1 className=" text-6xl font-bold leading-tight py-6 sm:text-7xl lg:text-[6rem] xl:text-[7rem]">
            marka<span className="text-[#F07F55]"> hikayemiz</span>
          </h1>
          <Image
            id="brand-image"
            src="/assets/about-assets/brand.jpg"
            layout="responsive"
            width={200}
            height={1}
            alt="brand"
            className="mb-12"
          />
        </div>
        <div id="right-section-about" className="flex flex-col gap-3 mb-6">
          <h3 className="font-bold text-[#F07F55]">
            Alçakgönüllü Başlangıçlar
          </h3>
          <p className="font-light">
            Viviency, önde gelen bir ajans olarak ortaya çıkmadan önce, yalnızca
            Kane ve Phil vardı. Onlar, markalar için sosyal medyayı kullanmanın
            ötesinde, kitlelerle yankılanan otantik hikayeler yaratmayı hayal
            ediyorlardı. Viviency Sosyal, markalara hizmet etme ve insanlara ve
            gezegene iyi katkıda bulunma misyonuna sahiptir.
          </p>
          <h3 className="font-bold text-[#F07F55]">Yeteneklerin Birleşimi</h3>
          <p className="font-light">
            Büyüyen itibarımız sadece strateji ve yaratıcılığın benzersiz
            birleşimi nedeniyle değil, aynı zamanda müşterilerimize olan
            sarsılmaz bağlılığımızdan kaynaklanıyordu. Başarılarımızın,
            müşterilerimizin başarılarıyla derinden iç içe olduğuna her zaman
            inandık. Bu özveri, hem yeni başlayan hem de köklü markaların
            hikayelerini anlatmamızı sağladı.
          </p>
          <h3 className="font-bold text-[#F07F55]">
            Sağlık ve Mükemmellik Geliştirmek
          </h3>
          <p className="font-light">
            Operasyon Müdürümüz Kate, yalnızca operasyonel zekâ değil, aynı
            zamanda ekibimizin refahını önceliklendiren bir kültür geliştirdi.
            Bu, çıktılarımızda tutarlı mükemmellik sağladı ve her müşteri
            projesine samimi, tutkulu bir şekilde katılmamızı sağladı. Etosumuz?
            Ekibimize özen gösterirken en iyisini sunmak ve müşterilerimizin
            beklentilerini anlamak.
          </p>
          <h3 className="font-bold text-[#F07F55]">Küresel Tanınma Kazanmak</h3>
          <p className="font-light">
            Yolculuğumuz, Viviency artık küresel sahnede gururla durduğu
            sınırların ötesine geçti. Ancak her yeni ortaklıkla, köklerimizi
            hatırlatıyoruz: müşteri odaklı olmak. Artık küresel bir ajans olsak
            da, her müşterinin görünmesini, duyulmasını ve önceliklendirilmesini
            sağlamak için yerel taahhüdümüz devam ediyor.
          </p>
          <h3 className="font-bold text-[#F07F55]">Yolculuk Devam Ediyor</h3>
          <p className="font-light">
            Hikayemiz, bizim kadar müşterilerimizle de ilgilidir. Onların
            hırsları, bizimkileri besliyor. Onların hikayeleri, bizimkileri
            şekillendiriyor. İleriye bakarken, sadece Viviency büyümesi için
            değil, çalışacak fırsatı bulacağımız hırslı markalar için de
            heyecanlıyız. Misyonumuz değişmiyor: her müşterinin bu sürekli
            evrilen hikayenin ayrılmaz bir parçası olduğunu hissetmesini
            sağlamak.
          </p>
        </div>
      </div>
    </>
  );
}
