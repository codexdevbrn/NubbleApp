import {z} from 'zod';

const userNameRegex = /^[a-zA-Z0-9._]{3,16}$/;

export const signUpSchema = z.object({
    username: z
        .string()
        .regex(userNameRegex, 'Nome de usuário incorreto')
        .toLowerCase(),
    fullName: z.string().min(5, 'Nome muito curto').max(50, 'Nome muito longo'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
