import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emma Thompson',
    role: 'CTO at HealthTech Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300',
    content: 'THINN AI NeuroPilot platform has revolutionized our diagnostic processes. The accuracy and speed of their AI models are unprecedented.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Head of Innovation at RetailCo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300',
    content: 'The implementation of VisionCore has transformed our inventory management system. Real-time analytics have never been this efficient.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Data Science Director at FinanceHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300',
    content: 'DataForge has become an integral part of our data processing pipeline. The automation capabilities have saved us countless hours.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(124,58,237,0.1),transparent_70%)] animate-pulse-glow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            See how our solutions are transforming businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full gradient-border">
                <div className="relative h-full bg-slate-900 p-6 rounded-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-purple-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;