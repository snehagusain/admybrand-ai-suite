import React from 'react';
import Button from './Button';

// Example usage of the Button component
const ButtonExamples: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="default">
            Default Primary
          </Button>
          <Button variant="primary" size="sm">
            Small Primary
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Secondary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="default">
            Default Secondary
          </Button>
          <Button variant="secondary" size="sm">
            Small Secondary
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Text Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="text" size="default">
            Default Text
          </Button>
          <Button variant="text" size="sm">
            Small Text
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Click Handlers</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            onClick={() => alert('Primary clicked!')}
          >
            Click Me
          </Button>
          <Button 
            variant="secondary" 
            type="submit"
            onClick={() => alert('Form submitted!')}
          >
            Submit Form
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
          <Button variant="text" disabled>
            Disabled Text
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples;