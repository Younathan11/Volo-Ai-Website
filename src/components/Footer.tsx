import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-outline-variant/10 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-bold text-on-surface font-headline mb-2">Volo Ai</div>
          <p className="text-sm font-light leading-relaxed text-on-surface-variant text-center md:text-left">
            © 2026 Volo Ai. Built for Travel Agencies in Egypt & MENA.
          </p>
        </div>
        <div className="flex gap-8">
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-light" to="/privacy">Privacy Policy</Link>
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-light" to="/terms">Terms of Service</Link>
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-light" to="/data-processing">Data Processing</Link>
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors text-sm font-light" to="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
