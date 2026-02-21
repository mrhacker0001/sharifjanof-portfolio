import React from "react"
import vector from "../assets/Vector (13).png"
import avatar from "../assets/Avatar.png"

import {
    Box,
    Typography,
    Card,
    Stack,
    useTheme,
} from "@mui/material"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import Tilt from "react-parallax-tilt"

import "swiper/css"
import "swiper/css/pagination"

function Testimonials() {
    const theme = useTheme()

    const data = [
        {
            star: vector,
            tavsif:
                "Working with Azweb was a great experience. The website was delivered on time with clean code and a modern, responsive design.",
            avatar: avatar,
            name: "Michael Brown",
            role: "Startup Founder",
        },
        {
            star: vector,
            tavsif:
                "Very professional and detail-oriented developer. Communication was smooth and the final product exceeded expectations.",
            avatar: avatar,
            name: "Sarah Johnson",
            role: "Product Manager",
        },
        {
            star: vector,
            tavsif:
                "Fast, reliable, and highly skilled. The project performs perfectly on all devices. Highly recommended.",
            avatar: avatar,
            name: "David Lee",
            role: "Business Owner",
        },
    ]

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                px: 3,
                bgcolor: theme.palette.mode === "dark" ? "#0f172a" : "#F5FCFF",
                transition: "0.4s",
            }}
        >
            {/* TITLE */}
            <Box textAlign="center" mb={8}>
                <Typography variant="subtitle1" color="text.secondary">
                    Clients Feedback
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                    Customer testimonials
                </Typography>
            </Box>

            {/* SWIPER */}
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                loop
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    900: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} style={{ height: "50dvh", paddingTop: "5dvh" }}>
                        <Tilt glareEnable glareMaxOpacity={0.25} scale={1.03}>
                            <Card
                                sx={{
                                    p: 4,
                                    position: "relative",
                                    backdropFilter: "blur(14px)",
                                    bgcolor:
                                        theme.palette.mode === "dark"
                                            ? "rgba(255,255,255,0.05)"
                                            : "rgba(255,255,255,0.7)",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    boxShadow: 3,
                                    transition: "0.4s",
                                    "&:hover": {
                                        boxShadow: 10,
                                        transform: "translateY(-8px)",
                                    },
                                    overflow: "hidden",
                                }}
                            >
                                {/* gradient glow */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: -10,
                                        background:
                                            "linear-gradient(90deg,#22d3ee,#3b82f6,#a855f7)",
                                        opacity: 0,
                                        filter: "blur(40px)",
                                        transition: "0.4s",
                                        ".MuiCard-root:hover &": { opacity: 0.2 },
                                    }}
                                />

                                {/* stars */}
                                <Stack direction="row" spacing={0.5} mb={2}>
                                    {[...Array(5)].map((_, i) => (
                                        <Box
                                            key={i}
                                            component="img"
                                            src={item.star}
                                            sx={{ width: 16 }}
                                        />
                                    ))}
                                </Stack>

                                {/* text */}
                                <Typography color="text.secondary" mb={3}>
                                    {item.tavsif}
                                </Typography>

                                {/* user */}
                                <Stack alignItems="center">

                                    <Typography fontWeight={600}>{item.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.role}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Tilt>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default Testimonials