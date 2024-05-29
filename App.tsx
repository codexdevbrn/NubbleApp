import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 14}}>
          <Text preset="headingLarge" bold>
            Coffstack
          </Text>
          <Box marginBottom="s24">
            <Button title="Enviar" mt="s12" />
          </Box>
          <Box marginBottom="s24">
            <Button loading preset="outline" title="Outline" mt="s12" />
          </Box>
          <Button loading title="Enviar" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
