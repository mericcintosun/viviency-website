import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function OtherWorks() {
  const { id } = useParams(); // URL'deki mevcut portföy işinin id'sini alıyoruz

  return (
    <div className="bg-black py-16">
      <h2 className="text-center text-white text-4xl font-bold mb-12">
        See More
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData
          .filter((work) => work.id !== id) // Mevcut bulunduğunuz sayfanın id'sine eşit olmayanları filtreliyoruz
          .map((work) => (
            <Link href={`/portfolio/${work.id}`} key={work.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="text-gray-500">{work.category}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
