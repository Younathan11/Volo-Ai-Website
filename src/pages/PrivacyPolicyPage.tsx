import { motion } from "motion/react";
import { 
  Sparkles, 
  CheckCircle2, 
  Trash2, 
  Download 
} from "lucide-react";
import LegalLayout from "../components/LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      subtitle="At Volo Ai, we prioritize your data sovereignty. This document outlines our rigorous standards for data collection, encryption, and processing to ensure your editorial intelligence remains private."
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Information Collection</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>We collect information to provide better services to our users. The type of information we collect depends on how you use our services and how you manage your privacy controls.</p>
              <p>When you create a Volo Ai Account, you provide us with personal information that includes your name and a password. You can also choose to add a phone number or payment information to your account.</p>
            </div>
            {/* Sub-feature glass card */}
            <div className="bg-surface-container-high/40 p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Processing Note
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed italic">
                Our Large Language Models (LLMs) are architected with zero-retention parameters for prompt data unless explicitly authorized for training by your organization's administrative console.
              </p>
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">How We Use Data</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>Volo Ai uses the data we collect for three primary purposes: to operate our business and provide the services we offer, to send communications, and to display relevant advertising on third-party sites.</p>
              <ul className="space-y-4 pt-2">
                {[
                  "Providing the Service, including updating, securing, and troubleshooting.",
                  "Improving and developing our editorial AI models.",
                  "Personalizing your workspace experience and making recommendations."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Data Sovereignty & Controls</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-6 font-light text-[17px]">
              <p>You have choices regarding the data we collect. When you are asked to provide personal data, you may decline. If you choose not to provide data that is necessary to provide a service, you may not be able to use that feature.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <Trash2 className="w-6 h-6 text-secondary mb-3" />
                  <h5 className="text-on-surface font-bold mb-2">Right to Deletion</h5>
                  <p className="text-sm opacity-70">Purge all your workspace data and associated AI vectors instantly from our active clusters.</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <Download className="w-6 h-6 text-secondary mb-3" />
                  <h5 className="text-on-surface font-bold mb-2">Data Portability</h5>
                  <p className="text-sm opacity-70">Export your intelligence graphs in machine-readable JSON formats for platform interoperability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Separator Image */}
      <div className="rounded-3xl overflow-hidden h-[300px] relative">
        <img 
          alt="Deep blue abstract architectural structure" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Section 4 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="flex items-start gap-8">
          <span className="text-primary/40 font-headline font-bold text-4xl mt-1 select-none">04</span>
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Security Infrastructure</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>We use a variety of security technologies and procedures to help protect your personal data from unauthorized access, use, or disclosure. For example, we store the personal data you provide on computer systems that have limited access and are in controlled facilities.</p>
              <p>When we transmit highly confidential data (such as a credit card number or password) over the internet, we protect it through the use of encryption, such as the Transport Layer Security (TLS) protocol.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </LegalLayout>
  );
}
