import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { ThemeProvider } from 'styled-components/native'

import Theme from '../theme'

export const ThemeContext = React.createContext({
  theme: Theme.getTheme('light'),
})

const ThemeProviderProps = {
  /** children */
  children: PropTypes.node.isRequired,
  /** an object containing a custom theme */
  theme: PropTypes.object,
  /** can be 'light' or 'dark' */
  colorScheme: PropTypes.string.isRequired,
}

function MyThemeProvider(props: InferProps<typeof ThemeProviderProps>) {
  const currentTheme = props.theme
    ? Theme.extend(props.theme, props.colorScheme)
    : Theme.getTheme(props.colorScheme)
  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

MyThemeProvider.defaultProps = {
  colorScheme: 'light',
}

MyThemeProvider.propTypes = ThemeProviderProps

export default MyThemeProvider
