import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', downtime: 24, savings: 10000 },
  { month: 'Feb', downtime: 20, savings: 15000 },
  { month: 'Mar', downtime: 15, savings: 22000 },
  { month: 'Apr', downtime: 12, savings: 28000 },
  { month: 'May', downtime: 8, savings: 35000 },
  { month: 'Jun', downtime: 5, savings: 42000 },
];

const kpis = [
  { value: '60%', label: 'Avg. Downtime Reduction' },
  { value: '$14B', label: 'Total HVAC Repair Market (US)' },
  { value: '3M', label: 'Assets Monitored Weekly' },
];

export const DataSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
          <div className="h-[400px] mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#F5F5F7" />
                <YAxis yAxisId="left" stroke="#00D1FF" />
                <YAxis yAxisId="right" orientation="right" stroke="#A8FF00" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1D1D1F',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="downtime"
                  stroke="#00D1FF"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="savings"
                  stroke="#A8FF00"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              className="bg-charcoal p-6 rounded-xl border border-cyan/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-cyan mb-2">{kpi.value}</h3>
              <p className="text-soft-white/70">{kpi.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};