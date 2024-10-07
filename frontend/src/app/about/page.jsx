import AboutWelcome from "../components/AboutWelcome";
import BrandStory from "../components/BrandStory";
import Contributions from "../components/Contributions";
import Enquire from "../components/Enquire";
import EnquireReverse from "../components/EnquireReverse";
import References from "../components/References";
import Team from "../components/Team";
export default function About() {
  const content = ["yaratıcı olmayı", "ilham vermeyi", "hayal kurmayı"];
  const buttonTwoText = "hadi konuşalım!";
  const loveText = "seviyoruz";

  return (
    <>
      <AboutWelcome titleText={"biz"} />
      <BrandStory />
      <Team />
      <Contributions />
      <References />
      <EnquireReverse
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
