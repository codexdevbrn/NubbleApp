import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {TextInput} from './src/components/TextInput/TextInput';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView>
                <View style={{paddingHorizontal: 14}}>
                    <Text preset="headingLarge" bold mb="s8" mt="s12">
                        Olá!
                    </Text>
                    <Text
                        preset="paragraphLarge"
                        mb="s40"
                        color="backgroundContrast">
                        Digite seu e-mail e senha para entrar
                    </Text>
                    <Box>
                        <TextInput
                            boxProps={{mb: 's20'}}
                            label="E-mail"
                            placeholder="Digite sua senha"
                        />
                        <TextInput
                            RightComponent={<Icon name="eyeOn" color="gray2" />}
                            preset="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                        />
                    </Box>
                    <Text
                        preset="paragraphSmall"
                        color="buttonPrimary"
                        mt="s8"
                        bold>
                        Esqueceu sua senha?
                    </Text>
                    <Button
                        title="Entrar"
                        backgroundColor="buttonPrimary"
                        mt="s48"
                    />
                    <Button
                        title="Criar uma nova conta"
                        backgroundColor="background"
                        mt="s12"
                        preset="outline"
                        borderColor="buttonPrimary"
                    />
                </View>
            </SafeAreaView>
        </ThemeProvider>
    );
}

export default App;
