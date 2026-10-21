// src/lib/schemas.ts
import { z } from "zod";

export const betaRequestSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  role: z.enum(["ML Engineer", "Student", "Researcher", "Startup Founder", "Data Scientist", "Other"]),
  organization: z.string().optional(),
  country: z.string().optional(),
  ml_task: z.enum(["Classification", "Regression", "NLP", "Computer Vision", "Time Series", "Other"]),
  ml_framework: z.array(z.enum(["scikit-learn", "PyTorch", "TensorFlow/Keras", "XGBoost/LightGBM", "Other"])).optional(),
  model_status: z.enum(["Research or experiment", "Local prototype", "Staging", "Production"]),
  test_description: z.string().min(20).max(2000),
  usefulness: z.string().optional(),
  consent: z.literal(true),
  honeypot: z.string().optional(), // hidden field for spam
});

export const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  topic: z.enum(["Question", "Feedback", "Collaboration", "Other"]),
  message: z.string().min(10, "Message is too short"),
  consent: z.literal(true),
  honeypot: z.string().optional(),
});
