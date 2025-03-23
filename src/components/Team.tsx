import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400',
    bio: 'Former AI Research Lead at Stanford, specializing in deep learning and neural networks.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
    bio: 'Tech veteran with 15+ years experience in scalable AI systems and cloud architecture.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Director of Research',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400',
    bio: 'PhD in Computer Vision, leading breakthrough research in object recognition.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'James Park',
    role: 'Product Strategy Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
    bio: 'Former Product Lead at major tech companies, expert in AI product development.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(147,51,234,0.15),transparent_70%)] animate-pulse-glow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Innovators and experts driving the future of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl gradient-border">
                <div className="bg-slate-900 p-6 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative aspect-w-1 aspect-h-1 mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mt-1">{member.role}</p>
                  <p className="mt-2 text-gray-300 text-sm">{member.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.social.website} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
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

export default Team;