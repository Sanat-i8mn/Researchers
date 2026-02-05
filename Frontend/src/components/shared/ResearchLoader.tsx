export default function ResearchLoader() {
  const services = ['Research', 'Writing', 'Analysis', 'Consulting', 'Data Science'];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Orbs */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: `${50 + Math.random() * 100}px`,
            height: `${50 + Math.random() * 100}px`,
            background: `radial-gradient(circle, ${['rgba(59, 130, 246, 0.3)', 'rgba(99, 102, 241, 0.3)', 'rgba(168, 85, 247, 0.3)'][i % 3]}, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Central Hub */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Rotating Rings */}
          <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-4 border-2 border-indigo-500/30 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-8 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>

          {/* Center Core */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-2xl shadow-blue-500/50 animate-pulse flex items-center justify-center">
            <div className="text-white text-2xl font-bold">RH</div>
          </div>

          {/* Orbiting Service Icons */}
          {services.map((service, i) => (
            <div
              key={i}
              className="absolute w-full h-full"
              style={{
                animation: `orbit ${5 + i}s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <span className="text-white text-xs font-bold">{service[0]}</span>
                  </div>
                  <div className="absolute inset-0 bg-blue-500/50 rounded-lg blur-md -z-10 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Particle Burst */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-1 h-1"
              style={{
                animation: `burst ${2 + Math.random()}s ease-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            </div>
          ))}
        </div>

        {/* Brand Text */}
        <div className="mt-16 text-center space-y-4">
          <div className="relative">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-pulse">
              Research Hub
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
          </div>
          
          <p className="text-blue-300/80 text-sm font-medium tracking-wide">
            Connecting Experts • Delivering Excellence
          </p>

          <div className="flex justify-center gap-2 pt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                style={{
                  animation: 'bounce 1.4s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes burst {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(-50% + ${Math.random() * 200 - 100}px),
              calc(-50% + ${Math.random() * 200 - 100}px)
            ) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
