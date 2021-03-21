import * as PropTypes from 'prop-types'

const StyledSystemPropTypes = {
  /** margin */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin */
  m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin top */
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin top */
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin right */
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin right */
  mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin bottom */
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin bottom */
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin left */
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin left */
  ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin left and right */
  marginX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin left and right */
  mx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin top and bottom */
  marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** margin top and bottom */
  my: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding */
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding */
  p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding top */
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding top */
  pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding right */
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding right */
  pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding bottom */
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding bottom */
  pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding left */
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding left */
  pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding left and right */
  paddingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding left and right */
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding top and bottom */
  paddingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** padding top and bottom */
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** color */
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** background color */
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** background color */
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** font size */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** font family */
  fontFamily: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** text align */
  textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** line height */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** font weight */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** letter spacing */
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** font style */
  fontStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** width */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** height */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** minimum width */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** minimum height */
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** maximum width */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** maximum height */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** display */
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** size */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** vertical align */
  verticalAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** overflow */
  overflow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** overflow x axis */
  overflowX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** overflow y axis */
  overflowY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** align items */
  alignItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** align self */
  alignSelf: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** justify content */
  alignContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** justify items */
  justifyItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** justify self */
  justifySelf: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** justify content */
  justifyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** flex wrap */
  flexWrap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** flex direction */
  flexDireaction: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** flex */
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** flex grow */
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** flex shrink */
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** flex basis */
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** order */
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** grid gap */
  gridGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** position */
  position: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** top */
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** right */
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** bottom */
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** left */
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default StyledSystemPropTypes
