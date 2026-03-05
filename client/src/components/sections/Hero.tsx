import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero luxury restaurant interior */}
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Restaurant Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <div className="px-4 py-1 border border-primary/40 rounded-full bg-black/30 backdrop-blur-sm">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
              Michelin Star Experience
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 text-glow"
        >
          A Symphony of <br className="hidden md:block" />
          <span className="text-primary italic">Flavors</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto"
        >
          Discover culinary artistry where tradition meets innovation in an atmosphere of unparalleled elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#reservation"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white/50 uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
