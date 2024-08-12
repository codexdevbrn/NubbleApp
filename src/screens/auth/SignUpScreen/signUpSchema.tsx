import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0.29}$/gim;

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
