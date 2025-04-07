import { z } from '@/lib/zod-openapi'; // ⬅️ modified import path

export const ActivitySchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
}).openapi('Activity'); // ⬅️ this is crucial

export type ActivityTemplate = z.infer<typeof ActivitySchema>;
