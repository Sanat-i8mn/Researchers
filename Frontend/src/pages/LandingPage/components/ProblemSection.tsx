// import { Briefcase, GraduationCap } from 'lucide-react';

// export default function ProblemSection() {
//   return (
//     <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0f1629] relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
//       </div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//             The Challenge
//           </h2>
//         </div>
        
//         <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
//           <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all">
//             <div className="flex items-center gap-3 mb-4 sm:mb-6">
//               <Briefcase className="text-red-400 flex-shrink-0" size={28} />
//               <h3 className="text-xl sm:text-2xl font-bold text-white">For Companies & Universities</h3>
//             </div>
//             <h4 className="text-lg sm:text-xl font-bold text-red-300 mb-3 sm:mb-4">R&D is slow, expensive, and talent is hard to find.</h4>
//             <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
//               Top researchers are scattered across labs, universities, and countries—with no unified global platform to hire them quickly and reliably.
//             </p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all">
//             <div className="flex items-center gap-3 mb-4 sm:mb-6">
//               <GraduationCap className="text-blue-400 flex-shrink-0" size={28} />
//               <h3 className="text-xl sm:text-2xl font-bold text-white">For Researchers & Scientists</h3>
//             </div>
//             <h4 className="text-lg sm:text-xl font-bold text-blue-300 mb-3 sm:mb-4">Your expertise is valuable—but opportunities are limited.</h4>
//             <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
//               Opportunities are scattered and often underpaid. You deserve global visibility, meaningful projects, and fair compensation.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#e6f0ff] via-[#f0f7ff] to-[#ffffff] overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.05)_1px,transparent_0)] [background-size:32px_32px]" />

      {/* Soft floating shapes */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
            The Challenge
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Challenges faced by companies and researchers in finding talent and opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-blue-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                For Companies & Universities
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              R&D is slow, expensive, and top talent is hard to find. Researchers are scattered across labs, universities, and countries—with no unified global platform to hire them quickly and reliably.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                For Researchers & Scientists
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Opportunities are scattered and often underpaid. You deserve global visibility, meaningful projects, and fair compensation for your expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
