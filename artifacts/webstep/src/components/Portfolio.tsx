import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import portfolioMockup from "@/assets/portfolio-mockup.png";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#ef4444]" />
            <span className="text-[#ef4444] uppercase tracking-widest font-bold text-sm">Portefólio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Projeto em Destaque.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#ef4444] z-10" />
            <div className="border border-white/10 bg-white/5 overflow-hidden">
              <img 
                src={portfolioMockup} 
                alt="Mockup do projeto de Detalhe Automóvel" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="inline-block border border-white px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8">
              Landing Page + SEO Local
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Empresa de <br />Detalhe Automóvel
            </h3>
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Desenvolvemos uma página de aterragem de alta conversão aliada a uma estratégia de SEO local para captar clientes na região de Guimarães. O design reflete o luxo e a precisão do detalhe automóvel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 mb-12 w-full">
              <div className="bg-[#ef4444]/10 border border-[#ef4444] p-6 flex flex-col justify-center">
                <span className="text-2xl font-black text-[#ef4444]">+180%</span>
                <span className="text-xs uppercase font-bold text-white/60 mt-2">Tráfego Orgânico</span>
              </div>
              <div className="bg-black p-6 flex flex-col justify-center">
                <span className="text-2xl font-black text-white">Top 3</span>
                <span className="text-xs uppercase font-bold text-white/60 mt-2">Google Local</span>
              </div>
              <div className="bg-black p-6 flex flex-col justify-center">
                <span className="text-2xl font-black text-white">+45</span>
                <span className="text-xs uppercase font-bold text-white/60 mt-2">Leads/mês</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 w-full">
              <a 
                href="#contact"
                className="group flex items-center justify-center gap-3 bg-[#0800FF] text-white px-8 py-5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto"
              >
                Ver Mais Projetos
              </a>
              
              <a 
                href="#contact" 
                className="group flex items-center gap-2 font-bold uppercase tracking-wider text-sm text-white/60 hover:text-white transition-colors"
              >
                Quero um projeto semelhante 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
