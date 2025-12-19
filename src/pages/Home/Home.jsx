import React from 'react'

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8 md:p-12">
        {/* Top Section - Full Body Drawing and Text */}
        <div className="mb-8 flex flex-col md:flex-row items-start gap-6">
          {/* Character Drawing Area */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-48 md:w-40 md:h-60">
              {/* Character Silhouette - Full Body */}
              <svg viewBox="0 0 200 300" className="w-full h-full">
                {/* Body/Kimono */}
                <ellipse cx="100" cy="200" rx="45" ry="80" fill="#f8a5c2" className="dark:fill-pink-400" />
                {/* Sash */}
                <rect x="75" y="180" width="50" height="15" fill="#c44569" className="dark:fill-pink-600" />
                {/* Head */}
                <circle cx="100" cy="80" r="35" fill="#ffeaa7" className="dark:fill-yellow-200" />
                {/* Hair - Bob cut with bangs */}
                <path d="M 65 80 Q 65 50, 100 50 Q 135 50, 135 80 Q 135 100, 120 110 L 80 110 Q 65 100, 65 80" 
                      fill="#2d3436" className="dark:fill-gray-800" />
                {/* Bangs */}
                <path d="M 70 80 Q 75 60, 100 60 Q 125 60, 130 80" 
                      fill="#2d3436" className="dark:fill-gray-800" />
                {/* Glasses */}
                <circle cx="90" cy="85" r="12" fill="none" stroke="#2d3436" strokeWidth="2" className="dark:stroke-gray-800" />
                <circle cx="110" cy="85" r="12" fill="none" stroke="#2d3436" strokeWidth="2" className="dark:stroke-gray-800" />
                <line x1="102" y1="85" x2="98" y2="85" stroke="#2d3436" strokeWidth="2" className="dark:stroke-gray-800" />
                {/* Smile */}
                <path d="M 85 100 Q 100 110, 115 100" 
                      fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" className="dark:stroke-gray-800" />
                {/* Arms */}
                <ellipse cx="70" cy="160" rx="8" ry="25" fill="#ffeaa7" className="dark:fill-yellow-200" />
                <ellipse cx="130" cy="160" rx="8" ry="25" fill="#ffeaa7" className="dark:fill-yellow-200" />
                {/* Feet */}
                <ellipse cx="90" cy="280" rx="8" ry="5" fill="#2d3436" className="dark:fill-gray-800" />
                <ellipse cx="110" cy="280" rx="8" ry="5" fill="#2d3436" className="dark:fill-gray-800" />
              </svg>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white" 
                style={{ fontFamily: 'cursive' }}>
              Imina Japan
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1"
                style={{ fontFamily: 'cursive' }}>
              Amane
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300" style={{ fontFamily: 'serif' }}>
              (ぬまね)
            </p>
          </div>
        </div>

        {/* Middle Section - Circular Headshots */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Black and White Headshot */}
          <div className="relative">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#2d3436" strokeWidth="3" className="dark:stroke-gray-300" />
                {/* Head */}
                <circle cx="100" cy="100" r="60" fill="#ffeaa7" className="dark:fill-yellow-200" />
                {/* Hair */}
                <path d="M 50 100 Q 50 60, 100 60 Q 150 60, 150 100 Q 150 130, 130 140 L 70 140 Q 50 130, 50 100" 
                      fill="#2d3436" className="dark:fill-gray-800" />
                <path d="M 55 100 Q 60 75, 100 75 Q 140 75, 145 100" 
                      fill="#2d3436" className="dark:fill-gray-800" />
                {/* Glasses */}
                <circle cx="85" cy="105" r="15" fill="none" stroke="#2d3436" strokeWidth="2.5" className="dark:stroke-gray-800" />
                <circle cx="115" cy="105" r="15" fill="none" stroke="#2d3436" strokeWidth="2.5" className="dark:stroke-gray-800" />
                <line x1="100" y1="105" x2="95" y2="105" stroke="#2d3436" strokeWidth="2.5" className="dark:stroke-gray-800" />
                {/* Smile */}
                <path d="M 80 125 Q 100 135, 120 125" 
                      fill="none" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" className="dark:stroke-gray-800" />
              </svg>
            </div>
            {/* Swirling line and text */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="60" className="overflow-visible">
                <path d="M 100 0 Q 120 20, 100 40" 
                      fill="none" stroke="#2d3436" strokeWidth="2" className="dark:stroke-gray-300" />
              </svg>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2 text-center"
                 style={{ fontFamily: 'cursive' }}>
                Amane
              </p>
            </div>
          </div>

          {/* Colored Headshot */}
          <div className="relative">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Pink background circle */}
                <circle cx="100" cy="100" r="95" fill="#f8a5c2" className="dark:fill-pink-400" />
                {/* Light blue border */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="#74b9ff" strokeWidth="2" className="dark:stroke-blue-400" />
                {/* Head */}
                <circle cx="100" cy="100" r="60" fill="#ffeaa7" className="dark:fill-yellow-200" />
                {/* Hair */}
                <path d="M 50 100 Q 50 60, 100 60 Q 150 60, 150 100 Q 150 130, 130 140 L 70 140 Q 50 130, 50 100" 
                      fill="#2d3436" className="dark:fill-gray-800" />
                <path d="M 55 100 Q 60 75, 100 75 Q 140 75, 145 100" 
                      fill="#2d3436" className="dark:fill-gray-800" />
                {/* Glasses */}
                <circle cx="85" cy="105" r="15" fill="none" stroke="#2d3436" strokeWidth="2.5" className="dark:stroke-gray-800" />
                <circle cx="115" cy="105" r="15" fill="none" stroke="#2d3436" strokeWidth="2.5" className="dark:stroke-gray-800" />
                <line x1="100" y1="105" x2="95" y2="105" stroke="#2d3436" strokeWidth="2.5" className="dark:stroke-gray-800" />
                {/* Lips */}
                <path d="M 85 125 Q 100 130, 115 125" 
                      fill="#e17055" className="dark:fill-pink-500" />
                {/* Smile */}
                <path d="M 80 125 Q 100 135, 120 125" 
                      fill="none" stroke="#2d3436" strokeWidth="1.5" strokeLinecap="round" className="dark:stroke-gray-800" />
              </svg>
            </div>
            {/* Swirling line and text */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="60" className="overflow-visible">
                <path d="M 100 0 Q 120 20, 100 40" 
                      fill="none" stroke="#2d3436" strokeWidth="2" className="dark:stroke-gray-300" />
              </svg>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2 text-center"
                 style={{ fontFamily: 'cursive' }}>
                Amane
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Mixed Media Artwork */}
        <div className="relative mt-16">
          <div className="relative bg-green-500 dark:bg-green-600 rounded-lg p-4 md:p-6 overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, #00b894 0%, #00a085 100%)',
                 boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
               }}>
            {/* Silver foil texture effect */}
            <div className="absolute inset-0 opacity-30"
                 style={{
                   backgroundImage: `
                     repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px),
                     repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)
                   `
                 }}>
            </div>
            
            {/* Red Circle with Gold Leaf */}
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-600 dark:bg-red-700"
                   style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3)' }}>
                {/* Gold leaf pieces */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-sm"
                      style={{
                        width: `${Math.random() * 15 + 5}px`,
                        height: `${Math.random() * 15 + 5}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
                        transform: `rotate(${Math.random() * 360}deg)`,
                        opacity: 0.7,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* 3D Character Head */}
              <div className="relative z-10 transform translate-y-[-10px]"
                   style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}>
                <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-40 md:h-40">
                  {/* Head */}
                  <circle cx="100" cy="100" r="70" fill="#ffeaa7" className="dark:fill-yellow-200" />
                  {/* Hair */}
                  <path d="M 40 100 Q 40 50, 100 50 Q 160 50, 160 100 Q 160 140, 140 150 L 60 150 Q 40 140, 40 100" 
                        fill="#2d3436" className="dark:fill-gray-800" />
                  <path d="M 45 100 Q 50 70, 100 70 Q 150 70, 155 100" 
                        fill="#2d3436" className="dark:fill-gray-800" />
                  {/* Black Sunglasses */}
                  <ellipse cx="85" cy="105" rx="20" ry="18" fill="#2d3436" className="dark:fill-gray-900" />
                  <ellipse cx="115" cy="105" rx="20" ry="18" fill="#2d3436" className="dark:fill-gray-900" />
                  <rect x="95" y="97" width="20" height="16" fill="#2d3436" className="dark:fill-gray-900" />
                  {/* Bridge */}
                  <rect x="95" y="105" width="10" height="3" fill="#2d3436" className="dark:fill-gray-900" />
                  {/* Lips */}
                  <ellipse cx="100" cy="135" rx="12" ry="6" fill="#c44569" className="dark:fill-pink-600" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
