'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Button, Card, TestimonialCard, AccordionItem } from '../components/ui';

// Scroll-triggered content component
const ScrollTriggeredContent: React.FC<{ handleGetStarted: () => void }> = ({ handleGetStarted }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity and y position
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Glassmorphism Container for Buttons and Features */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-xl border border-white/15 p-8 lg:p-10 rounded-3xl shadow-2xl"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 30px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.1)',
        }}
      >
        {/* Traveling Border Light Lines */}
        <div 
          className="absolute -top-[2px] left-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full pointer-events-none"
          style={{
            width: '20%',
            animation: 'travelTop 4s linear infinite',
            opacity: 0.8,
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        />
        <div 
          className="absolute -right-[2px] top-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent rounded-full pointer-events-none"
          style={{
            height: '20%',
            animation: 'travelRight 4s linear infinite',
            opacity: 0.8,
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        />
        <div 
          className="absolute -bottom-[2px] right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full pointer-events-none"
          style={{
            width: '20%',
            animation: 'travelBottom 4s linear infinite',
            opacity: 0.8,
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        />
        <div 
          className="absolute -left-[2px] bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent rounded-full pointer-events-none"
          style={{
            height: '20%',
            animation: 'travelLeft 4s linear infinite',
            opacity: 0.8,
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        />

        {/* Enhanced inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/6 to-transparent pointer-events-none" />
        
        <div className="relative text-center">
          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="primary"
              size="default"
              onClick={handleGetStarted}
              className="text-base sm:text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
            >
              Get Started Free
            </Button>
            
            <Button
              variant="secondary"
              size="default"
              className="text-base sm:text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-lg mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">Lightning Fast</h3>
              <p className="text-gray-400">Process data and generate insights in seconds</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-lg mb-4 mx-auto">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">Reliable</h3>
              <p className="text-gray-400">99.9% uptime guaranteed</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-lg mb-4 mx-auto">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">Easy to Use</h3>
              <p className="text-gray-400">Intuitive interface</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const handleGetStarted = () => {
    console.log('Get Started clicked!');
  };

  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Hero Content with Scroll Effects */}
        <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Main Content Container with Glass Background */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-16 lg:mb-20"
            >
              {/* Glassmorphism Container for Title and Description */}
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl border border-white/15 p-8 lg:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto"
                style={{
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 30px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.1)',
                }}
                variants={itemVariants}
              >
                {/* Traveling Border Light Lines */}
                <div 
                  className="absolute -top-[2px] left-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full pointer-events-none"
                  style={{
                    width: '20%',
                    animation: 'travelTop 4s linear infinite',
                    opacity: 0.8,
                    boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                  }}
                />
                <div 
                  className="absolute -right-[2px] top-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent rounded-full pointer-events-none"
                  style={{
                    height: '20%',
                    animation: 'travelRight 4s linear infinite',
                    opacity: 0.8,
                    boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                  }}
                />
                <div 
                  className="absolute -bottom-[2px] right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full pointer-events-none"
                  style={{
                    width: '20%',
                    animation: 'travelBottom 4s linear infinite',
                    opacity: 0.8,
                    boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                  }}
                />
                <div 
                  className="absolute -left-[2px] bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent rounded-full pointer-events-none"
                  style={{
                    height: '20%',
                    animation: 'travelLeft 4s linear infinite',
                    opacity: 0.8,
                    boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                  }}
                />

                {/* Enhanced inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/6 to-transparent pointer-events-none" />
                
                <div className="relative text-center">
                  {/* Main Brand Title */}
                  <motion.h1
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
                    variants={itemVariants}
                    style={{
                      textShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                      ADmyBRAND
                    </span>
                    <br />
                    <span className="text-white drop-shadow-2xl">AI Suite</span>
                  </motion.h1>
                  
                  {/* Subtle accent line */}
                  <motion.div 
                    className="w-32 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto rounded-full mb-8"
                    variants={itemVariants}
                    style={{
                      boxShadow: '0 0 20px rgba(255,255,255,0.5)',
                    }}
                  />

                  {/* Description */}
                  <motion.p
                    className="text-xl sm:text-2xl lg:text-2xl text-gray-300 leading-relaxed"
                    variants={itemVariants}
                    style={{
                      textShadow: '0 0 20px rgba(255,255,255,0.2)',
                    }}
                  >
                    Transform your business with cutting-edge artificial intelligence. 
                    Automate workflows, analyze data, and make smarter decisions with our 
                    comprehensive AI-powered platform designed for modern enterprises.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Scroll-Triggered Content */}
          <ScrollTriggeredContent handleGetStarted={handleGetStarted} />
          
        </div>


      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

// Features Section Component
const FeaturesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-Powered Analytics",
      description: "Get deep insights into your marketing performance with advanced AI algorithms that identify trends and opportunities."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning-Fast Automation",
      description: "Automate repetitive marketing tasks and workflows to save time and increase efficiency across your campaigns."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Smart Reporting",
      description: "Generate comprehensive reports that highlight key metrics and provide actionable recommendations for growth."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Intelligent Content Creation",
      description: "Create compelling marketing content using AI that understands your brand voice and target audience."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Multi-Channel Integration",
      description: "Connect and manage all your marketing channels from one unified platform for seamless coordination."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Keep your data safe with bank-level security, compliance certifications, and advanced access controls."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unleash Your Marketing
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your marketing strategy with AI-powered tools designed to boost 
            performance, automate workflows, and deliver measurable results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button
            variant="primary"
            size="default"
            className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Explore All Features
          </Button>
        </motion.div>
    </div>
    </section>
  );
};

// Marquee Banner Component
const MarqueeBanner: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="relative w-full overflow-hidden py-4 mb-16 lg:mb-20">
      {/* Tape-like banner container */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform -rotate-1 shadow-lg">
        {/* Inner tape content */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 py-4 px-8 overflow-hidden">
          {/* Scrolling text container */}
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: 'marqueeScroll 20s linear infinite',
            }}
          >
            {/* Duplicate text for seamless loop */}
            <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mx-8">
              {text}
            </span>
            <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mx-8">
              {text}
            </span>
            <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mx-8">
              {text}
            </span>
            <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mx-8">
              {text}
            </span>
            <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mx-8">
              {text}
            </span>
            <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mx-8">
              {text}
            </span>
          </div>
        </div>
        
        {/* Tape shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 animate-pulse" />
      </div>
      
      {/* Shadow underneath */}
      <div className="absolute inset-x-4 bottom-2 h-2 bg-black/20 blur-sm transform rotate-1" />
    </div>
  );
};

// Enterprise Requirements Form Component
const EnterpriseForm: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    apiCalls: '',
    teamMembers: '',
    industry: '',
    useCase: '',
    email: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enterprise form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl shadow-xl h-full flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 z-10"
        aria-label="Go back"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      {/* Form Content */}
      <div className="pt-12 flex-1 flex flex-col">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Tell Us About Your Needs</h3>
          <p className="text-gray-600 text-sm">Help us create the perfect enterprise solution for you</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">Monthly API Calls Needed</label>
              <select 
                className="w-full p-2.5 text-sm font-medium text-gray-900 bg-white border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                value={formData.apiCalls}
                onChange={(e) => setFormData({...formData, apiCalls: e.target.value})}
                style={{ color: '#111827 !important' }}
              >
                <option value="" className="text-gray-900 font-medium">Select range</option>
                <option value="100k-500k" className="text-gray-900 font-medium">100K - 500K</option>
                <option value="500k-1m" className="text-gray-900 font-medium">500K - 1M</option>
                <option value="1m-5m" className="text-gray-900 font-medium">1M - 5M</option>
                <option value="5m+" className="text-gray-900 font-medium">5M+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">Team Size</label>
              <select 
                className="w-full p-2.5 text-sm font-medium text-gray-900 bg-white border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                value={formData.teamMembers}
                onChange={(e) => setFormData({...formData, teamMembers: e.target.value})}
                style={{ color: '#111827 !important' }}
              >
                <option value="" className="text-gray-900 font-medium">Select size</option>
                <option value="10-50" className="text-gray-900 font-medium">10 - 50 members</option>
                <option value="50-100" className="text-gray-900 font-medium">50 - 100 members</option>
                <option value="100-500" className="text-gray-900 font-medium">100 - 500 members</option>
                <option value="500+" className="text-gray-900 font-medium">500+ members</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">Industry</label>
              <input
                type="text"
                placeholder="e.g., E-commerce, SaaS"
                className="w-full p-2.5 text-sm font-medium text-gray-900 bg-white border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder-gray-500"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                style={{ color: '#111827 !important' }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">Primary Use Case</label>
              <textarea
                placeholder="Brief description"
                rows={2}
                className="w-full p-2.5 text-sm font-medium text-gray-900 bg-white border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm placeholder-gray-500"
                value={formData.useCase}
                onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                style={{ color: '#111827 !important' }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1.5">Work Email</label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full p-2.5 text-sm font-medium text-gray-900 bg-white border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder-gray-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ color: '#111827 !important' }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1.5">Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full p-2.5 text-sm font-medium text-gray-900 bg-white border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder-gray-500"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  style={{ color: '#111827 !important' }}
                />
              </div>
            </div>
          </form>
        </div>

        {/* Submit Button - Fixed at bottom */}
        <div className="mt-4 pt-3 border-t border-gray-200">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

// Pricing Section Component
const PricingSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isEnterpriseFlipped, setIsEnterpriseFlipped] = useState(false);

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started with AI marketing",
      features: [
        "AI-powered analytics dashboard",
        "Up to 5,000 monthly API calls",
        "Basic automation workflows",
        "Email support",
        "2 team members",
        "Standard integrations"
      ],
      buttonText: "Start Basic Plan",
      popular: false
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Most popular choice for growing marketing teams",
      features: [
        "Advanced AI analytics & insights",
        "Up to 50,000 monthly API calls",
        "Advanced automation workflows",
        "Priority support & live chat",
        "10 team members",
        "Premium integrations",
        "Custom reporting",
        "A/B testing tools"
      ],
      buttonText: "Start Pro Plan",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large-scale marketing operations",
      features: [
        "Unlimited AI analytics & insights",
        "Unlimited API calls",
        "Custom automation workflows",
        "24/7 dedicated support",
        "Unlimited team members",
        "Custom integrations",
        "White-label solutions",
        "Advanced security & compliance",
        "Custom training & onboarding"
      ],
      buttonText: "Pricing Calculator",
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Marquee Banner Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <MarqueeBanner text="Simple & Transparent Pricing" />
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your marketing needs. Scale up or down at any time, 
              with no hidden fees or long-term commitments.
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={cardVariants} className="relative">
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Enterprise Card with Flip Functionality */}
              {plan.name === "Enterprise" ? (
                <div className={`flip-card ${isEnterpriseFlipped ? 'flipped' : ''} h-full`}>
                  <div className="flip-card-inner h-full">
                    {/* Front Side - Original Card */}
                    <div className="flip-card-front">
                      <Card className="h-full hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col h-full">
                          {/* Plan Header */}
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {plan.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">
                              {plan.description}
                            </p>
                            <div className="flex items-baseline justify-center">
                              <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                                {plan.price}
                              </span>
                              {plan.period && (
                                <span className="text-gray-600 ml-2">
                                  {plan.period}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Features List */}
                          <div className="flex-1 mb-8">
                            <ul className="space-y-4">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start">
                                  <svg
                                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA Button */}
                          <div className="mt-auto">
                            <Button
                              variant="primary"
                              size="default"
                              onClick={() => setIsEnterpriseFlipped(true)}
                              className="w-full text-base py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold hover:from-gray-900 hover:to-black border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                              style={{ color: 'white !important' }}
                            >
                              <span className="text-white font-semibold">
                                {plan.buttonText}
                              </span>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    {/* Back Side - Requirements Form */}
                    <div className="flip-card-back">
                      <EnterpriseForm onBack={() => setIsEnterpriseFlipped(false)} />
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Cards for Basic and Pro */
                <Card 
                  className={`h-full relative ${
                    plan.popular 
                      ? 'ring-2 ring-blue-500 shadow-2xl transform scale-105' 
                      : 'hover:shadow-xl'
                  } transition-all duration-300`}
                >
                  <div className="flex flex-col h-full">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-gray-600 ml-2">
                            {plan.period}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Button
                        variant={plan.popular ? "primary" : "secondary"}
                        size="default"
                        className={`w-full text-base py-3 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                            : 'hover:bg-gray-100'
                        } transition-all duration-300`}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-600 mb-6">
            Need something custom? We&apos;re here to help.
          </p>
          <Button
            variant="text"
            size="default"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact our sales team →
          </Button>
        </motion.div>
        </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote: "ADmyBRAND AI Suite has completely transformed our marketing strategy. The AI-powered analytics helped us identify opportunities we never knew existed, resulting in a 300% increase in lead generation.",
      author: "Sarah Chen",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The automation capabilities are incredible. What used to take our team 20 hours per week now happens automatically. We've been able to scale our campaigns while reducing our workload significantly.",
      author: "Michael Rodriguez",
      company: "Growth Dynamics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The ROI has been phenomenal. Within 3 months, we saw a 250% return on our investment. The intelligent insights have helped us make data-driven decisions that actually move the needle.",
      author: "Emily Johnson",
      company: "Innovate Marketing Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "As a startup, we needed powerful marketing tools without the enterprise price tag. ADmyBRAND delivered exactly that. The platform is intuitive and the results speak for themselves.",
      author: "David Kim",
      company: "StartupBoost",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The customer support is outstanding. The team helped us set up custom workflows that perfectly matched our business needs. It's like having an AI marketing expert on our team 24/7.",
      author: "Lisa Thompson",
      company: "Digital Ventures",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by the
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of marketing professionals who have transformed their results 
            with our AI-powered platform. Here&apos;s what they have to say.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto pb-6 gap-6 lg:gap-8 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[340px] sm:w-[380px] lg:w-[420px] snap-center"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  company={testimonial.company}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 opacity-50"
              />
            ))}
          </div>

          {/* Gradient Overlays for Scroll Hint */}
          <div className="absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-600 mb-6">
            Ready to join these successful companies?
          </p>
          <Button
            variant="primary"
            size="default"
            className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial
          </Button>
        </motion.div>
    </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqData = [
    {
      question: "How does the AI-powered analytics work?",
      answer: "Our AI algorithms analyze your marketing data in real-time, identifying patterns, trends, and opportunities that human analysts might miss. The system learns from your specific business context and provides actionable insights to optimize your campaigns, improve targeting, and increase ROI."
    },
    {
      question: "What integrations are available?",
      answer: "We offer 100+ integrations with popular marketing tools including Google Analytics, Facebook Ads, LinkedIn, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our REST API also allows for custom integrations with your existing tech stack."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, absolutely. We use enterprise-grade security including AES-256 encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is stored in secure, geo-redundant data centers with strict access controls and regular security audits."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you'll retain access to all your data and reports."
    },
    {
      question: "Do you offer customer support?",
      answer: "We provide comprehensive support including 24/7 live chat, email support, extensive documentation, video tutorials, and webinars. Pro and Enterprise customers also get priority support and dedicated account managers."
    },
    {
      question: "What's included in the free trial?",
      answer: "Our 14-day free trial includes access to all Pro features with no limitations. You'll get full access to AI analytics, automation workflows, integrations, and customer support. No credit card required to start."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We&apos;ve got answers. Find everything you need to know 
            about our AI marketing platform below.
          </p>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Card className="bg-gray-50 border-0 shadow-lg">
            <div className="divide-y divide-gray-200">
              {faqData.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem
                    question={faq.question}
                    answer={faq.answer}
                  />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="default"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Contact Support
            </Button>
            <Button
              variant="text"
              size="default"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Documentation →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Section Component
const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/admybrand",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/admybrand",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/admybrand",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c0 2.208-1.789 3.997-3.997 3.997z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
          <path d="M12.004 0C5.373 0 0 5.373 0 12.004s5.373 12.004 12.004 12.004 12.004-5.373 12.004-12.004S18.634.001 12.004.001zM18.06 16.61c-1.149.993-2.607 1.526-4.056 1.526-1.449 0-2.907-.533-4.056-1.526C8.798 15.668 8.249 14.418 8.249 13c0-1.418.549-2.668 1.699-3.61 1.149-.993 2.607-1.526 4.056-1.526s2.907.533 4.056 1.526c1.15.942 1.699 2.192 1.699 3.61 0 1.418-.549 2.668-1.699 3.61z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ADmyBRAND AI Suite
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
              Revolutionize your marketing with our comprehensive AI-powered platform. 
              Automate workflows, analyze data, and drive growth with intelligent insights 
              tailored for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
          target="_blank"
          rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Email us at:</p>
                <a
                  href="mailto:hello@admybrand.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm hover:underline"
                >
                  hello@admybrand.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Sales inquiries:</p>
                <a
                  href="mailto:sales@admybrand.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm hover:underline"
                >
                  sales@admybrand.com
                </a>
              </div>
              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="default"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm text-sm"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} ADmyBRAND AI Suite. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
  );
}
