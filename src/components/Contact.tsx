import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'investor', // Default value
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Simulate a backend API call
  const submitToBackend = async (data: typeof formData) => {
    return new Promise<void>((resolve, reject) => {
      // Simulate network request
      setTimeout(() => {
        // 90% success rate for demo purposes
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Server error. Please try again.'));
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitToBackend(formData);
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'investor',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-soft-white/70 mb-8">
              Join the future of predictive maintenance. Request our investor deck today.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-soft-white/70 hover:text-cyan">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-soft-white/70 hover:text-cyan">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-soft-white/70 hover:text-cyan">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-charcoal/30 p-6 rounded-xl border border-cyan/20 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-lime mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-soft-white/70 mb-6">
                    We've received your request and will be in touch soon.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-cyan text-charcoal px-6 py-2 rounded-lg font-medium"
                  >
                    Submit Another Request
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 rounded-lg bg-charcoal/50 border focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cyan/20 focus:border-cyan'
                      }`}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) {
                          setErrors({ ...errors, name: '' });
                        }
                      }}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 rounded-lg bg-charcoal/50 border focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cyan/20 focus:border-cyan'
                      }`}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) {
                          setErrors({ ...errors, email: '' });
                        }
                      }}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      className={`w-full px-4 py-2 rounded-lg bg-charcoal/50 border focus:outline-none transition-colors ${
                        errors.company
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cyan/20 focus:border-cyan'
                      }`}
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) {
                          setErrors({ ...errors, company: '' });
                        }
                      }}
                    />
                    {errors.company && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.company}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      I'm interested as a
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-2 rounded-lg bg-charcoal/50 border border-cyan/20 focus:border-cyan focus:outline-none"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="investor">Potential Investor</option>
                      <option value="customer">Potential Customer</option>
                      <option value="partner">Potential Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-charcoal/50 border border-cyan/20 focus:border-cyan focus:outline-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/20 border border-red-500 rounded-lg p-3 flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <p className="text-sm text-red-500">
                        Something went wrong. Please try again.
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-lime text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex justify-center items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Request Investor Deck'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-soft-white/10 text-center text-soft-white/50">
          <p>&copy; 2025 PreFix.ai. All rights reserved.</p>
          <a href="#" className="hover:text-cyan">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};