import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Stack } from '@mui/material'
import Slider from "react-slick"
import img1 from "../assets/logo2.png"
import img2 from "../assets/logo.png"
import img3 from "../assets/Screenshot 2025-11-04 at 23.27.50.png"
import right from "../assets/right-up.png"
import dribbleIcon from "../assets/Vector (11).png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
    { img: img1, name: "E-shopping", desc: "You can buy anything in one place", link: "https://e-shopping-bay.vercel.app" },
    { img: img2, name: "CDMastery", desc: "Take your learning with you!", link: "https://cdmastery.vercel.app/" },
    { img: img3, name: "SeoulFlix", desc: "Movie site to see Korean dramas", link: "https://seoul-flix.vercel.app/" },
]

function Portfolio() {
    const isMobile = window.innerWidth <= 800

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Box
            id="portfolio"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 3, md: 10 },
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            {/* HEADER */}
            <Box textAlign="center" mb={6}>
                <Typography variant="h6" color="primary" gutterBottom>
                    Recent Projects
                </Typography>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                    My Portfolio
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Box component="img" src={dribbleIcon} alt="Dribbble" sx={{ width: 24 }} />}
                    href="#"
                    sx={{ mt: 2 }}
                >
                    Visit My Dribble
                </Button>
            </Box>

            {/* CARDS */}
            {isMobile ? (
                <Slider {...sliderSettings}>
                    {data.map((item, idx) => (
                        <Card key={idx} sx={{ m: 2, borderRadius: 3, boxShadow: 6 }}>
                            <CardMedia component="img" image={item.img} alt={item.name} sx={{ height: 250 }} />
                            <CardContent>
                                <Typography variant="h5" fontWeight={600} gutterBottom>{item.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    variant="contained"
                                    href={item.link}
                                    target="_blank"
                                    endIcon={<Box component="img" src={right} alt="arrow" sx={{ width: 20 }} />}
                                    sx={{ mx: 'auto', mb: 2 }}
                                >
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Slider>
            ) : (
                <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
                    {data.map((item, idx) => (
                        <Card key={idx} sx={{ width: 300, m: 2, borderRadius: 3, boxShadow: 6 }}>
                            <CardMedia component="img" image={item.img} alt={item.name} sx={{ height: 200 }} />
                            <CardContent>
                                <Typography variant="h5" fontWeight={600} gutterBottom>{item.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    variant="contained"
                                    href={item.link}
                                    target="_blank"
                                    endIcon={<Box component="img" src={right} alt="arrow" sx={{ width: 20 }} />}
                                    sx={{ mx: 'auto', mb: 2 }}
                                >
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Stack>
            )}
        </Box>
    )
}

export default Portfolio