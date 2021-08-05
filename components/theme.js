const colors = {
  offBlack: '#090a0f',
  darkBlue: '#18202b',
  lightBlue: '#02afe2',
  teal: '#38e3bf',
  grey: '#bfbfbf',
  white: '#ffffff',
}

const theme = {
  colors: {
    background: colors.offBlack,
    heading: colors.white,
    text: colors.grey,
    highlight: colors.lightBlue,
    secondary: colors.white,
  },
  gradients: {
    dark: `linear-gradient(90deg, ${colors.darkBlue} 0%, ${colors.offBlack} 100%)`,
    light: `linear-gradient(90deg, ${colors.teal} 0%, ${colors.lightBlue} 100%)`,
  },
  font: '"Lato", sans-serif',
}

export default theme