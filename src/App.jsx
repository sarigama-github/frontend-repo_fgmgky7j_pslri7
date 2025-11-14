import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Security from './components/Security';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Logos />
        <Features />
        <Security />
        <CTA />
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Auralink, Inc. All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
