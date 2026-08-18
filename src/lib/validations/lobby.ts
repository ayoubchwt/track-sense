import * as z from "zod";
export const createSessionSchema = z.object({
  sessionName: z.string().min(4, "Please provide a valid session name"),
  genres: z.any(),
  rounds: z.any(),
  sessionCode: z.any(),
});
