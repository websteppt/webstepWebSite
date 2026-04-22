import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-black">
      {/* Decorative lines top right */}
      <div className="absolute top-24 right-12 flex flex-col gap-4 opacity-50">
        <div className="w-32 h-px bg-white/20" />
        <div className="w-16 h-px bg-[#ef4444] ml-auto" />
      </div>

      {/* Red vertical accent line */}
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#ef4444]" />

      {/* Huge Watermark */}
      <div className="absolute -bottom-20 -right-20 text-[30vw] font-black leading-none text-white/5 select-none pointer-events-none">
        WS
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-white/40 uppercase tracking-widest font-bold text-sm">
              Web Step — Soluções Digitais
            </span>
          </div>

          <h1 className="flex flex-col font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter">
            <span className="text-white/80">Fazemos o</span>
            <span className="text-white/20">Seu Negócio</span>
            <span className="text-white">Crescer.</span>
          </h1>

          <button
            onClick={scrollToContact}
            className="mt-8 group flex items-center gap-4 bg-[#0800FF] text-white px-8 py-5 text-lg md:text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            Pedir Orçamento Grátis
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </button>
        </motion.div>
      </div>

      {/* Stats Row */}
      <div className="container mx-auto px-6 lg:px-12 mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10 relative">
          {/* Red accent bar on first stat */}
          <div className="absolute top-[-1px] left-0 w-1/3 md:w-32 h-px bg-[#ef4444]" />
          
          <div className="py-6 border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-2xl md:text-3xl font-bold uppercase tracking-wide">24/7 Suporte</p>
          </div>
          <div className="py-6 md:px-8 border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-2xl md:text-3xl font-bold uppercase tracking-wide">100% Personalizadas</p>
          </div>
          <div className="py-6 md:px-8">
            <p className="text-2xl md:text-3xl font-bold uppercase tracking-wide">&lt;1h Resposta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
