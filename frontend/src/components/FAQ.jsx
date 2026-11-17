import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const FAQS = [
  {
    q: "What services does your custom development company offer?",
    a: "We provide a full suite of software development services, including custom app development tailored to your business needs, UI/UX design, app strategy and consulting, ongoing maintenance & support, quality assurance and testing, and backend development and API integration.",
  },
  {
    q: "Do you specialize in developing apps for iOS, Android, or both?",
    a: "Our team specializes in building high-performance native iOS and Android apps as well as cross-platform mobile applications to maximize your reach and ROI.",
  },
  {
    q: "How much does mobile app development cost?",
    a: "App development cost varies based on features and complexity, platforms (iOS, Android, or both), and design and integrations required. Book a free consultation to get a personalized, no-obligation estimate.",
  },
  {
    q: "How long does it take to develop a mobile app?",
    a: "The typical development timeframe ranges from 3 to 6 months, depending on the app's scope and features. We follow an agile approach to deliver your custom app on schedule.",
  },
  {
    q: "What is your app development process?",
    a: "Our process includes requirement analysis, wireframing and UI/UX design, development and coding, rigorous testing for quality assurance, deployment and app store submission, and post-launch maintenance and updates.",
  },
  {
    q: "Do you provide app maintenance and updates after launch?",
    a: "Yes — we offer continuous mobile app maintenance and support to ensure your app remains secure, updated, and performs optimally long after launch.",
  },
  {
    q: "How do you ensure the security of apps you develop?",
    a: "Security is a top priority. We implement data encryption, secure user authentication, and regular vulnerability testing to protect your apps and user data.",
  },
  {
    q: "Can you integrate third-party services and APIs into the app?",
    a: "Absolutely. We have expertise integrating popular third-party APIs — payment gateways, social media, analytics tools, and more — to extend your app's capabilities.",
  },
];

export const FAQ = () => (
  <section id="faq" className="py-20 lg:py-32" data-testid="faq-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-5 gap-12">
      <div className="lg:col-span-2">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <span className="text-[#F97316]">
              Frequently Asked Questions
            </span>
          }
          intro="Straight answers on engagement, cost, timelines, and security — the same questions every serious buyer asks."
        />
      </div>
      <div className="lg:col-span-3">
        <Accordion.Root type="single" collapsible>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={16}>
              <Accordion.Item
                value={`faq-${i}`}
                data-testid="faq-accordion-item"
                className="border-b border-[#F97316]/50 hover:border-[#F97316] transition-colors"
              >
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display text-base lg:text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">
                    {f.q}
                  </span>
                  <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full border border-zinc-800 text-zinc-400 group-hover:border-zinc-500 group-hover:text-white transition-all duration-300">
                    <Plus className="w-4 h-4 group-data-[state=open]:rotate-45 transition-transform duration-300" />
                  </span>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="pb-6 pr-12 text-sm text-zinc-400 leading-relaxed">
                    {f.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Reveal>
          ))}
        </Accordion.Root>
      </div>
    </div>
  </section>
);

export default FAQ;
