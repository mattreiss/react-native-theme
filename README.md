# React Native Theme
Themed React Native components using [styled-components](https://github.com/styled-components/styled-components) and [styled-system](https://github.com/styled-system/styled-system) 

## Installation
```
yarn add @mattreiss/react-native-theme
```

## Usage
```
import Components, { ThemeProvider } from '@mattreiss/react-native-theme'
import React from 'react'

const { View, Text } = Components

export default function App() {
  return (
    <ThemeProvider theme='dark'>
      <View bg='bg1' flex={1} alignItems='center' justifyContent='center'>
        <Text color='text1'>Open up App.js to start working on your app!</Text>
      </View>
    </ThemeProvider>
  )
}
```
Here is a more complex example showing how to provide a custom theme and how to use the `withStyledSystem` function to connect props to the theme.
```
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
```

## Run Example
```
git clone git@github.com:mattreiss/react-native-theme.git
cd react-native-theme
yarn
yarn ios
```