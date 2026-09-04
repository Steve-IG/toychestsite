import Image from "next/image";
import Link from "next/link";
import { FeatureCard, GlassCard, MetricCard, Pill } from "@/components/cards";
import { GlowOrb, Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";

const contactHref =
  "mailto:info@toychest.ai?subject=ToyChest.AI%20Partnership%20Inquiry";

const proofMetrics = [
  {
    value: "Gen Alpha is screen-first",
    title: "Video games dominate engagement",
    body: "Physical toys struggle to compete for attention.",
  },
  {
    value: "Toys-To-Life was huge",
    title: "The toys + games model was proven",
    body: "Toys-to-Life was a billion-dollar category because kids loved using toys to unlock game content.",
  },
  {
    value: "Hardware sank it",
    title: "Special toys meant inventory risk",
    body: "Previous versions required toys with NFC chips and software that required NFC reader base stations.  What if you could eliminate the need for special hardware?",
  },
];

const platformFeatures = [
  {
    title: "Toy Recognition Engine",
    body: "Recognizes physical toys with a smart device camera. Verifies liveness to prevent fraud. No bases. No chips. No extra hardware.",
    media: (
      <div className="overflow-hidden rounded-3xl border border-[#17171b]/8 bg-white/70">
        <Image
          src="/assets/Media/Timeline%201_01_00_32_11.jpg"
          alt="Toy recognition scanning flow shown on a tablet"
          width={1200}
          height={675}
          className="h-60 w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Game SDK",
    body: "Designed for Unity and Unreal so teams can plug ToyChest into game reward systems fast.",
    media: (
      <div className="grid h-60 grid-cols-2 gap-3 rounded-3xl border border-[#17171b]/8 bg-white/70 p-4">
        <div className="flex items-center justify-center rounded-3xl border border-[#17171b]/8 bg-[#f8f4ec] p-4">
          <Image
            src="/assets/Media/Unity-Logo%20(1).png"
            alt="Unity logo"
            width={320}
            height={180}
            className="max-h-25 w-auto object-contain"
          />
        </div>
        <div className="flex items-center justify-center rounded-3xl border border-[#17171b]/8 bg-[#f8f4ec] p-4">
          <Image
            src="/assets/Media/Unreal_Engine_logo.png"
            alt="Unreal Engine logo"
            width={320}
            height={180}
            className="max-h-25 w-auto object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Scanner App",
    body: "Makes toy scanning work for console, PC, and companion-led experiences.",
    media: (
      <div className="overflow-hidden rounded-3xl border border-[#17171b]/8 bg-white/70">
        <Image
          src="/assets/Media/Scanner%20App.png"
          alt="Scanner app shown on a mobile device"
          width={1200}
          height={1200}
          className="h-60 w-full object-cover object-top"
        />
      </div>
    ),
  },
  {
    title: "Admin Portal",
    body: "Manage toy-to-reward mapping and activation rules from one clean control layer.",
    media: (
      <div className="overflow-hidden rounded-3xl border border-[#17171b]/8 bg-white/70">
        <Image
          src="/assets/Media/image%20(2).png"
          alt="ToyChest admin portal interface"
          width={1200}
          height={1200}
          className="h-60 w-full object-cover object-top"
        />
      </div>
    ),
  },
];

const buildIdeas = [
  "Characters",
  "Skins",
  "Vehicles",
  "Levels",
  "Game Modes",
  "Power boosts",
  "Virtual Currency",
  "XP",
];

const partnerModels = [
  {
    title: "Middleware licensing",
    body: "Studios integrate ToyChest and own the player-facing game experience.",
    image: "/assets/Media/noun-middleware-5794570%20(1).png",
    imageAlt: "Middleware licensing icon",
  },
  {
    title: "Co-development",
    body: "We build the toy-to-game loop, content logic, and product experience together.",
    image: "/assets/Media/noun-handshake-8309360%20(1).png",
    imageAlt: "Co-development handshake icon",
  },
  {
    title: "Full game development",
    body: "We build a full toys-to-life experience around your toys, brand, and IP.",
    image: "/assets/Media/noun-game-development-8192188%20(1).png",
    imageAlt: "Full game development icon",
  },
];

function CTAButton({ href, children, secondary = false, large = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition duration-300 ${
        large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      } ${
        secondary
          ? "border border-white/20 bg-white/10 text-white shadow-[0_16px_45px_rgba(23,23,27,0.12)] hover:bg-white/16"
          : "bg-[#2c7a7b] text-white shadow-[0_16px_45px_rgba(44,122,123,0.32)] hover:-translate-y-0.5 hover:bg-[#215f60]"
      }`}
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#efe8db] text-[#17171b]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(44,122,123,0.16),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(213,155,85,0.14),transparent_18%),linear-gradient(180deg,#f4ede0_0%,#efe8db_38%,#eadfcb_100%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17171b]/8 bg-[#efe8db] shadow-[0_10px_30px_rgba(23,23,27,0.08)]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link href="#top" className="flex items-center">
            <Image
              src="/assets/Media/ToyChest%20logo%20horizontal%20(1).png"
              alt="ToyChest.AI"
              width={412}
              height={83}
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-lg font-medium text-black md:flex">
            <Link href="#why-toychest" className="transition hover:text-black">
              Why ToyChest.AI
            </Link>
            <Link href="#how-it-works" className="transition hover:text-black">
              How It Works
            </Link>
            <Link href="#what-is-possible" className="transition hover:text-black">
              What&apos;s Possible
            </Link>
            <Link href="#how-we-partner" className="transition hover:text-black">
              How We Partner
            </Link>
          </nav>

          <CTAButton href={contactHref}>Contact Us</CTAButton>
        </div>
      </header>

      <section id="top" className="relative isolate min-h-[88svh]">
        <div className="absolute inset-x-0 top-0 h-[82vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/Media/Timeline%201_01_00_32_11.jpg"
            className="h-full w-full scale-[1.08] object-cover object-center"
          >
            <source src="/assets/Media/ToyChest%20Teaser.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,27,0.5),rgba(23,23,27,0.74)_52%,rgba(23,23,27,0.88)_78%,rgba(23,23,27,0.94))]" />
        </div>

        <GlowOrb className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[#2c7a7b]/20 blur-3xl" />
        <GlowOrb className="absolute right-[8%] top-40 h-64 w-64 rounded-full bg-[#d59b55]/18 blur-3xl" />

        <div className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl items-center justify-center px-6 pb-18 pt-28 lg:px-8 lg:pb-24">
          <div className="w-full">
            <Reveal className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <h1 className="max-w-5xl text-4xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-[5.2rem] lg:leading-[0.92]">
                Toys Should Do More
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-white sm:text-xl">
                What if toys could unlock characters or grant rewards inside video games?
                
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href={contactHref} large>
                  Contact Us
                </CTAButton>
                <CTAButton href="#how-it-works" secondary large>
                  See how it works
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell
        id="why-toychest"
        eyebrow="Why ToyChest.AI"
        title="Kids still love toys. Play just moved to screens."
        description="ToyChest brings those worlds back together. The model has already been proven. The part that needed solving was the hardware."
        className="pt-16 sm:pt-20"
      >
        <div className="mt-10">
          <Reveal className="grid gap-6 md:grid-cols-3" amount={0.12}>
            {proofMetrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        id="how-it-works"
        eyebrow="How It Works"
        title="Computer vision that turns toys into game content."
        description="Keep it simple: scan the toy, recognize the toy, unlock the content.  Works with any toy and any game.  No special hardware required."
      >
        <div className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {platformFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <FeatureCard
                  title={feature.title}
                  body={feature.body}
                  media={feature.media}
                  layout={feature.layout}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="what-is-possible"
        eyebrow="What&apos;s possible"
        title="Make your IP more collectible, more playable, and more connected."
        description="Start imagining your own universe of connected experiences."
      >
        <Reveal className="mt-12">
          <GlassCard className="p-8">
            <div className="flex flex-wrap gap-3">
              {buildIdeas.map((idea) => (
                <Pill key={idea}>{idea}</Pill>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#17171b] sm:text-3xl">
                Works with New or Existing Games
              </h3>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#17171b]/8 bg-[#f4ede0] p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#17171b]">
                  Existing Games
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#4d4a46]">
                  Uses the Scanner App to scan toys. Integrates with the game&apos;s existing reward system. Manage toy-game reward map through the Admin Portal.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#17171b]/8 bg-[#f4ede0] p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#17171b]">
                  New Games
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#4d4a46]">
                  Design the scan itself as a hero mechanic and build a new
                  toys-to-life experience without old hardware constraints. Easy SDK integration means rapid development.
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </SectionShell>

      <SectionShell
        id="how-we-partner"
        eyebrow="How we partner"
        title="Flexible partnership models for toy brands, studios, and IP holders."
        description="We can license the technology, build together, or deliver a full game experience to your desired specs."
      >
        <div className="mt-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {partnerModels.map((model, index) => (
              <Reveal key={model.title} delay={index * 0.06}>
                <GlassCard className="h-full p-7">
                  <div className="flex h-32 items-center justify-center">
                    <Image
                      src={model.image}
                      alt={model.imageAlt}
                      width={160}
                      height={160}
                      className="max-h-28 w-auto object-contain"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#17171b]">
                      {model.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#4d4a46]">
                      {model.body}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <section id="contact" className="pb-24 pt-8 sm:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#17171b]/10 bg-[linear-gradient(135deg,rgba(44,122,123,0.1),rgba(255,255,255,0.75)_35%,rgba(244,237,224,0.96))] p-8 shadow-[0_28px_90px_rgba(23,23,27,0.12)] sm:p-12">
              <GlowOrb className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-[#d59b55]/16 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[#17171b] sm:text-6xl">
                    Launch the next generation of Toys-to-Life.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-[#4d4a46] sm:text-lg">
                    We are looking for toy manufacturers, game studios, and IP
                    holders who want to connect their physical toys
                    with digital games.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Pill>Toy manufacturers</Pill>
                    <Pill>Game studios</Pill>
                    <Pill>IP holders</Pill>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:min-w-[240px]">
                  <CTAButton href={contactHref}>Contact Us</CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
