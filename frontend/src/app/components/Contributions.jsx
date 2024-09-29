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
    open === value ? "text-white" : "text-black"; // Değiştirilecek renk burada

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
                <span className={getTitleClass(1)}>strategy & creativity</span>
                {getIcon(1)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              This value signifies our approach to social media marketing, where
              we fuse strategic planning with imaginative creativity. Every
              decision we make, every campaign we launch, is a meticulously
              calculated move infused with creativity. We ensure every step is
              strategic but never mundane, always brightened with our creative
              edge. This value is also reflected in our operational structure.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(2)}>balance & wellbeing</span>
                {getIcon(2)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              We prioritise work-life balance, nurturing an environment where
              creativity and growth meet personal well-being. Our team thrives
              by being both professionally challenged and personally content.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(3)}>evolution & growth</span>
                {getIcon(3)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              We're a team committed to continuous learning, growth, and
              evolution. We refuse to settle, always aiming to improve our
              services and grasp of industry trends.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(4)}>
                  sustainability & responsibility
                </span>
                {getIcon(4)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              We're committed to minimising our environmental impact,
              integrating sustainable practices in our operations and advocating
              for environmentally-friendly solutions in our services.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 5}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              <div className="flex items-center justify-between w-[100%]">
                <span className={getTitleClass(5)}>unity & recognition</span>
                {getIcon(5)}
              </div>
            </AccordionHeader>
            <AccordionBody>
              Our team thrives on unity and acknowledging each other's
              successes. We believe in the power of mutual recognition,
              positivity and creating a cohesive and triumphant team.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
