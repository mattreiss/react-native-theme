import {
  Button,
  Dropdown,
  List,
  Text,
  TextInput,
  ThemeProvider,
  View,
  withStyledSystem,
} from '@mattreiss/react-native-theme'
import React from 'react'
import { Image, SafeAreaView } from 'react-native'

const StyledSafeAreaView = withStyledSystem(SafeAreaView)

const lightTheme = {
  colors: {
    bg: 'white',
    text: 'black',
    myFavColor: 'purple',
    primary: 'blue',
  },
  images: {
    main: 'https://mattreiss.github.io/static/media/sd.194ee5a1.jpg',
    second: 'https://mattreiss.github.io/static/media/sd.193e621a.jpg',
  },
}

const darkTheme = {
  colors: {
    bg: 'black',
    text: 'white',
    myFavColor: 'green',
    primary: 'red',
  },
  images: {
    main: 'https://mattreiss.github.io/static/media/sd.d0a7e353.jpg',
    second: 'https://mattreiss.github.io/static/media/sd.7f927adb.jpg',
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
    <StyledSafeAreaView flex={1}>
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
            <List
              data={[]}
              renderItem={({ item }) => (
                <MyImage
                  alignSelf='center'
                  name={item.value}
                  width='xl5'
                  height='xl5'
                />
              )}
              refreshing={false}
              onRefresh={() => console.log('refresh')}
              ListEmptyComponent={() => (
                <View
                  justifyContent='center'
                  alignItems='center'
                  m='xs'
                  p='xs'
                  bg='bg1'
                  borderRadius='md'
                >
                  <Text>No data in list</Text>
                </View>
              )}
            />
            <List
              space={true}
              data={[
                { id: 0, value: 'main' },
                { id: 2, value: 'second' },
              ]}
              renderItem={({ item }) => (
                <MyImage
                  alignSelf='center'
                  name={item.value}
                  width='xl5'
                  height='xl5'
                />
              )}
              refreshing={false}
              onRefresh={() => console.log('refresh')}
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
              color='primary'
              bgActive='myFavColor'
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
    </StyledSafeAreaView>
  )
}
