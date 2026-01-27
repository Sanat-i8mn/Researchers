// export default function PlatformStatsSection() {
//   const stats = [
//     { number: '10M+', label: 'Total Researchers', emoji: '👨‍🔬' },
//     { number: '5M+', label: 'Projects Completed', emoji: '✅' },
//     { number: '98%', label: 'Customer Satisfaction', emoji: '😍' },
//     { number: '190+', label: 'Countries', emoji: '🌍' },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
//       {/* Floating background elements */}
//       <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
//       <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             🚀 Trusted by Millions
//           </h2>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             Join the world's largest research marketplace 🌐
//           </p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat) => (
//             <div
//               key={stat.label}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300"
//             >
//               <div className="text-4xl mb-4">{stat.emoji}</div>
//               <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-lg text-blue-100">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { TrendingUp, Users, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModernStatsSection() {
  const stats = [
    { 
      icon: Users, 
      number: '10M+', 
      label: 'Active Researchers',
      description: 'Verified experts worldwide'
    },
    { 
      icon: TrendingUp, 
      number: '5M+', 
      label: 'Projects Completed',
      description: 'Successfully delivered'
    },
    { 
      icon: Star, 
      number: '4.9/5', 
      label: 'Average Rating',
      description: 'Client satisfaction'
    },
    { 
      icon: Globe, 
      number: '190+', 
      label: 'Countries',
      description: 'Global reach'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative inline-block">
            Trusted by Millions
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-white/50 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Join the world's largest research marketplace
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon size={32} className="text-white" strokeWidth={2.5} />
                </div>

                {/* Numbers */}
                <div className="text-4xl font-extrabold text-white mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-white/90 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
