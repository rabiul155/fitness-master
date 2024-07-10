import benefit1 from "@/assets/benefit-1.jpg";
import benefit2 from "@/assets/benefit-2.jpg";
import benefit3 from "@/assets/benefit-3.jpg";

const benefitsData = [
  {
    id: 1,
    name: "Improved Physical Health",
    description:
      "Engaging in regular fitness exercise significantly enhances overall physical health. It helps in maintaining a healthy weight, strengthens muscles and bones, and improves cardiovascular health. Regular exercise can reduce the risk of chronic diseases such as diabetes, hypertension, and heart disease, promoting a longer and healthier life.",
    image: benefit1,
  },
  {
    id: 2,
    name: "Enhanced Mental Well-being",
    description:
      "Fitness exercise is not just beneficial for the body but also for the mind. Physical activity releases endorphins, which are chemicals in the brain that act as natural painkillers and mood elevators. This can reduce feelings of depression and anxiety, improve sleep, and enhance overall mental well-being. Exercise also boosts cognitive function, which can help in maintaining mental sharpness and clarity.",
    image: benefit2,
  },
  {
    id: 3,
    name: "Increased Energy Levels",
    description:
      "Regular physical activity can significantly boost your energy levels. Exercise improves the efficiency of the cardiovascular system, allowing more oxygen and nutrients to be delivered to tissues and organs. This enhances overall stamina and reduces feelings of fatigue, making daily tasks easier to perform and increasing overall productivity and vitality",
    image: benefit3,
  },
];

function Benefit() {
  return (
    <div className="container mx-auto py-4">
      {benefitsData.map((benefit, index) => (
        <div
          key={benefit.id}
          className={`flex flex-col md:flex-row items-center gap-8 my-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={benefit.image}
              alt={benefit.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{benefit.name}</h2>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Benefit;
