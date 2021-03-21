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
