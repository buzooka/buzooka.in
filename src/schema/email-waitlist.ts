import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email({ message: "A valid email is required" }),
});

export type WaitlistSchema = typeof waitlistSchema;
