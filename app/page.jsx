'use client';

import { useState, useRef, useEffect } from 'react';

export default function VintageValentineProposal() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const [recipientName, setRecipientName] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const noButtonRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get('name');
    if (nameParam) {
      setRecipientName(decodeURIComponent(nameParam));
      setNameSubmitted(true);
    }
  }, []);

  const moveNoButton = () => {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    setNoPosition({ x: randomX, y: randomY });
    setClickCount(clickCount + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setRecipientName(searchInput);
      setNameSubmitted(true);
      setSearchInput('');
      window.history.pushState({}, '', `?name=${encodeURIComponent(searchInput)}`);
    }
  };

  const funnyMessages = [
    "Nice try! 😏",
    "Oh come on! 💕",
    "You almost got it! 😂",
    "Seriously? 🥺",
    "Is that a yes? 👀",
    "Stop running away! 😉",
    "Give in to love! ❤️",
  ];

  // Floating background flowers and decorations
  const FloatingFlowers = () => {
    const flowers = ['🌹', '🌸', '🌺', '💐', '🌻', '🌷', '💕', '💖', '✨', '🌼'];
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatFlower ${8 + Math.random() * 12}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'drop-shadow(0 4px 8px rgba(163, 127, 111, 0.2))',
            }}
          >
            {flowers[Math.floor(Math.random() * flowers.length)]}
          </div>
        ))}
      </div>
    );
  };

  // Botanical SVG decorations
  const BotanicalLeaves = () => (
    <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none">
      {/* Top left flowers */}
      <g opacity="0.6">
        <circle cx="80" cy="40" r="3" fill="#d4956a"/>
        <circle cx="75" cy="45" r="3" fill="#e8b89e"/>
        <circle cx="85" cy="45" r="3" fill="#d4956a"/>
        <line x1="80" y1="50" x2="80" y2="70" stroke="#9ab896" strokeWidth="2"/>
      </g>
      
      {/* Top right flowers */}
      <g opacity="0.6">
        <circle cx="1100" cy="60" r="3" fill="#d4956a"/>
        <circle cx="1095" cy="65" r="3" fill="#e8b89e"/>
        <circle cx="1105" cy="65" r="3" fill="#d4956a"/>
        <line x1="1100" y1="70" x2="1100" y2="90" stroke="#9ab896" strokeWidth="2"/>
      </g>

      {/* Bottom left botanical pattern */}
      <g opacity="0.7">
        <line x1="50" y1="750" x2="70" y2="710" stroke="#9ab896" strokeWidth="1.5"/>
        <circle cx="60" cy="730" r="2" fill="#e8a87c"/>
        <circle cx="55" cy="720" r="2" fill="#d4956a"/>
        <circle cx="65" cy="720" r="2" fill="#e8a87c"/>
      </g>

      {/* Bottom center botanical pattern */}
      <g opacity="0.7">
        <line x1="300" y1="780" x2="320" y2="740" stroke="#9ab896" strokeWidth="1.5"/>
        <circle cx="310" cy="760" r="2" fill="#e8a87c"/>
        <circle cx="305" cy="750" r="2" fill="#d4956a"/>
        <circle cx="315" cy="750" r="2" fill="#e8a87c"/>
        
        <line x1="330" y1="785" x2="350" y2="745" stroke="#9ab896" strokeWidth="1.5"/>
        <circle cx="340" cy="765" r="2" fill="#e8a87c"/>
      </g>

      {/* Bottom right botanical pattern */}
      <g opacity="0.7">
        <line x1="1000" y1="775" x2="1050" y2="720" stroke="#9ab896" strokeWidth="1.5"/>
        <circle cx="1025" cy="747" r="2" fill="#e8a87c"/>
        <circle cx="1015" cy="735" r="2" fill="#d4956a"/>
        <circle cx="1035" cy="735" r="2" fill="#e8a87c"/>
      </g>
    </svg>
  );

  if (yesClicked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #fef5e7 0%, #fff9f0 50%, #fef5e7 100%)' }}>
        {/* Confetti */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animation: `confetti ${2 + Math.random() * 3}s linear forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
                fontSize: `${20 + Math.random() * 25}px`,
              }}
            >
              {['💕', '🌹', '✨', '🌸'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>

        <div className="text-center z-10 animate-fadeIn max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#a37f6f', fontFamily: 'Georgia, serif' }}>
            Yes! 💕
          </h1>
          <p className="text-2xl md:text-3xl mb-6" style={{ color: '#b5826f', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            {recipientName && `Oh ${recipientName},`} you've made me the happiest person alive!
          </p>
          
          <div className="my-8 space-y-4">
            <p className="text-lg" style={{ color: '#8b7d6f', fontFamily: 'Georgia, serif' }}>
              You are my soulmate and my forever love 💖
            </p>
            <p className="text-lg" style={{ color: '#a37f6f', fontFamily: 'Georgia, serif' }}>
              Every moment with you is a blessing 🌹
            </p>
            <p className="text-lg" style={{ color: '#8b7d6f', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              You complete my heart in every way ✨
            </p>
            <p className="text-lg" style={{ color: '#a37f6f', fontFamily: 'Georgia, serif' }}>
              Together, we are unstoppable 💕
            </p>
          </div>

          <p className="text-2xl mt-10" style={{ color: '#8b9d6f', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Forever yours... 🌺
          </p>
        </div>

        <style jsx>{`
          @keyframes confetti {
            to {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #fef5e7 0%, #fff9f0 50%, #fef5e7 100%)' }}>
      <FloatingFlowers />
      <BotanicalLeaves />

      {/* Name input modal */}
      {!nameSubmitted ? (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md mx-4 animate-fadeIn border-4" style={{ borderColor: '#c9a574' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#a37f6f', fontFamily: 'Georgia, serif' }}>
              Who's this for?
            </h2>
            <p className="text-center mb-6" style={{ color: '#8b7d6f', fontFamily: 'Georgia, serif' }}>
              Enter the name of your special someone
            </p>
            
            <form onSubmit={handleNameSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter their name..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-6 py-3 border-2 rounded-xl focus:outline-none transition-all text-lg"
                style={{ borderColor: '#c9a574', color: '#5a5a5a' }}
                onFocus={(e) => e.target.style.borderColor = '#a37f6f'}
                autoFocus
              />
              
              <button
                type="submit"
                className="w-full px-6 py-3 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#a37f6f' }}
              >
                Continue 💕
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Creative A & M Monogram with pets */}
        <div className="mb-12 flex justify-center relative">
          <div className="relative">
            {/* A & M Monogram above - centered */}
            <div className="text-center mb-6">
              <p className="text-4xl font-bold" style={{ color: '#d4956a', fontFamily: 'Georgia, serif', letterSpacing: '8px' }}>
                A  💕  M
              </p>
              <p className="text-sm mt-2" style={{ color: '#a37f6f', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Together Forever
              </p>
            </div>

            {/* Large decorative letters in background */}
            <div className="absolute -left-24 -top-8 text-9xl font-bold opacity-10" style={{ color: '#e8a87c', fontFamily: 'Georgia, serif' }}>
              A
            </div>
            <div className="absolute -right-24 -top-8 text-9xl font-bold opacity-10" style={{ color: '#e8a87c', fontFamily: 'Georgia, serif' }}>
              M
            </div>

            {/* SVG with Realistic Cat and Pug */}
            <svg width="320" height="280" viewBox="0 0 320 280" className="drop-shadow-xl relative z-10" style={{ filter: 'drop-shadow(0 15px 35px rgba(163, 127, 111, 0.3))' }}>
              {/* Heart background */}
              <path d="M160 270 C95 220, 50 170, 50 120 C50 85, 75 60, 105 60 C125 60, 145 70, 160 85 C175 70, 195 60, 215 60 C245 60, 270 85, 270 120 C270 170, 225 220, 160 270 Z" fill="#e8a87c" opacity="0.25" style={{ filter: 'drop-shadow(0 0 15px rgba(232, 168, 124, 0.3))' }}/>
              
              {/* FLUFFY GRAY-WHITE CAT - Left side */}
              <g>
                {/* Fluffy body with gray patches */}
                <ellipse cx="90" cy="150" rx="30" ry="40" fill="#e8e8e8"/>
                <ellipse cx="85" cy="145" rx="8" ry="12" fill="#b0b0b0" opacity="0.6"/>
                <ellipse cx="100" cy="165" rx="7" ry="10" fill="#b0b0b0" opacity="0.5"/>
                
                {/* Fluffy head - gray and white */}
                <circle cx="90" cy="90" r="24" fill="#e8e8e8"/>
                <ellipse cx="85" cy="85" rx="12" ry="15" fill="#a0a0a0" opacity="0.5"/>
                <ellipse cx="100" cy="88" rx="10" ry="13" fill="#b0b0b0" opacity="0.4"/>
                
                {/* Fluffy ears - pointed */}
                <ellipse cx="72" cy="62" rx="9" ry="18" fill="#e8e8e8" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}/>
                <ellipse cx="108" cy="62" rx="9" ry="18" fill="#e8e8e8" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}/>
                
                {/* Inner ears - pink */}
                <ellipse cx="72" cy="70" rx="4" ry="8" fill="#ffb3c1" opacity="0.8"/>
                <ellipse cx="108" cy="70" rx="4" ry="8" fill="#ffb3c1" opacity="0.8"/>
                
                {/* Big round eyes - cat eyes */}
                <circle cx="80" cy="85" r="5" fill="#5fb3d5"/>
                <circle cx="100" cy="85" r="5" fill="#5fb3d5"/>
                
                {/* Pupils - vertical slits */}
                <ellipse cx="80" cy="86" rx="1.5" ry="3" fill="#1a1a1a"/>
                <ellipse cx="100" cy="86" rx="1.5" ry="3" fill="#1a1a1a"/>
                
                {/* Eye shine */}
                <circle cx="81" cy="83" r="1" fill="#ffffff"/>
                <circle cx="101" cy="83" r="1" fill="#ffffff"/>
                
                {/* Nose - pink triangle */}
                <polygon points="90,98 87,103 93,103" fill="#ffb3c1"/>
                
                {/* Mouth - cute cat expression */}
                <path d="M90 103 Q87 107, 84 105" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                <path d="M90 103 Q93 107, 96 105" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                
                {/* Whiskers - long and delicate */}
                <line x1="65" y1="88" x2="45" y2="85" stroke="#888888" strokeWidth="0.8" opacity="0.7"/>
                <line x1="65" y1="95" x2="45" y2="98" stroke="#888888" strokeWidth="0.8" opacity="0.7"/>
                <line x1="65" y1="102" x2="48" y2="108" stroke="#888888" strokeWidth="0.8" opacity="0.7"/>
                
                <line x1="115" y1="88" x2="135" y2="85" stroke="#888888" strokeWidth="0.8" opacity="0.7"/>
                <line x1="115" y1="95" x2="135" y2="98" stroke="#888888" strokeWidth="0.8" opacity="0.7"/>
                <line x1="115" y1="102" x2="132" y2="108" stroke="#888888" strokeWidth="0.8" opacity="0.7"/>
                
                {/* Front paws - fluffy */}
                <ellipse cx="78" cy="185" rx="8" ry="22" fill="#e8e8e8"/>
                <ellipse cx="102" cy="185" rx="8" ry="22" fill="#e8e8e8"/>
                
                {/* Paw pads - soft pink */}
                <ellipse cx="78" cy="205" rx="5" ry="4" fill="#ffb3c1" opacity="0.7"/>
                <ellipse cx="102" cy="205" rx="5" ry="4" fill="#ffb3c1" opacity="0.7"/>
                
                {/* Fluffy tail - curved */}
                <path d="M 65 155 Q 40 145, 35 110 Q 33 90, 45 95" stroke="#d0d0d0" strokeWidth="10" fill="none" strokeLinecap="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}/>
              </g>
              
              {/* CUTE PUG DOG - Right side */}
              <g>
                {/* Fluffy tan body */}
                <ellipse cx="230" cy="150" rx="33" ry="42" fill="#c4a574"/>
                
                {/* Chest - lighter tan */}
                <ellipse cx="230" cy="160" rx="18" ry="25" fill="#d4b896" opacity="0.8"/>
                
                {/* Head - round and cute */}
                <circle cx="230" cy="88" r="26" fill="#c4a574"/>
                
                {/* Floppy ears - brown */}
                <ellipse cx="208" cy="70" rx="12" ry="20" fill="#8b6f47"/>
                <ellipse cx="252" cy="70" rx="12" ry="20" fill="#8b6f47"/>
                
                {/* Snout - pug characteristic short snout */}
                <circle cx="230" cy="105" r="15" fill="#b5956e"/>
                
                {/* Nose - wide pug nose */}
                <ellipse cx="230" cy="108" rx="5" ry="4" fill="#3d2817"/>
                
                {/* Nostrils */}
                <circle cx="226" cy="109" r="1.5" fill="#2c1810"/>
                <circle cx="234" cy="109" r="1.5" fill="#2c1810"/>
                
                {/* Big round eyes - pug style */}
                <circle cx="218" cy="92" r="5" fill="#2c1810"/>
                <circle cx="242" cy="92" r="5" fill="#2c1810"/>
                
                {/* Eye shine - bright and cute */}
                <circle cx="219" cy="90" r="1.8" fill="#ffffff"/>
                <circle cx="243" cy="90" r="1.8" fill="#ffffff"/>
                
                {/* Mouth - pug smile/frown */}
                <path d="M230 112 Q225 120, 220 118" stroke="#3d2817" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M230 112 Q235 120, 240 118" stroke="#3d2817" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                
                {/* Tongue - tiny pink */}
                <ellipse cx="230" cy="122" rx="2" ry="1.5" fill="#ffb3c1"/>
                
                {/* Front paws - stocky pug paws */}
                <rect x="214" y="185" width="10" height="24" rx="5" fill="#c4a574"/>
                <rect x="236" y="185" width="10" height="24" rx="5" fill="#c4a574"/>
                
                {/* Paw pads */}
                <ellipse cx="219" cy="207" rx="4" ry="3" fill="#8b6f47" opacity="0.8"/>
                <ellipse cx="241" cy="207" rx="4" ry="3" fill="#8b6f47" opacity="0.8"/>
                
                {/* Curly pug tail */}
                <path d="M 265 148 Q 285 135, 290 115 Q 292 95, 280 100 Q 275 103, 270 110" stroke="#c4a574" strokeWidth="9" fill="none" strokeLinecap="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}/>
              </g>
              
              {/* Hearts and decorations */}
              <g opacity="0.85">
                {/* Top hearts */}
                <text x="55" y="45" fontSize="24" fill="#e8a87c">💕</text>
                <text x="255" y="45" fontSize="24" fill="#e8a87c">💕</text>
                
                {/* Side hearts */}
                <text x="25" y="145" fontSize="20" fill="#d4956a">💖</text>
                <text x="290" y="145" fontSize="20" fill="#d4956a">💖</text>
                
                {/* Sparkles */}
                <text x="50" y="190" fontSize="16" fill="#f4d4a0">✨</text>
                <text x="280" y="190" fontSize="16" fill="#f4d4a0">✨</text>
              </g>
            </svg>

            {/* Decorative text below */}
            <div className="text-center mt-8">
              <p className="text-lg" style={{ color: '#a37f6f', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                A Promise of Forever 🐱💕🐕
              </p>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#5a7a8f', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          {recipientName ? `${recipientName},` : ''} Will you be my Valentine?
        </h1>

        {/* Subtitle and love text */}
        <p className="text-xl mb-2" style={{ color: '#8b7d6f', fontFamily: 'Georgia, serif' }}>
          You make every moment magical ✨
        </p>
        
        <div className="mb-10 space-y-3 max-w-xl mx-auto">
          <p className="text-lg" style={{ color: '#9a8f7a', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Nothing is impossible for us when we are together. You make my life complete and full of joy.
          </p>
          <p className="text-base" style={{ color: '#8b7d6f', fontFamily: 'Georgia, serif' }}>
            I'm glad I've found a partner in life and love! Love you to the moon and back! 🌙
          </p>
        </div>

        {/* Funny message when trying to click No */}
        {clickCount > 0 && (
          <div className="mb-8 h-8 flex items-center justify-center">
            <p className="text-lg font-semibold animate-fadeInOut" style={{ color: '#d4a574' }}>
              {funnyMessages[Math.min(clickCount - 1, funnyMessages.length - 1)]}
            </p>
          </div>
        )}

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 min-h-24">
          {/* Yes button */}
          <button
            onClick={handleYesClick}
            className="px-14 py-4 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 active:scale-95"
            style={{ backgroundColor: '#a37f6f' }}
          >
            Yes! 💕
          </button>

          {/* No button - moves away when approached */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            onTouchStart={moveNoButton}
            onTouchMove={moveNoButton}
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              backgroundColor: '#b5b5b5',
              color: '#5a5a5a'
            }}
            className="px-12 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative"
          >
            No 😢
          </button>
        </div>

        {/* Footer text */}
        <div className="mt-16 space-y-2">
          <p style={{ color: '#8b9d6f', fontFamily: 'Georgia, serif' }}>
            😉 Hint: There's only one right answer!
          </p>
         
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes floatFlower {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-60px) translateX(-10px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-30px) translateX(20px) rotate(270deg);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInOut {
          animation: fadeInOut 1s ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}