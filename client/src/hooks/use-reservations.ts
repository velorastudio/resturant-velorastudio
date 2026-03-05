import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";

type ReservationInput = z.infer<typeof api.reservations.create.input>;

export function useCreateReservation() {
  return useMutation({
    mutationFn: async (data: ReservationInput) => {
      // Coerce guests to number if it comes as a string from the form
      const payload = {
        ...data,
        guests: Number(data.guests)
      };
      
      const validated = api.reservations.create.input.parse(payload);
      
      const res = await fetch(api.reservations.create.path, {
        method: api.reservations.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || 'Validation failed');
        }
        throw new Error('Failed to create reservation');
      }
      
      return api.reservations.create.responses[201].parse(await res.json());
    },
  });
}
