import { z } from 'zod';

export const ScheduledActivitySchema = z.object({
    id: z.string().optional(), // optional for creation; assigned later
    templateId: z.string().min(1, "Template ID is required"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    serverId: z.string().min(1, "Server ID is required"),
    createdBy: z.string().min(1, "Creator ID is required"),
    participants: z.array(z.string()).optional(),
}).openapi('ScheduledActivity');

export type ScheduledActivity = z.infer<typeof ScheduledActivitySchema>;
