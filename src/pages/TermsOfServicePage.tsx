import { motion } from "motion/react";
import { 
  ShieldAlert, 
  Scale, 
  CreditCard, 
  AlertTriangle 
} from "lucide-react";
import LegalLayout from "../components/LegalLayout";

export default function TermsOfServicePage() {
  return (
    <LegalLayout 
      title="Terms of Service" 
      subtitle="These terms govern your use of the Volo Ai platform and services. By accessing our tools, you agree to comply with these professional standards."
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Acceptance of Terms</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>By creating an account or using the Volo Ai platform, you enter into a legally binding agreement with Volo Ai. If you do not agree to these terms, you must immediately cease all use of our services.</p>
              <p>We reserve the right to update these terms at any time. Continued use of the platform after such changes constitutes acceptance of the new terms.</p>
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">User Responsibilities</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>As a user of Volo Ai, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              <div className="bg-surface-container-high/40 p-8 rounded-2xl border border-outline-variant/10">
                <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" />
                  Prohibited Conduct
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
                    Reverse engineering the AI models or GDS integration logic.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
                    Using the service for fraudulent flight bookings or price manipulation.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
                    Automated scraping of the platform beyond provided API endpoints.
                  </li>
                </ul>
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Fees and Payment</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise required by law.</p>
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/5">
                <CreditCard className="w-6 h-6 text-secondary" />
                <p className="text-sm">Payments are processed securely via our authorized payment partners.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Limitation of Liability</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>Volo Ai provides its services "as is" and "as available." We do not guarantee that the service will be uninterrupted or error-free.</p>
              <div className="p-6 bg-error/5 border border-error/10 rounded-xl">
                <div className="flex items-center gap-2 text-error font-bold mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  Disclaimer
                </div>
                <p className="text-sm opacity-80 italic">
                  In no event shall Volo Ai be liable for any indirect, incidental, or consequential damages arising out of your use of the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </LegalLayout>
  );
}
