import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParticleProps {
  size: number;
  color: string;
  x: number;
  y: number;
  delay: number;
}

const Particle: React.FC<ParticleProps> = ({ size, color, x, y, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.5, 0],
        y: [`${y}%`, `${y + 10}%`],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  );
};

export const ParallaxBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  
  // Create parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  
  // Generate random particles
  useEffect(() => {
    const particlesArray = [];
    const colors = ['#00D1FF', '#A8FF00', '#F5F5F7'];
    
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 6 + 2; // 2-8px
      const color = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      
      particlesArray.push(
        <Particle 
          key={i}
          size={size}
          color={color}
          x={x}
          y={y}
          delay={delay}
        />
      );
    }
    
    setParticles(particlesArray);
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Particles */}
      <div className="absolute inset-0 opacity-30">
        {particles}
      </div>
      
      {/* Gradient circles with parallax effect */}
      <motion.div 
        className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-cyan/20 blur-[100px]"
        style={{ y: y1, opacity }}
      />
      
      <motion.div 
        className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] rounded-full bg-lime/20 blur-[80px]"
        style={{ y: y2, opacity }}
      />
      
      <motion.div 
        className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-cyan/10 blur-[60px]"
        style={{ y: y3 }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjIyIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
    </div>
  );
};
