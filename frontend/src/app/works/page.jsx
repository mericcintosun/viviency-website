
import EnquireReverse from "../components/EnquireReverse";
import ScrollReferences from "../components/ScrollReferences";
import Services from "../components/Services";
import ServicesCard from "../components/ServicesCard";
import ServicesWelcome from "../components/ServicesWelcome";

export default function Works() {
  const content = ["satışlarınızı artırmak", "markanızı tanıtmak" , "bizimle çalışmak"];
  const buttonTwoText = "Bize Ulaşın";
  const loveText = "ister misiniz?";
  const titleText = "Hizmetler";

  return (
    <>
      <ServicesWelcome title={titleText} />
      <Services />
      <ScrollReferences />
      <ServicesCard />
      <EnquireReverse
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
