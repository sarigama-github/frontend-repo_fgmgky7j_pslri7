export default function CTA() {
  return (
    <section id="demo" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">See it in action</h3>
          <p className="mt-2 text-gray-300">Get a tailored walkthrough for your use case and security needs.</p>
        </div>
        <div className="flex gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 text-base px-6 py-3 font-medium shadow hover:bg-gray-100 transition-colors">Contact sales</a>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-base px-6 py-3 font-medium shadow hover:opacity-95 transition-opacity">Book a demo</a>
        </div>
      </div>
    </section>
  );
}
