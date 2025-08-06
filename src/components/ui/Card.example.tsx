import React from 'react';
import Card from './Card';
import Button from './Button';

// Example usage of the Card component
const CardExamples: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Card Component Examples</h2>
      
      {/* Basic Card */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Basic Card</h3>
        <Card>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Welcome Card</h4>
          <p className="text-gray-600">
            This is a basic card component with some sample content. It has a clean, 
            modern design with rounded corners and a subtle shadow.
          </p>
        </Card>
      </div>

      {/* Interactive Card */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Interactive Card (Clickable)</h3>
        <Card onClick={() => alert('Card clicked!')}>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Click Me!</h4>
          <p className="text-gray-600">
            This card is interactive and has enhanced hover effects including scaling 
            and enhanced shadow when you hover over it.
          </p>
          <div className="mt-4 text-blue-600 font-medium">
            → Click anywhere on this card
          </div>
        </Card>
      </div>

      {/* Card with Custom Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Card with Complex Content</h3>
        <Card>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-800 mb-2">AI Suite Dashboard</h4>
              <p className="text-gray-600 mb-4">
                Manage your AI-powered tools and analytics from this centralized dashboard.
              </p>
              <div className="flex space-x-3">
                <Button variant="primary" size="sm">
                  Open Dashboard
                </Button>
                <Button variant="secondary" size="sm">
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Grid of Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Grid Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card onClick={() => alert('Feature 1 clicked!')}>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Feature 1</h4>
            <p className="text-gray-600">Description of the first feature.</p>
          </Card>
          <Card onClick={() => alert('Feature 2 clicked!')}>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Feature 2</h4>
            <p className="text-gray-600">Description of the second feature.</p>
          </Card>
          <Card onClick={() => alert('Feature 3 clicked!')}>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Feature 3</h4>
            <p className="text-gray-600">Description of the third feature.</p>
          </Card>
        </div>
      </div>

      {/* Card with Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Card with Custom Classes</h3>
        <Card className="border-l-4 border-green-500 bg-green-50">
          <h4 className="text-xl font-bold text-green-800 mb-2">Success Message</h4>
          <p className="text-green-700">
            This card uses custom classes to create a success message variant 
            with a green accent border and background.
          </p>
        </Card>
      </div>

      {/* Responsive Card Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Responsive Content</h3>
        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Responsive Layout</h4>
              <p className="text-gray-600">
                This card adapts its internal layout based on screen size.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <Button variant="primary" size="sm">
                Action 1
              </Button>
              <Button variant="secondary" size="sm">
                Action 2
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardExamples;