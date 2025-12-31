import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const SimpleLoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a bit before hiding the loading screen
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // Wait for fade out animation
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Mohammad<span className="text-blue-500">Hameed Khan</span>
          </h1>
          <p className="text-xl text-gray-300 opacity-80">
            Python Developer & Full Stack Engineer
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              />
            ))}
          </div>
          <p className="text-gray-400 text-sm">Loading portfolio...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-blue-400 font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Messages */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm h-6">
            {progress < 25 && "Initializing components..."}
            {progress >= 25 && progress < 50 && "Loading skills and experience..."}
            {progress >= 50 && progress < 75 && "Setting up animations..."}
            {progress >= 75 && progress < 100 && "Almost ready..."}
            {progress >= 100 && "Welcome! 🚀"}
          </p>
        </div>
      </div>

      {/* Fade out animation - using global styles instead of jsx */}
    </div>
  );
};

export default SimpleLoadingScreen;