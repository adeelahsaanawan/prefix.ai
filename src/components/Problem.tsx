import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Battery, Clock, Wrench } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unplanned Downtime',
    description: 'High repair costs, user discomfort, and business disruptions from unexpected failures.',
  },
  {
    icon: Battery,
    title: 'Energy Inefficiency',
    description: 'System degradation leads to increased utility bills and environmental impact.',
  },
  {
    icon: Clock,
    title: 'Inefficient Monitoring',
    description: 'Manual inspections are time-consuming, error-prone, and often miss early warning signs.',
  },
  {
    icon: Wrench,
    title: 'Reactive Maintenance',
    description: 'Emergency repairs cost up to 5x more than planned preventive maintenance.',
  },
];

export const Problem = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">The Problem</h2>
          <p className="text-soft-white/70 max-w-2xl mx-auto">
            Traditional HVAC maintenance is reactive, inefficient, and costly. Here's what facility managers face daily:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="bg-charcoal p-6 rounded-xl border border-cyan/20 hover:border-cyan/40 transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <problem.icon className="w-12 h-12 text-cyan mb-4" />
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-soft-white/70">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};