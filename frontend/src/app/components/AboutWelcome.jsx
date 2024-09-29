import Image from "next/image";

export default function AboutWelcome() {
  return (
    <>
        <div id="about">
            <Image src = "/assets/about-assets/teams.jpg" width={500} height={1} />
        </div>
    </>
  );
}