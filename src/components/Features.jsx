import { ShieldCheck, Server, Headphones, Phone, Globe2, Gauge } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'SOC2-ready controls, SSO/SAML, audit logs, and rigorous data governance out of the box.',
  },
  {
    icon: Server,
    title: 'On‑prem or VPC',
    desc: 'Run fully isolated in your environment to meet the most stringent compliance needs.',
  },
  {
    icon: Headphones,
    title: 'Contact center ready',
    desc: 'Queueing, handoff to human, CRM connectors, and observability built in.',
  },
  {
    icon: Phone,
    title: 'Telephony & IVR',
    desc: 'Native SIP, WebRTC, PSTN bridges, and programmable call flows.',
  },
  {
    icon: Globe2,
    title: 'Multilingual',
    desc: '60+ languages and locales with regional voices and TTS/ASR tuning.',
  },
  {
    icon: Gauge,
    title: 'Ultra‑low latency',
    desc: 'Turn‑taking that feels human with sub‑100ms E2E latency and barge‑in support.',
  },
];

export default function Features() {
  return (
    <section id="platform" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Built for enterprise from day one</h2>
          <p className="mt-3 text-gray-600">Everything you need to design, deploy, and scale production voice agents across your org.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl bg-white ring-1 ring-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
