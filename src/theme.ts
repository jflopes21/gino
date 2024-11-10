import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        50: {
          default: "#e4f0ff",
          _dark: "#e4f0ff"
        },
        100: {
          default: "#b3d4ff",
          _dark: "#b3d4ff"
        },
        200: {
          default: "#80b8ff",
          _dark: "#80b8ff"
        },
        300: {
          default: "#4d9cff",
          _dark: "#4d9cff"
        },
        400: {
          default: "#1a80ff",
          _dark: "#1a80ff"
        },
        500: {
          default: "#0063e0",
          _dark: "#0063e0"
        },
        600: {
          default: "#004aad",
          _dark: "#004aad"
        },
        700: {
          default: "#003a8a",
          _dark: "#003a8a"
        },
        800: {
          default: "#002a67",
          _dark: "#002a67"
        },
        900: {
          default: "#001a44",
          _dark: "#001a44"
        }
      },
      secondary: {
        50: {
          default: "#f6f4f4",
          _dark: "#f6f4f4"
        },
        100: {
          default: "#e0e0e0",
          _dark: "#e0e0e0"
        },
        200: {
          default: "#cccccc",
          _dark: "#cccccc"
        },
        300: {
          default: "#b3b3b3",
          _dark: "#b3b3b3"
        },
        400: {
          default: "#999999",
          _dark: "#999999"
        },
        500: {
          default: "#737373",
          _dark: "#737373"
        },
        600: {
          default: "#4a4a4a",
          _dark: "#4a4a4a"
        },
        700: {
          default: "#333333",
          _dark: "#333333"
        },
        800: {
          default: "#1a1a1a",
          _dark: "#1a1a1a"
        },
        900: {
          default: "#0d0d0d",
          _dark: "#0d0d0d"
        }
      }
    }
  },
  components: {
    Input: {
      variants: {
        darken: {
          field: {
            backgroundColor: "blank.200",
            border: "1px solid",
            borderColor: "blank.300",
            rounded: "4px",
            _placeholder: {
              color: "primary.350",
              fontSize: { base: "12px", md: "16px" }
            },
            _focus: {
              borderColor: "primary.700 !important",
              boxShadow: "0 0 0 1px var(--chakra-colors-primary-700) !important"
            }
          }
        }
      },
      baseStyle: {
        field: {
          fontSize: { base: "12px", md: "16px" },
          _placeholder: { color: "secondary.500" },
          _focus: {
            borderColor: "primary.500 !important",
            boxShadow: "0 0 0 1px var(--chakra-colors-primary.500) !important"
          },
          color: "secondary.900",
          height: "48px"
        }
      }
    },
    Button: {
      variants: {
        primary: {
          backgroundColor: "primary.600",
          _hover: {
            backgroundColor: "primary.700"
          },
          color: "white"
        },
        primaryReverse: {
          backgroundColor: "red.500",
          _hover: {
            backgroundColor: "red.600"
          },
          color: "white"
        },
        secondary: {
          backgroundColor: "white",
          _hover: {
            backgroundColor: "primary.50"
          },
          color: "primary.600",
          border: "1px solid",
          borderColor: "primary.600"
        },
        secondaryReverse: {
          backgroundColor: "white",
          _hover: {
            backgroundColor: "red.50"
          },
          color: "red.500",
          border: "1px solid",
          borderColor: "red.500"
        }
      }
    }
  },
  styles: {
    global: {
      body: {
        background: "white",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      },
      "&::-webkit-scrollbar": {
        width: "4px",
        height: "6px"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "primary.100",
        borderRadius: "4px"
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "secondary.400"
      }
    }
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif"
  }
});
