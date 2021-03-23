import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'

import Theme, { ColorSchemeType } from './themes'

export const ThemeContext = React.createContext({
  theme: Theme.getTheme('light'),
})

interface IProps {
  children: ReactNode
  theme: ColorSchemeType | object
}

function MyThemeProvider({ children, theme }: IProps) {
  const currentTheme =
    typeof theme === 'object' ? Theme.extend(theme) : Theme.getTheme(theme)
  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

MyThemeProvider.propTypes = {
  /** theme for components, can be 'light' or 'dark' or an object containing a custom theme */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node.isRequired,
}

export default MyThemeProvider
