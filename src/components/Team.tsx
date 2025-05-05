import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & AI Architect',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & IoT Systems',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Data Science',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const partners = [
  'Carrier',
  'Trane',
  'Johnson Controls',
  'Daikin',
];

export const Team = () => {
  return (
    <section className="py-20 px-4 bg-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-cyan">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                className="text-2xl font-bold text-soft-white/40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};