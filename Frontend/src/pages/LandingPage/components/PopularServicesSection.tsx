// import { Code, TrendingUp, FileText, Box, Smartphone, Video, Users, Globe } from 'lucide-react';

// export default function PopularServicesSection() {
//   const services = [
//     { name: 'AI Development', icon: Code, description: 'Machine learning & AI solutions 🤖', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop' },
//     { name: 'Data Analysis', icon: TrendingUp, description: 'Statistical analysis & insights 📊', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
//     { name: 'Clinical Research', icon: FileText, description: 'Medical research & trials 🔬', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
//     { name: 'Supply Chain', icon: Box, description: 'Logistics optimization 🚚', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop' },
//     { name: 'Mobile Development', icon: Smartphone, description: 'iOS & Android apps 📱', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop' },
//     { name: 'Video Production', icon: Video, description: 'Content creation & editing 🎥', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop' },
//     { name: 'Social Research', icon: Users, description: 'Market & social studies 📈', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
//     { name: 'Translation', icon: Globe, description: 'Professional translation services 🌍', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop' },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
//       {/* Soft glow similar to hero */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//              Popular Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover the most in-demand research services on our platform 
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {services.map((service) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={service.name}
//                 className="group bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl overflow-hidden hover:bg-white hover:border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
//               >
//                 <div className="relative h-40 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                   <div className="absolute bottom-3 left-3">
//                     <div className="w-10 h-10 bg-white/90 rounded-xl flex items-center justify-center">
//                       <Icon size={20} className="text-blue-600" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                     {service.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { motion } from 'framer-motion'
// import {
//   Code,
//   TrendingUp,
//   FileText,
//   Box,
//   Smartphone,
//   Video,
//   Users,
//   Globe,
// } from 'lucide-react'

// const services = [
//   { name: 'AI Development', icon: Code, desc: 'Machine learning & AI solutions' },
//   { name: 'Data Analysis', icon: TrendingUp, desc: 'Statistics & insights' },
//   { name: 'Clinical Research', icon: FileText, desc: 'Medical trials & studies' },
//   { name: 'Supply Chain', icon: Box, desc: 'Logistics & optimization' },
//   { name: 'Mobile Development', icon: Smartphone, desc: 'iOS & Android apps' },
//   { name: 'Video Production', icon: Video, desc: 'Content & editing' },
//   { name: 'Social Research', icon: Users, desc: 'Market & social studies' },
//   { name: 'Translation', icon: Globe, desc: 'Professional localization' },
// ]

// export default function PopularServicesSection() {
//   return (
//     <section className="relative py-24 bg-gradient-to-b from-white via-blue-100 to-white overflow-hidden">
//       {/* Ambient glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_25%,rgba(37,99,235,0.18),transparent_45%)]" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
//             Popular Research Services
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             High-impact services matched with verified experts using AI.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, i) => {
//             const Icon = service.icon

//             return (
//               <motion.div
//                 key={service.name}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.08 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="relative group rounded-2xl bg-white border border-blue-200 shadow-md hover:shadow-2xl transition-all overflow-hidden"
//               >
//                 {/* LEFT ACCENT LINE */}
//                 <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

//                 {/* TOP GRADIENT LINE */}
//                 <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition" />

//                 {/* INNER GLOW */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_55%)]" />

//                 <div className="relative p-8 flex flex-col gap-4">
//                   {/* Icon */}
//                   <div className="w-14 h-14 rounded-xl bg-blue-200 flex items-center justify-center group-hover:bg-blue-600 transition">
//                     <Icon
//                       size={26}
//                       className="text-blue-700 group-hover:text-white transition"
//                     />
//                   </div>

//                   {/* Text */}
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {service.name}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {service.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import {
  Code,
  TrendingUp,
  FileText,
  Box,
  Smartphone,
  Video,
  Users,
  Globe,
} from 'lucide-react'

const services = [
  { name: 'AI Development', icon: Code, desc: 'Machine learning & AI solutions' },
  { name: 'Data Analysis', icon: TrendingUp, desc: 'Statistics & insights' },
  { name: 'Clinical Research', icon: FileText, desc: 'Medical trials & studies' },
  { name: 'Supply Chain', icon: Box, desc: 'Logistics & optimization' },
  { name: 'Mobile Development', icon: Smartphone, desc: 'iOS & Android apps' },
  { name: 'Video Production', icon: Video, desc: 'Content & editing' },
  { name: 'Social Research', icon: Users, desc: 'Market & social studies' },
  { name: 'Translation', icon: Globe, desc: 'Professional localization' },
]

export default function PopularServicesSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100



">
      
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#1e40af_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Popular Research Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            High-impact services delivered by verified experts using AI matching.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative rounded-3xl bg-white/75 backdrop-blur-xl shadow-[0_20px_40px_rgba(30,64,175,0.08)] hover:shadow-[0_35px_70px_rgba(30,64,175,0.18)] transition-all overflow-hidden"
              >
                {/* Hover background wash (NEW) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-50 via-transparent to-indigo-50" />

                {/* Corner accent (NEW detail) */}
                <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 scale-0 group-hover:scale-100 transition duration-300" />

                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-blue-600 to-indigo-500 rounded-t-3xl" />

                <div className="relative p-8 flex flex-col gap-5">
                  {/* ICON WITH MOTION */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md"
                  >
                    <Icon size={26} className="text-white" />
                  </motion.div>

                  {/* Text motion */}
                  <motion.h3
                    className="text-xl font-semibold text-gray-900"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {service.name}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.desc}
                  </p>

                  {/* Soft divider */}
                  <span className="w-10 h-[2px] bg-blue-300 rounded-full mt-2" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
