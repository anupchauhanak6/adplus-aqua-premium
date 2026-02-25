import React from "react";
import { FaQuoteLeft, FaHeart, FaLightbulb } from "react-icons/fa";

function FoundersMessage() {
  const founders = [
    {
      name: "Eng. Subhan Khan",
      role: "Co-Founder",
      message:
        "Adplus.aqua ka safar ek simple vichar se shuru hua — paani sirf ek zarurat nahi, ek pehchaan bhi ho sakta hai. Hospitality, events aur campaigns ke dauraan jab log bottled water lete hain, humne socha kyun na uss bottle par unki apni kahani likhi jaaye",
      vision:
        "Aaj Adplus.aqua isi soch ko aage badha raha hai - har bottle ek story, har sip ek experience.",
      color: "from-blue-500 to-cyan-600",
      icon: <FaLightbulb />,
      image: "images/Eng.jpg",
    },
  ];

  return (
    <section
      id="founders"
      className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              The visionaries behind Adplus.aqua's journey of purity and
              personalization
            </p>
          </div>

          {/* Founders Cards - CENTERED */}
          <div className="flex justify-center mb-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400 flex flex-col max-w-2xl w-full"
              >
                {/* Image - LARGE AND CENTERED */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                    />
                    {/* Icon Badge */}
                    <div
                      className={`absolute -bottom-3 -right-3 bg-gradient-to-r ${founder.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white`}
                    >
                      {founder.icon}
                    </div>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">
                    {founder.name}
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full">
                    <p className="text-white font-semibold text-lg">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="flex flex-col items-center gap-4 mb-6 flex-1">
                  {/* Quote Icon */}
                  <div
                    className={`bg-gradient-to-r ${founder.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <FaQuoteLeft className="text-white text-2xl" />
                  </div>

                  {/* Message */}
                  <div className="text-center flex-1">
                    <p className="text-blue-800 text-lg leading-relaxed italic font-medium">
                      "{founder.message}"
                    </p>
                  </div>
                </div>

                {/* Vision Box - FIXED BOTTOM ALIGNMENT */}
                <div
                  className={`bg-gradient-to-r ${founder.color} rounded-2xl p-6 border-2 border-cyan-300 shadow-md mt-auto`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div
                      className={`bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <div
                        className={`bg-gradient-to-r ${founder.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}
                      >
                        {founder.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-3">
                        Our Vision
                      </h4>
                      <p className="text-white font-semibold leading-relaxed text-lg">
                        {founder.vision}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Company Journey Timeline */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Our Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-3xl">💡</span>
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-3">
                  The Idea
                </h4>
                <p className="text-blue-700">
                  Combining healthcare expertise with entrepreneurial vision to
                  create something unique
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-3">
                  The Launch
                </h4>
                <p className="text-blue-700">
                  Started Adplus.aqua with a mission to transform how brands
                  connect through water
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-3xl">🌟</span>
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-3">
                  The Impact
                </h4>
                <p className="text-blue-700">
                  Serving 200+ clients across hotels, events, and corporate
                  sector with pride
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundersMessage;
