import {
  ArrowRight,
  LayoutTemplate,
  Search,
  Wrench,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "landingpages",
    title: "Landing Pages",
    hashtag: "#landingpages",
    icon: LayoutTemplate,
    description:
      "Landing pages de alta conversão, desenhadas ao pormenor para transformar visitantes em clientes.",
    features: [
      "Design responsivo",
      "Otimizado para conversão",
      "Carregamento rápido",
    ],
    highlight: true,
  },
  {
    id: "seo",
    title: "Otimização SEO",
    hashtag: "#seo",
    icon: Search,
    description:
      "Melhore o seu posicionamento nos motores de busca e aumente o tráfego orgânico.",
    features: ["SEO local", "Pesquisa de palavras-chave", "Otimização técnica"],
    highlight: false,
  },
  {
    id: "suporte",
    title: "Suporte Informático",
    hashtag: "#suporte",
    icon: Wrench,
    description:
      "Suporte técnico fiável para manter o seu negócio a funcionar sem problemas.",
    features: [
      "Resposta em <1h",
      "Acesso remoto e presencial",
      "Manutenção preventiva",
    ],
    highlight: false,
  },
  {
    id: "it",
    title: "Informática & IT",
    hashtag: "#it",
    icon: Server,
    description:
      "Serviços completos de tecnologia — desde consultoria à implementação de infraestruturas.",
    features: [
      "Configuração de redes",
      "Gestão de servidores",
      "Assistência Técnica",
      "Segurança digital",
    ],
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black border-t border-white/10">
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
              Serviços
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase max-w-4xl">
            As nossas formas de <br />
            entregar valor.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col justify-between p-10 md:p-14 transition-colors duration-300
                  ${service.highlight ? "bg-[#ef4444]" : "bg-black hover:bg-white/5"}
                `}
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span
                      className={`font-mono text-sm ${service.highlight ? "text-white/80" : "text-white/40"}`}
                    >
                      {service.hashtag}
                    </span>
                    <div
                      className={`p-4 border transition-colors duration-300
                      ${service.highlight ? "border-white text-white" : "border-white/20 text-white/60 group-hover:border-white group-hover:text-white"}
                    `}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg mb-10 ${service.highlight ? "text-white/90" : "text-white/60"}`}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-12">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${service.highlight ? "bg-white" : "bg-[#ef4444]"}`}
                        />
                        <span
                          className={`font-medium ${service.highlight ? "text-white" : "text-white/80"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm transition-transform duration-300 group-hover:translate-x-2
                    ${service.highlight ? "text-white" : "text-white/60 group-hover:text-white"}
                  `}
                >
                  Saber Mais <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
