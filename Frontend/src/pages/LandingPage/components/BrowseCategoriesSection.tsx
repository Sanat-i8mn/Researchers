// import { Brain, Database, Microscope, Package, Dna, Leaf, Users, Wrench, DollarSign, TrendingUp } from 'lucide-react';

// export default function BrowseCategoriesSection() {
//   const categories = [
//     { name: 'AI & Machine Learning', icon: Brain, count: '2,500+', color: 'bg-blue-500' },
//     { name: 'Data Science', icon: Database, count: '3,200+', color: 'bg-green-500' },
//     { name: 'Clinical Research', icon: Microscope, count: '1,800+', color: 'bg-purple-500' },
//     { name: 'Supply Chain', icon: Package, count: '1,500+', color: 'bg-orange-500' },
//     { name: 'Biotechnology', icon: Dna, count: '1,200+', color: 'bg-red-500' },
//     { name: 'Environmental Science', icon: Leaf, count: '900+', color: 'bg-emerald-500' },
//     { name: 'Social Sciences', icon: Users, count: '1,600+', color: 'bg-indigo-500' },
//     { name: 'Engineering', icon: Wrench, count: '2,800+', color: 'bg-gray-600' },
//     { name: 'Finance & Economics', icon: DollarSign, count: '2,100+', color: 'bg-yellow-500' },
//     { name: 'Marketing Research', icon: TrendingUp, count: '1,400+', color: 'bg-pink-500' },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Browse by Category
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Find the perfect expert for your specific research needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//           {categories.map((category) => {
//             const Icon = category.icon;
//             return (
//               <div
//                 key={category.name}
//                 className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
//               >
//                 <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   <Icon size={28} className="text-white" />
//                 </div>
//                 <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                   {category.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   {category.count} experts
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Brain, Database, Microscope, Package, Dna, Leaf, Users, Wrench, DollarSign, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BrowseCategoriesSection() {
  const categories = [
    { name: 'AI & Machine Learning', icon: Brain },
    { name: 'Data Science', icon: Database },
    { name: 'Clinical Research', icon: Microscope },
    { name: 'Supply Chain', icon: Package },
    { name: 'Biotechnology', icon: Dna },
    { name: 'Environmental Science', icon: Leaf },
    { name: 'Social Sciences', icon: Users },
    { name: 'Engineering', icon: Wrench },
    { name: 'Finance & Economics', icon: DollarSign },
    { name: 'Marketing Research', icon: TrendingUp },
  ]

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#f0f4ff] via-[#dbe7ff] to-[#c0d4ff] overflow-hidden">
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ backgroundPosition: '0 0' }}
        animate={{ backgroundPosition: '32px 32px' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(37,99,235,0.05), rgba(37,99,235,0.05) 1px, transparent 1px, transparent 32px),
            repeating-linear-gradient(90deg, rgba(37,99,235,0.05), rgba(37,99,235,0.05) 1px, transparent 1px, transparent 32px)
          `
        }}
      />

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
            Browse by Category
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Find the perfect expert for your research needs
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative z-10">
          {categories.map((category, i) => {
            const Icon = category.icon
            return (
              <motion.div
                key={i}
                className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Floating card accent */}
                <motion.div
                  className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-blue-200/30 blur-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} strokeWidth={3} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-500"> {Math.floor(Math.random() * 3000 + 500)}+ experts</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
