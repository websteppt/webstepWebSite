import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Falha ao enviar.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Falha ao enviar.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#ef4444]" />
            <span className="text-[#ef4444] uppercase tracking-widest font-bold text-sm">Contacto</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Vamos falar.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-px bg-[#ef4444] mb-12" />
            
            {status === "success" ? (
              <div className="border border-[#ef4444] bg-[#ef4444]/10 p-8 text-center">
                <h3 className="text-2xl font-black uppercase mb-2 text-white">Mensagem enviada.</h3>
                <p className="text-white/70">Em breve entramos em contacto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Nome"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#ef4444] transition-colors text-lg"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#ef4444] transition-colors text-lg"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Empresa (Opcional)"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#ef4444] transition-colors text-lg"
                  />
                </div>
                <div className="relative">
                  <textarea 
                    name="message"
                    required
                    placeholder="Mensagem"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#ef4444] transition-colors text-lg resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-[#ef4444] text-sm font-bold uppercase tracking-wider">{errorMsg}</p>
                )}
                <button 
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-white text-black py-6 text-xl font-black uppercase tracking-widest hover:bg-[#ef4444] hover:text-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "A enviar..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[1px] bg-white/10 border border-white/10"
          >
            <div className="bg-black p-8 group hover:bg-white/5 transition-colors duration-300 flex items-center gap-6">
              <div className="border border-white/20 p-4 transition-colors group-hover:border-[#ef4444] group-hover:text-[#ef4444]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-white/40 mb-1">Email</p>
                <p className="text-lg font-bold">webstep.pt@gmail.com</p>
              </div>
            </div>

            <div className="bg-black p-8 group hover:bg-white/5 transition-colors duration-300 flex items-center gap-6">
              <div className="border border-white/20 p-4 transition-colors group-hover:border-[#ef4444] group-hover:text-[#ef4444]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-white/40 mb-1">Localização</p>
                <p className="text-lg font-bold">Guimarães, Portugal</p>
              </div>
            </div>

            <a href="https://instagram.com/webstep.pt" target="_blank" rel="noreferrer" className="bg-black p-8 group hover:bg-white/5 transition-colors duration-300 flex items-center gap-6">
              <div className="border border-white/20 p-4 transition-colors group-hover:border-[#ef4444] group-hover:text-[#ef4444]">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-white/40 mb-1">Instagram</p>
                <p className="text-lg font-bold transition-colors group-hover:text-[#ef4444]">@webstep.pt</p>
              </div>
            </a>

            <div className="bg-black p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#ef4444]" />
              <div className="flex items-center gap-4 mb-2 mt-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <p className="text-lg font-bold uppercase tracking-wider">Disponível agora</p>
              </div>
              <p className="text-white/50 text-sm ml-7">Resposta em menos de 1 hora</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
