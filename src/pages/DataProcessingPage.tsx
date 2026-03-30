import { motion } from "motion/react";
import { 
  Database, 
  Lock, 
  Server, 
  Cpu 
} from "lucide-react";
import LegalLayout from "../components/LegalLayout";

export default function DataProcessingPage() {
  return (
    <LegalLayout 
      title="Data Processing" 
      subtitle="This Data Processing Agreement (DPA) outlines how Volo Ai handles and processes personal data on behalf of our clients in compliance with global data protection laws."
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Scope of Processing</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>Volo Ai processes personal data as a data processor on behalf of the client, who acts as the data controller. The processing is limited to the provision of our AI ticketing services.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <Database className="w-6 h-6 text-primary mb-3" />
                  <h5 className="text-on-surface font-bold mb-2">Data Types</h5>
                  <p className="text-sm opacity-70">Customer names, contact details, travel itineraries, and payment transaction IDs.</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                  <Cpu className="w-6 h-6 text-primary mb-3" />
                  <h5 className="text-on-surface font-bold mb-2">AI Processing</h5>
                  <p className="text-sm opacity-70">Automated extraction and analysis of travel requests from email and chat interfaces.</p>
                </div>
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Security Measures</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption of data at rest and in transit.</p>
              <div className="bg-surface-container-high/40 p-8 rounded-2xl border border-outline-variant/10">
                <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Technical Safeguards
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    AES-256 encryption for all stored data.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Multi-factor authentication for all administrative access.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Regular security audits and vulnerability assessments.
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
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Sub-processors</h2>
            <div className="text-on-surface-variant leading-[1.8] space-y-4 font-light text-[17px]">
              <p>Volo Ai engages certain sub-processors to assist in providing our services. We maintain a list of all sub-processors and ensure they are bound by data protection obligations equivalent to those in this DPA.</p>
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/5">
                <Server className="w-6 h-6 text-secondary" />
                <p className="text-sm">Our primary infrastructure is hosted on secure, enterprise-grade cloud providers.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </LegalLayout>
  );
}
