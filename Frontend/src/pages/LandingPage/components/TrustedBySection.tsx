// export default function TrustedBySection() {
//   const companies = [
//     { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
//     { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
//     { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
//     { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
//     { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
//     { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
//   ];

//   return (
//     <section className="py-16 bg-white relative overflow-hidden">
//       {/* Subtle dot pattern */}
//       <div className="absolute inset-0 opacity-5" style={{
//         backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
//         backgroundSize: '20px 20px'
//       }} />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <p className="text-blue-600 text-lg font-semibold">Trusted by leading organizations worldwide</p>
//         </div>
//         <div className="flex items-center justify-center gap-12 flex-wrap opacity-70">
//           {companies.map((company) => (
//             <div key={company.name} className="hover:opacity-100 hover:scale-110 transition-all duration-300">
//               <img
//                 src={company.logo}
//                 alt={company.name}
//                 className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
//                 onError={(e) => {
//                   e.currentTarget.style.display = 'none';
//                   const parent = e.currentTarget.parentElement;
//                   if (parent) {
//                     parent.innerHTML = `<span class="text-blue-500 text-sm font-semibold">${company.name}</span>`;
//                   }
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from 'framer-motion';

export default function TrustedBySection() {
  // Updated sponsor logos
  const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  ];

  const stats = [
    '20,000+ projects posted',
    'Freelancers in 175+ countries',
    '4.7 average freelancer rating',
    'Trusted by modern businesses',
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logos - Scrolling */}
        <div className="overflow-hidden mb-8">
          <motion.div
            className="flex items-center gap-8 md:gap-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          >
            {[...companies, ...companies].map((company, idx) => (
              <div key={idx} className="flex items-center justify-center flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-6 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Continuous full-width blue stats ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16 bg-blue-600">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {/* Duplicate stats multiple times for true seamless scrolling */}
          {[...stats, ...stats, ...stats].map((stat, idx) => (
            <div key={idx} className="font-semibold text-white mx-8">
              {stat}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
