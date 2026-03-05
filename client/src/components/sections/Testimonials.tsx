import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "An absolutely breathtaking experience. The Wagyu tartare was a revelation, and the wine pairing was flawless. Truly a masterpiece of modern dining.",
    author: "Eleanor Vance",
    title: "Food Critic, The Times"
  },
  {
    text: "From the moment we walked in, the service was impeccable. The ambience is sophisticated yet inviting. L'Elegance lives up to its name in every possible way.",
    author: "James Harrington",
    title: "Local Guide"
  },
  {
    text: "Chef Pierce has curated a menu that dances on the palate. The attention to detail in the plating is just as impressive as the flavors. Five stars.",
    author: "Sophia Laurent",
    title: "Gastronomy Magazine"
  }
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="py-24 md:py-32 relative border-t border-white/5 bg-gradient-to-b from-background to-[#050505]">
      {/* Background quote mark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[300px] text-white/5 font-display italic leading-none pointer-events-none z-0">
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">Words of Praise</span>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 px-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex gap-1 text-primary mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-2xl md:text-4xl font-display leading-relaxed mb-10 max-w-4xl mx-auto">
                    "{review.text}"
                  </p>
                  
                  <div>
                    <h4 className="font-semibold uppercase tracking-widest text-white mb-1">{review.author}</h4>
                    <span className="text-muted-foreground text-sm italic">{review.title}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
