import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center border-2 border-primary rounded-sm">
              <span className="font-display text-primary font-bold">L</span>
            </div>
            <span className="font-display text-2xl text-foreground tracking-widest uppercase">
              L'ELEGANCE
            </span>
          </a>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Experience the pinnacle of fine dining. A symphony of flavors crafted with passion, served in an atmosphere of pure sophistication.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <h4 className="font-display text-xl text-primary mb-2">Contact Us</h4>
          <div className="flex items-start gap-4 text-muted-foreground">
            <MapPin className="text-primary shrink-0 mt-1" size={18} />
            <p>123 Luxury Avenue<br />Beverly Hills, CA 90210</p>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Phone className="text-primary shrink-0" size={18} />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Mail className="text-primary shrink-0" size={18} />
            <p>reservations@lelegance.com</p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <h4 className="font-display text-xl text-primary mb-2">Opening Hours</h4>
          <ul className="space-y-3 text-muted-foreground w-full max-w-[250px]">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Mon - Thu</span>
              <span>17:00 - 22:30</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2 text-foreground">
              <span>Fri - Sat</span>
              <span>17:00 - 23:30</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Sunday</span>
              <span>16:00 - 21:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-muted-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} L'Elegance Restaurant. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
