import { motion } from "motion/react";
import { 
  Cookie, 
  Settings, 
  Eye, 
  BarChart 
} from "lucide-react";
import LegalLayout from "../components/LegalLayout";

export default function CookiePolicyPage() {
  return (
    <LegalLayout 
      title="Cookie Policy" 
      subtitle="This policy explains how Volo Ai uses cookies and similar technologies to recognize you when you visit our website and use our platform."
      lastUpdated="March 2026"
    >
      {/* Section 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="flex items-start gap-8">
          <span className="text-primary/40 font-headline font-bold text-4xl mt-1 select-none">01</span>
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">What are Cookies?</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
              <div className="bg-surface-container-high/40 p-8 rounded-2xl border border-outline-variant/10">
                <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                  <Cookie className="w-5 h-5" />
                  Cookie Types
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    First-party cookies: Set by Volo Ai.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Third-party cookies: Set by our service providers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="flex items-start gap-8">
          <span className="text-primary/40 font-headline font-bold text-4xl mt-1 select-none">02</span>
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">How We Use Cookies</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>We use cookies for several reasons. Some cookies are required for technical reasons in order for our website and platform to operate, and we refer to these as "essential" or "strictly necessary" cookies.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <Eye className="w-6 h-6 text-secondary mb-3" />
                  <h5 className="text-on-surface font-bold mb-2">Essential</h5>
                  <p className="text-sm opacity-70">Required for authentication and session management.</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <BarChart className="w-6 h-6 text-secondary mb-3" />
                  <h5 className="text-on-surface font-bold mb-2">Analytics</h5>
                  <p className="text-sm opacity-70">Help us understand how users interact with our platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="flex items-start gap-8">
          <span className="text-primary/40 font-headline font-bold text-4xl mt-1 select-none">03</span>
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Managing Cookies</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.</p>
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/5">
                <Settings className="w-6 h-6 text-tertiary" />
                <p className="text-sm">You can also manage your cookie preferences within the Volo Ai account settings.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </LegalLayout>
  );
}
