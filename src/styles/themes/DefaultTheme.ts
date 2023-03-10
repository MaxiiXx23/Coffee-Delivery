export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const defaultTheme = {
  colors: {
    'white-50': '#FFFF',
    'white-100': '#FAFAFA',

    'yellow-100': '#F1E9C9',
    'yellow-500': '#DBAC2C',
    'yellow-600': '#C47F17',

    'purple-50': '#EBE5F9',
    'purple-500': '#8047F8',
    'purple-700': '#4B2995',

    'gray-100': '#F3F2F2',
    'gray-200': '#EDEDED',
    'gray-300': '#E6E5E5',
    'gray-400': '#D7D5D5',
    'gray-500': '#8D8686',
    'gray-600': '#574F4D',
    'gray-700': '#403937',
    'gray-800': '#272221',
  },
  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
}
