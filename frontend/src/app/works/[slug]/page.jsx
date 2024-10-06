// app/works/[slug]/page.jsx

import CaseStudy from "@/app/components/CaseStudy";
import ServiceWelcome from "@/app/components/ServiceWelcome";
import PhoneMockup from "@/app/components/PhoneMockup";
import servicesData from "@/data/servicesData";
import { notFound } from "next/navigation";

export default function WorkPage({ params }) {
  const { slug } = params;
  const service = servicesData.find((service) => service.slug === slug);

  if (!service) notFound();

  return (
    <div>
      <ServiceWelcome title={service.title} image={service.image} />
      <CaseStudy service={service} />
      {/* Telefon Mockup'ı bileşenine dinamik olarak instagramImages veriliyor */}
      <PhoneMockup images={service.images} />
    </div>
  );
}
