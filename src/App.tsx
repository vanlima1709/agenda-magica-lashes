import { Check, Sparkles, Heart, MessageCircle, Calendar, Gift, Clock, Zap, Crown, Star } from "lucide-react";
import heroImg from "@/assets/hero-lashes.jpg";

const CHECKOUT = "https://pay.kiwify.com.br/1ecCbat";

function CTA({ children = "QUERO MINHA AGENDA LOTADA", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base sm:text-lg font-bold tracking-wide text-background shadow-gold animate-pulse-gold transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
      <Sparkles className="h-5 w-5" />
      {children}
    </a>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-5 py-16 sm:py-24 ${className}`}><div className="mx-auto max-w-5xl">{children}</div></section>;
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary blur-3xl animate-float-glow" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/40 blur-3xl animate-float-glow" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold backdrop-blur">
              <Crown className="h-3.5 w-3.5" /> EBOOK MÉTODO AGENDA LOTADA
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Cílios Tufos em <span className="text-gradient-gold">7 Dias</span>
            </h1>
            <p className="mt-5 text-lg text-lilac sm:text-xl">
              Como atrair clientes todos os dias e começar a <strong className="text-foreground">viver da beleza</strong> — mesmo que você esteja começando do zero.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <CTA />
              <span className="text-sm text-lilac">⭐ Acesso imediato</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-gold blur-2xl opacity-40" />
            <img
              src={heroImg}
              alt="Cílios tufos volumosos em destaque"
              width={1024}
              height={1024}
              className="relative rounded-3xl border-2 border-gold/30 shadow-glow"
            />
          </div>
        </div>
      </header>

      {/* IDENTIFICAÇÃO */}
      <Section>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          💡 Você se <span className="text-gradient-gold">identifica</span> com isso?
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            "Quer começar na área da beleza, mas não sabe como conseguir clientes",
            "Já pensou em trabalhar com cílios, mas tem medo de não dar certo",
            "Não quer investir alto ou passar horas em cada atendimento",
            "Quer uma forma prática de ganhar dinheiro trabalhando de casa",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50">
              <Heart className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-card-foreground">{t}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-lg text-lilac">
          Se respondeu <span className="font-semibold text-gold">"sim"</span> para qualquer uma dessas… esse método foi feito para você.
        </p>
      </Section>

      {/* VERDADE */}
      <Section className="bg-card/40">
        <div className="rounded-3xl border border-gold/20 bg-gradient-purple p-8 sm:p-12 text-center shadow-glow">
          <span className="inline-block rounded-full bg-background/30 px-4 py-1 text-xs font-bold tracking-widest text-gold">⚠️ A VERDADE</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            O problema não é falta de talento.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/90">
            Não é o mercado. Nem falta de oportunidade. O verdadeiro problema é que <strong>ninguém te ensinou como conseguir clientes</strong>.
          </p>
          <p className="mt-4 text-xl font-semibold text-gold">E sem clientes… não existe faturamento.</p>
        </div>
      </Section>

      {/* IMAGINA */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">✨ Agora <span className="text-gradient-gold">imagina isso</span>:</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { icon: Calendar, t: "Acordar com clientes já agendados" },
            { icon: MessageCircle, t: "Receber mensagens no WhatsApp pedindo horários" },
            { icon: Sparkles, t: "Ganhar dinheiro com um serviço simples e rápido" },
            { icon: Heart, t: "Tudo isso trabalhando de casa" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-gold">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-background">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-lg font-medium">{t}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-lg text-lilac">Parece distante? <span className="font-semibold text-gold">Não é.</span></p>
      </Section>

      {/* O QUE VAI APRENDER */}
      <Section className="bg-card/40">
        <div className="text-center">
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-xs font-bold tracking-widest text-gold">🚀 O QUE VOCÊ VAI APRENDER</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Com o Método <span className="text-gradient-gold">Agenda Lotada</span></h2>
        </div>
        <div className="mt-12 space-y-4">
          {[
            "Como se posicionar como profissional (mesmo sendo iniciante)",
            "Como conseguir seus primeiros clientes rapidamente",
            "Como usar Instagram e WhatsApp para atrair pessoas todos os dias",
            "Como transformar cílios tufos em uma renda constante",
            "O plano completo de 7 dias para sair do zero e começar a faturar",
          ].map((t) => (
            <div key={t} className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-5 backdrop-blur transition-all hover:border-gold/50">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                <Check className="h-4 w-4 text-background" strokeWidth={3} />
              </div>
              <p className="text-base sm:text-lg">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PLANO 7 DIAS */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">📆 O Plano de <span className="text-gradient-gold">7 Dias</span></h2>
          <p className="mt-3 text-lilac">Um passo a passo claro para mudar sua rotina</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Dia 1", "Posicionamento"],
            ["Dia 2", "Prova"],
            ["Dia 3", "Primeiras ofertas"],
            ["Dia 4", "Desejo"],
            ["Dia 5", "Fechamento"],
            ["Dia 6", "Experiência"],
            ["Dia 7", "Agenda completa"],
          ].map(([d, t]) => (
            <div key={d} className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-gold">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-gold">{d}</span>
                <Clock className="h-5 w-5 text-lilac" />
              </div>
              <p className="mt-3 text-lg font-semibold">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* QUANTO VALE */}
      <Section className="bg-gradient-purple">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">💰 Quanto vale ter sua <span className="text-gradient-gold">própria renda?</span></h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {["Trabalhar para você mesma", "Ter liberdade de horários", "Não depender de ninguém", "Construir sua própria renda"].map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-xl bg-background/40 p-4 backdrop-blur">
              <Star className="h-5 w-5 text-gold" />
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg text-foreground/90">Provavelmente <strong>muito mais</strong> do que isso custa.</p>
      </Section>

      {/* BÔNUS */}
      <Section>
        <div className="text-center">
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-xs font-bold tracking-widest text-gold">🎁 BÔNUS EXCLUSIVOS</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Tudo isso <span className="text-gradient-gold">de presente</span></h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            ["Guia de Retenção", "Mantenha suas clientes voltando sempre."],
            ["Script de WhatsApp", "Atendimento pronto para fechar mais vendas."],
            ["Calendário Lash", "Organize sua agenda de forma profissional."],
            ["Guia de Precificação", "Saiba quanto cobrar e lucrar de verdade."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-gold/30 bg-card p-6 transition-all hover:border-gold hover:shadow-gold">
              <Gift className="h-7 w-7 text-gold" />
              <h3 className="mt-3 font-display text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OFERTA */}
      <Section className="bg-card/40">
        <div className="relative overflow-hidden rounded-3xl border-2 border-gold bg-gradient-hero p-8 sm:p-12 text-center shadow-glow">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/30 blur-3xl" />
          <span className="relative inline-block rounded-full bg-gold px-4 py-1 text-xs font-black tracking-widest text-background">🔥 OFERTA ESPECIAL</span>
          <h2 className="relative mt-5 font-display text-3xl font-bold sm:text-4xl">Hoje você tem acesso a tudo por apenas:</h2>
          <div className="relative mt-8 flex items-end justify-center gap-2">
            <span className="font-display text-2xl text-lilac">R$</span>
            <span className="font-display text-7xl font-black text-gradient-gold sm:text-8xl">14,90</span>
          </div>
          <p className="relative mt-3 text-sm text-lilac">⚠️ Este valor pode mudar a qualquer momento</p>
          <div className="relative mt-8 flex justify-center">
            <CTA>QUERO ACESSO AGORA</CTA>
          </div>
          <div className="relative mt-6 flex flex-wrap justify-center gap-4 text-sm text-lilac">
            <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-gold" /> Acesso imediato</span>
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-gold" /> Pagamento seguro</span>
            <span className="flex items-center gap-1"><Crown className="h-4 w-4 text-gold" /> Bônus inclusos</span>
          </div>
        </div>
      </Section>

      {/* DECISÃO */}
      <Section>
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">🚀 Agora é <span className="text-gradient-gold">sua decisão</span></h2>
        <p className="mt-3 text-center text-lilac">Daqui a 7 dias, você pode estar:</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/60 p-8">
            <span className="text-3xl">❌</span>
            <h3 className="mt-3 font-display text-xl font-bold text-muted-foreground">No mesmo lugar</h3>
            <p className="mt-2 text-muted-foreground">Sem clientes, sem renda, esperando que algo aconteça.</p>
          </div>
          <div className="rounded-2xl border-2 border-gold bg-gradient-purple p-8 shadow-gold">
            <span className="text-3xl">✅</span>
            <h3 className="mt-3 font-display text-xl font-bold">Com seus primeiros clientes</h3>
            <p className="mt-2 text-foreground/90">Faturando, com agenda lotada e construindo sua liberdade.</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <CTA>COMEÇAR AGORA POR R$14,90</CTA>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Esse material é para quem quer agir. Se você está esperando resultado sem fazer nada, isso não é para você.
        </p>
      </Section>

      <footer className="border-t border-border bg-background py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Método Agenda Lotada — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}