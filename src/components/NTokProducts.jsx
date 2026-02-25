import React, { useState } from "react";
import {
  FaTint,
  FaStar,
  FaCheckCircle,
  FaShieldAlt,
  FaCog,
  FaCertificate,
  FaSnowflake,
  FaFire,
  FaTools,
  FaImage,
} from "react-icons/fa";

function NTokProducts() {
  const [selectedColor, setSelectedColor] = useState(0);

  const coolantVariants = [
    {
      color: "Blue",
      bgGradient: "from-blue-100 to-cyan-100",
      borderColor: "border-blue-400",
      textColor: "text-blue-600",
      accentColor: "bg-blue-500",
      images: ["images/N-Tok 1.png"],
      usage: "Japanese/Korean vehicles",
      description: "Premium blue coolant for modern vehicles",
    },
    {
      color: "Green",
      bgGradient: "from-green-100 to-lime-100",
      borderColor: "border-green-500",
      textColor: "text-green-600",
      accentColor: "bg-green-500",
      images: ["images/N-Tok 2.png"],
      usage: "Short-term/old vehicles",
      description: "Reliable green coolant for classic cars",
    },
    {
      color: "Red",
      bgGradient: "from-red-100 to-pink-100",
      borderColor: "border-red-500",
      textColor: "text-red-600",
      accentColor: "bg-red-500",
      images: ["images/N-Tok 3.png"],
      usage: "Modern cars (long-life)",
      description: "Advanced red coolant with extended life",
    },
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Corrosion Protection",
      description: "All metals protected",
    },
    { icon: FaTint, title: "Anti-Foam", description: "Prevents foam" },
    {
      icon: FaCheckCircle,
      title: "Anti-Scale",
      description: "No scale buildup",
    },
    {
      icon: FaSnowflake,
      title: "Excellent Cooling",
      description: "Optimal temperature",
    },
    { icon: FaCog, title: "Pump Lubricant", description: "Lubricates parts" },
    {
      icon: FaCertificate,
      title: "ISO 9001:2015",
      description: "Certified quality",
    },
  ];

  const usageInstructions = [
    {
      icon: FaTools,
      title: "Usage Instructions",
      steps: [
        "Fill coolant to proper level",
        "Always use recommended coolant",
        "Check and replace on time",
      ],
    },
    {
      icon: FaFire,
      title: "Caution",
      steps: ["Don't open cap in hot engine", "Low coolant damages engine"],
    },
  ];

  const importantTips = [
    "Always add coolant in cold engine",
    "Be careful opening radiator cap",
    "Never use tap water or alcohol",
    "Replace every 6-12 months",
  ];

  return (
    <section
      id="ntok-products"
      className="py-16 bg-gradient-to-b from-white via-blue-50 to-cyan-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Banner */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Featured <span className="text-cyan-600">Products</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Premium quality solutions for your business needs
            </p>
          </div>
          <div className="group relative rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-cyan-100 bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <img
              src="images/final flex.png"
              alt="Adplus Aqua Premium featured products banner"
              className="w-full h-auto object-contain sm:object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-32">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <FaImage className="text-white text-3xl" />
                </div>
                <p className="text-gray-700 text-xl font-semibold">
                  Banner unavailable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            N-TOK <span className="text-cyan-600">Radiator Coolant</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-cyan-600 mb-6">
            Keep Your Engine Cool
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Available in 3 Colors:{" "}
            <span className="font-semibold text-blue-600">Blue</span>,{" "}
            <span className="font-semibold text-green-600">Green</span>, and{" "}
            <span className="font-semibold text-red-600">Red</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border-2 border-cyan-200">
            <FaCertificate className="text-cyan-600 text-2xl" />
            <span className="font-bold text-gray-800">
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>

        {/* Color Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {coolantVariants.map((variant, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${selectedColor === index ? `${variant.accentColor} text-white shadow-lg scale-105` : "bg-white text-gray-700 border-2 border-gray-300"}`}
            >
              {variant.color} Coolant
            </button>
          ))}
        </div>

        {/* Product Display */}
        <div
          className={`bg-gradient-to-br ${coolantVariants[selectedColor].bgGradient} rounded-3xl p-6 md:p-10 mb-12 border-3 ${coolantVariants[selectedColor].borderColor} shadow-xl`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative bg-white rounded-2xl p-6 shadow-lg">
              <img
                src={coolantVariants[selectedColor].images[0]}
                alt={`N-Tok ${coolantVariants[selectedColor].color} Coolant`}
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden items-center justify-center h-64">
                <FaTint className="text-gray-400 text-5xl" />
              </div>
            </div>
            <div>
              <h3
                className={`text-3xl font-bold ${coolantVariants[selectedColor].textColor} mb-3`}
              >
                {coolantVariants[selectedColor].color} Coolant
              </h3>
              <p className="text-gray-700 text-lg mb-5">
                {coolantVariants[selectedColor].description}
              </p>
              <div className="bg-white rounded-xl p-5 shadow-md mb-5">
                <p className="text-gray-600 mb-2">
                  <span className="font-bold text-gray-800">Best For:</span>{" "}
                  {coolantVariants[selectedColor].usage}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-800">Capacity:</span> 1
                  Ltr
                </p>
              </div>
              <div className="space-y-2">
                {[
                  "Anti Foam & Anti Scale",
                  "Excellent Cooling Performance",
                  "Corrosion Protection & Lubricant",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
                  >
                    <FaCheckCircle
                      className={
                        coolantVariants[selectedColor].textColor + " text-xl"
                      }
                    />
                    <span className="text-gray-700 text-sm font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-cyan-200 shadow-xl mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose <span className="text-cyan-600">N-TOK?</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md">
                    <Icon className="text-white text-lg" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm mb-1 text-center">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs text-center">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instructions & Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {usageInstructions.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                    <Icon className="text-white text-lg" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {section.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">●</span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 border-2 border-cyan-300 shadow-lg text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-300 flex items-center justify-center">
                <FaStar className="text-cyan-600 text-lg" />
              </div>
              <h4 className="text-xl font-bold">Important Tips</h4>
            </div>
            <ul className="space-y-2">
              {importantTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-yellow-300 text-sm mt-1 flex-shrink-0" />
                  <span className="text-white text-sm leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-xl border-2 border-cyan-200">
            <p className="text-gray-800 text-lg mb-2">
              <span className="font-bold">Manufactured & Marketed By:</span>{" "}
              Star Enterprises
            </p>
            <p className="text-cyan-600 font-bold text-xl">
              www.adplusaqua.com
            </p>
            <p className="text-gray-600 mt-2">Helpline: 9286101180</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NTokProducts;