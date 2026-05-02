import { FaTint, FaSun, FaLeaf } from "react-icons/fa";

const tips = [
  {
    icon: <FaTint />,
    title: "Stay Hydrated",
    desc: "Drink at least 2–3 liters of water daily in summer heat.",
  },
  {
    icon: <FaSun />,
    title: "Sun Protection",
    desc: "Always use sunscreen SPF 30+ before going outside.",
  },
  {
    icon: <FaLeaf />,
    title: "Light Clothing",
    desc: "Wear breathable cotton clothes to stay cool.",
  },
];

const SummerCareTips = () => {
  return (
    <div className="py-16 mt-10 bg-[#FFF7E8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          🌞 Summer Care Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-[#FF9F1C] text-3xl">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold mt-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 mt-2">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;