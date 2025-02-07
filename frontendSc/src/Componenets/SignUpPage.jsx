import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post("http://localhost:3000/api/users/register", {
        username,
        email,
        password,
      });

      console.log(response.data);
      navigate('/login'); // Redirect to login page after successful sign-up
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="w-full max-w-md p-8 space-y-8">
        {error && <div className="text-red-500 text-center">{error}</div>}
        <h1 className="text-4xl font-serif text-stone-800">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
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
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-12 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-200 font-medium"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center space-y-4">
          <p className="text-stone-400 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-stone-600 hover:text-stone-800">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;