import React, { useState, } from 'react'
import { AppBar, Toolbar, Divider, IconButton, Box, Button, Drawer, Stack, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import logo from "../assets/Screenshot 2024-03-07 at 21.47.46.png"
import insta from "../assets/Instagram.png"
import telegram from "../assets/telegram.png"
import { Link as ScrollLink } from 'react-scroll'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "Skills", to: "skills" },  // ADD THIS LINE
    { label: "Portfolio", to: "portfolio" },
    { label: "About me", to: "about" },
    { label: "Testimonials", to: "testimonials" },
    { label: "Contact me", to: "contact" },
  ]

  return (
    <>
      {/* DESKTOP APPBAR */}
      <AppBar position="sticky" color="default" elevation={3} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 50 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map((link) => (
              <ScrollLink key={link.to} to={link.to} smooth duration={600}>
                <Button color="inherit">{link.label}</Button>
              </ScrollLink>
            ))}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { md: 'none' } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: '70%', p: 3 } }}
      >
        <Stack spacing={3}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              onClick={() => setMobileOpen(false)}
            >
              <Button fullWidth variant="outlined">{link.label}</Button>
            </ScrollLink>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* SOCIAL BUTTONS */}
          <Stack spacing={2}>
            <Button
              variant="contained"
              startIcon={<Box component="img" src={insta} alt="Instagram" sx={{ width: 24 }} />}
              href="https://www.instagram.com/16.sharifjanof"
              target="_blank"
            >
              SHARIFJANOF
            </Button>
            <Button
              variant="contained"
              startIcon={<Box component="img" src={telegram} alt="Telegram" sx={{ width: 24 }} />}
              href="https://t.me/Azweb_off"
              target="_blank"
            >
              SHARIFJANOF
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  )
}

export default Navbar