import z from 'zod';

const userSchema = z.object({
   name: z.string().min(3),
   email: z.string().email(),
   password: z.string().min(6),
});

export function validateUser(input: unknown) {
   return userSchema.safeParse(input);
}

export function validatePartialUser(input: unknown) {
   return userSchema.partial().safeParse(input);
}
