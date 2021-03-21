import { Dimensions, Platform } from 'react-native'

import Dark from './Dark'
import Light from './Light'

type StringOrNumber = string | number

type ScaledValues = {
  xxs: StringOrNumber
  xs: StringOrNumber
  sm: StringOrNumber
  md: StringOrNumber
  lg: StringOrNumber
  xl: StringOrNumber
  xxl: StringOrNumber
}

export default class Theme {
  static LIGHT = 'light'

  static DARK = 'dark'

  colorScheme: string

  colors: typeof Light

  window: any

  screen: any

  dark: boolean = false

  sizes: any

  space: any

  fontSizes!: ScaledValues

  lineHeights!: ScaledValues

  fonts!: { default: string }

  fontWeights!: { regular: number; bold: number }

  letterSpacings!: {}

  radii!: {
    sm: StringOrNumber
    md: StringOrNumber
    lg: StringOrNumber
    xl: StringOrNumber
    xxl: StringOrNumber
    smFab: StringOrNumber
    mdFab: StringOrNumber
    lgFab: StringOrNumber
    xlFab: StringOrNumber
    xxlFab: StringOrNumber
  }

  borderWidths!: {}

  borderStyles!: {}

  borders!: {}

  shadows!: { xs: string; sm: string; md: string; lg: string; xl: string }

  zIndices!: { xs: number; sm: number; md: number; lg: number; xl: number }

  breakpoints: string[] = []

  mediaQuery!: {
    mobile: string
    tablet: string
    laptop: string
    desktop: string
  }

  headerHeight!: number

  constructor(colorScheme = Theme.DARK) {
    this.colorScheme = colorScheme
    const loadColors = () => {
      switch (colorScheme) {
        case Theme.DARK:
          return Dark
        case Theme.LIGHT:
          return Light
        default:
          return Light
      }
    }
    this.colors = loadColors()
    this.window = Dimensions.get('window')
    this.screen = Dimensions.get('screen')
    this.init()
  }

  isDark() {
    switch (this.colorScheme) {
      case Theme.DARK:
        return true
      default:
        return false
    }
  }

  init() {
    this.dark = this.isDark()
    switch (Platform.OS) {
      case 'web':
        this.initWeb()
        break
      default:
        this.initMobile()
        break
    }
    switch (Platform.OS) {
      case 'web':
        this.sizes.vw = '30rem'
        this.sizes.vw2 = '15rem'
        this.sizes.vh = this.sizes.vw
        // view width with padding/margin
        this.sizes.vwxs = `calc(${this.sizes.vw} - ${this.space.sm})`
        this.sizes.vwsm = `calc(${this.sizes.vw} - ${this.space.md})`
        this.sizes.vwmd = `calc(${this.sizes.vw} - ${this.space.lg})`
        this.sizes.vwlg = `calc(${this.sizes.vw} - ${this.space.xl})`
        this.sizes.vw2xs = `calc(${this.sizes.vw2} - ${this.space.sm})`
        this.sizes.vw2sm = `calc(${this.sizes.vw2} - ${this.space.md})`
        this.sizes.vw2md = `calc(${this.sizes.vw2} - ${this.space.lg})`
        this.sizes.vw2lg = `calc(${this.sizes.vw2} - ${this.space.xl})`
        break
      default:
        this.sizes.vw = this.window.width
        this.sizes.vw2 = this.window.width / 2
        this.sizes.vh = this.window.height
        // window width with padding/margin
        this.sizes.vwxs = this.sizes.vw - 32
        this.sizes.vwsm = this.sizes.vw - 48
        this.sizes.vwmd = this.sizes.vw - 64
        this.sizes.vwlg = this.sizes.vw - 96
        this.sizes.vw2xs = this.sizes.vw2 - 32
        this.sizes.vw2sm = this.sizes.vw2 - 48
        this.sizes.vw2md = this.sizes.vw2 - 64
        this.sizes.vw2lg = this.sizes.vw2 - 96
        break
    }
  }

  // https://system-ui.com/theme/
  initWeb() {
    // layout
    this.sizes = {
      xs: '1rem', // 16px
      sm: '1.5rem', // 24px
      md: '2rem', // 32px
      lg: '3rem', // 48px
      xl: '4rem', // 64px
      xxl: '5rem', // 80px
    }
    Object.keys(this.sizes).forEach((key) => {
      let size = this.sizes[key].slice(0, -3)
      size = parseFloat(size)
      this.sizes[`${key}W`] = `${2 * size}rem` // scale up for widths
    })
    // typography
    this.fontSizes = {
      xxs: '4px',
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      xxl: '28px',
    }
    this.lineHeights = {
      xxs: '1rem', // 16px
      xs: '1.5rem', // 24px
      sm: '2rem', // 32px
      md: '3rem', // 48px
      lg: '4rem', // 64px
      xl: '5rem', // 80px
      xxl: '7.5rem', // 120px
    }
    this.fonts = {
      default: 'Roboto',
    }
    this.fontWeights = {
      regular: 400,
      bold: 700,
    }
    this.letterSpacings = {}

    // space (margins/paddings)
    this.space = {
      xxxs: '0.25rem', // 4px
      xxs: '0.5rem', // 8px
      xs: '1rem', // 16px
      sm: '1.5rem', // 24px
      md: '2rem', // 32px
      lg: '3rem', // 48px
      xl: '4rem', // 64px
      xxl: '6rem', // 96px
    }

    // border
    this.radii = {
      sm: '.25rem', // 4px
      md: '.5rem', // 8px
      lg: '1rem', // 16px
      xl: '2rem', // 32px
      xxl: '4rem', // 64px
      smFab: '50%',
      mdFab: '50%',
      lgFab: '50%',
      xlFab: '50%',
      xxlFab: '50%',
    }
    this.borderWidths = {}
    this.borderStyles = {}
    this.borders = {}

    // shadow
    this.shadows = {
      xs: '1px 1px 2px rgba(0,0,0,0.12)',
      sm: '2px 2px 4px rgba(0,0,0,0.12)',
      md: '4px 4px 8px rgba(0,0,0,0.24)',
      lg: '6px 6px 12px rgba(0,0,0,0.24)',
      xl: '8px 8px 16px rgba(0,0,0,0.48)',
    }

    // position
    this.zIndices = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    }

    // breakpoints
    const breakpoints = ['768px', '1024px', '1280px', '1920px']
    this.breakpoints = breakpoints
    this.mediaQuery = {
      mobile: `@media (max-width: ${breakpoints[0]})`,
      tablet: `@media (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
      laptop: `@media (min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
      desktop: `@media (min-width: ${breakpoints[2]})`,
    }

    // section values
    this.headerHeight = 64
  }

  initMobile() {
    // layout (width/height)
    this.sizes = {
      xs: 24,
      sm: 32,
      md: 48,
      lg: 64,
      xl: 80,
      xxl: 120,
    }
    Object.keys(this.sizes).forEach((key) => {
      this.sizes[`${key}W`] = 5 * this.sizes[key] // scale up for widths
    })

    // typography
    this.fontSizes = {
      xxs: 4,
      xs: 8,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 28,
    }
    this.lineHeights = {
      xxs: 16,
      xs: 24,
      sm: 32,
      md: 48,
      lg: 64,
      xl: 80,
      xxl: 120,
    }
    this.fonts = {
      default: 'Roboto',
    }
    this.fontWeights = {
      regular: 400,
      bold: 700,
    }
    this.letterSpacings = {}

    // space (margins/paddings)
    this.space = {
      xxxs: 4,
      xxs: 8,
      xs: 16,
      sm: 24,
      md: 32,
      lg: 48,
      xl: 64,
      xxl: 96,
    }

    // border
    this.radii = {
      sm: 4,
      md: 8,
      lg: 16,
      xl: 32,
      xxl: 64,
      smFab: 32,
      mdFab: 48,
      lgFab: 64,
      xlFab: 80,
      xxlFab: 120,
    }
    this.borderWidths = {}
    this.borderStyles = {}
    this.borders = {}

    // shadow
    this.shadows = {
      xs: '1px 1px 2px rgba(0,0,0,0.12)',
      sm: '2px 2px 4px rgba(0,0,0,0.12)',
      md: '4px 4px 8px rgba(0,0,0,0.24)',
      lg: '6px 6px 12px rgba(0,0,0,0.24)',
      xl: '8px 8px 16px rgba(0,0,0,0.48)',
    }

    // position
    this.zIndices = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    }

    // breakpoints
    const breakpoints = ['768px', '1024px', '1280px', '1920px']
    this.breakpoints = breakpoints
    this.mediaQuery = {
      mobile: `@media (max-width: ${breakpoints[0]})`,
      tablet: `@media (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
      laptop: `@media (min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
      desktop: `@media (min-width: ${breakpoints[2]})`,
    }
  }

  setDimensions = ({ window, screen }: any) => {
    this.window = window
    this.screen = screen
    this.init()
  }

  static self = new Theme()

  static setTheme(colors: string) {
    Theme.self = new Theme(colors)
  }

  static extend(themeColors: object) {
    Theme.self = new Theme()
    Theme.self.colors = { ...Theme.self.colors, ...themeColors }
    return Theme.self
  }
}
