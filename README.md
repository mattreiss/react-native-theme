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
The `ThemeProvider` component stores the current theme. The theme prop can be the strings `light` or `dark` or an object to extend the default theme colors as shown below.
```
import Components, { ThemeProvider } from '@mattreiss/react-native-theme'
import React from 'react'

const { View, Text } = Components

const myTheme = {
  primary: 'green',
  myFavColor: 'purple',
}

export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <View
        flex={1}
        backgroundColor='bg2'
        alignItems='center'
        justifyContent='center'
      >
        <Text bg='primary' color='myFavColor' padding='md'>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </ThemeProvider>
  )
}

```