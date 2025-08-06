import React from 'react';
import Image from 'next/image';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  image
}) => {
  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-xl h-full flex flex-col justify-between">
      {/* Quote Section */}
      <div className="mb-6">
        <blockquote className="text-gray-800 text-lg md:text-xl italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      
      {/* Author Section */}
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
          <Image
            src={image}
            alt={`${author} profile picture`}
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 48px, 56px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-gray-900 font-semibold text-base md:text-lg truncate">
            {author}
          </h4>
          <p className="text-gray-600 text-sm md:text-base truncate">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;