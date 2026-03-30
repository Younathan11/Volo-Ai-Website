import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Gavel, 
  FileText, 
  ShieldCheck, 
  Cookie 
} from "lucide-react";
import { ReactNode } from "react";

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  lastUpdated: string;
}

export default function LegalLayout({ children, title, subtitle, lastUpdated }: LegalLayoutProps) {
  const location = useLocation();

  const navItems = [
    { name: "Privacy Policy", path: "/privacy", icon: Gavel },
    { name: "Terms of Service", path: "/terms", icon: FileText },
    { name: "Data Processing", path: "/data-processing", icon: ShieldCheck },
    { name: "Cookie Policy", path: "/cookies", icon: Cookie },
  ];

  return (
    <main className="pt-24 min-h-screen max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12">
      {/* SideNavBar */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="bg-surface-container-low/40 backdrop-blur-lg rounded-xl h-[calc(100vh-120px)] sticky top-24 p-6 flex flex-col space-y-2 font-body font-light text-sm">
          <div className="mb-8 px-2">
            <h2 className="text-on-surface font-semibold text-lg">Legal Center</h2>
            <p className="text-on-surface-variant text-xs opacity-60">Last updated {lastUpdated}</p>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                    isActive 
                      ? "bg-surface-container-high text-primary font-medium" 
                      : "text-on-surface-variant hover:bg-surface-container-high/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Nav (Simple dropdown or horizontal scroll could go here, but for now just the content) */}

      {/* Main Content Area */}
      <div className="flex-1 py-4 max-w-4xl">
        <header className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Regulatory Compliance</div>
          <h1 className="text-6xl font-headline font-extrabold text-on-surface tracking-tight mb-4">{title}</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl font-light">
            {subtitle}
          </p>
        </header>

        <section className="space-y-20 pb-32">
          {children}
        </section>
      </div>
    </main>
  );
}
