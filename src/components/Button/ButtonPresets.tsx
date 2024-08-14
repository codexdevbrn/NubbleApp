import {TouchableOpacityBoxProps, ButtonPreset} from '@components/index';
import {ThemeColors} from '@theme/index';

export interface ButtonUI {
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
}

export const buttonPresets: Record<
    ButtonPreset,
    {
        default: ButtonUI;
        disabled: ButtonUI;
    }
> = {
    primary: {
        default: {
            container: {
                backgroundColor: 'primary',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                backgroundColor: 'gray4',
            },
            content: 'gray2',
        },
    },
    outline: {
        default: {
            container: {
                borderColor: 'primary',
                borderWidth: 1,
            },
            content: 'primary',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'gray4',
            },
            content: 'gray2',
        },
    },
};
