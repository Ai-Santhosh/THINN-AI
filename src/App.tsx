import React from 'react';
import { Menu, X, Brain, Database, BarChart as ChartBar, Eye, Code, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Industries />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;