import React, { useState, useRef } from 'react';
import Input from './Input';
import Button from './Button';
import Card from './Card';

// Example usage of the Input component
const InputExamples: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setHasEmailError(value.length > 0 && !validateEmail(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setHasPasswordError(value.length > 0 && value.length < 6);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Input Component Examples</h2>
      
      {/* Basic Inputs */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Basic Input States</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Normal Input
            </label>
            <Input 
              placeholder="Enter your name..."
              type="text"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input with Value
            </label>
            <Input 
              value="John Doe"
              type="text"
              readOnly
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Disabled Input
            </label>
            <Input 
              placeholder="This input is disabled"
              disabled
            />
          </div>
        </div>
      </Card>

      {/* Error States */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Error States</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input with Error
            </label>
            <Input 
              placeholder="This input has an error"
              error={true}
            />
            <p className="mt-1 text-sm text-red-600">This field is required.</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input without Error
            </label>
            <Input 
              placeholder="This input is valid"
              error={false}
            />
            <p className="mt-1 text-sm text-green-600">Looks good!</p>
          </div>
        </div>
      </Card>

      {/* Interactive Form Example */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Interactive Form Validation</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input 
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={handleEmailChange}
              error={hasEmailError}
            />
            {hasEmailError && (
              <p className="mt-1 text-sm text-red-600">Please enter a valid email address.</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <Input 
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={handlePasswordChange}
              error={hasPasswordError}
            />
            {hasPasswordError && (
              <p className="mt-1 text-sm text-red-600">Password must be at least 6 characters long.</p>
            )}
          </div>
          
          <Button 
            variant="primary" 
            disabled={hasEmailError || hasPasswordError || !email || !password}
            className="w-full"
          >
            Sign In
          </Button>
        </div>
      </Card>

      {/* Different Input Types */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Different Input Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input 
              type="email"
              placeholder="example@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <Input 
              type="tel"
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <Input 
              type="date"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number
            </label>
            <Input 
              type="number"
              placeholder="Enter a number"
              min="0"
              max="100"
            />
          </div>
        </div>
      </Card>

      {/* Custom Styling and Ref Usage */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Custom Styling & Ref Usage</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input with Custom Classes
            </label>
            <Input 
              ref={inputRef}
              placeholder="This input has custom styling"
              className="bg-blue-50 border-blue-200 focus:bg-blue-100"
            />
          </div>
          
          <Button 
            variant="secondary" 
            onClick={focusInput}
            size="sm"
          >
            Focus Input Above
          </Button>
        </div>
      </Card>

      {/* Search and Filter Examples */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Search & Filter Inputs</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <Input 
              type="search"
              placeholder="Search for anything..."
              className="pl-10"
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"%236b7280\" viewBox=\"0 0 16 16\"><path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: '12px center' }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Category
            </label>
            <Input 
              placeholder="Type to filter categories..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InputExamples;