import React, { useMemo, useState } from 'react'
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  // Dark/light mode state
  const [mode, setMode] = useState("light")

  // MUI theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        shape: { borderRadius: 16 },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset + dark mode background */}

      {/* Navbar */}
      <Navbar />

      {/* Main sections */}
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Dark/Light toggle button */}
      <button
        onClick={() => setMode(prev => (prev === "light" ? "dark" : "light"))}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "10px 15px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          background: mode === "light" ? "#111" : "#fff",
          color: mode === "light" ? "#fff" : "#111",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        Toggle Theme
      </button>
    </ThemeProvider>
  )
}

export default App