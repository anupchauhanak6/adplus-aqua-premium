import React, { useState, useEffect, useCallback } from "react";
import {
  FaLeaf,
  FaStar,
  FaFire,
  FaThumbsUp,
  FaSnowflake,
  FaSun,
  FaCheckCircle,
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiLemon, GiHealthNormal, GiSodaCan } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

const products = [
  {
    id: 0,
    brand: "G‑Two™",
    name: "Zeera",
    tagline: "Desi Thanda",
    size: "160ml",
    price: "₹10",
    color: "green",
    infoBg: "from-[#1e6b08] via-[#3aaa12] to-[#6acc1a]",
    accent: "#f2e030",
    // 2 ad banners — shown as slider inside the card (left panel)
    images: [
      "images/Zeera.jpeg",
      "images/Zeera-2.jpeg",
    ],
    features: [
      { icon: <GiLemon />, text: "Refreshment Tanginess" },
      { icon: <FaFire />, text: "Masalaledaar Taste" },
      { icon: <FaLeaf />, text: "Nimbu Goodness" },
      { icon: <GiHealthNormal />, text: "Aids Digestion" },
      { icon: <MdLocalDrink />, text: "On The Go Shikanji" },
    ],
    variants: [
      { name: "G‑Two Cola", color: "#6d28d9" },
      { name: "G‑Two Orange", color: "#f97316" },
      { name: "G‑Two Power Drink", color: "#dc2626" },
    ],
    badge: "Good for Summer & Winter Both",
  },
  {
    id: 1,
    brand: "HSoblue™",
    name: "Litchi",
    tagline: "Fruit Drink",
    size: "175ml",
    price: null,
    color: "pink",
    infoBg: "from-[#0e6e85] via-[#1a9dbb] to-[#7dd8ed]",
    accent: "#f9a8d4",
    // single product image shown inside the card (left panel)
    images: ["images/Litchi.jpeg"],
    features: [
      { icon: <GiHealthNormal />, text: "Natural Fruit Flavour" },
      { icon: <FaLeaf />, text: "Fresh & Refreshing" },
      { icon: <FaStar />, text: "Premium Quality" },
      { icon: <FaThumbsUp />, text: "FSSAI Approved" },
      { icon: <BsFillLightningChargeFill />, text: "Real Litchi Taste" },
    ],
    variants: [],
    badge: "HSoblue Premium Range",
  },
];

export default function GtwoBeverages() {
  const [active, setActive] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [animTick, setAnimTick] = useState(0);
  const p = products[active];
  const multiImg = p.images.length > 1;

  // Image slide transition
  const slideTo = useCallback(
    (next) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setImgIdx(next);
        setFading(false);
      }, 300);
    },
    [fading],
  );

  const nextImg = useCallback(
    () => slideTo((imgIdx + 1) % p.images.length),
    [imgIdx, p.images.length, slideTo],
  );
  const prevImg = () =>
    slideTo((imgIdx - 1 + p.images.length) % p.images.length);

  // Auto-slide every 5 sec (only for Zeera which has 2 images)
  useEffect(() => {
    if (!multiImg) return;
    const t = setInterval(nextImg, 5000);
    return () => clearInterval(t);
  }, [nextImg, multiImg]);

  // Reset when switching product tab
  useEffect(() => {
    setImgIdx(0);
    setAnimTick(0);
  }, [active]);

  // Feature highlight cycle
  useEffect(() => {
    const t = setInterval(
      () => setAnimTick((x) => (x + 1) % p.features.length),
      1700,
    );
    return () => clearInterval(t);
  }, [active, p.features.length]);

  return (
    <section id="beverages" className="py-20 bg-gray-50 overflow-hidden">
      <style>{`
        @keyframes imgProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest mb-4">
            <GiSodaCan /> Now Available
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-400">
              Beverages
            </span>{" "}
            Range
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Desi flavours crafted for every season — bottled fresh, full of
            taste.
          </p>
        </div>

        {/* ── Tab Buttons ── */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 shadow-md gap-1">
            {products.map((prod, i) => (
              <button
                key={prod.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-7 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  active === i
                    ? prod.color === "green"
                      ? "bg-gradient-to-r from-green-600 to-lime-400 text-white shadow-lg scale-105"
                      : "bg-gradient-to-r from-cyan-500 to-pink-400 text-white shadow-lg scale-105"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {prod.color === "green" ? <FaLeaf /> : <MdLocalDrink />}
                {prod.brand} {prod.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Card ── */}
        <div className="rounded-[2rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
          {/* LEFT — Image Panel (slider for Zeera, single for Litchi) */}
          <div
            className="relative overflow-hidden group bg-black"
            style={{ minHeight: 320 }}
          >
            <img
              key={`${active}-${imgIdx}`}
              src={p.images[imgIdx]}
              alt={p.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                fading ? "opacity-0" : "opacity-100"
              }`}
              style={{ minHeight: 320 }}
            />

            {/* Gradient overlay on right edge to blend into info panel */}
            <div
              className="absolute inset-y-0 right-0 w-16 pointer-events-none hidden lg:block"
              style={{
                background: `linear-gradient(to right, transparent, ${
                  p.color === "green" ? "#3aaa12" : "#1a9dbb"
                })`,
              }}
            />

            {/* Arrows — only if multiple images */}
            {multiImg && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                >
                  <FaChevronLeft size={13} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                >
                  <FaChevronRight size={13} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {p.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => slideTo(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: imgIdx === i ? 24 : 8,
                        height: 8,
                        background:
                          imgIdx === i ? "#fff" : "rgba(255,255,255,0.45)",
                      }}
                    />
                  ))}
                </div>

                {/* Auto-progress bar */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 z-10">
                  <div
                    key={`prog-${active}-${imgIdx}`}
                    className="h-full bg-white/80"
                    style={{ animation: "imgProgress 5s linear forwards" }}
                  />
                </div>
              </>
            )}
          </div>

          {/* RIGHT — Info Panel */}
          <div
            className={`bg-gradient-to-br ${p.infoBg} relative overflow-hidden flex flex-col justify-center`}
          >
            {/* bg glow blobs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            {/* Made in India */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow">
              <span className="flex flex-col w-3 h-3 rounded-[2px] overflow-hidden border border-white/40 flex-shrink-0">
                <span className="flex-1 bg-orange-500" />
                <span className="flex-1 bg-white" />
                <span className="flex-1 bg-green-600" />
              </span>
              Made in India
            </div>

            <div className="relative z-10 px-8 lg:px-10 py-10 text-white">
              {/* Brand */}
              <p
                className="text-[10px] font-black uppercase tracking-[0.3em] mb-0.5"
                style={{ color: p.accent }}
              >
                {p.brand}
              </p>

              {/* Big product name */}
              <h3
                className="font-black leading-none mb-2"
                style={{
                  fontSize: "clamp(3rem, 7vw, 4.5rem)",
                  fontStyle: "italic",
                  color: p.accent,
                  textShadow: "3px 4px 0 rgba(0,0,0,0.22)",
                }}
              >
                {p.name}
              </h3>

              <p className="text-white/60 font-semibold text-sm mb-5 tracking-wide flex items-center gap-3">
                {p.tagline} &nbsp;·&nbsp; {p.size}
                {p.price && (
                  <span
                    className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full font-black text-gray-900 text-xs"
                    style={{ background: p.accent }}
                  >
                    Only {p.price}
                  </span>
                )}
              </p>

              {/* Features */}
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                is for...
              </p>
              <ul className="space-y-2.5 mb-6">
                {p.features.map((f, i) => {
                  const isActive = animTick === i;
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-3 transition-all duration-300"
                      style={{
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive
                          ? "translateX(8px) scale(1.02)"
                          : "none",
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 text-lg transition-all duration-300"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.28)"
                            : "rgba(255,255,255,0.08)",
                          transform: isActive ? "scale(1.18)" : "scale(1)",
                          boxShadow: isActive
                            ? "0 0 0 3px rgba(255,255,255,0.12)"
                            : "none",
                        }}
                      >
                        {f.icon}
                      </span>
                      <span className="font-bold text-base">{f.text}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Variants */}
              {p.variants.length > 0 && (
                <div className="mb-6">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">
                    Also Available In:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.variants.map((v, i) => (
                      <span
                        key={i}
                        className="text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20 shadow-md"
                        style={{ background: v.color }}
                      >
                        {v.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-gray-900 text-sm shadow-xl"
                style={{ background: p.accent }}
              >
                <FaSun className="text-orange-500" />
                {p.badge}
                <FaSnowflake className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Info Cards ── */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <FaCheckCircle className="text-green-600 text-xl" />,
              iconBg: "bg-green-100",
              border: "border-green-100 hover:border-green-300",
              bg: "bg-green-50",
              title: "FSSAI Approved",
              sub: "Certified & safe for consumption",
            },
            {
              icon: <FaThumbsUp className="text-yellow-600 text-xl" />,
              iconBg: "bg-yellow-100",
              border: "border-yellow-100 hover:border-yellow-300",
              bg: "bg-yellow-50",
              title: "All Age Groups",
              sub: "Kids, adults — for everyone",
            },
            {
              icon: <FaWhatsapp className="text-white text-xl" />,
              iconBg: "bg-green-500",
              border: "border-gray-100 hover:border-green-200",
              bg: "bg-white",
              title: "Bulk Orders Available",
              sub: "+91 9458381868",
              link: "https://wa.me/919458381868",
            },
          ].map((c, i) => (
            <div
              key={i}
              className={`${c.bg} ${c.border} rounded-2xl p-5 border shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-300`}
            >
              <div
                className={`${c.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                {c.icon}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">{c.title}</p>
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 text-xs font-semibold hover:underline mt-0.5 block"
                  >
                    {c.sub}
                  </a>
                ) : (
                  <p className="text-gray-400 text-xs mt-0.5">{c.sub}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
