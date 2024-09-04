import React from 'react';

import {NubbleLogoSimple} from '@brand/index';
import {Box, Icon} from '@components/index';
import {useAppSafeArea} from '@hooks/index';

export function HomeHeader() {
    const {top} = useAppSafeArea();
    return (
        <Box
            justifyContent="space-between"
            style={{paddingTop: top}}
            flexDirection="row"
            paddingHorizontal="s24"
            paddingBottom="s24">
            <NubbleLogoSimple width={70} />
            <Box flexDirection="row">
                <Box mr="s24">
                    <Icon name="search" />
                </Box>
                <Box mr="s24">
                    <Icon name="bell" />
                </Box>

                <Icon name="chat" />
            </Box>
        </Box>
    );
}
