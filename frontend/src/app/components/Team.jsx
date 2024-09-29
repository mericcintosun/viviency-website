import Link from "next/link";
export default function Team() {
  const teams = {
    member1: {
      name: "Bersu Alkaç",
      title: "Creative Director",
      img: "/assets/about-assets/bersualkac.webp",
      instagram: "https://www.instagram.com/bersualk/",
      linkedin: "https://www.linkedin.com/in/bersu-alka%C3%A7-826931218/",
    },
    member2: {
      name: "Ege Tarhan",
      title: "Lawyer",
      img: "/assets/about-assets/egetarhan.webp",
      linkedin: "https://www.linkedin.com/in/onur-ege-tarhan-181956217/",
      stack: "https://viviency.com/biz/#",
    },
    member3: {
      name: "Ekin Teksoy",
      title: "Content Curator",
      img: "/assets/about-assets/ekinteksoy.webp",
      instagram: "https://www.instagram.com/kikinoksi",
    },
    member4: {
      name: "Meriç Cintosun",
      title: "Software Developer",
      img: "/assets/about-assets/mericcintosun.png",
      twitter: "https://twitter.com/0xmericeth",
      github: "https://github.com/mericcintosun",
      linkedin: "https://www.linkedin.com/in/meric-cintosun/",
    },
    member5: {
      name: "Görkem Çetinkaya",
      title: "Photographer",
      img: "/assets/about-assets/gorkem.webp",
    },
    member6: {
      name: "Halil İbrahim Yağlı",
      title: "Photographer",
      img: "/assets/about-assets/halil.webp",
    },
    member7: {
      name: "Muratcan İçdağ",
      title: "Social Media Consultant",
      img: "/assets/about-assets/muratcan.webp",
    },
    member8: {
      name: "Ayşegül Çetin",
      title: "Photographer",
      img: "/assets/about-assets/aysegulcetin.webp",
    },
    member9: {
      name: "Beyza Balık",
      title: "Film Maker",
      img: "/assets/about-assets/beyzabiz.webp",
      behance: "https://www.behance.net/byzblk",
      instagram: "https://www.instagram.com/vebeyz",
      linkedin: "https://www.linkedin.com/in/byzblk/",
    },
    member10: {
      name: "Esra Deniz Büyük",
      title: "Accountant",
      img: "/assets/about-assets/esrat.webp",
    },
    member11: {
      name: "Mustafa Alkaç",
      title: "Productor",
      img: "/assets/about-assets/mustafalkac.webp",
    },
    member12: {
      name: "Kiki",
      title: "Sweetness Director",
      img: "/assets/about-assets/kiki.webp",
    },
  };

  return (
    <>
      <div className="my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] mx-auto rounded-xl">
          {Object.values(teams).map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover  transform transition-transform duration-300 group-hover:scale-110 rounded-xl object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end items-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pb-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.title}</p>
                <div className="flex space-x-4 mt-2">
                  {member.instagram && (
                    <Link
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Instagram
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </Link>
                  )}
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Twitter
                    </Link>
                  )}
                  {member.github && (
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </Link>
                  )}
                  {member.behance && (
                    <Link
                      href={member.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Behance
                    </Link>
                  )}
                  {member.stack && (
                    <Link
                      href={member.stack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Stack
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
