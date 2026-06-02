import { useState, useEffect, useRef } from "react";
import {
  Phone, MapPin, Clock, Mail, Menu, X, ChevronDown,
  Ambulance, Snowflake, BookOpen, Package, CheckCircle2,
  Users, Shield, Star, ArrowRight, Heart, Home,
  Wrench, Image, MessageCircle,
} from "lucide-react";
import { FaFacebook,FaInstagram, FaYoutube } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "About", href: "#about", icon: Users },
  { label: "Gallery", href: "#gallery", icon: Image },
  { label: "Contact", href: "#contact", icon: MessageCircle },
];

const SERVICES = [
  {
    id: 1,
    title: "Antim Sanskar Samagri",
    subtitle: "Complete Last Rites Essentials",
    desc: "We provide complete Antim Sanskar Samagri including all rituals materials, flowers, incense, sacred items, and everything required for a dignified and traditional Hindu funeral ceremony.",
    features: ["Pooja Samagri Kit", "Floral Arrangements", "Sacred Wood & Ghee", "Ceremonial Items"],
    color: "from-amber-600 to-amber-400",
    accent: "#0e3271",
    bg: "bg-blue-50",
    border: "border-blue-200",
    image: "/img2.jpeg",
  },
  {
    id: 2,
    title: "Dead Body Freezer Box",
    subtitle: "Dignified Preservation Services",
    desc: "State-of-the-art freezer box services for respectful preservation of the deceased. Available 24/7 with immediate response. Hygienic, modern equipment with compassionate handling.",
    features: ["24/7 Availability", "Modern Equipment", "Hygienic Standards", "Doorstep Delivery"],
    color: "from-blue-700 to-blue-500",
    accent: "#0e3271",
    bg: "bg-blue-50",
    border: "border-blue-200",
    image: "/img3.jpeg",
  },
  {
    id: 3,
    title: "Ambulance Service",
    subtitle: "Swift & Compassionate Transport",
    desc: "Dedicated ambulance services for safe and dignified transportation of the deceased. Our fleet is available round the clock across all areas, ensuring timely and respectful service.",
    features: ["24/7 Fleet Ready", "GPS Tracked", "All Areas Covered", "Trained Staff"],
    color: "from-red-700 to-red-500",
    accent: "#be252c",
    bg: "bg-red-50",
    border: "border-red-200",
    image: "/img4.jpeg",
  },
  {
    id: 4,
    title: "Pandit Ji",
    subtitle: "Vedic Ritual Specialists",
    desc: "Experienced and knowledgeable Pandits available for performing all last rites, Shanti Path, Asthi Visarjan, and other sacred rituals as per Vedic traditions with complete devotion.",
    features: ["Expert Pandits", "All Rituals", "Shanti Path", "Asthi Visarjan"],
    color: "from-amber-700 to-amber-500",
    accent: "#0e3271",
    bg: "bg-amber-50",
    border: "border-amber-200",
    image: "/img5.jpeg",
  },
];

const STATS = [
  { number: "5000+", label: "Families Served", Icon: Users },
  { number: "24/7", label: "Service Available", Icon: Clock },
  { number: "15+", label: "Years of Trust", Icon: Shield },
  { number: "50+", label: "Expert Staff", Icon: Star },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    text: "In our most difficult time, Mangal Services provided everything with utmost care and dignity. Truly grateful for their compassionate support.",
    location: "Noida",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    text: "The Pandit Ji arranged by them was very knowledgeable. All rituals were performed perfectly. The freezer box service was prompt and professional.",
    location: "Greater Noida",
    rating: 5,
  },
  {
    name: "Amit Verma",
    text: "Their ambulance reached within 30 minutes. The entire team was so supportive during our grief. Highly recommend Mangal Services.",
    location: "Delhi NCR",
    rating: 5,
  },
];

const CONTACT_INFO = [
  { Icon: Phone, label: "24/7 Helpline", value: "+91 99999 99999 / +91 98888 88888" },
  { Icon: MapPin, label: "Service Area", value: "Delhi, Noida, Greater Noida, Ghaziabad & NCR" },
  { Icon: Clock, label: "Availability", value: "24 Hours × 7 Days × 365 Days" },
  { Icon: Mail, label: "Email", value: "info@mangalservices.com" },
];

function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children, className = "" }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function MangalService() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white text-stone-800 min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
        * { font-family: 'Crimson Pro', Georgia, serif; }
        .font-display { font-family: 'Cinzel', serif; }
        .bg-sacred { background: radial-gradient(ellipse at 30% 0%, rgba(14,50,113,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(190,37,44,0.05) 0%, transparent 60%), #f8faff; }
        .om-bg { background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' dominant-baseline='middle' font-size='60' fill='rgba(14,50,113,0.04)' font-family='serif'%3E🕉%3C/text%3E%3C/svg%3E"); background-size: 120px; }
        .text-primary { color: #0e3271; }
        .text-accent { color: #be252c; }
        .bg-primary { background-color: #0e3271; }
        .bg-accent { background-color: #be252c; }
        .border-primary { border-color: #0e3271; }
        .border-accent { border-color: #be252c; }
        .divider { width: 60px; height: 3px; background: linear-gradient(90deg, #0e3271, #be252c); margin: 0 auto; border-radius: 2px; }
        .divider-left { width: 60px; height: 3px; background: linear-gradient(90deg, #0e3271, #be252c); border-radius: 2px; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; background: #f0f4ff; }
        ::-webkit-scrollbar-thumb { background: #0e3271; border-radius: 3px; }
        .hero-overlay { background: linear-gradient(to bottom, rgba(14,50,113,0.82) 0%, rgba(14,50,113,0.65) 50%, rgba(14,50,113,0.90) 100%); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(14,50,113,0.15); }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: #be252c; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .btn-primary { background: #0e3271; color: white; transition: all 0.3s; }
        .btn-primary:hover { background: #0a2558; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(14,50,113,0.35); }
        .btn-accent { background: #be252c; color: white; transition: all 0.3s; }
        .btn-accent:hover { background: #9e1e24; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(190,37,44,0.35); }
        .btn-outline { border: 2px solid #0e3271; color: #0e3271; transition: all 0.3s; background: transparent; }
        .btn-outline:hover { background: #0e3271; color: white; }
        .stat-card { background: white; border: 1px solid rgba(14,50,113,0.12); border-radius: 8px; }
        .process-num { font-family: 'Cinzel', serif; font-size: 4rem; font-weight: 900; color: rgba(14,50,113,0.10); line-height: 1; }
        .floating-call { animation: pulse-ring 2s infinite; }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(190,37,44,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(190,37,44,0); }
          100% { box-shadow: 0 0 0 0 rgba(190,37,44,0); }
        }
        .gallery-item .gallery-overlay {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-item img {
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.07);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-blue-100" : "bg-white/90 backdrop-blur-sm py-1"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Mangal Services Logo" className="w-30 h-16 object-contain" />
          </a>
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link text-stone-600 hover:text-primary transition-colors duration-200 text-sm tracking-wide font-display font-bold uppercase">
                {l.label}
              </a>
            ))}
            <a href="tel:+919999999999" className="btn-accent font-display font-bold px-5 py-2.5 text-sm tracking-wider rounded-lg flex items-center gap-2 shadow-md">
              <Phone size={15} />
              Call Now
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-primary p-2 rounded-lg hover:bg-blue-50 transition-colors">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-blue-100 px-6 py-4 flex flex-col gap-3 shadow-xl">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-stone-600 hover:text-primary transition-colors font-display font-bold uppercase tracking-wider text-sm py-2 border-b border-stone-100">
                {l.label}
              </a>
            ))}
            <a href="tel:+919999999999" className="btn-accent font-display font-bold text-center px-5 py-3 text-sm tracking-wider mt-2 rounded-lg flex items-center justify-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1742016102687-46ee5f824f49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Peaceful journey"
            className="w-full h-full object-cover"
          />
<div className="absolute inset-0 bg-black/70"></div>          <div className="absolute inset-0 om-bg opacity-20"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-30">
      
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 text-white drop-shadow-lg">
          
          
            Mangal  Funeral Services
          </h1>
          <p className="text-white text-lg sm:text-xl mt-6 mb-4 italic font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
            "Antim Yatra mein aapke saath — Har pal, Har kadam"
          </p>
          <p className="text-white/90 text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Providing compassionate and complete funeral, ambulance, and last rites services across Delhi NCR. Serving families with dignity and devotion since over 15 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919999999999" className="btn-accent inline-flex items-center justify-center gap-2 font-display font-bold px-8 py-4 text-sm tracking-widest rounded-lg shadow-2xl">
              <Phone size={18} /> CALL 24/7 HELPLINE
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 font-display font-bold px-8 py-4 text-sm tracking-widest rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200">
              OUR SERVICES <ChevronDown size={16} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <AnimatedSection key={i}>
              <div className="p-5 text-center rounded-xl border border-white/30 bg-white/20 shadow-lg">
                <div className="flex justify-center mb-2">
                  <s.Icon size={28} className="text-white" />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white drop-shadow">{s.number}</div>
                <div className="text-white text-sm tracking-wider mt-1 uppercase font-semibold">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-sacred om-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-display text-xs tracking-[0.4em] uppercase mb-3 flex items-center justify-center gap-2">
              <Wrench size={13} /> What We Offer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Our Sacred Services</h2>
            <div className="divider mb-5"></div>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive funeral and last rites services delivered with the utmost respect, dignity, and compassion.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <AnimatedSection key={s.id}>
                <div className={`group relative bg-white border ${s.border} rounded-xl overflow-hidden h-full flex flex-col card-hover shadow-sm`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}></div>
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`}></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-base font-bold text-primary mb-1">{s.title}</h3>
                    <p className="text-xs text-accent tracking-wider uppercase mb-4">{s.subtitle}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-stone-600 text-sm">
                          <CheckCircle2 size={14} style={{ color: s.accent }} className="shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-5">
                    <a href="#contact" className="flex items-center justify-center gap-2 border border-stone-200 group-hover:border-primary text-stone-400 group-hover:text-primary font-display text-xs tracking-widest py-2.5 transition-all rounded-lg hover:bg-blue-50">
                      ENQUIRE NOW <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="/img1.jpeg"
                  alt="Peaceful ceremony"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white rounded-xl p-4 shadow-xl inline-flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Shield size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-display text-primary text-xl font-bold">15+</div>
                      <div className="text-stone-500 text-xs">Years of Trusted Service</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-100 rounded-xl hidden sm:block"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <p className="text-accent font-display text-xs tracking-[0.4em] uppercase mb-3 flex items-center gap-2">
                <Users size={13} /> About Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-5 leading-tight">
                Serving Families With<br />
                <span className="text-accent">Compassion & Faith</span>
              </h2>
              <div className="divider-left mb-6"></div>
              <p className="text-stone-500 leading-relaxed mb-4 text-base sm:text-lg">
                Mangal Ambulance & Deep Freezer & Funeral Service has been a pillar of support for grieving families across Delhi NCR for over 15 years. We understand that the last rites of a loved one are among the most sacred moments in one's life.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6 text-base sm:text-lg">
                Our dedicated team works 24 hours a day, 7 days a week to ensure that every family receives complete support — from immediate logistics to final rituals — performed with complete devotion and respect.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { text: "Vedic Traditions Followed", Icon: BookOpen },
                  { text: "24/7 Emergency Response", Icon: Clock },
                  { text: "Transparent Pricing", Icon: Shield },
                  { text: "Experienced & Trained Staff", Icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-600 text-sm bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <item.Icon size={15} className="text-primary shrink-0" /> {item.text}
                  </div>
                ))}
              </div>
              <a href="tel:+919999999999" className="btn-primary inline-flex items-center gap-2 font-display font-bold px-8 py-4 text-sm tracking-widest rounded-lg shadow-lg">
                <Phone size={16} /> CONTACT US NOW
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-white/60 font-display text-xs tracking-[0.4em] uppercase mb-3">How We Help</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Simple 3-Step Process</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Call Us Anytime", desc: "Reach our 24/7 helpline. Our compassionate team is always ready to listen and guide you through every requirement.", Icon: Phone },
              { step: "02", title: "We Arrange Everything", desc: "From ambulance, freezer box, Pandit Ji to complete samagri — we organize all services swiftly and with care.", Icon: Wrench },
              { step: "03", title: "Complete Support", desc: "Our team stays with your family through the entire process, ensuring every ritual is performed with dignity and devotion.", Icon: Heart },
            ].map((p, i) => (
              <AnimatedSection key={i}>
                <div className="text-center px-4 bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="process-num mb-2">{p.step}</div>
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <p.Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-white/65 leading-relaxed text-sm">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-20 sm:py-28 bg-sacred">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-accent font-display text-xs tracking-[0.4em] uppercase mb-3 flex items-center justify-center gap-2">
              <Image size={13} /> Our Services in Action
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Gallery</h2>
            <div className="divider"></div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: "/g7.jpeg", alt: "Ambulance service", label: "Ambulance Service", Icon: Ambulance },
              { src: "/g5.jpeg", alt: "Ritual flowers", label: "Antim Sanskar", Icon: Package },
              { src: "/g4.jpeg", alt: "Sacred fire ritual", label: "Vedic Rituals", Icon: BookOpen },
              { src: "/g3.jpeg", alt: "Flowers offering", label: "Floral Offerings", Icon: Heart },
              { src: "/g1.jpeg", alt: "Night sky peaceful", label: "Peaceful Journey", Icon: Star },
              { src: "/g2.jpeg", alt: "Pandit services", label: "Pandit Ji Services", Icon: BookOpen },
            ].map((img, i) => (
              <AnimatedSection key={i}>
                <div className="gallery-item group relative overflow-hidden rounded-xl border border-blue-100 shadow-sm" style={{ height: "330px" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay — comes from bottom */}
                  <div
                    className="gallery-overlay absolute inset-0 flex flex-col justify-end"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)",
                    }}
                  >
                    <div className="p-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <img.Icon size={15} className="text-white" />
                      </div>
                      <span className="font-display text-white text-sm tracking-wider font-bold drop-shadow">{img.label}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-accent font-display text-xs tracking-[0.4em] uppercase mb-3 flex items-center justify-center gap-2">
              <Star size={13} /> Families We Served
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Their Words, Our Pride</h2>
            <div className="divider mb-12"></div>
          </AnimatedSection>
          <div className="relative min-h-52 bg-blue-50 rounded-2xl border border-blue-100 p-8 shadow-sm">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center px-8 py-8 ${i === activeTestimonial ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={18} fill="#be252c" className="text-accent" />)}
                </div>
                <p className="text-stone-600 text-lg sm:text-xl italic leading-relaxed mb-6 max-w-2xl">"{t.text}"</p>
                <div className="font-display text-primary font-bold">{t.name}</div>
                <div className="flex items-center gap-1 text-stone-400 text-sm mt-1">
                  <MapPin size={12} /> {t.location}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 rounded-full transition-all ${i === activeTestimonial ? "w-8" : "w-2 bg-blue-200"}`} style={i === activeTestimonial ? { background: "#0e3271" } : {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-accent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-4">
              <Phone size={40} className="text-white/80" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Need Immediate Assistance?
            </h2>
            <p className="text-white/75 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              We are available 24 hours a day, 7 days a week. Call us right now for immediate help and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 bg-white text-accent font-display font-bold px-10 py-4 text-base sm:text-lg tracking-widest hover:bg-blue-50 transition-all hover:scale-105 shadow-xl rounded-lg">
                <Phone size={20} /> +91 99999 99999
              </a>
              <a href="tel:+919888888888" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-display font-bold px-10 py-4 text-base sm:text-lg tracking-widest hover:bg-white/10 transition-all rounded-lg">
                <Phone size={20} /> +91 98888 88888
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 sm:py-28 bg-sacred om-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-accent font-display text-xs tracking-[0.4em] uppercase mb-3 flex items-center justify-center gap-2">
              <MessageCircle size={13} /> Get In Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <div className="divider"></div>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-4">
                <h3 className="font-display text-xl text-primary font-bold mb-6">Reach Us Anytime</h3>
                {CONTACT_INFO.map((c, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 border border-blue-100 hover:border-primary bg-white transition-all shadow-sm rounded-xl group">
                    <div className="w-11 h-11 bg-blue-50 group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors shrink-0">
                      <c.Icon size={20} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-display text-xs text-accent tracking-widest uppercase mb-1">{c.label}</div>
                      <div className="text-stone-600 text-sm">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white border border-blue-100 p-6 sm:p-8 shadow-lg rounded-2xl">
                <h3 className="font-display text-xl text-primary font-bold mb-6">Send an Enquiry</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-stone-500 text-xs font-display tracking-widest uppercase mb-2">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-blue-50 border border-blue-200 focus:border-primary text-stone-800 px-4 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-stone-500 text-xs font-display tracking-widest uppercase mb-2">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-blue-50 border border-blue-200 focus:border-primary text-stone-800 px-4 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-stone-500 text-xs font-display tracking-widest uppercase mb-2">Service Required</label>
                    <select className="w-full bg-blue-50 border border-blue-200 focus:border-primary text-stone-600 px-4 py-3 text-sm outline-none transition-colors rounded-lg">
                      <option value="">Select Service</option>
                      <option>Antim Sanskar Samagri</option>
                      <option>Dead Body Freezer Box</option>
                      <option>Ambulance Service</option>
                      <option>Pandit Ji</option>
                      <option>Complete Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-500 text-xs font-display tracking-widest uppercase mb-2">Message</label>
                    <textarea rows={3} placeholder="Additional details..." className="w-full bg-blue-50 border border-blue-200 focus:border-primary text-stone-800 px-4 py-3 text-sm outline-none transition-colors resize-none placeholder:text-stone-400 rounded-lg"></textarea>
                  </div>
                  <button className="btn-primary w-full font-display font-bold py-4 text-sm tracking-widest rounded-lg shadow-lg flex items-center justify-center gap-2">
                    <Mail size={16} /> SEND ENQUIRY
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <div className="font-display text-white font-bold text-lg">MANGAL SERVICES</div>
                  <div className="text-white/50 text-xs tracking-widest">AMBULANCE · DEEP FREEZER · FUNERAL</div>
                </div>
              </div>
              <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-5">
                Trusted funeral and last rites service providers in Delhi NCR. Serving families with compassion, dignity and complete devotion since 15+ years.
              </p>
              <div className="flex gap-3">
                {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                    <Icon size={16} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-white/80 text-xs tracking-widest uppercase mb-4">Our Services</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                {["Antim Sanskar Samagri", "Dead Body Freezer Box", "Ambulance Service", "Pandit Ji", "Complete Package"].map(s => (
                  <li key={s}><a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight size={11} /> {s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white/80 text-xs tracking-widest uppercase mb-4">Quick Contact</h4>
              <ul className="space-y-3 text-white/55 text-sm">
                <li className="flex gap-2 items-center"><Phone size={14} className="text-white/40 shrink-0" /> +91 99999 99999</li>
                <li className="flex gap-2 items-center"><Phone size={14} className="text-white/40 shrink-0" /> +91 98888 88888</li>
                <li className="flex gap-2 items-center"><Clock size={14} className="text-white/40 shrink-0" /> Available 24/7</li>
                <li className="flex gap-2 items-center"><MapPin size={14} className="text-white/40 shrink-0" /> Delhi NCR</li>
              </ul>
            </div>
          </div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", margin: "0 0 24px 0" }}></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
            <div>© 2026 Mangal Ambulance & Deep Freezer & Funeral Service. All rights reserved.</div>
          <a href="https://deboxtechnology.com/"> <div className="font-display tracking-wider text-white/30">Developed By Debox Technology</div></a> 
          </div>
        </div>
      </footer>

      {/* ── FLOATING CALL BUTTON ── */}
      
      <a  href="tel:+919999999999"
        className="floating-call fixed bottom-6 right-6 z-50 bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 hover:scale-110 transition-all"
        title="Call Now" >
        <Phone size={24} />
      </a>
    </div>
  );
}