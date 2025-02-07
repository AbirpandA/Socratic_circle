import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  login logic here
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      {/* Main Container */}
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif text-stone-800">The Gilded Gallery</h1>
          <p className="text-stone-600 italic font-serif">
            "Beauty in simplicity, wisdom in restraint"
          </p>
        </div>

        {/* Decorative Element - Inspired by Renaissance medallions */}
        <div className="flex justify-center">
          <div className="w-24 h-24 border-2 border-stone-300 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 border border-stone-400 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-stone-600" />
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-12 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-12 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-200 font-medium"
          >
            Enter the Gallery
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center space-y-4">
          <a href="#" className="block text-stone-600 hover:text-red-400 text-sm">
            Forgot your password?
          </a>
          <div className="text-stone-400 text-sm">
            New to The Gilded Gallery?{' '}
            <a href="#" className="text-stone-600 hover:text-stone-800">
              Create an account
            </a>
          </div>
        </div>

        {/* Stoic Quote */}
        <div className="text-center text-stone-500 text-sm italic font-serif">
          "The excellence of the soul is understanding: for this is proper to it."
          <br />
          — Marcus Aurelius
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;