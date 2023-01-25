import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

// fonts
import MetropolisThin from '../assets/fonts/Metropolis-Thin.otf';
import MetropolisLight from '../assets/fonts/Metropolis-Light.otf';
import MetropolisRegular from '../assets/fonts/Metropolis-Regular.otf';
import MetropolisMedium from '../assets/fonts/Metropolis-Medium.otf';
import MetropolisSemiBold from '../assets/fonts/Metropolis-SemiBold.otf';
import MetropolisBold from '../assets/fonts/Metropolis-Bold.otf';
import MetropolisExtraBold from '../assets/fonts/Metropolis-ExtraBold.otf';

export const appColors = {
  darkestGray: '#1A2225',
  darkGray: '#222D31',
  darkText: '#2C2C2C',
  mediumGray: '#596164',
  lightGray: '#A8A8A8',
  titleGray: '#363637',
  burgundy: '#AABCBF',
  inputBg: '#F5F8F8',
  offWhite: '#F5F5F5',
  coolWhite: '#EBEBEB',
  lightRed: '#F0DCE0',
  primary: '#083c74',
  success: '#28A745',
  error: '#DD4C39',
  errorDark: '#C94434',
  warning: '#F39C11',
  warningDark: '#DD8E0F',
  calcBtnRed: '#DC3644',
  secondary: '#744008',
  secondaryDark: '#331C03'
};

export const appSizes = {
  drawerWidth: {
    small: 60,
    expanded: 240
  },
  chatboxWidth: 360,
  chatbotPos: 250,
  chatbotPosMobile: 16
};

const theme = createTheme({
  typography: {
    fontFamily: ['metropolis', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: '#9C1C33'
    },
    secondary: {
      main: '#AABCBF'
    },
    success: {
      main: '#28A745',
      dark: '#1E7E34'
    },
    info: {
      main: '#3B8DBC',
      light: '#3675B6'
    },
    error: {
      main: '#DD4C39'
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#9a9a9a'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 400,

          '&.calc-btn': {
            fontWeight: 'bold',
            borderWidth: '2px',
            color: appColors.burgundy,
            backgroundColor: 'white',
            minWidth: '180px',
            padding: '9px 12px',

            '& .MuiButton-endIcon': {
              position: 'absolute',
              right: '14px'
            },

            '&:hover': {
              borderWidth: '2px',
              borderColor: appColors.mediumGray,
              color: appColors.mediumGray
            },

            '&.filled': {
              color: 'white',
              backgroundColor: appColors.burgundy,

              '&:hover': {
                color: 'white',
                backgroundColor: appColors.mediumGray
              }
            },

            '&.primary': {
              color: 'white',
              backgroundColor: appColors.primary,

              '&:hover': {
                backgroundColor: appColors.calcBtnRed
              }
            },

            '&.Mui-disabled': {
              backgroundColor: '#DEDEDE'
            }
          },

          '&.rounded-btn': {
            fontWeight: 'bold',
            color: appColors.primary,
            backgroundColor: 'white',
            borderRadius: 24,
            minWidth: '200px',
            border: `1px solid ${appColors.primary}`,
            padding: '8px 30px',
            transition: 'all 200ms ease-in',

            '&:not(.no-hover):hover': {
              border: `1px solid ${appColors.calcBtnRed}`,
              backgroundColor: appColors.calcBtnRed,
              color: 'white'
            },

            '&.dark-on-hover:hover': {
              backgroundColor: appColors.darkText,
              color: 'white',
              border: `1px solid ${appColors.darkText}`
            }
          }
        },
        outlinedSecondary: {
          color: appColors.mediumGray
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.calc-field.MuiTextField-root': {
            backgroundColor: appColors.inputBg,
            '&.error': {
              '& fieldset': {
                borderColor: appColors.error
              },
              '&:hover fieldset': {
                borderColor: appColors.error
              },
              '&.Mui-focused fieldset': {
                borderColor: appColors.error
              }
            },

            '&.success': {
              '& fieldset': {
                borderColor: appColors.success
              },
              '&:hover fieldset': {
                borderColor: appColors.success
              },
              '&.Mui-focused fieldset': {
                borderColor: appColors.success
              }
            },

            '& .MuiOutlinedInput-input': {
              backgroundColor: appColors.inputBg,

              '&::-webkit-outer-spin-button': {
                WebkitAppearance: 'none',
                margin: 0
              },
              '&::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0
              },
              '&[type=number]': {
                MozAppearance: 'textfield'
              }
            },
            '& fieldset': {
              borderColor: appColors.burgundy
            },
            '&:hover fieldset': {
              borderColor: appColors.burgundy
            },
            '&.Mui-focused fieldset': {
              borderColor: appColors.burgundy
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.chat-chip': {
            borderWidth: '1px',
            fontWeight: '600',
            maxWidth: '230px',
            height: 'max-content',

            '&.chat-question': {
              // padding: '6px 0px'
            },

            '&.chat-grey': {
              color: appColors.mediumGray,
              borderColor: appColors.mediumGray,

              '&:hover': {
                color: 'white',
                backgroundColor: appColors.mediumGray,
                borderColor: appColors.mediumGray
              }
            },

            '&:hover': {
              // color: 'white',
              // backgroundColor: appColors.calcBtnRed,
              // borderColor: appColors.calcBtnRed
              backgroundColor: 'transparent'
            },

            '& > .MuiChip-label': {
              whiteSpace: 'pre-wrap'
            }
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('Metropolis'), local('Metropolis-Thin'), url(${MetropolisThin}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
            font-family: 'Metropolis';
            font-style: normal;
            font-display: swap;
            font-weight: 300;
            src: local('Metropolis'), local('Metropolis-Light'), url(${MetropolisLight}) format('otf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Metropolis'), local('Metropolis-Regular'), url(${MetropolisRegular}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
         @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Metropolis'), local('Metropolis-Medium'), url(${MetropolisMedium}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Metropolis'), local('Metropolis-SemiBold'), url(${MetropolisSemiBold}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Metropolis'), local('Metropolis-Bold'), url(${MetropolisBold}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: local('Metropolis'), local('Metropolis-ExtraBold'), url(${MetropolisExtraBold}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  }
});

export default function AppThemeProvider({
  children
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
