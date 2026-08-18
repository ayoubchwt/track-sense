import * as z from "zod";
export const createSessionSchema = z.object({
  sessionName: z.string().min(4, "Please provide a valid session name"),
  genres: z.any(),
  rounds: z.any(),
  sessionCode: z.any(),
});
export const JoingSessionSchema = z.object({
  sessionCode: z.string().min(6, "Please enter a valid session code"),
});
