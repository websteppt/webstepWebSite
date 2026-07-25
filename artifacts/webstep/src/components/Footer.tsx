import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="w-full h-0.5 bg-[#ef4444] absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">WEB STEP</h2>
            <p className="text-sm font-bold uppercase tracking-widest text-[#ef4444] mb-6">Tech Solutions</p>
            {/*<p className="text-white/60 leading-relaxed max-w-sm mb-8">
              Agência digital sediada em Guimarães. Ajudamos pequenos e médios negócios a crescer através de soluções tecnológicas robustas e design focado na conversão.
            </p>*/}
            <a href="https://instagram.com/webstep.pt" target="_blank" rel="noreferrer" className="inline-block p-3 border border-white/20 hover:border-[#ef4444] hover:text-[#ef4444] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#landingpages" className="text-white/60 hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#seo" className="text-white/60 hover:text-white transition-colors">Otimização SEO</a></li>
              <li><a href="#suporte" className="text-white/60 hover:text-white transition-colors">Suporte Informático</a></li>
              <li><a href="#it" className="text-white/60 hover:text-white transition-colors">Informática & IT</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-white transition-colors">Portefólio</a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors">Processo</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Web Step — Tech Solutions
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-white/60">
              Disponível para novos projectos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
