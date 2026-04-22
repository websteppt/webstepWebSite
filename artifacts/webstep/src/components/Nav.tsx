import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#services" },
  { name: "Portefólio", href: "#portfolio" },
  { name: "Processo", href: "#process" },
  { name: "Sobre", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ef4444]" />
      
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => scrollTo("#home")}
          className="text-2xl font-black tracking-tighter uppercase"
        >
          WEB STEP
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-bold uppercase tracking-wider relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ef4444] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#ef4444] hover:text-white transition-colors duration-300"
          >
            Orçamento
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-50 flex flex-col pt-20 px-6 pb-6"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ef4444]" />
            <button
              className="absolute top-6 right-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-3xl font-black uppercase text-left hover:text-[#ef4444] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-8 bg-white text-black px-6 py-4 text-xl font-bold uppercase tracking-wider hover:bg-[#ef4444] hover:text-white transition-colors"
              >
                Pedir Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
