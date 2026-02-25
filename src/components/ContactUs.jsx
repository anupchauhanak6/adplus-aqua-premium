import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaClock,
} from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp message format
    const whatsappMessage = `Hello Adplus.aqua!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919458381868?text=${whatsappMessage}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone Numbers",
      details: ["+91 9458381868", "+91 9286101180"],
      color: "from-cyan-400 to-blue-500",
      action: "tel:+919458381868",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: ["+91 9458381868"],
      color: "from-blue-400 to-cyan-500",
      action: "https://wa.me/919458381868",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["adplus.aqua@gmail.com"],
      color: "from-cyan-500 to-blue-600",
      action: "mailto:adplus.aqua@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: ["Star Enterprises Roorkee, Haridwar, Uttarakhand, India"],
      color: "from-blue-500 to-cyan-600",
      action: "https://maps.google.com/?q=Roorkee,Haridwar,Uttarakhand",
    },
  ];

  const businessHours = [
    { day: "Monday - Saturday", time: "9:00 AM - 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Background Effects - Very Light */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your custom water bottle order? Contact us today
              for a free quote!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaPaperPlane className="text-cyan-600" />
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <FaUser className="text-sm" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <FaEnvelope className="text-sm" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <FaPhone className="text-sm" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <FaBuilding className="text-sm" />
                      Company/Event Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                      placeholder="Your business or event name"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements: bottle size, quantity, design preferences, delivery timeline, etc."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <FaWhatsapp className="text-xl" />
                    Send via WhatsApp
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    * Your message will open in WhatsApp for quick response
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 border border-gray-200 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`bg-gradient-to-r ${info.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xl shadow-md`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-cyan-700 font-semibold">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </a>
              ))}

              {/* Business Hours */}
              <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaClock className="text-cyan-600" />
                  Business Hours
                </h4>
                {businessHours.map((hour, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-600">{hour.day}</span>
                    <span className="text-cyan-700 font-semibold">
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/adplus.aqua?igsh=cGUwYzNsNTd0NWJx&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://wa.me/919458381868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-400 to-cyan-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

              {/* FSSAI License */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-sm mb-1">FSSAI License No.</p>
                <p className="text-cyan-700 font-bold text-lg">
                  12625006000401
                </p>
                <p className="text-gray-400 text-xs mt-2">Star Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
