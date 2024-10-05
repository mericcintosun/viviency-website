import Agency from "./components/Agency";
import Enquire from "./components/Enquire";
import HomeTeams from "./components/HomeTeams";
import ScrollReferences from "./components/ScrollReferences";
import Strategy from "./components/Strategy";
import Works from "./components/Works";
export default function Home() {
  const phrases = [
    "bersu alkaç",
    "ekin teksoy",
    "onur ege tarhan",
    "didem çatal",
    "meriç cintosun",
  ];
  
  const content = [
    "yaratıcı olmayı",
    "ilham vermeyi",
    "hayal kurmayı",
  ];
  
  const buttonText = "enquire now";
  const buttonTwoText = "let's talk social!";

  const titleText = "Viviency";
  const loveText = "Seviyoruz";

  return (
    <>
      <Strategy />
      <ScrollReferences />
      <Agency />
      <Enquire phrases={phrases} buttonText={buttonText} titleText = {titleText}/>
      <Works />
      <HomeTeams />
      <Enquire titleText = {loveText} phrases={content} buttonText={buttonTwoText} />
    </>
  );
}
