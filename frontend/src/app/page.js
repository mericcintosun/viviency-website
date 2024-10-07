import Agency from "./components/Agency";
import BlogSlider from "./components/BlogSlider";
import EnquireReverse from "./components/EnquireReverse";
import HomeTeams from "./components/HomeTeams";
import ScrollReferences from "./components/ScrollReferences";
import Strategy from "./components/Strategy";
import Works from "./components/Works";
export default function Home() {

  
  const content = [
    "yaratıcı olmayı",
    "ilham vermeyi ",
    "hayal kurmayı ",
  ];
  
  const buttonTwoText = "hadi konuşalım!";

  const loveText = `${" "} seviyoruz` ;

  return (
    <>
      <Strategy />
      <ScrollReferences />
      <Agency />
      <Works />
      <HomeTeams />
      <BlogSlider/>
      <EnquireReverse titleText = {loveText} phrases={content} buttonText={buttonTwoText} />
    </>
  );
}
