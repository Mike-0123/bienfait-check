import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const applySchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  profession: z.string().min(1, { message: "Profession is required" }),
  skills: z.string().min(1, { message: "Skills is required" }),
  cv: z.string().min(1, { message: "CV is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});