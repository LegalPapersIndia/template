import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageCircle, ArrowUpRight, Sparkles, X } from 'lucide-react';

// --- Assets --- (Keeping your imports)
import image1 from "../src/Asset/pharma.png";
import image2 from "../src/Asset/agri1.png";
import image3 from "../src/Asset/Fashion.png";
import image4 from "../src/Asset/fabri.png";
import image5 from "../src/Asset/agri.png";
import image6 from "../src/Asset/food.png";
import image7 from "../src/Asset/furniture.png";
import image8 from "../src/Asset/spices.png";
import image9 from "../src/Asset/chemical.png";
import image10 from "../src/Asset/software.png";
import image11 from "../src/Asset/engi.png";
import image13 from "../src/Asset/Security.png";
import image14 from "../src/Asset/Househelp.png";
import image15 from "../src/Asset/Agri3.png";

const SAMPLES_DATA = [
  { id: 1, title: "Agriculture Pro", category: "Agriculture", image: image5, link: "https://lpi-agri.vercel.app/", description: "International & domestic agro-solutions." },
  { id: 2, title: "Pharmaceuticals", category: "Pharma", image: image1, link: "https://lpi-pharma.vercel.app/", description: "Corporate medical manufacturing portal." },
  { id: 3, title: "Fashion Hub", category: "Fashion", image: image3, link: "https://lpi-fashion.vercel.app/", description: "Modern UI/UX for retail & apparel." },
  { id: 4, title: "Elite Furniture", category: "Furniture", image: image7, link: "https://lpi-furniture.vercel.app/", description: "Luxury interior design showcase." },
  { id: 5, title: "Foodie Delight", category: "Food", image: image6, link: "https://lpi-food-2.vercel.app/", description: "Interactive menu & ordering system." },
  { id: 6, title: "Precision Fab", category: "Industrial", image: image4, link: "https://lpi-fabri.vercel.app/", description: "Heavy metal fabrication services." },
  { id: 7, title: "Agri Connect", category: "Agriculture", image: image2, link: "https://ravindra-kumar.vercel.app/", description: "Farmer-to-client global platform." },
  { id: 8, title: "Chemical Labs", category: "Pharma", image: image9, link: "https://lpi-chemical.vercel.app/", description: "Industrial chemical compound index." },
  { id: 10, title: "Spices of India", category: "Food", image: image8, link: "https://lpi-spices.vercel.app/", description: "Export quality spice catalog." },
  { id: 11, title: "Software SaaS", category: "Software", image: image10, link: "https://lpi-software.vercel.app/", description: "Modern tech stack landing page." },
  { id: 12, title: "Engineers Hub", category: "Industrial", image: image11, link: "https://lpi-engi.vercel.app/", description: "Civil & Mechanical portfolios." },
  { id: 14, title: "Smart Security", category: "Security", image: image13, link: "https://lpi-security.vercel.app/", description: "Surveillance & protection systems." },
  { id: 15, title: "Help Connect", category: "Services", image: image14, link: "https://lpi-househelp.vercel.app/", description: "Reliable domestic help booking." },
  { id: 16, title: "Green Harvest", category: "Agriculture", image: image15, link: "https://lpi-agri2.vercel.app/", description: "Organic farming digital portal." },
];

const WhatsAppCTA = ({ number = "917505266931" }) => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!showBubble) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 60 }}
      className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3"
    >
      <motion.a
        href={`https://wa.me/${number}?text=Hi!%20I'm%20interested%20in%20your%20web%20solutions...`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-green-600/40 hover:shadow-green-500/60 transition-shadow"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping" />
        </div>
        <div className="text-left">
          <div className="text-xs opacity-90">Chat with us now</div>
          <div className="font-bold">Get Free Consultation</div>
        </div>
      </motion.a>

      <button
        onClick={() => setShowBubble(false)}
        className="bg-white/10 backdrop-blur-lg p-2 rounded-full text-white/70 hover:text-white transition-colors"
      >
        <X size={20} />
      </button>
    </motion.div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const myWhatsAppNumber = "917505266931";

  const categories = useMemo(() => ["All", ...new Set(SAMPLES_DATA.map(item => item.category))], []);

  const filteredSamples = useMemo(() => {
    return SAMPLES_DATA.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05070f] via-[#0a0e1a] to-[#05070f] text-slate-100 font-sans selection:bg-cyan-600/30">
      {/* Floating WhatsApp bubble */}
      <WhatsAppCTA number={myWhatsAppNumber} />

      {/* Glass Navbar */}
      <motion.nav
        className="sticky top-0 z-50 bg-black/40 border-b border-white/5 px-5 sm:px-8 py-4 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-700/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              E-WEBSOLUTIONS
            </h1>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/${myWhatsAppNumber}?text=Hi!%20I%20saw%20your%20portfolio...`}
            className="hidden sm:flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-green-700/30 hover:shadow-green-600/50 transition-all"
          >
            <MessageCircle size={18} />
            Start Project
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero */}
      <header className="relative pt-20 pb-32 md:pt-32 md:pb-48 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles size={16} /> PREMIUM WEB EXPERIENCES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10"
          >
            Your Next-Level
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </motion.h1>

          {/* Search + Categories */}
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects (Agriculture, Pharma, Fashion...)"
                className="w-full pl-14 pr-6 py-6 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/10 transition-all text-lg placeholder:text-slate-500"
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-600/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[-20%] left-[15%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[10%] w-[800px] h-[800px] bg-blue-700/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 pb-40">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSamples.map(sample => (
              <motion.div
                layout
                key={sample.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                className="group relative bg-gradient-to-b from-white/[0.07] to-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-cyan-300 border border-cyan-400/20 uppercase tracking-wider">
                    {sample.category}
                  </div>
                </div>

                <div className="p-7 pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {sample.title}
                    </h3>
                    <ArrowUpRight className="text-cyan-400 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-7 line-clamp-3">
                    {sample.description}
                  </p>

                  <a
                    href={sample.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-500/40 hover:to-blue-500/40 text-center rounded-2xl font-semibold border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
                  >
                    View Live Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSamples.length === 0 && (
          <div className="text-center py-32 text-slate-500">
            No projects found matching your search
          </div>
        )}
      </main>
    </div>
  );
};

export default App;