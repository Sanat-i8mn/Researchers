
// import { FileText, Users, Shield, CheckCircle } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { useState } from 'react'

// export default function HowItWorksSection() {
//   const steps = [
//     {
//       number: 1,
//       icon: FileText,
//       title: 'Post Your Project',
//       description: 'Describe your research needs and get matched with qualified experts in minutes.',
//     },
//     {
//       number: 2,
//       icon: Users,
//       title: 'Review Proposals',
//       description: 'Compare profiles, portfolios, and proposals from verified researchers.',
//     },
//     {
//       number: 3,
//       icon: Shield,
//       title: 'Work & Pay Safely',
//       description: "Collaborate securely and pay only when you're completely satisfied.",
//     },
//   ]

//   const [hovered, setHovered] = useState<number | null>(null)

//   return (
//     <section className="relative py-28 bg-gradient-to-br from-blue-100 via-white to-blue-100 overflow-hidden">
//       {/* Decorative background shapes */}
//       <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />

//       <div className="relative max-w-7xl mx-auto px-6 z-10">
//         <div className="text-center mb-24">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Complete your research project in three simple steps
//           </p>
//         </div>

//         {/* Steps row */}
//         <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 z-10">
//           {steps.map((step, i) => {
//             const Icon = step.icon
//             return (
//               <div
//                 key={step.number}
//                 className="relative flex-1 group"
//                 onMouseEnter={() => setHovered(i)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 {/* Card */}
//                 <motion.div
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="bg-white rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center relative z-10"
//                 >
//                   <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
//                     <Icon size={28} className="text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
//                   <p className="text-gray-700">{step.description}</p>

//                   <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
//                     {step.number}
//                   </div>
//                 </motion.div>

//                 {/* Line to next card */}
//                 {hovered === i && i < steps.length - 1 && (
//                   <motion.div
//                     layoutId="line-next"
//                     className="absolute top-1/2 left-full h-1 bg-blue-500"
//                     style={{ width: '100%' }}
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}

//                 {/* Line to previous card */}
//                 {hovered === i && i > 0 && (
//                   <motion.div
//                     layoutId="line-prev"
//                     className="absolute top-1/2 right-full h-1 bg-blue-500"
//                     style={{ width: '100%' }}
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//               </div>
//             )
//           })}
//         </div>

//         {/* Benefits */}
//         <div className="mt-32 relative z-10">
//   <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//     {/* Free to post projects */}
//     <div className="flex items-center justify-center gap-3 p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-lg transition-shadow">
//       <CheckCircle className="text-blue-600" size={24} />
//       <span className="font-medium text-gray-900">Free to post projects</span>
//     </div>

//     {/* Secure payments */}
//     <div className="flex items-center justify-center gap-3 p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-lg transition-shadow">
//       <CheckCircle className="text-blue-600" size={24} />
//       <span className="font-medium text-gray-900">Secure payments</span>
//     </div>

//     {/* 24/7 support */}
//     <div className="flex items-center justify-center gap-3 p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-lg transition-shadow">
//       <CheckCircle className="text-blue-600" size={24} />
//       <span className="font-medium text-gray-900">24/7 support</span>
//     </div>
//   </div>
// </div>

//       </div>
//     </section>
//   )
// }


// import { FileText, Users, Shield, CheckCircle } from 'lucide-react'
// import { motion } from 'framer-motion'

// export default function HowItWorksSection() {
//   const companySteps = [
//     {
//       icon: FileText,
//       title: 'Post Your Project',
//       desc: 'Describe your requirements in minutes with clear goals and deliverables.',
//     },
//     {
//       icon: Users,
//       title: 'Get Matched with Verified Experts',
//       desc: 'AI-powered matching connects you with trusted researchers.',
//     },
//     {
//       icon: Shield,
//       title: 'Collaborate Securely',
//       desc: 'Chat, share files, assign tasks, and track progress safely.',
//     },
//     {
//       icon: CheckCircle,
//       title: 'Pay with Confidence',
//       desc: 'Milestone-based payments ensure transparency and trust.',
//     },
//   ]

//   const expertSteps = [
//     {
//       icon: Users,
//       title: 'Create Your Profile',
//       desc: 'Add credentials, skills, publications, and experience.',
//     },
//     {
//       icon: Shield,
//       title: 'Get Verified',
//       desc: 'Build trust through certification and verification.',
//     },
//     {
//       icon: FileText,
//       title: 'Find Global Projects',
//       desc: 'Work with companies, labs, and universities worldwide.',
//     },
//     {
//       icon: CheckCircle,
//       title: 'Earn & Build Impact',
//       desc: 'Grow your reputation and income through meaningful work.',
//     },
//   ]

//   // ✅ StepItem component
//   const StepItem = ({ step, index }) => {
//     const Icon = step.icon

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 32 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: index * 0.1 }}
//         viewport={{ once: true }}
//         className="relative flex gap-6"
//       >
//         {/* Timeline */}
//         <div className="flex flex-col items-center">
//           <div className="w-12 h-12 rounded-full bg-blue-600 p-[2px]">
//             <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-md">
//               <Icon size={20} strokeWidth={3} className="text-blue-600" />
//             </div>
//           </div>

//           {/* Vertical line */}
//           {index !== 3 && (
//             <div className="w-px h-full bg-gradient-to-b from-blue-300 to-transparent mt-2" />
//           )}
//         </div>

//         {/* Content */}
//         <div>
//           <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
//           <p className="text-gray-600 mt-1 max-w-md leading-relaxed">{step.desc}</p>
//         </div>
//       </motion.div>
//     )
//   }

//   return (
//     <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#f7faff] via-white to-[#eef4ff]">
//       {/* Background grid */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.08)_1px,transparent_0)] [background-size:32px_32px]" />

//       {/* Soft glow shapes */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16 md:mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
//             How It Works — Fast & Simple
            
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
//             A seamless workflow designed for companies and researchers.
//           </p>
//         </motion.div>

//         {/* Two columns */}
//         <div className="grid md:grid-cols-2 gap-20">
//           {/* Companies */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-10">
//               For Companies / Clients
//             </h3>
//             <div className="space-y-10">
//               {companySteps.map((step, i) => (
//                 <StepItem key={i} step={step} index={i} />
//               ))}
//             </div>
//           </div>

//           {/* Experts */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-10">
//               For Researchers / Experts
//             </h3>
//             <div className="space-y-10">
//               {expertSteps.map((step, i) => (
//                 <StepItem key={i} step={step} index={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { FileText, Users, Shield, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HowItWorksSection() {
  const companySteps = [
    {
      icon: FileText,
      title: 'Post Your Project',
      desc: 'Describe your requirements in minutes with clear goals and deliverables.',
    },
    {
      icon: Users,
      title: 'Get Matched with Verified Experts',
      desc: 'AI-powered matching connects you with trusted researchers.',
    },
    {
      icon: Shield,
      title: 'Collaborate Securely',
      desc: 'Chat, share files, assign tasks, and track progress safely.',
    },
    {
      icon: CheckCircle,
      title: 'Pay with Confidence',
      desc: 'Milestone-based payments ensure transparency and trust.',
    },
  ]

  const expertSteps = [
    {
      icon: Users,
      title: 'Create Your Profile',
      desc: 'Add credentials, skills, publications, and experience.',
    },
    {
      icon: Shield,
      title: 'Get Verified',
      desc: 'Build trust through certification and verification.',
    },
    {
      icon: FileText,
      title: 'Find Global Projects',
      desc: 'Work with companies, labs, and universities worldwide.',
    },
    {
      icon: CheckCircle,
      title: 'Earn & Build Impact',
      desc: 'Grow your reputation and income through meaningful work.',
    },
  ]

  // StepItem component with hover motion
  const StepItem = ({ step, index }) => {
    const Icon = step.icon
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative flex gap-6"
      >
        {/* Timeline circle */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 p-[2px] animate-pulse">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-md">
              <Icon size={20} strokeWidth={3} className="text-blue-600" />
            </div>
          </div>

          {/* Animated vertical line */}
          {index !== 3 && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-px bg-gradient-to-b from-blue-300 to-transparent mt-2"
            />
          )}
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
          <p className="text-gray-600 mt-1 max-w-md leading-relaxed">{step.desc}</p>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#f0f8ff] via-white to-[#e0efff]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.05)_1px,transparent_0)] [background-size:32px_32px]" />

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
            How It Works — Fast & Simple
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            A seamless workflow designed for companies and researchers.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-20">
          {/* Companies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-10">For Companies / Clients</h3>
            <div className="space-y-10">
              {companySteps.map((step, i) => (
                <StepItem key={i} step={step} index={i} />
              ))}
            </div>
          </div>

          {/* Experts */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-10">For Researchers / Experts</h3>
            <div className="space-y-10">
              {expertSteps.map((step, i) => (
                <StepItem key={i} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
