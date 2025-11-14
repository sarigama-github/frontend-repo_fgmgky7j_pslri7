import { LockKeyhole, FileShield, KeyRound } from 'lucide-react';

export default function Security() {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200 mb-4">
            <LockKeyhole className="h-3.5 w-3.5" />
            Security & privacy
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Private by design</h2>
          <p className="mt-4 text-gray-600">Your data stays yours. Deploy within your VPC or on‑prem, keep PII encrypted, and control retention with fine‑grained policies.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><FileShield className="h-5 w-5 text-gray-900 mt-0.5" /> SOC2 Type II program in progress</li>
            <li className="flex items-start gap-3"><KeyRound className="h-5 w-5 text-gray-900 mt-0.5" /> SSO/SAML, role‑based access, and audit trails</li>
            <li className="flex items-start gap-3"><KeyRound className="h-5 w-5 text-gray-900 mt-0.5" /> PHI/PCI redaction and secure transcript storage</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 ring-1 ring-gray-200 shadow-inner" />
          <div className="absolute inset-6 rounded-xl border border-dashed border-gray-300" />
        </div>
      </div>
    </section>
  );
}
