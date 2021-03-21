import * as React from 'react'
import styled from 'styled-components/native'
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

import StyledSystemPropTypes from './StyledSystemPropTypes'

const withStyledSystem = (Component: any) => {
  const StyledComponent = styled(Component)`
    ${flexbox}
    ${space}
    ${color}
    ${border}
    ${typography}
    ${layout}
    ${shadow}
    ${grid}
    ${position}
    ${background}
  `

  const MyComponent = (props: any) => <StyledComponent {...props} />

  MyComponent.propTypes = {
    ...StyledSystemPropTypes,
    ...Component.propTypes,
  }

  return MyComponent
}

export default withStyledSystem
