import { z } from 'zod';

export const authSignInSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type AuthSignInSchema = z.infer<typeof authSignInSchema>;

export const authSignInProductionDefaultSchema: AuthSignInSchema = {
  username: '',
  password: '',
};

export const authSignInDevelopmentDefaultSchema: AuthSignInSchema = {
  username: 'test0165',
  password: 'string',
};

export const authSignInDefaultSchema: AuthSignInSchema =
  process.env.NODE_ENV === 'development'
    ? authSignInDevelopmentDefaultSchema
    : authSignInProductionDefaultSchema;
