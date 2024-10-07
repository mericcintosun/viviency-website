import AboutWelcome from "../components/AboutWelcome";
import BrandStory from "../components/BrandStory";
import Contributions from "../components/Contributions";
import Enquire from "../components/Enquire";
import References from "../components/References";
import Team from "../components/Team";
export default function About() {
  const content = ["yaratıcı olmayı", "ilham vermeyi", "hayal kurmayı"];
  const buttonTwoText = "let's talk social!";
  const loveText = "Seviyoruz";

  return (
    <>
      <AboutWelcome titleText={"biz"} />
      <BrandStory />
      <Team />
      <Contributions />
      <References />
      <Enquire
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
