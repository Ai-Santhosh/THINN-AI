import React from 'react';
import { Brain, Database, BarChart as ChartBar, Eye, Code } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Custom AI solutions tailored to your business needs, from machine learning to deep learning applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure to handle your data processing needs at scale.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800'
  },
  {
    icon: ChartBar,
    title: 'Business Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Implement state-of-the-art computer vision solutions for image and video analysis.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'End-to-end development of AI-powered applications and platforms tailored to your requirements.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center slide-in">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Comprehensive AI and data solutions to transform your business
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full gradient-border">
                <div className="relative h-full bg-slate-900 p-6 rounded-xl transition-transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/95 to-slate-900"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                    />
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-300">{service.description}</p>
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

export default Services;