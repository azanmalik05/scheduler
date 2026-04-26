import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const courseNumberPattern = /^\d+(-\d+)?$/;
const meetingPattern =
  /^$|^(M|Tu|W|Th|F|Sa|Su)+(?:\s)(?:[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-(?:[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const Course = z.object({
  term: z.enum(["Fall", "Winter", "Spring", "Summer"], {
    errorMap: () => ({ message: "must be Fall, Winter, Spring, or Summer" }),
  }),
  number: z
    .string()
    .regex(courseNumberPattern, "must be a number with optional section, e.g. 213-2"),
  title: z.string().trim().min(2, "must be at least 2 characters"),
  meets: z
    .string()
    .regex(meetingPattern, "must contain days and start-end, e.g. MWF 12:00-13:20"),
});

export type Course = z.infer<typeof Course>;
export const courseResolver = zodResolver(Course);