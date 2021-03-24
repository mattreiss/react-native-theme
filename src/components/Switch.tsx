import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { Switch } from 'react-native'

import withStyledSystem, {
  AttributesProps,
} from '../functions/withStyledSystem'

const StyledSwitch = withStyledSystem(Switch, (p: AttributesProps) => ({
  trackColor: p.theme.colors[p.trackColor || p.color],
  thumbColor: p.theme.colors[p.thumbColor || p.color],
  ios_backgroundColor: p.theme.colors[p.bg],
}))

const SwitchProps = {
  ...StyledSwitch.propTypes,
  /** color of the track from theme */
  trackColor: PropTypes.string,
  /** color of the thumb from theme */
  thumbColor: PropTypes.string,
}

const MySwitch = (props: InferProps<typeof SwitchProps>) => (
  <StyledSwitch
    bg='bg3'
    color='text3'
    trackColor='text3'
    thumbColor='text3'
    m='md'
    {...props}
  />
)

MySwitch.propTypes = SwitchProps

export default MySwitch
