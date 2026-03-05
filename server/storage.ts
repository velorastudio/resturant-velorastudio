import { type Reservation, type InsertReservation, reservations } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createReservation(reservation: InsertReservation): Promise<Reservation>;
}

export class DatabaseStorage implements IStorage {
  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const [reservation] = await db
      .insert(reservations)
      .values(insertReservation)
      .returning();
    return reservation;
  }
}

export const storage = new DatabaseStorage();
