import React from 'react'
import { Box, Typography, Card, CardMedia } from '@mui/material'
import img from "../assets/Screenshot 2024-08-29 at 21.28.36.png"

function About() {
  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 5, md: 10 },
        py: 12,
        px: { xs: 3, md: 10 },
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: '0.4s'
      }}
    >
      {/* IMAGE */}
      <Card
        sx={{
          maxWidth: { xs: '100%', md: 400 },
          borderRadius: 3,
          boxShadow: 6,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt="About me"
        />
      </Card>

      {/* TEXT */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          About
        </Typography>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" mb={2} lineHeight={1.8}>
          I am a passionate and motivated IT specialist who enjoys building modern, user-friendly digital solutions. I am constantly improving my skills and learning new technologies to stay up to date in the fast-growing tech world.
        </Typography>
        <Typography variant="body1" lineHeight={1.8}>
          I have experience working with web technologies and enjoy turning ideas into real, functional projects. My goal is to grow as a professional developer, contribute to meaningful projects, and deliver clean, efficient, and scalable code.
        </Typography>
      </Box>
    </Box>
  )
}

export default About