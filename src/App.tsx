import { Box, Stack, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Feed } from './components/Feed'
import { RightBar } from './components/RightBar'
import { Sidebar } from './components/Sidebar'
import { ColorModeContext, useMode } from './theme'

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <Feed />
            <RightBar />
          </Stack>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
