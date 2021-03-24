import {
  Button,
  Input,
  Text,
  ThemeProvider,
  View,
  withStyledSystem,
} from '@mattreiss/react-native-theme'
import React from 'react'
import { Image } from 'react-native'

const lightTheme = {
  colors: {
    bg: 'white',
    text: 'black',
    myFavColor: 'purple',
  },
  images: {
    main: 'https://shorturl.at/iAFW6',
  },
}

const darkTheme = {
  colors: {
    bg: 'black',
    text: 'white',
    myFavColor: 'purple',
  },
  images: {
    main: 'https://bit.ly/3scFTQY',
  },
}

const MyImage = withStyledSystem(Image, (p) => ({
  source: p.name ? { uri: p.theme.images[p.name] } : p.source,
}))

export default function App() {
  const [info, setInfo] = React.useState('')
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <View flex={1} bg='bg' alignItems='center' justifyContent='center'>
        <View bg='primary' borderRadius='xl' p='md'>
          <Text color='myFavColor'>React Native Theme</Text>
          <MyImage
            alignSelf='center'
            name='main'
            width='xl5'
            height='xl5'
            my='sm'
          />
          <Input
            bg='bg'
            color='text'
            placeholderTextColor='negative'
            placeholder='Enter Info'
            value={info}
            onChangeText={setInfo}
          />
          <Button
            p='xs'
            mt='xs'
            bg='myFavColor'
            color='white'
            onPress={toggleTheme}
          >
            Toggle Theme
          </Button>
        </View>
      </View>
    </ThemeProvider>
  )
}
