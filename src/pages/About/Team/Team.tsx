import team1 from "@/assets/team3.jpg";
import team2 from "@/assets/team1.jpg";
import team3 from "@/assets/team2.jpg";

const teamData = [
  {
    id: 1,
    name: "David Johnson",
    position: "Chief Executive Officer (CEO)",
    description:
      "Jessica brings over 15 years of experience in the fitness industry to our team. Her vision and leadership have been instrumental in driving the company's growth and innovation. She is passionate about fitness and dedicated to providing high-quality products to help customers achieve their wellness goals.",
    image: team1,
  },
  {
    id: 2,
    name: "Alex Lee",
    position: "Chief Operating Officer (COO)",
    description:
      "With a background in logistics and supply chain management, David ensures that our operations run smoothly and efficiently. His expertise in optimizing processes and managing resources helps us maintain timely delivery and exceptional customer service",
    image: team2,
  },
  {
    id: 3,
    name: "Robert Curlos",
    position: "Head of Product Development",
    description:
      "Maria is the creative force behind our product lineup. With a keen eye for design and functionality, she leads the development of new and innovative fitness accessories. Her commitment to quality and customer satisfaction drives her to continuously improve our offerings",
    image: team3,
  },
];

function Team() {
  return (
    <div className="w-[80%] mx-auto text-gray-800 py-4">
      {teamData.map((team, index) => (
        <div
          key={team.id}
          className={`flex flex-col md:flex-row items-center bg-slate-50 gap-8 my-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="w-full h-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">{team.name}</h2>
            <h2 className="text-xl font-bold mb-4">{team.position}</h2>
            <p>{team.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
