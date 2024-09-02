import React from 'react';

import {Box, Text} from '@components/index';

interface PostBottomProps {
    userName: string;
    text: string;
}

export function PostBottom({userName, text}: PostBottomProps) {
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
        </Box>
    );
}
