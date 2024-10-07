import EnquireReverse from "../components/EnquireReverse";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioWelcome from "../components/PortfolioWelcome";
import ScrollReferences from "../components/ScrollReferences";
import Testimonials from "../components/Testimonials";
import Works from "../components/Works";
export default function Portfolio() {

  const content = ["satışlarınızı artırmak", "markanızı tanıtmak"];
  const buttonTwoText = "bize ulaşın";
  const loveText = "ister misiniz?";
  return (
    <>
      <PortfolioWelcome />
      <PortfolioCard />
      <ScrollReferences />
      <Testimonials />
      <Works />
      <EnquireReverse
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
