// import { TrendingUp, Users, Star, Globe } from 'lucide-react';

// export default function ModernStatsSection() {
//   const stats = [
//     { 
//       icon: Users, 
//       number: '10M+', 
//       label: 'Active Researchers',
//       description: 'Verified experts worldwide'
//     },
//     { 
//       icon: TrendingUp, 
//       number: '5M+', 
//       label: 'Projects Completed',
//       description: 'Successfully delivered'
//     },
//     { 
//       icon: Star, 
//       number: '4.9/5', 
//       label: 'Average Rating',
//       description: 'Client satisfaction'
//     },
//     { 
//       icon: Globe, 
//       number: '190+', 
//       label: 'Countries',
//       description: 'Global reach'
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Trusted by Millions
//           </h2>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             Join the world's largest research marketplace
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={stat.label}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
//               >
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                   <Icon size={32} className="text-white" />
//                 </div>
//                 <div className="text-4xl font-bold text-white mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-xl font-semibold text-blue-100 mb-2">
//                   {stat.label}
//                 </div>
//                 <div className="text-blue-200 text-sm">
//                   {stat.description}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import { TrendingUp, Users, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModernStatsSection() {
  const stats = [
    { icon: Users, number: '10M+', label: 'Active Researchers', description: 'Verified experts worldwide' },
    { icon: TrendingUp, number: '5M+', label: 'Projects Completed', description: 'Successfully delivered' },
    { icon: Star, number: '4.9/5', label: 'Average Rating', description: 'Client satisfaction' },
    { icon: Globe, number: '190+', label: 'Countries', description: 'Global reach' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden">
      {/* Decorative background circles */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-400/30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trusted by Millions
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the world's largest research marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="relative bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr from-white/20 to-white/10 flex items-center justify-center shadow-lg">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Stats */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-white/90 mb-1">{stat.label}</div>
                <div className="text-white/70 text-sm">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
