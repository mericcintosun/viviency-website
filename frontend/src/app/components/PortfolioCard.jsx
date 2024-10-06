// PortfolioCard.js
import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";

export default function PortfolioCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {portfolioData.map((work, index) => (
        <Link key={index} href={`/portfolio/${work.id}`}>
          <div
            className="relative bg-cover bg-center h-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{ backgroundImage: `url(${work.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end items-center text-center p-4">
              <h3 className="text-white text-sm opacity-70">
                {work.content}
              </h3>
              <h2 className="text-white text-2xl font-bold mt-2">
                {work.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
