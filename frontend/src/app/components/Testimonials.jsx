"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We’ve had the pleasure of working with Giraffe for a little over 6 months now and they’ve been very supportive, professional, efficient and also flexible in terms of making adjustments as we go along and build the ZAFARI brand in social media. In fact, we’ve made incredible progress together with Giraffe and generated over 1.5 million impressions during the last 6 months across both ZAFARI’s Facebook and Instagram profiles.",
    name: "Kiki",
    role: "Sweetness Director",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Giraffe has been a fantastic partner in helping us grow our social media presence. Their team is creative, professional, and always willing to go the extra mile to ensure our success.",
    name: "Alex Johnson",
    role: "Marketing Lead",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Thanks to Giraffe's strategies, we've seen a significant increase in engagement across all our social media platforms. They are truly experts in their field!",
    name: "Maria Martinez",
    role: "Social Media Manager",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Working with Giraffe has been an absolute pleasure. Their professionalism and dedication to our success have made a huge impact on our social media presence.",
    name: "James Lee",
    role: "Creative Director",
    image: "/assets/about-assets/kiki.webp",
  },
  {
    quote:
      "Giraffe's team consistently delivers top-notch content and insights. Their strategic approach has helped us exceed our marketing goals.",
    name: "Sophia Taylor",
    role: "Content Strategist",
    image: "/assets/about-assets/kiki.webp",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="w-[90%] mx-auto font-bold my-6 flex flex-col gap-6">
        <h1 className=" text-5xl font-bold my-6 sm:text-6xl lg:text-7xl">testimonials</h1>
        <p className="text-lg lg:text-xl font-light">
          Explore feedback from our partners to get a sense of our impact and
          collaboration style.
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
