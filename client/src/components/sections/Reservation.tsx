import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { z } from "zod";
import { useCreateReservation } from "@/hooks/use-reservations";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

type FormData = z.infer<typeof api.reservations.create.input>;

export function Reservation() {
  const { toast } = useToast();
  const createReservation = useCreateReservation();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(api.reservations.create.input),
  });

  const onSubmit = (data: FormData) => {
    createReservation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Reservation Confirmed",
          description: "We look forward to welcoming you.",
          variant: "default",
          className: "bg-primary text-primary-foreground border-none"
        });
        reset();
      },
      onError: (error) => {
        toast({
          title: "Booking Failed",
          description: error.message,
          variant: "destructive"
        });
      }
    });
  };

  return (
    <section id="reservation" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-background z-0"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-card/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
          
          {/* Info Side */}
          <div className="lg:col-span-2 bg-[#050505] p-10 flex flex-col justify-center border-r border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full"></div>
            
            <h2 className="text-3xl font-display mb-4 text-white">Book a Table</h2>
            <p className="text-muted-foreground mb-8">
              Secure your spot for an unforgettable culinary journey. For parties larger than 8, please contact us directly.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">Dress Code</h4>
                <p className="text-muted-foreground text-sm">Smart Casual. No sportswear or flip-flops.</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">Cancellation</h4>
                <p className="text-muted-foreground text-sm">Please notify us 24 hours in advance.</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</label>
                <input 
                  {...register("name")}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-destructive text-xs">{errors.name.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input 
                  {...register("email")}
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-destructive text-xs">{errors.email.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                <input 
                  {...register("phone")}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="+91 9999XXXXXX"
                />
                {errors.phone && <span className="text-destructive text-xs">{errors.phone.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Number of Guests</label>
                <select 
                  {...register("guests")}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" className="bg-[#050505]">Select guests</option>
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num} className="bg-[#050505]">{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
                {errors.guests && <span className="text-destructive text-xs">{errors.guests.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Date</label>
                <input 
                  {...register("date")}
                  type="date"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                />
                {errors.date && <span className="text-destructive text-xs">{errors.date.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Time</label>
                <select 
                  {...register("time")}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" className="bg-[#050505]">Select time</option>
                  <option value="17:00" className="bg-[#050505]">5:00 PM</option>
                  <option value="18:00" className="bg-[#050505]">6:00 PM</option>
                  <option value="19:00" className="bg-[#050505]">7:00 PM</option>
                  <option value="20:00" className="bg-[#050505]">8:00 PM</option>
                  <option value="21:00" className="bg-[#050505]">9:00 PM</option>
                  <option value="22:00" className="bg-[#050505]">10:00 PM</option>
                </select>
                {errors.time && <span className="text-destructive text-xs">{errors.time.message}</span>}
              </div>

              <div className="md:col-span-2 mt-6">
                <button
                  type="submit"
                  disabled={createReservation.isPending}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {createReservation.isPending && <Loader2 className="animate-spin" size={18} />}
                  {createReservation.isPending ? "Confirming..." : "Confirm Reservation"}
                </button>
              </div>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
