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
        <div className="text-center mb-12 animate__animated animate__fadeInDown">
          <h2 className="text-4xl font-extrabold text-[#0F172A]">
            🌞 Summer Care Tips
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Simple and effective ways to stay healthy, cool, and energetic
            during the hot summer season.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <div
              key={i}
               className={`animate__animated animate__fadeInUp animate__delay-${
                i + 1
              }s bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
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