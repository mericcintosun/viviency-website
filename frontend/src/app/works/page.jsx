// app/works/Works.jsx

import Enquire from "../components/Enquire";
import ScrollReferences from "../components/ScrollReferences";
import Services from "../components/Services";
import ServicesCard from "../components/ServicesCard";
import ServicesWelcome from "../components/ServicesWelcome";

export default function Works() {
  const content = ["satışlarınızı artırmak", "markanızı tanıtmak"];
  const buttonTwoText = "Enquire Now";
  const loveText = "İster misiniz?";
  const titleText = "Hizmetler";

  return (
    <>
      <ServicesWelcome title={titleText} />
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
