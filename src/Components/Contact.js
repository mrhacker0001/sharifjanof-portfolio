import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Box, TextField, Button, MenuItem, Typography, FormControlLabel, Checkbox, Stack, Snackbar, Alert } from '@mui/material'

function Contact() {
    const form = useRef()
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_793iiyx',
            'template_t24i3t3',
            form.current,
            'UweXp4WrejUdTDt2f'
        ).then(
            () => {
                setSnackbar({ open: true, message: "Message sent successfully!", severity: 'success' })
                form.current.reset()
            },
            (error) => {
                setSnackbar({ open: true, message: "Failed to send message. Please try again.", severity: 'error' })
                console.log(error)
            }
        )
    }

    const topics = ["JavaScript", "React JS", "Node JS", "CSS", "HTML"]

    return (
        <Box
            id="contact"
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 3, md: 10 },
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            {/* TITLE */}
            <Box textAlign="center" mb={6}>
                <Typography variant="subtitle1" color="primary">
                    Get In Touch
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                    Contact Me
                </Typography>
                <Typography variant="body1" mt={2}>
                    Feel free to contact me anytime.
                </Typography>
            </Box>

            {/* FORM */}
            <Box component="form" ref={form} onSubmit={sendEmail}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 3, md: 5 }}
                >
                    {/* LEFT COLUMN */}
                    <Stack spacing={2} flex={1}>
                        <TextField label="First Name" name="first_name" required fullWidth />
                        <TextField label="Last Name" name="last_name" required fullWidth />
                        <TextField label="Email" name="user_email" type="email" required fullWidth />
                        <TextField label="Phone Number" name="phone" fullWidth />
                    </Stack>

                    {/* RIGHT COLUMN */}
                    <Stack spacing={2} flex={1}>
                        <TextField
                            select
                            label="Choose a topic"
                            name="topic"
                            fullWidth
                            required
                            defaultValue=""
                        >
                            <MenuItem value="">Select one</MenuItem>
                            {topics.map((topic) => (
                                <MenuItem key={topic} value={topic}>
                                    {topic}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Message"
                            name="message"
                            multiline
                            rows={6}
                            placeholder="Type your message..."
                            required
                            fullWidth
                        />

                        <FormControlLabel
                            control={<Checkbox required />}
                            label="I accept the terms"
                        />

                        <Button type="submit" variant="contained" size="large">
                            Submit
                        </Button>
                    </Stack>
                </Stack>
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    )
}

export default Contact