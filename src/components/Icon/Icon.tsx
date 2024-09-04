import React from 'react';
import {Pressable} from 'react-native';

import {CheckIcon} from '@assets/icons/CheckIcon';
import {FlashOnIcon} from '@assets/icons/FlashOnIcon';
import {
    ErrorRoundIcon,
    ArrowLeftIcon,
    BellIcon,
    ArrowRightIcon,
    BellOnIcon,
    BookmarkFillIcon,
    BookmarkIcon,
    CameraIcon,
    ChatIcon,
    ChatOnIcon,
    CommentIcon,
    ChevronRightIcon,
    CheckRoundIcon,
    EyeOnIcon,
    EyeOffIcon,
    FlashOffIcon,
    HeartIcon,
    HeartFillIcon,
    HomeIcon,
    HomeFillIcon,
    MessageIcon,
    MessageRoundLightIcon,
    MessageRoundIcon,
    NewPostIcon,
    ProfileIcon,
    ProfileFillIcon,
    SettingsIcon,
    SearchIcon,
    TrashIcon,
} from '@assets/index';
import {useAppTheme} from '@hooks/index';
import {ThemeColors} from '@theme/index';

export interface IconBases {
    size?: number;
    color?: string;
}

export interface IconProps {
    name: IconName;
    color?: ThemeColors;
    size?: number;
    onPress?: () => void;
    hitSlop?: number;
}

export function Icon({
    name,
    color = 'backgroundContrast',
    size,
    onPress,
    hitSlop = 10,
}: IconProps) {
    const {colors} = useAppTheme();
    const SVGIcon = iconRegistry[name];

    if (onPress) {
        return (
            <Pressable hitSlop={hitSlop} onPress={onPress}>
                <SVGIcon color={colors[color]} size={size} />
            </Pressable>
        );
    }

    return <SVGIcon color={colors[color]} size={size} />;
}
const iconRegistry = {
    arrowLeft: ArrowLeftIcon,
    arrowRight: ArrowRightIcon,
    bell: BellIcon,
    bellOn: BellOnIcon,
    bookMark: BookmarkIcon,
    bookMarkFill: BookmarkFillIcon,
    camera: CameraIcon,
    chat: ChatIcon,
    chatOn: ChatOnIcon,
    check: CheckIcon,
    comment: CommentIcon,
    chevronRight: ChevronRightIcon,
    checkRound: CheckRoundIcon,
    errorRound: ErrorRoundIcon,
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon,
    flashOn: FlashOnIcon,
    flashOff: FlashOffIcon,
    heart: HeartIcon,
    heartFill: HeartFillIcon,
    home: HomeIcon,
    homeFill: HomeFillIcon,
    message: MessageIcon,
    messageRoundLight: MessageRoundLightIcon,
    messageRound: MessageRoundIcon,
    newPost: NewPostIcon,
    profile: ProfileIcon,
    profileFill: ProfileFillIcon,
    search: SearchIcon,
    settings: SettingsIcon,
    trash: TrashIcon,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
