import { motion } from "framer-motion";

export function Chef() {
  return (
    <section id="chef" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">The Mastermind</span>
              <div className="h-px w-12 bg-primary"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              Chef <span className="text-primary italic">Alexander</span> Pierce
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              "To me, a plate is a canvas, and the ingredients are my colors. True culinary excellence comes from understanding the soul of each element."
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over two decades of experience in the world's most prestigious kitchens from Paris to Tokyo, Chef Alexander brings an unparalleled level of sophistication to L'Elegance. His signature style seamlessly blends classical French techniques with modern innovation, resulting in dishes that are both comforting and surprising.
            </p>
            
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signature_of_Alexander_Hamilton.svg/1200px-Signature_of_Alexander_Hamilton.svg.png" 
              alt="Chef Signature" 
              className="h-12 invert opacity-50"
              style={{ filter: 'invert(80%) sepia(40%) saturate(600%) hue-rotate(5deg) brightness(90%) contrast(90%)' }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Decorative circle */}
              <div className="absolute inset-[-20px] rounded-full border border-primary/30 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-[-40px] rounded-full border border-white/10 animate-[spin_30s_linear_infinite_reverse]"></div>
              
              {/* Chef portrait */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1884&auto=format&fit=crop" 
                  alt="Executive Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
