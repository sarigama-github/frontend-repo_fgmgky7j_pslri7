export default function Logos() {
  const companies = ['Acme Bank', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'WayneTech'];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs uppercase tracking-wider text-gray-500 mb-6">Trusted by modern enterprises</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {companies.map((c) => (
            <div key={c} className="h-10 rounded-md bg-gray-50 ring-1 ring-gray-200 flex items-center justify-center text-gray-400 text-sm">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
