import { Box, CssBaseline, Stack, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Add } from './components/Add'
import { Feed } from './components/Feed'
import { NavBar } from './components/NavBar'
import { RightBar } from './components/RightBar'
import { Sidebar } from './components/Sidebar'
import { ColorModeContext, useMode } from './theme'

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <NavBar />
          <main className='content'>
            <Box>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
                <RightBar />
              </Stack>
              <Add />
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
