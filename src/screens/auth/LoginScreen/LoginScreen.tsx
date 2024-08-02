import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
    return (
        <SafeAreaView>
            <Screen>
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
            </Screen>
        </SafeAreaView>
    );
}
