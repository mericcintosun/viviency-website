"use client";

import Image from "next/image";

export default function BrandStory() {
  return (
    <>
      <div id="brand-story" className="flex flex-col justify-center items-center w-[90%] mx-auto">
        <div id="left-section-about" className="flex flex-col justify-center items-center gap-6">
          <h1 className=" text-6xl font-bold leading-tight py-6 sm:text-7xl lg:text-[6rem] xl:text-[7rem]">
            marka<span className="text-[#F07F55]"> hikayemiz</span>
          </h1>
          <Image id="brand-image"
            src="/assets/about-assets/brand.jpg"
            layout="responsive"
            width={200}
            height={1}
            alt="brand"
            className="mb-12"
          />
        </div>
        <div id="right-section-about" className="flex flex-col gap-3 mb-6">
          <h3 className="font-bold text-[#F07F55]">Humble Beginnings</h3>
          <p className="font-light">
            Before Giraffe emerged as a leading agency, there was just Kane and
            Phil. They dreamt not just of leveraging social media for brands but
            of crafting authentic stories that resonate with audiences. Giraffe
            Social has a mission to serve brands and to help contribute good to
            people and the planet.
          </p>
          <h3 className="font-bold text-[#F07F55]">Fusion of Talents</h3>
          <p className="font-light">
            Our growing reputation wasn't just because of our unique blend of
            strategy and creativity but also due to our unwavering commitment to
            our clients. We've always believed that our success is deeply
            intertwined with theirs. It's this dedication that saw brands, both
            budding and established, entrusting us to narrate their stories.
          </p>
          <h3 className="font-bold text-[#F07F55]">Cultivating Wellness & Excellence</h3>
          <p className="font-light">
            Kate, our Head of Operations, brought more than just operational
            acumen. She emphasised a culture where our team's well-being was
            paramount. This ensured consistent excellence in our output and a
            genuine, passionate engagement with every client project. Our ethos?
            Delivering the best while caring for our team and understanding our
            client's aspirations.
          </p>
          <h3 className="font-bold text-[#F07F55]">Earning Global Recognition</h3>
          <p className="font-light">
            Our journey took us beyond borders, with Giraffe now standing tall
            on the global stage. But with each new partnership, we remind
            ourselves of our roots: being client-centric. We may now be a global
            agency, but our commitment is still local, ensuring each client
            feels seen, heard, and prioritised.
          </p>
          <h3 className="font-bold text-[#F07F55]">The Journey Continues</h3>
          <p className="font-light">
            Our narrative is as much about our clients as it is about us. Their
            ambitions fuel ours. Their stories shape ours. As we look ahead,
            we're excited not just for the growth of Giraffe but also for the
            ambitious brands we will have the chance to work with. Our mission
            remains: ensuring every client feels they're an integral part of
            this ever-evolving tale.
          </p>
        </div>
      </div>
    </>
  );
}
