import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { 
  User, 
  Bot, 
  Clock, 
  AlertCircle, 
  TrendingDown, 
  Sparkles, 
  Network, 
  Mail, 
  Brain, 
  Plane, 
  BadgeCheck, 
  Search, 
  Repeat, 
  MailCheck, 
  RefreshCw, 
  Languages, 
  CheckCircle2, 
  TrendingUp, 
  Globe 
} from "lucide-react";

interface LandingPageProps {
  onOpenDemo: () => void;
}

export default function LandingPage({ onOpenDemo }: LandingPageProps) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main id="home" className="hero-gradient pt-32">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tighter text-on-surface">
            Your AI Ticketing Agent for Travel Agencies
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-xl">
            Automate flight search, quoting, and booking in seconds — reduce costs and serve clients 24/7 with the power of Editorial Intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenDemo}
              className="monolith-button px-8 py-4 rounded-lg text-white font-headline font-bold text-lg"
            >
              Request Demo
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="relative bg-surface-bright/60 backdrop-blur-xl border border-outline-variant/20 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 p-4 border-b border-outline-variant/20 bg-surface-container-low/50">
              <div className="w-3 h-3 rounded-full bg-error/50"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
              <div className="w-3 h-3 rounded-full bg-primary/50"></div>
              <div className="ml-4 text-xs font-label text-on-surface-variant uppercase tracking-widest">volo-ai-agent-v1.0</div>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-surface-container-high rounded-full px-4 py-2 text-sm text-on-surface-variant">
                  Need 2 tickets Cairo to London, July 15-22, Business Class.
                </div>
              </div>
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
                <div className="bg-primary-container/20 border border-primary/20 rounded-2xl p-4 text-sm text-on-surface max-w-[80%]">
                  <p className="mb-2">Searching GDS (Amadeus/Sabre)... Found 3 optimal matches.</p>
                  <div className="bg-surface-container-low/50 rounded-lg p-3 border border-outline-variant/10">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-primary">EgyptAir MS777</span>
                      <span className="text-tertiary font-mono">$1,420</span>
                    </div>
                    <div className="text-xs text-on-surface-variant">Direct • 09:15 AM - 13:45 PM</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <motion.div 
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-[10px] text-secondary uppercase tracking-[0.2em]"
                >
                  AI Thinking...
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES SECTION: Bento Grid */}
      <section id="features" className="py-32 bg-surface-container-low scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface mb-4">Engineered for Travel Excellence</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Proprietary AI models fine-tuned for the travel industry's most complex workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 p-8 bg-surface-container-high rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-bright/40"
            >
              <Search className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">AI-powered flight search</h3>
              <p className="text-on-surface-variant leading-relaxed">Sophisticated algorithms that don't just find flights, but optimize for connection times, carrier preferences, and agency commissions simultaneously.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 p-8 bg-surface-container rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-bright/40"
            >
              <Repeat className="w-8 h-8 text-secondary mb-6" />
              <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Real-time GDS Integration</h3>
              <p className="text-on-surface-variant text-sm">Native support for Amadeus, Sabre, and Travelport. No manual entry required.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 p-8 bg-surface-container rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-bright/40"
            >
              <MailCheck className="w-8 h-8 text-tertiary mb-6" />
              <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Automated Responses</h3>
              <p className="text-on-surface-variant text-sm">Drafts professional, multi-option quotes and sends them to clients in seconds.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 p-8 bg-surface-container-highest rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-bright/40"
            >
              <RefreshCw className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-headline font-bold text-on-surface mb-4">24/7 Availability</h3>
              <p className="text-on-surface-variant text-sm">Your agency never closes. AI handles requests while your team sleeps.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 p-8 bg-surface-container rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-bright/40"
            >
              <Languages className="w-8 h-8 text-secondary mb-6" />
              <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Multi-language</h3>
              <p className="text-on-surface-variant text-sm">Support for Arabic, English, French, and more to serve global clients.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solutions" className="py-32 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-bold tracking-widest uppercase">The Solution</div>
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter text-on-surface">Meet Volo Ai</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                An AI-powered system that reads requests from email or chat, finds flights across global systems, compares options, and completes bookings automatically.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Natural Language Processing</h4>
                    <p className="text-on-surface-variant text-sm">Reads complex client emails and extracts itineraries instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                    <Network className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Direct GDS Connection</h4>
                    <p className="text-on-surface-variant text-sm">Lives inside Amadeus and Sabre for real-time inventory access.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/20 shadow-xl">
                  <Mail className="w-6 h-6 text-primary mb-4" />
                  <div className="text-xs text-on-surface-variant uppercase mb-2">Step 1</div>
                  <div className="font-bold text-on-surface">Incoming Request</div>
                </div>
                <div className="p-6 bg-primary-container rounded-xl border border-primary/20 shadow-xl mt-8">
                  <Brain className="w-6 h-6 text-white mb-4" />
                  <div className="text-xs text-white/70 uppercase mb-2">Step 2</div>
                  <div className="font-bold text-white">AI Processing</div>
                </div>
                <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/20 shadow-xl -mt-4">
                  <Plane className="w-6 h-6 text-secondary mb-4" />
                  <div className="text-xs text-on-surface-variant uppercase mb-2">Step 3</div>
                  <div className="font-bold text-on-surface">Flight Options</div>
                </div>
                <div className="p-6 bg-surface-container-highest rounded-xl border border-tertiary/20 shadow-xl mt-4">
                  <BadgeCheck className="w-6 h-6 text-tertiary mb-4" />
                  <div className="text-xs text-on-surface-variant uppercase mb-2">Step 4</div>
                  <div className="font-bold text-on-surface">Instant Booking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section id="outcome" className="py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-8">
                A Digital Employee for Your Agency
              </h2>
              <ul className="space-y-6">
                {[
                  "Reduce operational costs by automating repetitive tasks",
                  "Increase booking speed to capture more \"hot\" leads",
                  "Scale your volume without hiring more staff"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-lg text-on-surface-variant font-light">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-10 bg-surface-container-high rounded-xl border border-primary/20 text-center">
                <div className="text-5xl font-extrabold font-headline text-primary mb-2">70%</div>
                <div className="text-on-surface-variant text-sm uppercase tracking-widest">Time Saved</div>
              </div>
              <div className="p-10 bg-surface-container-high rounded-xl border border-secondary/20 text-center">
                <div className="text-5xl font-extrabold font-headline text-secondary mb-2">&lt; 2m</div>
                <div className="text-on-surface-variant text-sm uppercase tracking-widest">Response Time</div>
              </div>
              <div className="col-span-2 p-10 bg-gradient-to-br from-primary-container/20 to-secondary-container/20 rounded-xl border border-outline-variant/20 flex items-center justify-between">
                <div className="font-headline font-bold text-xl text-on-surface">ROI in first 30 days</div>
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / MARKET SECTION */}
      <section className="py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-center">
              <div className="text-on-surface font-headline font-bold mb-1">Egypt & MENA</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">Primary Market focus</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Globe className="w-8 h-8 mb-2 text-on-surface" />
              <div className="text-on-surface font-headline font-bold">Global Distribution Systems</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">Amadeus / Sabre / Travelport</div>
            </div>
            <div className="text-center">
              <div className="text-on-surface font-headline font-bold mb-1">Travel Tech 2024</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">Built for Future Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface mb-10 leading-tight">
            Transform Your Travel Agency with AI
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenDemo}
            className="monolith-button px-12 py-6 rounded-lg text-white font-headline font-bold text-xl shadow-[0_20px_50px_rgba(24,85,243,0.3)]"
          >
            Book a Demo
          </motion.button>
          <p className="mt-8 text-on-surface-variant font-light">Join the leading agencies in MENA already using Volo Ai.</p>
        </div>
      </section>
    </main>
  );
}
