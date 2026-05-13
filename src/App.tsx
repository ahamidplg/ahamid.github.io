import { useState, useEffect } from 'react';
import { 
  Shield, 
  Globe, 
  Terminal, 
  Cpu, 
  Database, 
  Network, 
  Cloud, 
  Lock, 
  Code, 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  Moon, 
  Sun, 
  ExternalLink,
  ChevronRight,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Menu,
  X,
  Layers,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface Certification {
  name: string;
  issuer: string;
  category: string;
}

// --- Data ---
const SKILLS = [
  { name: 'Rust', category: 'Dev', icon: Code },
  { name: 'IoT Security', category: 'Security', icon: Cpu },
  { name: 'Network Attack Mitigation', category: 'ISP', icon: Shield },
  { name: 'ISO 27001', category: 'Governance', icon: Lock },
  { name: 'NIST CSF', category: 'Governance', icon: Database },
  { name: 'Wazuh', category: 'Security', icon: Terminal },
  { name: 'SOC Operations', category: 'Security', icon: Shield },
  { name: 'Zero Trust', category: 'Security', icon: Lock },
  { name: 'BGP Security', category: 'ISP', icon: Network },
  { name: 'Cloud Security', category: 'Cloud', icon: Cloud },
];

const EXPERIENCES: Experience[] = [
  {
    company: 'Musi Cyber',
    role: 'Independent Cybersecurity Researcher',
    period: '2026 - Present',
    description: [
      'Conducting independent research on emerging cyber threats and vulnerabilities.',
      'Specializing in application security and IoT vulnerability disclosure.',
      'Developing custom security tools using Rust for high-performance network analysis.'
    ]
  },
  {
    company: 'PT Telemedia Prima Nusantara',
    role: 'General Manager & IT Manager',
    period: 'Previous',
    description: [
      'Strategic oversight of ISP infrastructure and cloud architecture.',
      'Lead IT operations and security governance strategies.',
      'Implemented robust network security protocols and incident response frameworks.'
    ]
  },
  {
    company: 'PT MORA TELEMATIKA INDONESIA (Moratelindo)',
    role: 'OTT Manager',
    period: 'Previous',
    description: [
      'Managed Over-The-Top services and infrastructure integration.',
      'Focused on high-availability content delivery networks (CDN) and streaming security.',
      'Coordinated large-scale network deployments and optimizations.'
    ]
  },
  {
    company: 'PT Smartfren / PT Dimension Data',
    role: 'Security & Network Specialist roles',
    period: 'Previous',
    description: [
      'Expertise in core network operations and international telco standards.',
      'Managed security infrastructure for high-traffic mobile data networks.',
      'Consultant-level network architecture and security auditing.'
    ]
  },
  {
    company: 'PT Hypernet Indodata / PT Digital Internasional Raya',
    role: 'Technical Operations & IT Management',
    period: 'Previous',
    description: [
      'Managed managed service provider (MSP) infrastructure.',
      'Bridged technical requirements with business objectives and governance.'
    ]
  }
];

const CERTIFICATIONS: Certification[] = [
  // Cybersecurity & Governance
  { name: 'CISSP – Certified Information Systems Security Professional', issuer: 'ISC2', category: 'Cybersecurity' },
  { name: 'CISM – Certified Information Security Manager', issuer: 'ISACA', category: 'Cybersecurity' },
  { name: 'CISA – Certified Information Systems Auditor', issuer: 'ISACA', category: 'Cybersecurity' },
  { name: 'CCSP – Certified Cloud Security Professional', issuer: 'ISC2', category: 'Cybersecurity' },
  { name: 'CEH – Certified Ethical Hacker', issuer: 'EC-Council', category: 'Cybersecurity' },
  { name: 'ISO/IEC 27001:2022 Lead Auditor', issuer: 'Various', category: 'Governance' },
  { name: 'Certified Incident Handler (ECIH)', issuer: 'EC-Council', category: 'Cybersecurity' },
  { name: 'COBIT 2019 Framework Essentials', issuer: 'ISACA', category: 'Governance' },
  
  // Cloud & Security
  { name: 'AWS Certified Security – Specialty', issuer: 'AWS', category: 'Cloud' },
  { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google', category: 'Cloud' },
  { name: 'Google Cloud Cybersecurity Certificate', issuer: 'Google', category: 'Cloud' },
  { name: 'Google Cloud Managed Prometheus', issuer: 'Google Cloud', category: 'Cloud' },
  { name: 'Office of the CISO Institute: Cybersecurity Essentials', issuer: 'CISO Institute', category: 'Cloud' },
  { name: 'Docker Foundations Professional Certificate', issuer: 'Docker', category: 'Cloud' },
  { name: 'Oracle Cloud Infrastructure Networking Professional', issuer: 'Oracle', category: 'Cloud' },

  // Networking & Infrastructure
  { name: 'CCNP Core Networking', issuer: 'Cisco', category: 'Networking' },
  { name: 'CCNP Advanced Routing', issuer: 'Cisco', category: 'Networking' },
  { name: 'CyberOps Associate', issuer: 'Cisco', category: 'Networking' },
  { name: 'CCPP (Cisco Certified Performance Professional)', issuer: 'Cisco', category: 'Networking' },
  { name: 'Juniper JNCIA-Junos', issuer: 'Juniper', category: 'Networking' },
  { name: 'Fortinet Certified Associate Cybersecurity', issuer: 'Fortinet', category: 'Networking' },
  { name: 'ARIN (American Registry for Internet Numbers)', issuer: 'ARIN', category: 'Networking' },
  { name: 'Neo4j Graph Data Science', issuer: 'Neo4j', category: 'Networking' },

  // AI & Emerging Tech
  { name: 'AI Fundamentals', issuer: 'IBM / Microsoft', category: 'Emerging Tech' },
  { name: 'AI in Cybersecurity', issuer: 'Various', category: 'Emerging Tech' },
];

// --- Components ---

const Nav = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: (v: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold text-cyber-blue tracking-tighter"
        >
          root@ahamid <span className="text-white opacity-50 underline decoration-cyber-blue/30 underline-offset-4">~/portfolio</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-cyber-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all group-hover:w-full" />
            </a>
          ))}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-cyber-blue"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-white/10 text-cyber-blue"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-cyber-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? '' : 'light-mode';
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
      <Nav isDark={isDark} setIsDark={setIsDark} />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 cyber-gradient" />
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-cyber-blue/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-cyber-purple/10 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="max-w-4xl w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-blue mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-cyber-blue animate-ping" />
              <span className="text-xs font-mono font-medium text-cyber-blue tracking-widest uppercase">System Status: Protected</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-tight"
            >
              Abdul Hamid
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl font-medium text-slate-400 mb-10 max-w-2xl mx-auto"
            >
              Cybersecurity & ISP Architect <span className="text-cyber-blue mx-2">|</span> 
              Independent Researcher <span className="text-cyber-blue mx-2">|</span> 
              Application Security
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href="#experience" 
                className="w-full sm:w-auto px-8 py-4 bg-cyber-blue text-cyber-dark font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 glass font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 flex items-center justify-center gap-8 text-xs font-mono text-slate-500 uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <Globe size={14} /> Jakarta, ID
              </div>
              <div className="flex items-center gap-2">
                <Shield size={14} /> 20+ Years EXP
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-white/5 backdrop-blur-3xl relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-8 flex items-center gap-4">
                  <span className="text-cyber-blue">01.</span> Profile Summary
                </h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    I am an independent cybersecurity researcher and industry veteran with over <span className="text-white font-bold">20 years of experience</span> leading IT, ISP, and cybersecurity operations. 
                  </p>
                  <p>
                    My career has been dedicated to bridging the gap between high-level security governance and complex technical implementation. I specialize in building resilient ISP infrastructures, architecting secure cloud environments, and conducting deep-dive security research.
                  </p>
                  <p className="border-l-2 border-cyber-blue pl-6 py-2 italic text-slate-400">
                    "From BGP security to application-layer vulnerability research, I thrive on solving the hardest technical challenges in modern connectivity and data protection."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square glass rounded-3xl p-8 relative z-10 overflow-hidden group">
                   <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Terminal className="text-cyber-blue mb-6" size={48} />
                   <div className="space-y-4 font-mono text-sm">
                      <div className="text-cyber-blue flex items-center gap-2">
                        <span className="opacity-50">$</span> whois ahamidplg.github.io
                      </div>
                      <div className="pl-4 text-slate-400">
                        NAME: Abdul Hamid<br />
                        TYPE: Cybersecurity Researcher<br />
                        LOCTN: Jakarta Selatan, ID<br />
                        SPEC1: ISP & Cloud Architecture<br />
                        SPEC2: Network Attack Mitigation<br />
                        SPEC3: Zero Trust Strategy
                      </div>
                      <div className="text-cyber-purple flex items-center gap-2 mt-6">
                        <span className="opacity-50">$</span> scan active_skills
                      </div>
                      <div className="pl-4 text-slate-400 grid grid-cols-2 gap-2">
                        <span>[✓] Rust</span>
                        <span>[✓] Wazuh</span>
                        <span>[✓] ISO 27001</span>
                        <span>[✓] NIST CSF</span>
                      </div>
                   </div>
                </div>
                {/* Visual accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyber-blue/30 rounded-tr-3xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyber-purple/30 rounded-bl-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4">Core Expertise</h2>
              <p className="text-slate-400 max-w-xl mx-auto">A multi-disciplinary stack covering development, infrastructure, and international security standards.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass p-6 rounded-2xl group hover:border-cyber-blue/50 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-blue/10 flex items-center justify-center mb-4 text-cyber-blue group-hover:scale-110 transition-transform">
                    <skill.icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold mb-1">{skill.name}</h3>
                  <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">{skill.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 px-6 bg-cyber-blue/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-16 flex items-center gap-4">
              <span className="text-cyber-blue">02.</span> Career History
            </h2>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative grid md:grid-cols-[200px_1fr] gap-8"
                >
                  <div className="md:text-right pt-2">
                    <div className="text-cyber-blue font-mono text-sm mb-1">{exp.period}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Timeline Node</div>
                  </div>
                  <div className="glass p-8 rounded-3xl relative group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Layers size={80} />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display mb-1">{exp.role}</h3>
                        <p className="text-cyber-blue font-medium flex items-center gap-2">
                          <Globe size={14} /> {exp.company}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                          <Zap size={14} className="text-cyber-blue shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Education */}
        <section id="certs" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_350px] gap-16">
            
            {/* Certs Content */}
            <div>
              <h2 className="text-3xl mb-12 flex items-center gap-4">
                <span className="text-cyber-blue">03.</span> Certifications
              </h2>

              <div className="space-y-12">
                {[...new Set(CERTIFICATIONS.map(c => c.category))].map((category) => (
                  <div key={category}>
                    <h3 className="text-xs font-mono text-cyber-blue/60 uppercase tracking-widest mb-6 flex items-center gap-4">
                      {category} <div className="h-[1px] bg-cyber-blue/20 flex-1" />
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {CERTIFICATIONS.filter(c => c.category === category).map((cert, index) => (
                        <motion.div 
                          key={cert.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="glass p-4 rounded-xl border-l-2 border-l-cyber-blue/40 hover:border-l-cyber-blue hover:bg-white/10 transition-all flex items-center justify-between group"
                        >
                          <div className="max-w-[85%]">
                            <h4 className="text-sm font-bold mb-1 leading-tight">{cert.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono italic">{cert.issuer}</p>
                          </div>
                          <Award className="text-cyber-blue/30 group-hover:text-cyber-blue transition-colors shrink-0" size={16} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: Education */}
            <div className="lg:sticky lg:top-32 self-start">
              <h2 className="text-3xl mb-12 flex items-center gap-4 lg:hidden">
                <span className="text-cyber-blue">04.</span> Education
              </h2>
              <div className="hidden lg:block mb-8 text-xs font-mono text-slate-500 uppercase tracking-widest">
                Academic Background
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <BookOpen size={100} />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display mb-1">Universitas Sriwijaya</h3>
                    <p className="text-cyber-purple font-medium uppercase tracking-widest text-[10px] mb-4">Bachelor of Science</p>
                    <p className="text-lg text-slate-300 font-display">Major in Physics</p>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <MapPin size={14} className="text-cyber-blue/50" /> Palembang, ID
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <Calendar size={14} className="text-cyber-blue/50" /> Higher Education Node
                  </div>
                </div>
              </motion.div>
              
              {/* Quick Resume Download CTA in Sidebar */}
              <div className="mt-8 glass p-6 rounded-2xl border-dashed border-white/10 text-center">
                 <p className="text-xs text-slate-400 mb-4 font-mono">Need a formal copy?</p>
                 <a 
                   href="https://www.linkedin.com/in/abdul-hamid-518246250"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                 >
                    <Download size={14} /> PERSIST_RESUME.pdf
                 </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-8">Initiate Connection</h2>
            <p className="text-slate-400 mb-12 text-lg">
              Whether it's a security audit, research collaboration, or just a cup of coffee to discuss ISP architecture, my inbox is always open.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <a 
                href="mailto:ahamidplg@gmail.com" 
                className="glass p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-cyber-blue/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center text-cyber-blue">
                  <Mail size={24} />
                </div>
                <div className="font-bold">Email Me</div>
                <div className="text-xs text-slate-500 font-mono">ahamidplg@gmail.com</div>
              </a>
              <a 
                href="https://www.linkedin.com/in/abdul-hamid-518246250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-cyber-blue/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center text-cyber-blue">
                  <Linkedin size={24} />
                </div>
                <div className="font-bold">LinkedIn</div>
                <div className="text-xs text-slate-500 font-mono">/in/abdul-hamid-518246250</div>
              </a>
              <a 
                href="https://github.com/ahamidplg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-cyber-blue/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center text-cyber-blue">
                  <Github size={24} />
                </div>
                <div className="font-bold">GitHub</div>
                <div className="text-xs text-slate-500 font-mono">github.com/ahamidplg</div>
              </a>
            </div>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/abdul-hamid-518246250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-cyber-blue text-cyber-dark font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all"
              >
                <Download size={20} /> Download Full CV (PDF)
              </a>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Secure Transfer Protocol Required</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 relative bg-cyber-dark">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-sm font-mono text-slate-500">
              © 2026 <span className="text-cyber-blue">Abdul Hamid</span>. Built with React & Cyber-Resilience.
            </div>
            
            <div className="flex items-center gap-6">
               <a href="https://github.com/ahamidplg/portfolio" className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono">
                 <ExternalLink size={12} /> Source Code
               </a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-400 tracking-tighter uppercase">Heartbeat: Active</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
