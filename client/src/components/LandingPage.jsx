// frontend/src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ onNavigateToMatches }) => {
  const [currentStat, setCurrentStat] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/matches');
  };
  
  const stats = [
    { number: '250+', label: 'Leagues Covered' },
    { number: '10K+', label: 'Matches Monthly' },
    { number: '1M+', label: 'Football Fans' },
    { number: '24/7', label: 'Live Updates' }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Real-Time Updates',
      description: 'Get instant notifications about match schedules, scores, and important events.'
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Follow matches from Premier League, La Liga, Champions League, and 200+ competitions worldwide.'
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Perfect experience across all devices - desktop, tablet, and mobile.'
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Never miss your favorite team\'s matches with intelligent reminder system.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-3 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-xl">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Soccer Hub</h1>
              <p className="text-purple-200 text-sm">Your Football Universe</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-white hover:text-purple-200 transition-colors">Features</a>
            <a href="#about" className="text-white hover:text-purple-200 transition-colors">About</a>
            <button 
              onClick={handleClick}
              className="bg-white bg-opacity-20 backdrop-blur-lg text-black px-6 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
            >
              View Matches
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block bg-white bg-opacity-20 backdrop-blur-lg text-black px-4 py-2 rounded-full text-sm font-medium border border-white border-opacity-30">
              🔥 Live Now: 15 Matches in Progress
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Never Miss a
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Football Moment
            </span>
          </h1>
          
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the world's most comprehensive football platform. Get real-time updates, 
            detailed match information, and never miss your favorite team's next game.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={handleClick}
              className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View All Matches</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="bg-white bg-opacity-10 backdrop-blur-lg text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30">
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Watch Demo</span>
              </span>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 transition-all duration-500 ${
                  currentStat === index ? 'transform scale-105 bg-opacity-20' : ''
                }`}
              >
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-purple-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 bg-white bg-opacity-5 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Soccer Hub?</h2>
            <p className="text-xl text-purple-600 max-w-2xl mx-auto">
              Discover the features that make us the ultimate destination for football enthusiasts worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-purple-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Dive into Football?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join millions of football fans who trust Soccer Hub for the latest match updates, 
              scores, and comprehensive coverage of the beautiful game.
            </p>
            <button 
              onClick={handleClick}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Matches Now →
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default LandingPage;