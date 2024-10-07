"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Contributions() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const getIcon = (value) =>
    open === value ? (
      <ChevronUpIcon className="h-5 w-5 text-white" />
    ) : (
      <ChevronDownIcon className="h-5 w-5" />
    );

  const getTitleClass = (value) =>
    open === value ? "text-white" : "text-black";

  return (
    <>
      <div className="bg-[#F07F55] py-6">
        <div className="w-[80%] mx-auto">
          <h1 className="text-white mb-3 text-4xl font-bold leading-tight py-6 sm:text-6xl lg:text-[6rem] xl:text-[7rem]">
            Katkılarımız
          </h1>
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(1)}>
                  strateji ve yaratıcılık
                </span>
                {getIcon(1)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              Bu değer, sosyal medya pazarlama yaklaşımımızı simgeler; burada
              stratejik planlamayı hayal gücüyle birleştiriyoruz. Aldığımız her
              karar, başlattığımız her kampanya, yaratıcılıkla harmanlanmış
              titizlikle hesaplanmış bir adım. Her adımın stratejik olmasını
              sağlıyoruz, ancak asla sıradan olmuyor; her zaman
              yaratıcılığımızla aydınlatılıyor. Bu değer, operasyonel yapımızda
              da yansımaktadır.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(2)}>denge ve iyilik hali</span>
                {getIcon(2)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              İş-yaşam dengesine öncelik veriyoruz ve yaratıcılık ile büyümenin
              kişisel iyilik haliyle buluştuğu bir ortamı besliyoruz. Ekibimiz,
              hem profesyonel olarak zorluklarla karşılaşarak hem de kişisel
              olarak tatmin olarak gelişiyor.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(3)}>evrim ve büyüme</span>
                {getIcon(3)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              Sürekli öğrenme, büyüme ve evrime kendini adamış bir ekibiz. Asla
              duraklamayı kabul etmiyoruz; hizmetlerimizi ve sektördeki
              trendleri anlama becerimizi sürekli olarak geliştirmeyi
              hedefliyoruz.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(4)}>
                  sürdürülebilirlik ve sorumluluk
                </span>
                {getIcon(4)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              Çevresel etkilerimizi en aza indirmeye kararlıyız;
              operasyonlarımıza sürdürülebilir uygulamaları entegre ediyor ve
              hizmetlerimizde çevre dostu çözümler için savunuculuk yapıyoruz.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 5}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(5)}>birlik ve tanınma</span>
                {getIcon(5)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              Ekibimiz, birlikteliğe ve birbirimizin başarılarını takdir etmeye
              dayalı olarak gelişiyor. Karşılıklı tanımanın, pozitifliğin gücüne
              ve uyumlu ve başarılı bir ekip oluşturmanın önemine inanıyoruz.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
