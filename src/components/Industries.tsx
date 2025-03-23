import React from 'react';
import { Building2, Stethoscope, ShoppingBag, Factory, Truck, Ban as Bank } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'Enterprise',
    description: 'Digital transformation solutions for large-scale businesses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800'
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'AI-powered diagnostics and patient care optimization.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800'
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description: 'Smart inventory and personalized shopping experiences.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Predictive maintenance and production optimization.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800'
  },
  {
    icon: Truck,
    name: 'Logistics',
    description: 'Supply chain optimization and route planning.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800'
  },
  {
    icon: Bank,
    name: 'Finance',
    description: 'Risk assessment and fraud detection systems.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(79,70,229,0.2),transparent_70%)] animate-pulse-glow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Transforming businesses across sectors with intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl gradient-border">
                <div className="relative bg-slate-900 p-6 h-full transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/95 to-slate-900"></div>
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-700"
                    />
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <industry.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-gray-300">{industry.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;