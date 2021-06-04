import * as React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'

import withStyledSystem from '../functions/withStyledSystem'
import Text from './Text'
import View from './View'

const StyledScrollView = withStyledSystem(ScrollView)
const StyledTouchableOpacity = withStyledSystem(TouchableOpacity)

type DropdownValueType = { id: string | number; name: string }

type DropdownProps = typeof Text.propTypes & {
  /** disable the button */
  disabled: boolean
  /** value of dropdown */
  value: DropdownValueType
  /** callback function when pressed */
  onPress: () => {}
  /** callback function on change value */
  onChange: (value: object) => {}
  /** options  */
  options?: any
  /** backgroundColor of active selection */
  bgActive?: string
  /** placeholder */
  placeholder: string
  /** label */
  label: string
}

const Dropdown = (props: DropdownProps) => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const [value, setValue] = React.useState<any>(null)

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const onPress = () => {
    if (props.disabled) return
    toggleDropdown()
    if (typeof props.onPress === 'function') {
      props.onPress()
    }
  }

  const onChange = (item: any) => {
    setValue(item)
    toggleDropdown()
    if (typeof props.onChange === 'function') {
      props.onChange(item)
    }
  }

  const radiusProps = showDropdown
    ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }
    : {}

  const placeholder = props.placeholder || 'Select an option'

  return (
    <View>
      {props.label && (
        <Text mb='xxs' color='negative' textAlign='left'>
          {props.label}
        </Text>
      )}
      <StyledTouchableOpacity
        p='xs'
        borderRadius='md'
        fontSize='md'
        textAlign='center'
        justifyContent='center'
        alignItems='center'
        {...props}
        {...radiusProps}
        bg={props.disabled ? 'negative' : props.bg || 'bg3'}
        flexDirection='row'
        onPress={onPress}
      >
        <Text
          flex='1'
          textAlign='center'
          fontSize={props.fontSize || 'md'}
          color={props.color || (value ? 'text' : 'text3')}
          opacity={showDropdown ? 0.5 : 1}
        >
          {showDropdown
            ? placeholder
            : value && value.name
            ? value.name
            : placeholder}
        </Text>
      </StyledTouchableOpacity>
      {showDropdown && (
        <StyledScrollView
          bg={props.disabled ? 'negative' : props.bg || 'bg3'}
          textAlign='center'
          maxHeight='windowWidth'
          borderRadius='md'
          borderTopRightRadius={0}
          borderTopLeftRadius={0}
        >
          {props.options.map((item: any) => {
            return (
              <StyledTouchableOpacity
                key={item.id}
                p='xs'
                textAlign='center'
                borderTopWidth={1}
                borderColor='negative'
                bg={
                  value && value.id === item.id
                    ? props.bgActive || 'cherry100'
                    : 'transparent'
                }
                onPress={() => onChange(item)}
              >
                <Text
                  fontSize='md'
                  textAlign='center'
                  color={props.color || 'text'}
                >
                  {item.name}
                </Text>
              </StyledTouchableOpacity>
            )
          })}
        </StyledScrollView>
      )}
    </View>
  )
}

export default Dropdown
