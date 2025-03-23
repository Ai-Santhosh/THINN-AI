import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(147,51,234,0.15),transparent_70%)] animate-pulse-glow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center slide-in">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 sm:text-4xl">
            Our Team & Philosophy
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            At THINN AI, our team is more than just a group of tech professionals — we are innovators,
            problem-solvers, and mentors dedicated to creating real-world impact.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="gradient-border">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                  alt="Team collaboration"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg overflow-hidden animate-float">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=300"
                alt="AI Innovation"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 slide-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-300">
              THINN AI serves as a platform for exploring emerging technologies and crafting solutions
              that address real-world industry challenges. From AI and Data Engineering to NLP and
              Computer Vision, our team leverages cutting-edge tools to drive meaningful transformation
              across sectors.
            </p>
            <p className="text-gray-300">
              We are passionate about transforming lives — not just through the products we build, but
              also by mentoring the next generation of tech enthusiasts, empowering them with
              knowledge, guidance, and opportunities to lead the future of technology.
            </p>
            <p className="text-gray-300">
              Together, we envision a world where innovation meets purpose, and every solution we
              create brings us one step closer to a smarter, more connected future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;