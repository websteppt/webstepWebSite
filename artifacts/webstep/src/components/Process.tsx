import { motion } from "framer-motion";
import { Compass, Target, Code2, Headphones } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Descoberta",
    desc: "Analisamos os seus objectivos e criamos um plano personalizado para o sucesso",
    icon: Compass,
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Planeamos a arquitetura, SEO e design focados na conversão do utilizador",
    icon: Target,
  },
  {
    num: "03",
    title: "Execução",
    desc: "Desenvolvemos soluções robustas com código limpo e performance de topo",
    icon: Code2,
  },
  {
    num: "04",
    title: "Acompanhamento",
    desc: "Monitorizamos resultados e prestamos suporte contínuo para crescimento sustentado",
    icon: Headphones,
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#ef4444]" />
            <span className="text-[#ef4444] uppercase tracking-widest font-bold text-sm">
              Processo
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase max-w-4xl">
            Como trabalhamos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black p-10 flex flex-col overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ef4444] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <span className="absolute top-4 right-4 text-8xl font-black text-white/5 pointer-events-none select-none">
                  {step.num}
                </span>

                <div className="border border-white/20 p-4 w-fit mb-12 transition-colors duration-300 group-hover:border-[#ef4444] group-hover:text-[#ef4444]">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 mt-auto z-10">
                  <span className="text-[#ef4444] mr-2">{step.num}.</span>
                  {step.title}
                </h3>

                <p className="text-white/60 leading-relaxed z-10">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
