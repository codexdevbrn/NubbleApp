import React from 'react';
import {TextStyle} from 'react-native';
import {createText} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

const SRText = createText<Theme>();
/* React.ComponentProps é uma interface utilitária que pega as propriedades de um componente */
export type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
    preset: TextVariants;
    bold?: boolean;
    semiBold?: boolean;
    italic?: boolean;
}

export function Text({
    children,
    preset = 'paragraphMedium',
    style,
    bold,
    semiBold,
    italic,
    ...sRTextProps
}: TextProps) {
    const fontFamily = getFontFamily(bold, italic, semiBold);
    return (
        /* merge entre o fontSize preset e o style nativo */
        <SRText
            color="backgroundContrast"
            style={[$fontSizes[preset], {fontFamily}, style]}
            {...sRTextProps}>
            {children}
        </SRText>
    );
}

function getFontFamily(bold?: boolean, italic?: boolean, semiBold?: boolean) {
    switch (true) {
        case bold && italic:
            return $fontFamily.boldItalic;
        case bold:
            return $fontFamily.bold;
        case italic:
            return $fontFamily.italic;
        case semiBold && italic:
            return $fontFamily.mediumItalic;
        case semiBold:
            return $fontFamily.semiBold;
        default:
            return $fontFamily.regular;
    }
}
type TextVariants =
    | 'headingLarge'
    | 'headingMedium'
    | 'headingSmall'
    | 'paragraphLarge'
    | 'paragraphMedium'
    | 'paragraphSmall'
    | 'paragraphCaption'
    | 'paragraphCaptionSmall';

/* Record - cria um map entre duas interfaces, a primeira define
a chave do objeto e a segunda o valor do objeto que vem do TextStyle do React Native */
export const $fontSizes: Record<TextVariants, TextStyle> = {
    headingLarge: {fontSize: 32, lineHeight: 38.4},
    headingMedium: {fontSize: 22, lineHeight: 26.4},
    headingSmall: {fontSize: 18, lineHeight: 23.4},

    paragraphLarge: {fontSize: 18, lineHeight: 25.2},
    paragraphMedium: {fontSize: 16, lineHeight: 22.4},
    paragraphSmall: {fontSize: 14, lineHeight: 19.6},

    paragraphCaption: {fontSize: 12, lineHeight: 16.8},
    paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
    bold: 'Satoshi-Bold',
    semiBold: 'Satoshi-Medium',
    regular: 'Satoshi-Regular',
    italic: 'Satoshi-Italic',
    boldItalic: 'Satoshi-BoldItalic',
    mediumItalic: 'Satoshi-MediumItalic',
};
