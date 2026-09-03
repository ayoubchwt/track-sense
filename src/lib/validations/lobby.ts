import * as z from "zod";
export const createSessionSchema = z.object({
  sessionName: z.string().min(4, "Please provide a valid session name"),
  genres: z.string(),
  rounds: z.number(),
  sessionCode: z.string(),
  isPublic: z.boolean(),
});
export const JoingSessionSchema = z.object({
  id: z.string().optional(),
  sessionCode: z
    .string()
    .min(6, "Please enter a valid session code")
    .optional(),
  isPublic: z.boolean(),
});
