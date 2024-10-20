import * as z from 'zod';

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(50).nonempty(),
    username: z.string().min(3).max(50).nonempty(),
    bio: z.string().min(3).max(1000).nonempty(),

})