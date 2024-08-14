import {IconProps} from '@components/index';

export type SuccessPresets = 'success' | 'sendInstructions';

export interface SuccessProps {
    title: string;
    subtitle: string;
    icon: Pick<IconProps, 'name' | 'color'>;
}

export const successPresets: Record<
    SuccessPresets,
    {ScreenPresets: SuccessProps}
> = {
    success: {
        ScreenPresets: {
            title: 'Sua conta foi criada com sucesso',
            subtitle: 'Agora é só fazer login na nossa plataforma',
            icon: {
                name: 'checkRound',
                color: 'greenSuccess',
            },
        },
    },
    sendInstructions: {
        ScreenPresets: {
            title: 'Enviamos as instruções para o seu e-mail',
            subtitle:
                'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'greenPrimary',
            },
        },
    },
};
