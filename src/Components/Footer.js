import React from 'react'
import { Box, Typography, Stack, IconButton, Divider, Link } from '@mui/material'
import logo from "../assets/Screenshot 2024-03-07 at 21.47.46.png"
import { GitHub, Instagram, Telegram } from '@mui/icons-material'

function Footer() {
    const navLinks = ["Home", "Portfolio", "About me", "Contact", "Testimonials"]
    const policyLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"]

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.paper',
                color: 'text.primary',
                py: 6,
                px: { xs: 3, md: 10 },
                mt: 12,
            }}
        >
            {/* TOP FOOTER */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, md: 10 }}
                alignItems="center"
                justifyContent="space-between"
                mb={4}
            >
                {/* LOGO */}
                <Box>
                    <img src={logo} alt="Logo" style={{ width: 120, height: 'auto' }} />
                </Box>

                {/* NAV LINKS */}
                <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href="#"
                            underline="hover"
                            color="inherit"
                            sx={{ fontWeight: 500 }}
                        >
                            {link}
                        </Link>
                    ))}
                </Stack>

                {/* SOCIAL ICONS */}
                <Stack direction="row" spacing={1}>
                    <IconButton
                        component="a"
                        href="https://www.instagram.com/s17.sharifjanof/"
                        color="inherit"
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://t.me/seoulflix_admin"
                        color="inherit"
                    >
                        <Telegram />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/mrhacker0001/"
                        color="inherit"
                    >
                        <GitHub />
                    </IconButton>
                </Stack>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            {/* BOTTOM FOOTER */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={{ xs: 2, md: 0 }}
            >
                <Typography variant="body2">Made with ❤️ by AZWEB</Typography>
                <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center">
                    {policyLinks.map((link) => (
                        <Link key={link} href="#" underline="hover" color="inherit" variant="body2">
                            {link}
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer