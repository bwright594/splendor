import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createContext, useMemo, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import AppMenu from './AppMenu'
import Feature1Component from './features/feature1/Feature1Component'
import Feature2Component from './features/feature2/Feature2Component'
import Home from './features/home/Home'

export const ColorModeContext = createContext({ toggleColorMode: () => {}});

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }), [mode]
  );
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppMenu/>}>
        <Route index element = {<Home/>}/>
        <Route path="/feature1" element = {<Feature1Component/>}/>
        <Route path="/feature2" element = {<Feature2Component/>}/>
      </Route>
    )
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }), [mode]
  )

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
