import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", // Ambience
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1740&auto=format&fit=crop", // Wine
  "https://images.unsplash.com/photo-1507652313519-d4e9174296dd?q=80&w=1740&auto=format&fit=crop", // Food detail
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1740&auto=format&fit=crop"  // Table setting
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-4">The Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Immerse yourself in the visual journey of our culinary creations and elegant atmosphere.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden group rounded-lg ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square lg:aspect-[3/4]'}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={img} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
