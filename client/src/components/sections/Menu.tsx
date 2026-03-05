import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  starters: [
    { name: "Wagyu Tartare", price: "$32", description: "Quail egg, black truffle, capers, toasted brioche", image: "https://images.unsplash.com/photo-1544025162-831451f22e80?q=80&w=1740&auto=format&fit=crop" },
    { name: "Scallop Crudo", price: "$28", description: "Yuzu kosho, finger lime, pickled serrano, micro cilantro", image: "https://images.unsplash.com/photo-1599596397223-92f7dc2a7281?q=80&w=1742&auto=format&fit=crop" },
    { name: "Foie Gras", price: "$36", description: "Pan-seared, mission fig compote, port wine reduction", image: "https://images.unsplash.com/photo-1626200419189-3b58f8edfc7e?q=80&w=1740&auto=format&fit=crop" },
  ],
  mains: [
    { name: "A5 Kobe Beef", price: "$120", description: "Charred maitake, bone marrow jus, smoked potato puree", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1832&auto=format&fit=crop" },
    { name: "Chilean Sea Bass", price: "$55", description: "Sunchokes, caviar beurre blanc, sea beans", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1740&auto=format&fit=crop" },
    { name: "Duck Breast", price: "$65", description: "Lavender honey glaze, parsnip, endive, blackberry", image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=1740&auto=format&fit=crop" },
  ],
  desserts: [
    { name: "Valrhona Chocolate", price: "$24", description: "Dark chocolate dome, passion fruit core, gold leaf", image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?q=80&w=1727&auto=format&fit=crop" },
    { name: "Madagascar Vanilla", price: "$20", description: "Soufflé, raspberry coulis, pistachio crumble", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1740&auto=format&fit=crop" },
  ]
};

type Category = keyof typeof menuData;

export function Menu() {
  const [activeTab, setActiveTab] = useState<Category>('mains');

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">Discover</span>
            <div className="h-px w-12 bg-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display"
          >
            Signature Menu
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-16 border-b border-white/10 pb-4">
          {(Object.keys(menuData) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-lg md:text-xl font-display tracking-wider uppercase transition-all duration-300 relative ${
                activeTab === category ? "text-primary" : "text-muted-foreground hover:text-white"
              }`}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="menu-indicator"
                  className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {menuData[activeTab].map((item, index) => (
                <div key={index} className="flex gap-6 group items-center bg-card/30 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors duration-500">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-2 border-transparent group-hover:border-primary transition-all duration-500">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-primary transition-colors">{item.name}</h3>
                      <div className="flex-1 border-b border-dotted border-white/20 mx-4 mb-2"></div>
                      <span className="font-display text-xl text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-block px-8 py-4 border border-primary text-primary font-semibold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300">
            Download Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
