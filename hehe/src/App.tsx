import React from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Camera,
  Code2,
  Database,
  Github,
  Globe,
  HeartHandshake,
  Leaf,
  MapPin,
  Server,
  Smartphone,
  Zap,
  TrendingUp,
  Package,
  ShieldCheck,
  ChevronRight,
  Monitor
} from 'lucide-react';

export default function App() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none noise-overlay" />
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'radial-gradient(rgba(120, 120, 108, 0.07) 1px, transparent 1px)', 
          backgroundSize: '20px 20px', 
          opacity: 0.5
        }} 
      />

      <div className="min-h-screen relative overflow-hidden font-sans text-sustain-text bg-sustain-bg flex flex-col">
        {/* Ambient Background Blobs */}
        <div 
          className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-sustain-moss/5 blur-3xl -z-10 organic-blob-1" 
        />
        <div 
          className="absolute bottom-[-150px] left-[-50px] w-[600px] h-[600px] bg-sustain-clay/5 blur-3xl -z-10 organic-blob-2" 
        />

        <div className="w-full max-w-7xl mx-auto flex flex-col flex-1">
          {/* Header */}
          <header className="relative z-10 px-6 md:px-12 py-8 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sustain-moss flex items-center justify-center organic-blob-1">
                <Leaf className="w-5 h-5 text-sustain-pale" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">Project Sustain</span>
            </div>
            <nav className="hidden md:flex bg-white/40 backdrop-blur-md border border-sustain-timber/50 px-6 py-2 rounded-full gap-8 text-sm font-medium">
              <a href="#overview" className="text-sustain-moss font-semibold cursor-pointer">Overview</a>
              <a href="#docs" className="hover:text-sustain-moss text-sustain-muted cursor-pointer transition-colors">Documentation</a>
              <a href="#stats" className="hover:text-sustain-moss text-sustain-muted cursor-pointer transition-colors">Analytics</a>
            </nav>
          </header>

          {/* Main Content Grid */}
          <main id="overview" className="relative z-10 flex-1 grid lg:grid-cols-12 gap-12 px-6 md:px-12 pb-12 w-full">
            
            {/* Left Column: Hero */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-sustain-clay">
                    Community Donation
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[0.9] text-sustain-text">
                  Rescue food, <br className="hidden lg:block"/> <span className="text-sustain-moss italic">nourish naturally.</span>
                </h1>
                <p className="text-lg leading-relaxed text-sustain-muted max-w-sm mt-4">
                  Connects individuals with surplus resources to those in need. Built with a wabi-sabi philosophy—embracing community, connection, and real-world impact.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              >
                <a 
                  href="https://sustain-chi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto h-14 px-10 bg-sustain-moss text-sustain-pale rounded-full flex items-center justify-center gap-2 font-bold shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)] hover:scale-105 transition-transform duration-300"
                >
                  <Globe className="w-5 h-5" />
                  Live App
                </a>
                <a 
                  href="https://github.com/ajaykumarreddy-k/Sustain"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto h-14 px-8 border-2 border-sustain-clay text-sustain-clay rounded-full flex items-center justify-center gap-2 font-bold hover:scale-105 transition-transform duration-300"
                >
                  <Github className="w-5 h-5" />
                  GitHub Repo
                </a>
              </motion.div>
            </div>

            {/* Right Column: Features Grid */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 items-start">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-sustain-card border border-sustain-timber/50 p-8 shadow-soft flex flex-col gap-6 h-full"
                style={{ borderRadius: '4rem 2rem 2rem 2rem' }}
              >
                <div className="w-14 h-14 bg-sustain-moss/10 rounded-2xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-sustain-moss" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">AI Quality Snap</h3>
                  <p className="text-sm text-sustain-muted leading-relaxed">
                    Uses Google <b>Gemini 1.5 Pro</b> to instantly verify food quality from uploaded images.
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 bg-sustain-sand/40 rounded-full text-[10px] font-bold uppercase tracking-wider text-sustain-text">Gemini Vision</span>
                  <span className="px-3 py-1 bg-sustain-sand/40 rounded-full text-[10px] font-bold uppercase tracking-wider text-sustain-text">Automated</span>
                </div>
              </motion.div>

              <div className="grid grid-rows-2 gap-6 h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-sustain-card border border-sustain-timber/50 p-6 flex flex-col justify-center items-center text-center h-full hover:border-sustain-moss/30 transition-colors"
                  style={{ borderRadius: '2rem 2rem 5rem 2rem' }}
                >
                  <MapPin className="w-10 h-10 text-sustain-clay mb-3" />
                  <div className="text-2xl font-serif font-bold text-sustain-text mb-1">Local Discovery</div>
                  <p className="text-[10px] text-sustain-muted font-bold uppercase tracking-wider">Interactive Nominatim Map</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-sustain-moss p-6 text-sustain-pale flex flex-col justify-center h-full relative overflow-hidden"
                  style={{ borderRadius: '2rem 4rem 2rem 3rem' }}
                >
                  <HeartHandshake className="w-8 h-8 mb-3 text-sustain-pale opacity-80" />
                  <h3 className="font-serif text-xl font-bold mb-2">Secure Handover</h3>
                  <p className="text-xs opacity-90 leading-relaxed max-w-[200px]">
                    QR codes and 6-digit tokens ensure safe, verified pickups between donors and receivers.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-2 bg-sustain-card border border-sustain-timber/50 p-8 flex flex-col sm:flex-row items-center gap-8 lg:gap-12"
                style={{ borderRadius: '2rem 2rem 2rem 4rem' }}
              >
                <div className="flex-1 space-y-5">
                  <h3 className="font-serif text-2xl font-semibold">Hybrid Architecture</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-sustain-moss/10 flex items-center justify-center">
                        <Smartphone className="w-3 h-3 text-sustain-moss" />
                      </div>
                      <span className="text-[10px] font-bold text-sustain-muted">React 19 UI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-sustain-moss/10 flex items-center justify-center">
                        <Server className="w-3 h-3 text-sustain-moss" />
                      </div>
                      <span className="text-[10px] font-bold text-sustain-muted">FastAPI Python</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-sustain-moss/10 flex items-center justify-center">
                        <Database className="w-3 h-3 text-sustain-moss" />
                      </div>
                      <span className="text-[10px] font-bold text-sustain-muted">Supabase DB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-sustain-moss/10 flex items-center justify-center">
                        <Brain className="w-3 h-3 text-sustain-moss" />
                      </div>
                      <span className="text-[10px] font-bold text-sustain-muted">Gemini Vision</span>
                    </div>
                  </div>
                </div>
                <div className="w-32 h-32 bg-sustain-sand relative overflow-hidden flex-shrink-0 organic-blob-3 shadow-inner">
                   <div className="absolute inset-0 flex items-center justify-center font-serif italic text-sustain-clay text-xl z-20">Sustain</div>
                </div>
              </motion.div>
            </div>
          </main>

          <section className="relative z-10 px-6 md:px-12 py-16 space-y-24">
            
            <div className="space-y-12">
              <div className="text-center space-y-3">
                <h2 className="text-4xl font-serif font-bold">The Cycle of Sustain</h2>
                <p className="text-sustain-muted max-w-lg mx-auto">From surplus to sustenance in four simple steps.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: Package, title: "List Resource", desc: "Donors post surplus food with AI quality verification." },
                  { icon: Globe, title: "Discovery", desc: "Nearby receivers find available food on the interactive map." },
                  { icon: Zap, title: "Claim", desc: "Instant reservation with real-time status updates." },
                  { icon: ShieldCheck, title: "Verify", desc: "Secure handover via QR code and 6-digit verification tokens." }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex flex-col items-center text-center space-y-4 p-6 bg-sustain-card border border-sustain-timber/40 rounded-3xl"
                  >
                    <div className="w-12 h-12 bg-sustain-sand rounded-full flex items-center justify-center text-sustain-moss">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-lg">{item.title}</h4>
                    <p className="text-xs text-sustain-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div 
              id="stats"
              className="bg-sustain-bark text-sustain-pale rounded-[3rem] p-12 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-sustain-moss/20 blur-3xl organic-blob-4 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
                {[
                  { label: "Meals Rescued", value: "0", icon: Leaf },
                  { label: "Active Donors", value: "0", icon: HeartHandshake },
                  { label: "Waste Prevented", value: "0kg", icon: TrendingUp }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-sustain-clay" />
                    <div className="text-5xl font-serif font-bold">{stat.value}</div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif font-bold">Resilient Stack</h2>
                  <p className="text-sustain-muted">A modern hybrid architecture designed for reliability and scale.</p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "Frontend Mobile-First", tech: "React 19 + Ionic Capacitor", desc: "PWA delivery with native bridge for cross-platform utility." },
                    { title: "High-Performance API", tech: "FastAPI (Python)", desc: "Asynchronous processing with Pydantic for strict data integrity." },
                    { title: "Intelligent Layer", tech: "Gemini 1.5 Pro Vision", desc: "Automated vision-based quality checks for food safety." },
                    { title: "Unified Database", tech: "Supabase (PostgreSQL)", desc: "Real-time subscriptions and secure RLS-driven data access." }
                  ].map((stack, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sustain-clay flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm">{stack.title} <span className="text-sustain-moss ml-2">— {stack.tech}</span></h4>
                        <p className="text-xs text-sustain-muted mt-1">{stack.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-sustain-sand/30 rounded-[4rem] organic-blob-3 flex items-center justify-center p-8 border border-sustain-timber">
                  <div className="w-full aspect-video bg-sustain-card rounded-2xl shadow-soft border border-sustain-timber/50 p-6 space-y-4 relative overflow-hidden">
                    <div className="flex items-center justify-between border-b border-sustain-timber pb-3">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
                      </div>
                      <div className="text-[10px] font-mono text-sustain-muted">api/foods/verify-quality</div>
                    </div>
                    <div className="font-mono text-[11px] space-y-2 opacity-80">
                      <div className="text-sustain-moss">{"{"}</div>
                      <div className="pl-4">"status": "success",</div>
                      <div className="pl-4">"classification": "GOOD",</div>
                      <div className="pl-4">"confidence": 0.98,</div>
                      <div className="pl-4">"gemini_analysis": "Food appears fresh and safe."</div>
                      <div className="text-sustain-moss">{"}"}</div>
                    </div>
                    <div className="absolute bottom-4 right-4 animate-float">
                      <ShieldCheck className="w-12 h-12 text-sustain-moss opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              id="docs"
              className="bg-sustain-clay/5 border border-sustain-clay/20 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="space-y-4 max-w-xl">
                <h3 className="text-2xl font-serif font-bold italic">Explore the blueprint.</h3>
                <p className="text-sm text-sustain-muted leading-relaxed">
                  Our documentation covers everything from Supabase RLS policies to the FastAPI router structure. Built with transparency for the open-source community.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-sustain-clay">
                    <Code2 className="w-4 h-4" /> API Docs
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-sustain-clay">
                    <Monitor className="w-4 h-4" /> System Wiki
                  </div>
                </div>
              </div>
              <a 
                href="https://github.com/ajaykumarreddy-k/Sustain"
                target="_blank"
                rel="noreferrer"
                className="group h-14 pl-8 pr-6 bg-sustain-clay text-sustain-pale rounded-full flex items-center gap-4 font-bold transition-all hover:gap-6"
              >
                View Repository
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </section>

          <footer className="relative z-10 px-6 md:px-12 py-8 border-t border-sustain-timber/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold tracking-widest text-sustain-muted uppercase">
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <span>© {new Date().getFullYear()} Sustain Food Donation App</span>
              <span className="text-[9px] opacity-70 tracking-normal normal-case font-medium -mt-1">
                Made by Ajay &bull; Designed by Ajay and Team
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="hover:text-sustain-moss cursor-pointer transition-colors">Internal Wiki</span>
              <span className="text-sustain-moss">System Status: Operational</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
