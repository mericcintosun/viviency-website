import { notFound } from "next/navigation";
import servicesData from "@/data/servicesData";
import ServiceWelcome from "@/app/components/ServiceWelcome";
import CaseStudy from "@/app/components/CaseStudy";
import PhoneMockup from "@/app/components/PhoneMockup";
import Timeline from "@/app/components/Timeline";
import ServiceInformation from "@/app/components/ServiceInformation";
import EnquireReverse from "@/app/components/EnquireReverse";
export default function WorkPage({ params }) {
  const content = [
    "satışlarınızı artırmak",
    "markanızı tanıtmak",
    "bizimle çalışmak",
  ];
  const buttonTwoText = "Enquire Now";
  const loveText = "ister misiniz?";

  const { slug } = params;
  const service = servicesData.find((service) => service.slug === slug);

  if (!service) notFound();

  return (
    <main className="work-page">
      <ServiceWelcome title={service.title} image={service.image} />
      <section className="case-study-section">
        <CaseStudy service={service} />
      </section>
      <section className="phone-mockup-section">
        <PhoneMockup images={service.images} />
      </section>

      <Timeline service={service} />
      <ServiceInformation />
      <EnquireReverse
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </main>
  );
}
