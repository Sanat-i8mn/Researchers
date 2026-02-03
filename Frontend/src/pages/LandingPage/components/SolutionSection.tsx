// import { CheckCircle } from 'lucide-react';

// export default function SolutionSection() {
//   return (
//     <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0f1629] relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8 sm:mb-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white shadow-2xl">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
//             The Global Marketplace for Research & Innovation
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
//             A seamless platform where organizations can hire verified researchers, and experts can access high-impact projects—spanning science, engineering, business, healthcare, AI, supply chain, sustainability, and more.
//           </p>
//         </div>

//         <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
//           <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">What You Can Do on the Platform</h3>
//           <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
//             {[
//               'Hire researchers for short-term or long-term R&D projects',
//               'Get support for thesis, publications, data analysis, and experiments',
//               'Access domain experts for consulting, prototyping, and literature review',
//               'Post challenges, innovation tasks, and research competitions',
//               'Build research teams for large-scale projects',
//               'Find proof-of-concept development expertise'
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-cyan-400 hover:shadow-md transition-all">
//                 <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
//                 <span className="text-sm sm:text-base text-gray-300 font-medium">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { CheckCircle, Lightbulb, Users, Target, Zap, Globe, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 25 - 12, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.8, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Decorative Icons */}
      <motion.div
        className="absolute top-20 left-20 text-blue-300/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <Lightbulb size={45} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-indigo-300/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Target size={40} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-10 text-purple-300/25"
        animate={{
          rotate: [0, -360],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Zap size={35} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-10 text-blue-400/25"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Globe size={38} />
      </motion.div>
      <motion.div
        className="absolute top-2/3 left-1/4 text-indigo-300/20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Rocket size={32} />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-1/3 text-purple-300/20"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Star size={28} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            
          >
    
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            The Global Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            for Research & Innovation
          </p>
        </motion.div>

        {/* Hero Solution Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group mb-16"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent, rgba(255, 255, 255, 0.1), transparent)',
                backgroundSize: '300% 300%'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                A seamless platform connecting talent with opportunity
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
                Where organizations can hire verified researchers, and experts can access high-impact projects—spanning science, engineering, business, healthcare, AI, supply chain, sustainability, and more.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative group"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                What You Can Do on the Platform
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto" />
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { text: 'Hire researchers for short-term or long-term R&D projects', icon: Users },
                { text: 'Get support for thesis, publications, data analysis, and experiments', icon: CheckCircle },
                { text: 'Access domain experts for consulting, prototyping, and literature review', icon: Lightbulb },
                { text: 'Post challenges, innovation tasks, and research competitions', icon: Target },
                { text: 'Build research teams for large-scale projects', icon: Users },
                { text: 'Find proof-of-concept development expertise', icon: CheckCircle }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group/item relative"
                  >
                    {/* Item Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200/50 p-6 rounded-2xl shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="text-white" size={20} />
                        </motion.div>
                        <span className="text-gray-700 font-medium leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
