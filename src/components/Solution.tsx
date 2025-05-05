import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Bell, Gauge } from 'lucide-react';

const solutions = [
  {
    icon: Cpu,
    title: 'Real-Time IoT Sensing',
    description: 'Non-intrusive sensors monitor key HVAC components continuously.',
    highlight: 'Instant data collection',
  },
  {
    icon: Brain,
    title: 'Proprietary AI Algorithms',
    description: 'Advanced analysis detects early-warning signatures of potential failures.',
    highlight: 'Predictive accuracy >95%',
  },
  {
    icon: Bell,
    title: 'Predictive Alerts & Scheduling',
    description: 'Automated notifications integrate with your existing systems.',
    highlight: 'Reduce response time by 75%',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Continuous tuning minimizes energy usage while maintaining comfort.',
    highlight: 'Save up to 20% on energy',
  },
];

export const Solution = () => {
  return (
    <section className="py-20 px-4 bg-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
          <p className="text-soft-white/70 max-w-2xl mx-auto">
            PreFix.ai combines IoT sensors with advanced AI to transform HVAC maintenance from reactive to predictive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="bg-charcoal p-8 rounded-xl border border-cyan/20 hover:border-cyan/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <solution.icon className="w-12 h-12 text-cyan mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-soft-white/70 mb-4">{solution.description}</p>
              <div className="bg-lime/10 text-lime px-4 py-2 rounded-full text-sm font-medium inline-block">
                {solution.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};