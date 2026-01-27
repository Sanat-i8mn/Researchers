// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, ArrowRight, Play, CheckCircle, Star, Sparkles } from 'lucide-react';
// import type { PageType } from '../../../types';

// interface HeroSectionProps {
//   onNavigate: (page: PageType) => void;
//   onShowResults: () => void;
// }

// const researcherImages = [
//   {
//     src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
//     name: 'Dr. James Wilson',
//     field: 'AI Research',
//     rating: '4.9'
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
//     name: 'Dr. Maria Garcia',
//     field: 'Data Science',
//     rating: '4.8'
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
//     name: 'Dr. David Chen',
//     field: 'Clinical Research',
//     rating: '5.0'
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
//     name: 'Dr. Sarah Johnson',
//     field: 'Biotechnology',
//     rating: '4.9'
//   }
// ];

// export default function HeroSection({ onNavigate, onShowResults }: HeroSectionProps) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % researcherImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       onShowResults();
//     }
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 lg:py-24 overflow-hidden">
//       {/* Floating Emojis */}
//       <div className="absolute inset-0 pointer-events-none">
//         {['🔬', '💡', '📊', '🧪', '📚', '⚗️', '🎓', '💻', '🔍', '📈'].map((emoji, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-2xl opacity-20"
//             style={{
//               left: `${10 + i * 9}%`,
//               top: `${15 + (i % 4) * 20}%`,
//             }}
//             animate={{
//               y: [-15, 15, -15],
//               rotate: [-5, 5, -5],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: 4 + i * 0.3,
//               repeat: Infinity,
//               delay: i * 0.4,
//             }}
//           >
//             {emoji}
//           </motion.div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8 lg:pr-8 relative">
//             {/* Content Background Emojis */}
//             <div className="absolute inset-0 pointer-events-none overflow-hidden">
//               {['🚀', '⭐', '🎯', '💎', '🔥', '✨'].map((emoji, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute text-4xl opacity-10"
//                   style={{
//                     left: `${20 + i * 15}%`,
//                     top: `${10 + (i % 2) * 40}%`,
//                   }}
//                   animate={{
//                     scale: [0.8, 1.2, 0.8],
//                     rotate: [0, 10, -10, 0],
//                     opacity: [0.05, 0.15, 0.05],
//                   }}
//                   transition={{
//                     duration: 5 + i * 0.5,
//                     repeat: Infinity,
//                     delay: i * 0.8,
//                   }}
//                 >
//                   {emoji}
//                 </motion.div>
//               ))}
//             </div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <h1 className="text-xl lg:text-3xl xl:text-6xl font-bold text-gray-900 leading-tight">
//                 Get a Verified Researcher Matched to Your Project
//                 <span className="text-blue-600 block mt-2">
//                   Instantly with AI
//                 </span>
//               </h1>

//               <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
//                 Connect with the world's best verified and certified researchers and breakthrough research projects—instantly. AI matches you instantly with the right expertise, so you save time and innovate faster.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="flex flex-col sm:flex-row gap-3 pt-4"
//             >
//               <motion.button
//                 onClick={() => onNavigate('signup')}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <motion.span
//                   className="group-hover:mr-1 transition-all duration-300"
//                 >
//                   Hire a Researcher
//                 </motion.span>
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                   className="group-hover:animate-pulse"
//                 >
//                   <ArrowRight size={18} />
//                 </motion.div>
//               </motion.button>
//               <motion.button
//                 onClick={() => onNavigate('bidding')}
//                 className="bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 hover:text-blue-700 px-6 py-3 rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2 group"
//                 whileHover={{ scale: 1.05, y: -2, borderColor: "#2563eb", boxShadow: "0 10px 25px rgba(37, 99, 235, 0.2)" }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <motion.span
//                   className="group-hover:scale-105 transition-transform duration-300"
//                 >
//                   Join as a Researcher
//                 </motion.span>
//               </motion.button>
//             </motion.div>
//           </div>

//           {/* Right Image Slideshow */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative group">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentImageIndex}
//                   initial={{ opacity: 0, scale: 0.8, x: 100 }}
//                   animate={{ opacity: 1, scale: 1, x: 0 }}
//                   exit={{ opacity: 0, scale: 0.8, x: -100 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   className="relative"
//                 >
//                   <motion.img
//                     src={researcherImages[currentImageIndex].src}
//                     alt={researcherImages[currentImageIndex].name}
//                     className="w-96 h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white transition-all duration-500 group-hover:scale-105"
//                     style={{
//                       filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.3))',
//                     }}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Verified Badge */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="absolute top-4 right-4 bg-green-500 rounded-full p-3 shadow-lg group-hover:scale-110 transition-all duration-300"
//                   >
//                     <CheckCircle className="text-white" size={24} />
//                   </motion.div>

//                   {/* Researcher Info Card */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.5 }}
//                     className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-gray-900 text-lg">
//                           {researcherImages[currentImageIndex].name}
//                         </h3>
//                         <p className="text-blue-600 font-medium">
//                           {researcherImages[currentImageIndex].field}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Star className="text-yellow-400 fill-current" size={20} />
//                         <span className="font-bold text-gray-900">
//                           {researcherImages[currentImageIndex].rating}
//                         </span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Slide Indicators */}
//               <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {researcherImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentImageIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
//                         ? 'bg-blue-600 scale-125'
//                         : 'bg-blue-300 hover:bg-blue-400'
//                       }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Search } from 'lucide-react'
import type { PageType } from '../../../types'

interface HeroSectionProps {
  onNavigate: (page: PageType) => void
  onShowResults: () => void
}

const researcherImages = [
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
    name: 'Dr. James Wilson',
    field: 'AI Research',
    rating: '4.9',
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    name: 'Dr. Maria Garcia',
    field: 'Data Science',
    rating: '4.8',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    name: 'Dr. David Chen',
    field: 'Clinical Research',
    rating: '5.0',
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    name: 'Dr. Sarah Johnson',
    field: 'Biotechnology',
    rating: '4.9',
  },
]

const skills = [
  'AI & Machine Learning',
  'Data Science',
  'Clinical Research',
  'Biotechnology',
  'Software Development',
  'Market Research',
  'Academic Writing',
  'Statistical Analysis',
  'Web Development',
  'Mobile App Development',
  'Blockchain',
  'Cybersecurity',
  'Digital Marketing',
  'Content Writing',
  'Graphic Design'
]

export default function HeroSection({ onNavigate, onShowResults }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredSkills, setFilteredSkills] = useState(skills)

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImageIndex((i) => (i + 1) % researcherImages.length),
      4500
    )
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (searchQuery) {
      const filtered = skills.filter(skill => 
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredSkills(filtered)
    } else {
      setFilteredSkills(skills)
    }
  }, [searchQuery])

  const handleSkillSelect = (skill: string) => {
    setSearchQuery(skill)
    setShowDropdown(false)
    onShowResults()
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onShowResults()
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#dbe7ff] to-[#c0d4ff] py-20 lg:py-28">
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight">
              Get a Verified Researcher
              <br />
              Matched to Your Project
              <span className="block mt-2 text-blue-600 font-bold">
                Instantly with AI
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Connect with the world’s most trusted and verified researchers.
              Our AI instantly matches your project with the right expertise so
              you can innovate faster.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search subject areas"
                  className="w-full px-4 py-4 pl-12 pr-16 text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Dropdown */}
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto"
                >
                  {filteredSkills.map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => handleSkillSelect(skill)}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {skill}
                    </button>
                  ))}
                  {filteredSkills.length === 0 && (
                    <div className="px-4 py-3 text-gray-500 text-center">
                      No skills found
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            <div className="flex flex-row gap-2 pt-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('signup')}
                className="rounded-full border-2 border-blue-600 px-6 py-2.5 font-semibold text-blue-600 bg-white hover:bg-blue-50 transition-all text-sm"
              >
                Join as expert
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('post-project')}
                className="rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-2.5 font-semibold text-white shadow-lg transition-all text-sm"
              >
                Request a Service
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:flex justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative p-1 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 rounded-3xl"
              >
                <motion.img
                  src={researcherImages[currentImageIndex].src}
                  alt=""
                  className="h-[420px] w-[320px] rounded-3xl object-cover"
                  style={{
                    boxShadow:
                      '0 40px 80px rgba(37,99,235,0.25)',
                  }}
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-green-500 p-2 shadow-lg">
                  <CheckCircle className="text-white" size={22} />
                </div>

                {/* Info card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 backdrop-blur p-4 shadow-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {researcherImages[currentImageIndex].name}
                      </h3>
                      <p className="text-sm text-blue-600">
                        {researcherImages[currentImageIndex].field}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={18} />
                      <span className="font-semibold">
                        {researcherImages[currentImageIndex].rating}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowDropdown(false)}
        />
      )}
    </section>
  )
}
