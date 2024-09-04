import React from 'react';

import {Box, BoxProps, Text} from '@components/index';

interface PostBottomProps {
    userName: string;
    text: string;
    comment?: boolean;
}

export function PostBottom({userName, text, comment = false}: PostBottomProps) {
    return (
        <Box {...$boxWrapperProps}>
            <Text preset="paragraphMedium" bold>
                {userName}
            </Text>
            <Text preset="paragraphMedium">{text}</Text>
            {comment && (
                <Text
                    preset={'paragraphMedium'}
                    color="backgroundContrast"
                    mt="s8">
                    Ver comentários
                </Text>
            )}
        </Box>
    );
}

const $boxWrapperProps: BoxProps = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    mt: 's16',
    paddingHorizontal: 's24',
};
