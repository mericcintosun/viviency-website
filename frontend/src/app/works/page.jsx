import Enquire from "../components/Enquire";
import ScrollReferences from "../components/ScrollReferences";
import Services from "../components/Services";
import ServicesCard from "../components/ServicesCard";
import ServicesWelcome from "../components/ServicesWelcome";
export default function Works() {
  const content = ["satışlarınızı artırmak", "markanızı tanıtmak"];
  const buttonTwoText = "enquire now";
  const loveText = "ister misiniz?";
  const titleText = "Hizmetler"
  return (
    <>
      <ServicesWelcome titleText={titleText}/>
      <Services />
      <ScrollReferences />
      <ServicesCard />
      <Enquire
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
