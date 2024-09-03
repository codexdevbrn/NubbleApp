import React from 'react';

import {Box, Text} from '@components/index';

interface PostBottomProps {
    userName: string;
    text: string;
    comment?: boolean;
}

export function PostBottom({userName, text, comment = false}: PostBottomProps) {
    return (
        <Box
            flexDirection="column"
            justifyContent="flex-start"
            ml="s28"
            mt="s16">
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
