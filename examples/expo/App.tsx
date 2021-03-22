import Components, {
  ThemeProvider,
  withStyledSystem,
} from '@mattreiss/react-native-theme'
import React from 'react'
import { Image } from 'react-native'

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

export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <View flex={1} bg='bg3' alignItems='center' justifyContent='center'>
        <MyImage name='sunset' width='windowWidth' height='windowWidth' />
        <View bg='primary' borderRadius='xl' mt='md'>
          <Text color='myFavColor' p='md'>
            React Native Theme
          </Text>
        </View>
      </View>
    </ThemeProvider>
  )
}
