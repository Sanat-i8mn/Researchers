// import { ArrowRight, Sparkles } from 'lucide-react';
// import type { PageType } from '../../../types';

// interface CTASectionProps {
//   onNavigate: (page: PageType) => void;
// }

// export default function CTASection({ onNavigate }: CTASectionProps) {
//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 relative overflow-hidden">
//       {/* Floating emojis */}
//       <div className="absolute top-20 left-10 text-4xl opacity-30 animate-bounce">🚀</div>
//       <div className="absolute top-40 right-20 text-3xl opacity-20 animate-pulse">🎆</div>
//       <div className="absolute bottom-20 left-20 text-3xl opacity-25 animate-bounce">🎯</div>
      
//       <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
//           <div className="flex justify-center mb-6">
//             <span className="text-6xl">🚀</span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Get Started? 🎯
//           </h2>
//           <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//             Join thousands of satisfied clients and find your perfect research expert today. 
//             It's free to get started! 🎆
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button
//               onClick={() => onNavigate('signup')}
//               className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
//             >
//               🎉 Get Started Free
//               <ArrowRight size={20} />
//             </button>
//             <button
//               onClick={() => onNavigate('bidding')}
//               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
//             >
//               💼 Post a Project
//               <ArrowRight size={20} />
//             </button>
//           </div>

//           <div className="mt-8 flex items-center justify-center gap-8 text-blue-200 text-sm">
//             <span>✓ No credit card required</span>
//             <span>✓ Free to join</span>
//             <span>✓ Cancel anytime</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowRight, Rocket, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PageType } from '../../../types';

interface CTASectionProps {
  onNavigate: (page: PageType) => void;
}

export default function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#dbe9ff] to-[#c0d4ff]">
      {/* Floating graphic shapes */}
      <motion.div 
        className="absolute -top-40 -left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-20 right-10 w-48 h-48 bg-cyan-300/20 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-40 left-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-lg"
        >
          {/* Header Icon */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-6"
          >
            <Rocket size={60} className="text-blue-500" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied clients and find your perfect research expert today. 
            Start collaborating for free and instantly boost your research projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              onClick={() => onNavigate('signup')}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 text-white hover:bg-blue-600 px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3"
            >
              Get Started Free
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              onClick={() => onNavigate('bidding')}
              whileHover={{ scale: 1.05 }}
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              Post a Project
              <ArrowRight size={20} />
            </motion.button>
          </div>

          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <CheckCircle className="text-green-400" size={16}/> No credit card required
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="text-green-400" size={16}/> Free to join
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="text-green-400" size={16}/> Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
