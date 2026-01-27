import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CTO, TechVision',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      quote: 'ResearchHub made it incredibly easy to find qualified researchers. The quality of work exceeded our expectations.',
    },
    {
      name: 'Michael Chen',
      title: 'Research Director, BioLabs',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      quote: 'The verification process gives us confidence. We found experts who truly understood our complex requirements.',
    },
    {
      name: 'Emily Rodriguez',
      title: 'VP Operations, GlobalCorp',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      quote: 'Fast, reliable, and professional. This platform has become essential for our research projects.',
    },
    {
      name: 'David Miller',
      title: 'CEO, InnovateLabs',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      quote: 'The platform connected us with world-class researchers. Our project was completed ahead of schedule.',
    },
    {
      name: 'Lisa Anderson',
      title: 'Head of R&D, MedTech',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
      rating: 5,
      quote: 'Outstanding service! Found the perfect match for our complex biotech project within days.',
    },
    {
      name: 'James Wilson',
      title: 'Founder, DataCorp',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      quote: 'The AI matching system is brilliant. Saved us weeks of searching for the right data scientist.',
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#f0f4ff] via-[#dbe7ff] to-[#c0d4ff] overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
            What Our Clients Say
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Trusted by thousands of satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={20} />
              </div>

              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
