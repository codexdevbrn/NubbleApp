import React from 'react';
import {Text} from '../Text/Text';
import {Box} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      borderRadius="br16"
      paddingHorizontal="s14"
      alignItems="center"
      justifyContent="center"
      height={50}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#FFF'}}>
          {title}
        </Text>
      )}
    </Box>
  );
}
