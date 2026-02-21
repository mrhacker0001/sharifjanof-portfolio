import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import img from "../assets/Screenshot 2024-08-29 at 20.54.22.png"

function Home() {
  return (
    <Box
      id="home"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        gap: { xs: 5, md: 10 },
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: '0.4s',
      }}
    >
      {/* TEXT CARD */}
      <Stack spacing={3} flex={1}>
        <Typography variant="subtitle1" color="primary">
          Hey, I am Azweb
        </Typography>
        <Typography variant="h3" fontWeight={700}>
          I craft modern and engaging web experiences
        </Typography>
        <Typography variant="body1" lineHeight={1.8}>
          As a dedicated frontend developer, I specialize in building responsive, high-performance websites with clean code and intuitive design. My goal is to create digital products that are both beautiful and functional.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" size="large" href="#portfolio">
            My Work
          </Button>
          <Button variant="outlined" color="primary" size="large" href="#contact">
            Contact Me
          </Button>
        </Stack>
      </Stack>

      {/* IMAGE CARD */}
      <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src={img}
          alt="Home illustration"
          sx={{
            maxWidth: { xs: '100%', md: 400 },
            borderRadius: 3,
            boxShadow: 6,
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'translateY(-10px) scale(1.03)',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Home