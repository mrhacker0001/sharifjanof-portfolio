import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'
import img from "../assets/Strategy & Direction.png"
import img1 from "../assets/Branding & Logo.png"
import img2 from "../assets/UI & UX Design.png"
import img3 from "../assets/Webflow Development.png"

const skillsData = [
    {
        img: img,
        title: "Strategy & Direction",
        desc: "I help define clear digital strategies and development roadmaps that align with business goals and user needs."
    },
    {
        img: img1,
        title: "Branding & Logo",
        desc: "I create clean and memorable brand visuals that strengthen identity and improve overall product recognition."
    },
    {
        img: img2,
        title: "UI & UX Design",
        desc: "I design intuitive and user-friendly interfaces focused on usability, accessibility, and modern design principles."
    },
    {
        img: img3,
        title: "Web Development",
        desc: "I build responsive, high-performance websites using modern technologies to deliver fast and scalable web solutions."
    }
]

function Skills() {
    return (
        <Box
            id="skills"
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
                    My Skills
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                    My Expertise
                </Typography>
            </Box>

            {/* GRID CARDS */}
            <Grid container spacing={4}>
                {skillsData.map((item, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <Card
                            sx={{
                                p: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                borderRadius: 3,
                                boxShadow: 6,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': { transform: 'translateY(-10px)', boxShadow: 12 }
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={item.img}
                                alt={item.title}
                                sx={{ width: 80, height: 80, mb: 3 }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Skills