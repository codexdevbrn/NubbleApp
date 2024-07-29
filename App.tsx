import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {TextInput} from './src/components/TextInput/TextInput';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView>
                <View style={{paddingHorizontal: 14}}>
                    <Text preset="headingLarge" bold mb="s8" mt="s12">
                        Olá!
                    </Text>
                    <Text preset="paragraphLarge" mb="s40">
                        Digite seu e-mail e senha para entrar
                    </Text>
                    <Box>
                        <TextInput
                            label="E-mail"
                            placeholder="Digite sua senha"
                        />
                    </Box>
                </View>
            </SafeAreaView>
        </ThemeProvider>
    );
}

export default App;
