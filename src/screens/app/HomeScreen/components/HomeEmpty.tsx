import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components/index';

interface Props {
    loading: boolean;
    er: unknown;
    refetch: () => void;
}

export function HomeEmpty({loading, er, refetch}: Props) {
    let component = (
        <Text preset="paragraphMedium">Não há publicações no seu feed 📓</Text>
    );

    if (loading) {
        component = <ActivityIndicator color="primary" />;
    }
    if (er) {
        component = (
            <>
                <Text preset="paragraphMedium">
                    Não foi possível carregar seu feed 😢
                </Text>
                <Button title="Recarregar" preset="outline" onPress={refetch} />
            </>
        );
    }

    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            {component}
        </Box>
    );
}
