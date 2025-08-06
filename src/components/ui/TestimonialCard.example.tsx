import React from 'react';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';

// Example usage of the TestimonialCard component
const TestimonialCardExamples: React.FC = () => {
  const testimonials = [
    {
      quote: "This AI suite has completely transformed how we approach customer service. The automation features have saved us countless hours while improving customer satisfaction.",
      author: "Sarah Johnson",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The integration was seamless and the results were immediate. Our team productivity increased by 40% in the first month alone.",
      author: "Michael Chen",
      company: "InnovateNow Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Outstanding support and incredibly powerful features. This platform has become an essential part of our daily operations.",
      author: "Emily Rodriguez",
      company: "StartupVentures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The AI insights have helped us make better business decisions. We've seen a 25% increase in conversion rates since implementation.",
      author: "David Kim",
      company: "Growth Analytics Pro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Simple to use yet incredibly powerful. The learning curve was minimal and the impact was immediate.",
      author: "Lisa Thompson",
      company: "Digital Solutions Hub",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Exceptional value for money. The ROI we've seen in just three months has exceeded all our expectations.",
      author: "Robert Martinez",
      company: "Efficiency First Co.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="p-8 space-y-8 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">TestimonialCard Component Examples</h2>
      
      {/* Single Testimonial */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Single Testimonial</h3>
        <div className="max-w-lg">
          <TestimonialCard
            quote="This AI suite has completely transformed how we approach customer service. The automation features have saved us countless hours."
            author="Sarah Johnson"
            company="TechCorp Solutions"
            image="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face"
          />
        </div>
      </div>

      {/* Carousel-style Grid (2 columns) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Two Column Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>

      {/* Three Column Grid (Carousel-style) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Three Column Carousel Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>

      {/* Full Width Showcase */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Full Width Showcase</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Simulation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Horizontal Scroll Layout (Mobile Optimized)</h3>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div key={index} className="flex-none w-80 md:w-96">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Featured Testimonial (Larger) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Featured Testimonial</h3>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <blockquote className="text-gray-800 text-xl md:text-2xl italic leading-relaxed mb-6">
                  &ldquo;The AI insights have helped us make better business decisions. We&apos;ve seen a 25% increase in conversion rates since implementation. This platform has truly revolutionized our approach to data-driven decision making.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                      alt="David Kim profile picture"
                      className="rounded-full object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">
                      David Kim
                    </h4>
                    <p className="text-gray-600">
                      CEO, Growth Analytics Pro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Different Quotes Lengths Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Variable Quote Lengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Great product!"
            author="John Doe"
            company="QuickStart LLC"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
          />
          <TestimonialCard
            quote="This has been an amazing experience working with this platform. Highly recommend it to anyone looking for efficiency."
            author="Jane Smith"
            company="MidRange Solutions"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
          />
          <TestimonialCard
            quote="Absolutely phenomenal service and support. The team went above and beyond to ensure our success. The integration process was smooth, the features are powerful, and the results have exceeded our expectations in every way. We couldn't be happier with our decision to choose this platform."
            author="Alex Johnson"
            company="Enterprise Solutions Corp"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardExamples;