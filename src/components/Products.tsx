import React from 'react';
import { Brain, Cpu, Network, Bot, Microscope, Workflow } from 'lucide-react';

const products = [
  {
    icon: Brain,
    name: 'NeuroPilot AI',
    description: 'Advanced neural network platform for automated decision-making and pattern recognition.',
    features: ['Deep Learning Integration', 'Real-time Processing', 'Custom Model Training'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800'
  },
  {
    icon: Cpu,
    name: 'DataForge',
    description: 'Enterprise-grade data processing pipeline with automated ETL capabilities.',
    features: ['Automated Workflows', 'Data Validation', 'Real-time Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800'
  },
  {
    icon: Network,
    name: 'VisionCore',
    description: 'Computer vision platform for real-time object detection and image analysis.',
    features: ['Object Recognition', 'Scene Analysis', 'Visual Search'],
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800'
  },
  {
    icon: Bot,
    name: 'ChatGenius',
    description: 'Advanced conversational AI platform for natural language understanding.',
    features: ['Intent Recognition', 'Multilingual Support', 'Context Awareness'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800'
  },
  {
    icon: Microscope,
    name: 'PredictX',
    description: 'Predictive analytics suite for business intelligence and forecasting.',
    features: ['Time Series Analysis', 'Risk Assessment', 'Market Predictions'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800'
  },
  {
    icon: Workflow,
    name: 'AutoFlow',
    description: 'Business process automation platform powered by AI and machine learning.',
    features: ['Process Mining', 'Task Automation', 'Performance Analytics'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-900/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.1),transparent_70%)] animate-pulse-glow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Cutting-edge AI solutions designed for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full gradient-border">
                <div className="relative h-full bg-slate-900 p-6 rounded-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/95 to-slate-900"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    />
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-gray-300">{product.description}</p>
                    <ul className="mt-4 space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default Products;