import {
  Button,
  Dropdown,
  Text,
  TextInput,
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
  const inputRef = React.createRef<any>()
  const [info, setInfo] = React.useState('')
  const [colorScheme, setTheme] = React.useState('light')
  const toggleTheme = () => {
    if (colorScheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    inputRef.current.focus()
  }
  return (
    <ThemeProvider
      theme={colorScheme === 'light' ? lightTheme : darkTheme}
      colorScheme={colorScheme}
    >
      <View flex={1} bg='bg' alignItems='center' justifyContent='center'>
        <View bg='primary' borderRadius='xl' p='md'>
          <Text color='myFavColor'>React Native Theme</Text>
          <TextInput
            ref={inputRef}
            bg='bg3'
            color='text'
            placeholderColor='negative'
            placeholder='Enter Info'
            value={info}
            onChangeText={setInfo}
          />
          <MyImage
            alignSelf='center'
            name='main'
            width='xl5'
            height='xl5'
            my='sm'
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
          <Dropdown
            bg='bg1'
            color='green'
            bgActive='red'
            label='Selection'
            onChange={() => {}}
            value={{ id: 0 }}
            options={[
              { id: 0, name: '1' },
              { id: 1, name: '2' },
            ]}
          />
        </View>
      </View>
    </ThemeProvider>
  )
}
