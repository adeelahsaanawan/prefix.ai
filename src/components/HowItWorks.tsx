import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Bell } from 'lucide-react';

const steps = [
  {
    icon: Cpu,
    title: 'Sensor Deployment',
    description: 'IoT sensors collect real-time data from your HVAC systems',
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Advanced algorithms process data to predict potential failures',
  },
  {
    icon: Bell,
    title: 'Predictive Alerts',
    description: 'Receive timely notifications before issues occur',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-charcoal p-8 rounded-xl border border-cyan/20 group-hover:border-cyan/40 transition-all">
                <step.icon className="w-12 h-12 text-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-soft-white/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-cyan/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};