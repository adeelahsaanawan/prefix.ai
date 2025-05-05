import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Gauge, Clock, ChevronRight, Zap, Shield, BarChart } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-time Fault Prediction',
    description: 'IoT sensors detect issues before they become problems',
    details: 'Our advanced sensors continuously monitor vibration, temperature, pressure, and electrical patterns in your HVAC systems. Using machine learning algorithms, we can identify subtle changes that indicate potential failures up to 3 weeks before they would cause system downtime.',
    stats: [
      { label: 'Prediction Accuracy', value: '95%' },
      { label: 'Early Detection', value: '3 weeks' },
    ],
  },
  {
    icon: Gauge,
    title: 'Energy Optimization',
    description: 'Smart algorithms reduce energy consumption',
    details: 'PreFix.ai doesn\'t just prevent failures - it optimizes your entire HVAC operation. Our AI continuously analyzes performance data to recommend optimal settings based on building occupancy, weather conditions, and equipment health, reducing energy usage while maintaining comfort.',
    stats: [
      { label: 'Energy Savings', value: '15-20%' },
      { label: 'ROI Timeline', value: '6-8 months' },
    ],
  },
  {
    icon: Clock,
    title: 'Scheduled Uptime',
    description: 'Maximize operational efficiency with predictive maintenance',
    details: 'Transform your maintenance from reactive to proactive. Our platform integrates with your existing workflow systems to schedule maintenance exactly when needed - not too early (wasting resources) and not too late (risking failure). This maximizes component lifespans and minimizes disruption.',
    stats: [
      { label: 'Downtime Reduction', value: '73%' },
      { label: 'Maintenance Cost Savings', value: '42%' },
    ],
  },
  {
    icon: Shield,
    title: 'Extended Equipment Life',
    description: 'Prolong the lifespan of your HVAC investments',
    details: 'By identifying and addressing minor issues before they escalate, PreFix.ai helps extend the operational life of your equipment. Our data shows that systems maintained using our predictive approach last 30-40% longer than those on traditional maintenance schedules.',
    stats: [
      { label: 'Lifespan Extension', value: '35%' },
      { label: 'Capital Expenditure Reduction', value: '25%' },
    ],
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Comprehensive insights into system performance',
    details: 'Gain unprecedented visibility into your HVAC operations with our detailed analytics dashboard. Track efficiency metrics, view historical performance trends, and receive actionable recommendations for system improvements all in one place.',
    stats: [
      { label: 'Data Points Monitored', value: '250+' },
      { label: 'Reporting Frequency', value: 'Real-time' },
    ],
  },
  {
    icon: Zap,
    title: 'Smart Alerts',
    description: 'Intelligent notifications when action is needed',
    details: 'No more false alarms or missed warnings. Our smart alert system uses contextual awareness to deliver the right information to the right people at the right time. Alerts are prioritized by urgency and include specific recommended actions.',
    stats: [
      { label: 'False Positive Rate', value: '<2%' },
      { label: 'Response Time Improvement', value: '68%' },
    ],
  },
];

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

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
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-soft-white/70 max-w-2xl mx-auto">
            Our platform combines cutting-edge IoT sensors with proprietary AI algorithms to deliver a complete predictive maintenance solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`bg-charcoal p-6 rounded-xl border transition-all ${
                selectedFeature === index
                  ? 'border-cyan scale-[1.02] shadow-lg shadow-cyan/20'
                  : 'border-cyan/20 hover:border-cyan/40'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
            >
              <div className="flex justify-between items-start">
                <feature.icon className="w-12 h-12 text-cyan mb-4" />
                <motion.div
                  animate={{ rotate: selectedFeature === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-cyan/70" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-soft-white/70 mb-4">{feature.description}</p>

              <AnimatePresence>
                {selectedFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-cyan/20 mt-4">
                      <p className="text-soft-white/80 mb-4">{feature.details}</p>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {feature.stats.map((stat, statIndex) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: statIndex * 0.1 + 0.2 }}
                            className="bg-charcoal/50 p-3 rounded-lg border border-cyan/10"
                          >
                            <div className="text-xl font-bold text-cyan">{stat.value}</div>
                            <div className="text-xs text-soft-white/60">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};