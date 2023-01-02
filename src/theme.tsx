import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"

type TokenProps = "dark" | "light"

// color design tokens
export const tokens = (mode: TokenProps) => ({
  ...(mode === 'dark' ? {
    white: {
      300: "#E1E1E6"
    },
    grey: {
      100: "#E1E1E6",
      300: "#C4C4CC",
      400: "#8D8D99",
      500: "#7C7C8A",
      600: "#323238",
      700: "#29292E",
      800: "#202024",
      900: "#121214"
    },
    primary: {
      100: "#d0d1d5",
      200: "#a1a4ab",
      300: "#727681",
      400: "#1F2A40",
      500: "#141b2d",
      600: "#101624",
      700: "#0c101b",
      800: "#080b12",
      900: "#040509",
    },
    green: {
      100: "#cce7df",
      200: "#99cfbf",
      300: "#66b79f",
      400: "#339f7f",
      500: "#00875f",
      600: "#006c4c",
      700: "#005139",
      800: "#003626",
      900: "#001b13"
    },
    redAccent: {
      100: "#f8dcdb",
      200: "#f1b9b7",
      300: "#e99592",
      400: "#e2726e",
      500: "#db4f4a",
      600: "#af3f3b",
      700: "#832f2c",
      800: "#58201e",
      900: "#2c100f",
    },
    blueAccent: {
      100: "#e1e2fe",
      200: "#c3c6fd",
      300: "#a4a9fc",
      400: "#868dfb",
      500: "#6870fa",
      600: "#535ac8",
      700: "#3e4396",
      800: "#2a2d64",
      900: "#151632",
    },
  }
    : {
      white: {
        300: "#E1E1E6"
      },
      grey: {
        100: "#121214",
        300: "#202024",
        400: "#29292E",
        500: "#323238",
        600: "#7C7C8A",
        700: "#8D8D99",
        800: "#C4C4CC",
        900: "#E1E1E6",
      },
      primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      green: {
        100: "#001b13",
        200: "#003626",
        300: "#005139",
        400: "#006c4c",
        500: "#00875f",
        600: "#339f7f",
        700: "#66b79f",
        800: "#99cfbf",
        900: "#cce7df",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
    })
})

export const themeSettings = (mode: TokenProps) => {
  const colors = tokens(mode);


  return {
    palette: {
      mode,
      ...(mode === "dark" ? {
        primary: {
          main: colors.green[700]
        },
        secondary: {
          main: colors.green[500]
        },
        neutral: {
          dark: colors.grey[700],
          main: colors.grey[500],
          light: colors.grey[100]
        },
        background: {
          default: colors.grey[900]
        }
      } : {
        primary: {
          main: colors.green[300]
        },
        secondary: {
          main: colors.green[500]
        },
        neutral: {
          dark: colors.grey[700],
          main: colors.grey[500],
          light: colors.grey[100]
        },
        background: {
          default: colors.grey[900]
        }
      })
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14
      }
    }
  }
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { }
})

export const useMode = () => {
  const [mode, setMode] = useState<TokenProps>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      }
    }),
    [],
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return { theme, colorMode }
}