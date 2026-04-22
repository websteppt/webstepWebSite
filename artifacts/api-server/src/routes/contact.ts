import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { z } from "zod";

const router: IRouter = Router();

const ContactBody = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  company: z.string().max(200).optional().or(z.literal("")),
  message: z.string().min(1).max(5000),
});

const TO_EMAIL = "webstep.pt@gmail.com";
const FROM_EMAIL = "Web Step <onboarding@resend.dev>";

router.post("/contact", async (req, res) => {
  const parsed = ContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Dados inválidos." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not set");
    res.status(500).json({ error: "Servidor de email não configurado." });
    return;
  }

  const { name, email, company, message } = parsed.data;
  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : "—";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Novo contacto do site — ${name}`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background:#000;color:#fff;padding:24px;">
            <h1 style="margin:0;font-size:20px;letter-spacing:-0.02em;">Novo contacto — Web Step</h1>
          </div>
          <div style="padding:24px;background:#fafafa;color:#111;">
            <p><strong>Nome:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Empresa:</strong> ${safeCompany}</p>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;">
            <p style="white-space:pre-wrap;line-height:1.6;">${safeMessage}</p>
          </div>
          <div style="padding:16px 24px;background:#000;color:#888;font-size:12px;">
            Mensagem enviada através do formulário em webstep.pt
          </div>
        </div>
      `,
      text: `Novo contacto — Web Step\n\nNome: ${name}\nEmail: ${email}\nEmpresa: ${company || "—"}\n\n${message}`,
    });

    if (result.error) {
      req.log.error({ err: result.error }, "Resend error");
      res.status(502).json({ error: "Não foi possível enviar a mensagem." });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Erro inesperado ao enviar." });
  }
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default router;
