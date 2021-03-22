import Components, {
  ThemeProvider,
  withStyledSystem,
} from '@mattreiss/react-native-theme'
import React from 'react'
import { Image, TextInput } from 'react-native'

const { View, Text } = Components

const myTheme = {
  colors: {
    primary: 'green',
    myFavColor: 'purple',
  },
  images: {
    milkyway: 'https://bit.ly/3scFTQY',
    sunset: 'https://shorturl.at/iAFW6',
  },
}

const MyImage = withStyledSystem(Image, (p) => ({
  source: p.name ? { uri: p.theme.images[p.name] } : p.source,
}))

const MyTextInput = withStyledSystem(TextInput, (p) => ({
  placeholderTextColor:
    p.theme.colors[p.placeholderTextColor || p.color] ||
    p.placeholderTextColor ||
    p.color,
}))

export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <View flex={1} bg='bg3' alignItems='center' justifyContent='center'>
        <MyImage name='sunset' width='windowWidth' height='windowWidth' />
        <View bg='primary' borderRadius='xl' mt='md' p='md'>
          <Text color='myFavColor' p='md'>
            React Native Theme
          </Text>
          <MyTextInput
            bg='red'
            color='text1'
            placeholderTextColor='negative'
            placeholder='enter info'
            fontSize='md'
            p='md'
            minWidth='xl'
            borderRadius='md'
            multiline={false}
            numberOfLines={1}
            returnKeyType='done'
          />
        </View>
      </View>
    </ThemeProvider>
  )
}
