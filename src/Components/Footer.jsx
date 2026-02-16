// src/components/Footer.jsx
import React from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "9218453017";
  const email = "udit@documentsindia.com";
  const companyName = "LPI-B2B Solutions";
  const address =
    "F-2, Sector 8, Noida, Uttar Pradesh 201301, India";

  const handleContactClick = (e) => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      window.open(
        `https://wa.me/${whatsappNumber}?text=Hi!%20I%20visited%20your%20website%20and%20want%20to%20know%20more.`,
        "_blank"
      );
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-black dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-200 pt-20 pb-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {companyName}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            We craft high-performance B2B websites & digital platforms for
            agriculture, pharma, fashion, industrial & tech brands.
            Fast. Modern. Conversion-focused.
          </p>

          <div className="flex gap-5">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cyan-100 dark:bg-gray-800 hover:scale-110 hover:bg-cyan-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md"
            >
              <MessageCircle size={20} className="text-cyan-600" />
            </a>

            <a
              href={`mailto:${email}`}
              className="p-3 rounded-full bg-blue-100 dark:bg-gray-800 hover:scale-110 hover:bg-blue-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md"
            >
              <Mail size={20} className="text-blue-600" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Portfolio", "Services", "About Us"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="group inline-block relative text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-6">Contact</h4>

          <div className="space-y-5 text-gray-600 dark:text-gray-400">

            <div className="flex gap-3 items-start">
              <MapPin size={20} className="text-cyan-600 mt-1" />
              <span>{address}</span>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={20} className="text-blue-600" />
              <a
                href={`tel:+91${whatsappNumber}`}
                onClick={handleContactClick}
                className="hover:text-cyan-600 transition"
              >
                +91 {whatsappNumber.replace(/(\d{5})(\d{5})/, "$1 $2")}
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={20} className="text-indigo-600" />
              <a href={`mailto:${email}`} className="hover:text-cyan-600 transition">
                {email}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h4 className="text-xl font-bold mb-6">Send Message</h4>

          <form
            action={`https://formsubmit.co/${email}`}
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="true" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows="4"
              required
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} {companyName}. Crafted with ❤️ in India.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
