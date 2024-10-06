import { notFound } from "next/navigation";
import servicesData from "@/data/servicesData";
import ServiceWelcome from "@/app/components/ServiceWelcome";
import CaseStudy from "@/app/components/CaseStudy";
import PhoneMockup from "@/app/components/PhoneMockup";
import Enquire from "@/app/components/Enquire";
import Timeline from "@/app/components/Timeline";
import ServiceInformation from "@/app/components/ServiceInformation";
export default function WorkPage({ params }) {
  const content = ["yaratıcı olmayı", "ilham vermeyi", "hayal kurmayı"];
  const buttonTwoText = "let's talk social!";
  const loveText = "Seviyoruz";

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
        {/* Telefon Mockup bileşenine dinamik olarak instagramImages veriliyor */}
        <PhoneMockup images={service.images} />
      </section>

      {/* Pass the service prop to the Timeline component */}
      <Timeline service={service} />
      <ServiceInformation />
      <Enquire
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </main>
  );
}
