import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4 -z-10"></div>
            {/* about section luxury plating */}
            <img 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1740&auto=format&fit=crop" 
              alt="Fine dining plating" 
              className="w-full h-auto aspect-[4/5] object-cover shadow-2xl shadow-black/50"
            />
            <div className="absolute -bottom-10 -right-10 bg-background border border-primary/20 p-8 shadow-xl max-w-xs hidden md:block">
              <p className="font-display text-3xl text-primary italic mb-2">"Cooking is an art, but eating is an experience."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">Our Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
              Elevating the Essence of <span className="text-primary italic">Fine Dining</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              At L'Elegance, we believe that a truly remarkable meal transcends the boundaries of mere sustenance. Founded in 2010, our restaurant has continually pushed the boundaries of modern gastronomy while honoring classical techniques.
            </p>
            
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              We source only the finest seasonal ingredients from local artisans and global purveyors, transforming them into culinary masterpieces that delight the senses and create unforgettable memories.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="block text-4xl font-display text-primary mb-2">12+</span>
                <span className="text-sm tracking-wider uppercase text-muted-foreground">Years of Excellence</span>
              </div>
              <div>
                <span className="block text-4xl font-display text-primary mb-2">3</span>
                <span className="text-sm tracking-wider uppercase text-muted-foreground">Michelin Stars</span>
              </div>
            </div>

            <a href="#chef" className="group flex items-center gap-4 w-max">
              <span className="font-semibold uppercase tracking-widest text-sm text-white group-hover:text-primary transition-colors">Meet our Chef</span>
              <div className="w-10 h-px bg-white group-hover:bg-primary group-hover:w-16 transition-all duration-300"></div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
