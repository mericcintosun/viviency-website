
import Image from "next/image";

export default function CaseStudy({ service }) {
  return (
    <div className="container mx-auto px-4 py-8 mb-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          {service.title} <span className="text-orange-500">case study</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-8 gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Objective</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            {service.objective.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Solution</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            {service.solution.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

            

      
    </div>
  );
}
