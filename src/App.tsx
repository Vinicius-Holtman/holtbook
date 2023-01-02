import { Box, CssBaseline, Stack, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { AddPost } from './components/AddPost'
import { Feed } from './components/Feed'
import { NavBar } from './components/NavBar'
import { RightBar } from './components/RightBar'
import { Sidebar } from './components/Sidebar'
import { Home } from './page/Home'
import { Marketplace } from './page/Marketplace'
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
            <Routes>
              <Route path="/" element={ <Home /> }  />
              {/* <Route path="/pages" element={ <Pages /> }  />
              <Route path="/groups" element={ <Groups /> }  /> */}
              <Route path="/marketplace" element={ <Marketplace /> }  />
              {/* <Route path="/friends" element={ <Friends /> }  />
              <Route path="/settings" element={ <Settings /> }  />
              <Route path="/profile" element={ <Profile /> }  /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
