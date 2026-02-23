// src/Home.jsx
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";

// Image imports
import image1 from "../Asset/pharma.png";
import image2 from "../Asset/agri1.png";
import image3 from "../Asset/Fashion.png";
import image4 from "../Asset/fabri.png";
import image5 from "../Asset/agri.png";
import image6 from "../Asset/food.png";
import image7 from "../Asset/furniture.png";
import image8 from "../Asset/spices.png";
import image9 from "../Asset/chemical.png";
import image10 from "../Asset/software.png";
import image11 from "../Asset/engi.png";
import image13 from "../Asset/Security.png";
import image14 from "../Asset/Househelp.png";
import image15 from "../Asset/Agri3.png";
import image16 from "../Asset/Kitchen.png";

const SAMPLES_DATA = [
  {
    id: 1,
    title: "Agriculture Pro",
    category: "Agriculture",
    image: image5,
    link: "https://lpi-agri.vercel.app/",
    description: "International & domestic agro-solutions.",
  },
  {
    id: 2,
    title: "Pharmaceuticals",
    category: "Pharma",
    image: image1,
    link: "https://lpi-pharma.vercel.app/",
    description: "Corporate medical manufacturing portal.",
  },
  {
    id: 3,
    title: "Fashion Hub",
    category: "Fashion",
    image: image3,
    link: "https://lpi-fashion.vercel.app/",
    description: "Modern UI/UX for retail & apparel.",
  },
  {
    id: 4,
    title: "Elite Furniture",
    category: "Furniture",
    image: image7,
    link: "https://lpi-furniture.vercel.app/",
    description: "Luxury interior design showcase.",
  },
  {
    id: 5,
    title: "Foodie Delight",
    category: "Food",
    image: image6,
    link: "https://lpi-food-2.vercel.app/",
    description: "Interactive menu & ordering system.",
  },
  {
    id: 6,
    title: "Precision Fab",
    category: "Industrial",
    image: image4,
    link: "https://lpi-fabri.vercel.app/",
    description: "Heavy metal fabrication services.",
  },
  {
    id: 7,
    title: "Agri Connect",
    category: "Agriculture",
    image: image2,
    link: "https://ravindra-kumar.vercel.app/",
    description: "Farmer-to-client global platform.",
  },
  {
    id: 8,
    title: "Chemical Labs",
    category: "Pharma",
    image: image9,
    link: "https://lpi-chemical.vercel.app/",
    description: "Industrial chemical compound index.",
  },
  {
    id: 10,
    title: "Spices of India",
    category: "Food",
    image: image8,
    link: "https://lpi-spices.vercel.app/",
    description: "Export quality spice catalog.",
  },
  {
    id: 11,
    title: "Software SaaS",
    category: "Software",
    image: image10,
    link: "https://lpi-software.vercel.app/",
    description: "Modern tech stack landing page.",
  },
  {
    id: 12,
    title: "Engineers Hub",
    category: "Industrial",
    image: image11,
    link: "https://lpi-engi.vercel.app/",
    description: "Civil & Mechanical portfolios.",
  },
  {
    id: 14,
    title: "Smart Security",
    category: "Security",
    image: image13,
    link: "https://lpi-security.vercel.app/",
    description: "Surveillance & protection systems.",
  },
  {
    id: 15,
    title: "Help Connect",
    category: "Services",
    image: image14,
    link: "https://lpi-househelp.vercel.app/",
    description: "Reliable domestic help booking.",
  },
  {
    id: 16,
    title: "Green Harvest",
    category: "Agriculture",
    image: image15,
    link: "https://lpi-agri2.vercel.app/",
    description: "Organic farming digital portal.",
  },
  {
    id: 17,
    title: "Cloud Kitchen",
    category: "Food",
    image: image16,
    link: "https://kitchen-flame-eight.vercel.app/",
    description: "Modern cloud kitchen management system.",
  },
];

// ── Theme Toggle Component ────────────────────────────────
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefers;

    setIsDark(initial);
    document.documentElement.classList.toggle("dark", initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="w-11 h-11" />;

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.92 }}
      className="relative p-2.5 rounded-full bg-gray-200/70 dark:bg-gray-800/60 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
      aria-label="Toggle dark/light mode"
    >
      <div className="relative w-6 h-6">
        <motion.div
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-amber-600"
        >
          <Sun size={24} />
        </motion.div>
        <motion.div
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-indigo-400"
        >
          <Moon size={24} />
        </motion.div>
      </div>
    </motion.button>
  );
};

// ── WhatsApp Floating CTA ────────────────────────────────
const WhatsAppCTA = ({ number = "919218453017" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.7 }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end"
        >
          <motion.a
            href={`https://wa.me/${number}?text=Hi!%20I%20saw%20your%20portfolio...`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3.5 rounded-full shadow-2xl shadow-green-900/40 hover:shadow-green-700/60 transition-all font-semibold text-sm sm:text-base"
          >
            <MessageCircle size={22} />
            Start a Project
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const myWhatsAppNumber = "919218453017";

  const categories = useMemo(
    () => ["All", ...new Set(SAMPLES_DATA.map((item) => item.category))],
    [],
  );

  const filteredSamples = useMemo(() => {
    return SAMPLES_DATA.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <>
      <WhatsAppCTA number={myWhatsAppNumber} />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
        className={`
          sticky top-0 z-50
          bg-white/80 dark:bg-gray-950/80
          border-b border-gray-200/60 dark:border-gray-800/50
          backdrop-blur-xl px-5 sm:px-10 py-4
          transition-all duration-500
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-700/30 dark:shadow-cyan-800/40">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h1
              className={`
                text-3xl font-black tracking-tight
                bg-gradient-to-r from-gray-900 to-gray-700
                dark:from-white dark:via-slate-100 dark:to-slate-200
                bg-clip-text text-transparent
              `}
            >
              LPI-B2B
            </h1>
          </div>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/${myWhatsAppNumber}?text=Hi!%20I%20saw%20your%20portfolio...`}
              className={`
                hidden sm:flex items-center gap-2.5
                bg-gradient-to-r from-green-600 to-emerald-700
                px-6 py-2.5 rounded-xl font-semibold text-white
                shadow-lg shadow-green-700/40 hover:shadow-green-600/60
                transition-all duration-300
              `}
            >
              <MessageCircle size={20} />
              Start Project
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <header className="relative pt-28 pb-40 md:pt-44 md:pb-60 px-5 sm:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`
              inline-flex items-center gap-3 px-6 py-2.5 rounded-full
              bg-gray-100/80 dark:bg-white/8 border border-gray-300/50 dark:border-white/12
              text-cyan-700 dark:text-cyan-300 text-base font-semibold mb-10 backdrop-blur-md
            `}
          >
            <Sparkles size={18} /> PREMIUM B2B WEB EXPERIENCES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 90 }}
            className={`
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter
              leading-tight mb-12
              text-gray-900 dark:text-transparent
              dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-300
              dark:bg-clip-text
            `}
          >
            Build Your Next-Level
            <br />
            Digital Presence
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects (Agriculture, Pharma, Fashion, Software...)"
                className={`
                  w-full pl-16 pr-8 py-6 md:py-7 rounded-3xl
                  bg-white/70 dark:bg-white/6
                  border border-gray-300/70 dark:border-white/12
                  focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20
                  transition-all duration-300 text-lg md:text-xl
                  placeholder:text-gray-500 dark:placeholder:text-slate-500
                `}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 dark:text-slate-400"
                size={28}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-6 py-3 rounded-full text-base font-semibold tracking-wide
                    transition-all duration-400
                    ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-xl shadow-cyan-700/40 dark:shadow-cyan-700/50"
                        : "bg-gray-100/70 dark:bg-white/8 text-gray-700 dark:text-slate-300 hover:bg-gray-200/70 dark:hover:bg-white/12 border border-gray-300/50 dark:border-white/10"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-50">
          <div className="absolute top-[-15%] left-[10%] w-[700px] h-[700px] bg-cyan-500/10 dark:bg-cyan-700/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-[-20%] right-[5%] w-[900px] h-[900px] bg-blue-500/10 dark:bg-blue-800/15 rounded-full blur-3xl animate-pulse-slow delay-1500" />
        </div>
      </header>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 pb-40 md:pb-48">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredSamples.map((sample, index) => (
              <motion.div
                layout
                key={sample.id}
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.9 }}
                transition={{
                  delay: index * 0.06,
                  type: "spring",
                  stiffness: 100,
                  damping: 16,
                }}
                whileHover="hover"
                className={`
  group relative
  bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
  border border-gray-200 dark:border-slate-700
  rounded-3xl overflow-hidden
  hover:border-cyan-500/60
  transition-all duration-500
  hover:shadow-2xl hover:shadow-cyan-600/20 dark:hover:shadow-cyan-900/40
`}
                style={{ perspective: "1400px" }}
              >
                <motion.div
                  className="relative h-72 sm:h-80 md:h-96 overflow-hidden"
                  variants={{
                    hover: {
                      scale: 1.06,
                      transition: { duration: 1.1, ease: "easeOut" },
                    },
                  }}
                >
                  <motion.img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent dark:from-black/80 dark:via-black/40 pointer-events-none"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div
                    className=" absolute top-5 left-5 bg-white/90 dark:bg-slate-900/80 backdrop-blur-lg  px-4 py-1.5 rounded-full
  text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-300
  border border-cyan-500/30 uppercase tracking-wider shadow-md
"
                  >
                    {sample.category}
                  </div>
                </motion.div>

                <div className="p-6 sm:p-8 pt-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`
                        text-2xl sm:text-3xl font-extrabold
                       text-gray-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300
                        transition-colors duration-300
                      `}
                    >
                      {sample.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, x: -12, y: 8 }}
                      whileHover={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 14,
                      }}
                    >
                      <ArrowUpRight
                        className="text-cyan-600 dark:text-cyan-400 w-8 h-8"
                        strokeWidth={2.2}
                      />
                    </motion.div>
                  </div>

                  <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-7 line-clamp-3">
                    {sample.description}
                  </p>

                  <motion.a
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className={`
                      block w-full py-5 text-center rounded-2xl font-bold text-lg
                      bg-gradient-to-r from-cyan-600/25 to-blue-600/25
                      dark:from-cyan-700/45 dark:to-blue-700/45
                      hover:from-cyan-500/45 hover:to-blue-500/45
                      dark:hover:from-cyan-600/65 dark:hover:to-blue-600/65
                      text-white border border-cyan-500/30 dark:border-cyan-500/40
                      hover:border-cyan-400/60 transition-all duration-400
                      shadow-md hover:shadow-cyan-700/40 dark:hover:shadow-cyan-900/50
                    `}
                  >
                    View Live Project →
                  </motion.a>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 pointer-events-none"
                  variants={{ hover: { opacity: 0.3 } }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSamples.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 md:py-40 text-xl md:text-2xl text-gray-600 dark:text-slate-400 font-light"
          >
            No projects found matching your search or category.
          </motion.div>
        )}
      </section>
    </>
  );
}







/*
// src/Home.jsx
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";

// Image imports (unchanged)
import image1 from "../Asset/pharma.png";
import image2 from "../Asset/agri1.png";
import image3 from "../Asset/Fashion.png";
import image4 from "../Asset/fabri.png";
import image5 from "../Asset/agri.png";
import image6 from "../Asset/food.png";
import image7 from "../Asset/furniture.png";
import image8 from "../Asset/spices.png";
import image9 from "../Asset/chemical.png";
import image10 from "../Asset/software.png";
import image11 from "../Asset/engi.png";
import image13 from "../Asset/Security.png";
import image14 from "../Asset/Househelp.png";
import image15 from "../Asset/Agri3.png";
import image16 from "../Asset/Kitchen.png";

const SAMPLES_DATA = [
  {
    id: 1,
    title: "Agriculture Pro",
    category: "Agriculture",
    image: image5,
    link: "https://lpi-agri.vercel.app/",
    description: "International & domestic agro-solutions.",
  },
  {
    id: 2,
    title: "Pharmaceuticals",
    category: "Pharma",
    image: image1,
    link: "https://lpi-pharma.vercel.app/",
    description: "Corporate medical manufacturing portal.",
  },
  {
    id: 3,
    title: "Fashion Hub",
    category: "Fashion",
    image: image3,
    link: "https://lpi-fashion.vercel.app/",
    description: "Modern UI/UX for retail & apparel.",
  },
  {
    id: 4,
    title: "Elite Furniture",
    category: "Furniture",
    image: image7,
    link: "https://lpi-furniture.vercel.app/",
    description: "Luxury interior design showcase.",
  },
  {
    id: 5,
    title: "Foodie Delight",
    category: "Food",
    image: image6,
    link: "https://lpi-food-2.vercel.app/",
    description: "Interactive menu & ordering system.",
  },
  {
    id: 6,
    title: "Precision Fab",
    category: "Industrial",
    image: image4,
    link: "https://lpi-fabri.vercel.app/",
    description: "Heavy metal fabrication services.",
  },
  {
    id: 7,
    title: "Agri Connect",
    category: "Agriculture",
    image: image2,
    link: "https://ravindra-kumar.vercel.app/",
    description: "Farmer-to-client global platform.",
  },
  {
    id: 8,
    title: "Chemical Labs",
    category: "Pharma",
    image: image9,
    link: "https://lpi-chemical.vercel.app/",
    description: "Industrial chemical compound index.",
  },
  {
    id: 10,
    title: "Spices of India",
    category: "Food",
    image: image8,
    link: "https://lpi-spices.vercel.app/",
    description: "Export quality spice catalog.",
  },
  {
    id: 11,
    title: "Software SaaS",
    category: "Software",
    image: image10,
    link: "https://lpi-software.vercel.app/",
    description: "Modern tech stack landing page.",
  },
  {
    id: 12,
    title: "Engineers Hub",
    category: "Industrial",
    image: image11,
    link: "https://lpi-engi.vercel.app/",
    description: "Civil & Mechanical portfolios.",
  },
  {
    id: 14,
    title: "Smart Security",
    category: "Security",
    image: image13,
    link: "https://lpi-security.vercel.app/",
    description: "Surveillance & protection systems.",
  },
  {
    id: 15,
    title: "Help Connect",
    category: "Services",
    image: image14,
    link: "https://lpi-househelp.vercel.app/",
    description: "Reliable domestic help booking.",
  },
  {
    id: 16,
    title: "Green Harvest",
    category: "Agriculture",
    image: image15,
    link: "https://lpi-agri2.vercel.app/",
    description: "Organic farming digital portal.",
  },
  {
    id: 17,
    title: "Cloud Kitchen",
    category: "Food",
    image: image16,
    link: "https://kitchen-flame-eight.vercel.app/",
    description: "Modern cloud kitchen management system.",
  },
];

// ── Theme Toggle ───────────────────────────────────────
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefersDark;

    setIsDark(initial);
    document.documentElement.classList.toggle("dark", initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/30 dark:border-slate-700/40 hover:border-cyan-500/40 transition-all duration-300"
      aria-label="Toggle dark/light mode"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isDark ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"
          } text-amber-400`}
          size={20}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"
          } text-indigo-300`}
          size={20}
        />
      </div>
    </motion.button>
  );
};

// ── WhatsApp Floating CTA ────────────────────────────────
const WhatsAppCTA = ({ number = "917505266931" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 90, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 90, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="fixed bottom-6 right-5 md:right-8 z-[9999]"
        >
          <motion.a
            href={`https://wa.me/${number}?text=Hi!%20Saw%20your%20LPI-B2B%20portfolio...`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full shadow-2xl shadow-green-900/50 hover:shadow-green-800/70 transition-all font-medium text-sm md:text-base"
          >
            <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
            Let's Talk Project
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const whatsappNumber = "917505266931";

  const categories = useMemo(
    () => ["All", ...new Set(SAMPLES_DATA.map((item) => item.category))],
    []
  );

  const filteredSamples = useMemo(() => {
    return SAMPLES_DATA.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <WhatsAppCTA number={whatsappNumber} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-slate-950/60 border-b border-slate-200/50 dark:border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-700/30">
              <Sparkles className="text-white" size={26} />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              LPI-B2B
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <ThemeToggle />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%20saw%20your%20portfolio...`}
              className="hidden sm:flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-green-800/30 transition-all"
            >
              <MessageCircle size={20} />
              Start Project
            </motion.a>
          </div>
        </div>
      </motion.nav>

      <header className="relative pt-24 pb-40 md:pt-36 md:pb-56 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/30 dark:bg-slate-800/20 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 text-cyan-700 dark:text-cyan-300 font-semibold mb-10"
          >
            <Sparkles size={18} /> NEXT-LEVEL B2B WEB EXPERIENCES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 90 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-10 md:mb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent"
          >
            Transform Your Business
            <br className="hidden sm:block" /> Into Digital Excellence
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects — Agriculture, Pharma, Fashion, Software..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 md:py-6 rounded-2xl bg-white/70 dark:bg-slate-800/30 backdrop-blur-xl border border-slate-300/60 dark:border-slate-600/50 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/25 transition-all duration-300 text-lg placeholder:text-slate-500 dark:placeholder:text-slate-400 shadow-sm"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400" size={26} />
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-700/40 dark:shadow-cyan-800/50"
                      : "bg-white/20 dark:bg-slate-800/20 backdrop-blur-lg border border-slate-300/40 dark:border-slate-700/30 hover:border-cyan-500/40 hover:bg-white/30 dark:hover:bg-slate-700/30 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>


        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60">
          <div className="absolute -top-20 left-10 w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-700/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 right-10 w-[800px] h-[800px] bg-blue-500/15 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24 md:pb-40">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredSamples.map((sample, index) => (
              <motion.div
                layout
                key={sample.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.92 }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 110, damping: 16 }}
                whileHover="hover"
                className="group relative bg-white/50 dark:bg-slate-800/25 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/60 transition-all duration-500 shadow-xl shadow-slate-200/20 dark:shadow-black/30 hover:shadow-2xl hover:shadow-cyan-900/25"
              >
                <motion.div
                  className="relative h-64 sm:h-72 md:h-80 overflow-hidden"
                  variants={{
                    hover: { scale: 1.08, transition: { duration: 1.3, ease: "easeOut" } },
                  }}
                >
                  <motion.img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-cyan-300 border border-cyan-400/30 uppercase tracking-wider shadow-sm">
                    {sample.category}
                  </div>
                </motion.div>

                <div className="p-6 md:p-7">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {sample.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <ArrowUpRight className="text-cyan-600 dark:text-cyan-400" size={32} strokeWidth={2.4} />
                    </motion.div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 line-clamp-3">
                    {sample.description}
                  </p>

                  <motion.a
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="block w-full py-4.5 text-center rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-400 shadow-md hover:shadow-lg shadow-cyan-700/30"
                  >
                    View Live Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSamples.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 md:py-40 text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light"
          >
            No projects found for your search / category.
          </motion.div>
        )}
      </section>
    </div>
  );
}

*/