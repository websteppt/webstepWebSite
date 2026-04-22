import { motion } from "framer-motion";
import { Zap, Cpu, Users, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Entrega Rápida",
    desc: "Prazos de entrega curtos sem comprometer a qualidade. Valorizamos o seu tempo e entregamos os projectos de forma eficiente.",
    icon: Zap,
  },
  {
    title: "Experiência Técnica",
    desc: "Formação e experiência na área informática aplicadas ao suporte e desenvolvimento de soluções digitais modernas e eficazes.",
    icon: Cpu,
  },
  {
    title: "Foco no Cliente",
    desc: "Comunicação clara, transparente e direta. Trabalhamos como uma extensão da sua própria equipa.",
    icon: Users,
  },
  {
    title: "Suporte Fiável",
    desc: "Suporte e manutenção contínuos para garantir que os seus ativos continuam a ter o melhor desempenho.",
    icon: ShieldCheck,
  },
];

export function WhyChoose() {
  return (
    <section id="about" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#ef4444]" />
            <span className="text-[#ef4444] uppercase tracking-widest font-bold text-sm">
              Porquê a Web Step
            </span>
            <div className="w-8 h-px bg-[#ef4444]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase max-w-4xl">
            Razões para nos <br />
            escolher.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative border border-white/10 p-8 md:p-12 hover:border-white/30 transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-0 h-px bg-[#ef4444] transition-all duration-500 group-hover:w-full" />

                <div className="w-16 h-16 border border-white/20 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                  {reason.title}
                </h3>

                <p className="text-white/60 leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
