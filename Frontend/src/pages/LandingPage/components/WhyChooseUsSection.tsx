// import { Shield, CreditCard, Headphones, Award, Zap, Globe } from 'lucide-react';

// export default function WhyChooseUsSection() {
//   const features = [
//     { icon: Shield, title: 'Verified Experts', description: 'All researchers are verified and certified professionals' },
//     { icon: CreditCard, title: 'Secure Payments', description: 'Your payments are protected with escrow system' },
//     { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock customer support for your needs' },
//     { icon: Award, title: 'Quality Guarantee', description: '100% satisfaction or your money back' },
//     { icon: Zap, title: 'Fast Delivery', description: 'Get your projects completed on time, every time' },
//     { icon: Globe, title: 'Global Talent Pool', description: 'Access experts from 190+ countries worldwide' },
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0f1629] overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Why Choose Us
//           </h2>
//           <p className="text-lg text-gray-300">
//             The best platform for research collaboration
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={feature.title}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
//                   <Icon size={24} className="text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
//                 <p className="text-gray-300">{feature.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Shield, CreditCard, Headphones, Award, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const features = [
    { icon: Shield, title: 'Verified Experts', description: 'All researchers are verified and certified professionals' },
    { icon: CreditCard, title: 'Secure Payments', description: 'Your payments are protected with escrow system' },
    { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock customer support for your needs' },
    { icon: Award, title: 'Quality Guarantee', description: '100% satisfaction or your money back' },
    { icon: Zap, title: 'Fast Delivery', description: 'Get your projects completed on time, every time' },
    { icon: Globe, title: 'Global Talent Pool', description: 'Access experts from 190+ countries worldwide' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#dbe9ff] to-[#c0d4ff]">
      {/* Background soft gradients & shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.05)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The best platform for research collaboration
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              >
                {/* Card glowing shape */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200/30 via-cyan-200/30 to-blue-200/30 rounded-2xl pointer-events-none"
                  animate={{ opacity: [0, 0.25, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                />

                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 relative z-10 shadow-md">
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{feature.title}</h3>
                <p className="text-gray-700 relative z-10">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
