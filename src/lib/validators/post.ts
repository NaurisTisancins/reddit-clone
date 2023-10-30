import { z } from 'zod';

export const PostValidator = z.object({
  title: z
    .string()
    .min(3, { message: 'Title should be atleast 3 characters long.' })
    .max(128, { message: "Title can't be longer that 128 characters." }),
  subredditId: z.string(),
  content: z.any(),
});

export type PostCreationRequest = z.infer<typeof PostValidator>;
