import {IconProps} from '@components/index';
import {AppTabNavigatorParamList} from '@routes/index';

export const mapScreenToProps: Record<
    keyof AppTabNavigatorParamList,
    {
        label: string;
        icon: {
            isFocused: IconProps['name'];
            unfocused: IconProps['name'];
        };
    }
> = {
    HomeScreen: {
        label: 'Início',
        icon: {
            isFocused: 'homeFill',
            unfocused: 'home',
        },
    },

    NewPostScreen: {
        label: 'Novo Post',
        icon: {
            isFocused: 'newPost',
            unfocused: 'newPost',
        },
    },

    FavoritesScreen: {
        label: 'Favoritos',
        icon: {
            isFocused: 'bookMarkFill',
            unfocused: 'bookMark',
        },
    },

    MyProfileScreen: {
        label: 'Meu Perfil',
        icon: {
            isFocused: 'profileFill',
            unfocused: 'profile',
        },
    },
};
