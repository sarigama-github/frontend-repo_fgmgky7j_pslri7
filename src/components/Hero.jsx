import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200 shadow-sm mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
              Enterprise voice AI platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
              Secure AI voice agents for every enterprise workflow
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-2xl">
              Deploy AI phone, IVR, and contact center agents with SOC2-grade security, real-time latency, and on‑prem options.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white text-base px-6 py-3 font-medium shadow hover:bg-gray-800 transition-colors">
                Book a demo
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 text-base px-6 py-3 font-medium shadow ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
                Talk to sales
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-semibold text-gray-900">50ms</div>
                <div>Streaming latency</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">SOC2</div>
                <div>Compliance ready</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">On‑prem</div>
                <div>Private deployments</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">99.95%</div>
                <div>Uptime SLO</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),rgba(59,130,246,0.15),rgba(249,115,22,0.1)_60%)]" />
              <div className="relative p-6 grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
                    <div className="text-xs text-gray-500">Channel</div>
                    <div className="text-sm font-medium text-gray-900">Inbound IVR</div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
                    <div className="text-xs text-gray-500">Voice</div>
                    <div className="text-sm font-medium text-gray-900">Neural 16kHz</div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
                    <div className="text-xs text-gray-500">PII</div>
                    <div className="text-sm font-medium text-gray-900">Auto‑redaction</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
                    <div className="text-xs text-gray-500">Latency</div>
                    <div className="text-sm font-medium text-gray-900">~50ms E2E</div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
                    <div className="text-xs text-gray-500">Deploy</div>
                    <div className="text-sm font-medium text-gray-900">Cloud or On‑prem</div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 ring-1 ring-gray-200">
                    <div className="text-xs text-gray-500">Languages</div>
                    <div className="text-sm font-medium text-gray-900">60+ locales</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/70 backdrop-blur ring-1 ring-gray-200">
                <div className="text-xs text-gray-600">Trusted by teams at Fortune 500s and high‑growth startups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
