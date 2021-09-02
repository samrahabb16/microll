import { Box, Button, Container, Grid, Hidden, Stack, Typography } from "@mui/material"
import img1 from "./img1.png"
import img2 from "./img1.png"
import img3 from "./img1.png"
import img4 from "./img1.png"
import Moniter from "./monitor.png"
import { GoldButton, GrayButton, MyText } from "../helper/Helper"
import { Link } from "react-router-dom"

export default () => {
    return (
        <Box sx={{marginTop:'480px'}}>
            <Container>
                <Grid container justifyContent={{ xs: 'center', md: 'space-between' }}>
                    <Grid item xs={12} md={9} mt={5}>
                        <MyText
                            normal='Take your first step'
                            colored=''
                            mar={0}
                        />
                        <MyText
                            normal='into '
                            colored='DeFi with Terra Treasury'
                        />
                        <Stack
                            marginBottom='50px'
                            direction={{ xs: 'column', sm: 'row' }}
                            textAlign='center'
                            spacing={4}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <GoldButton label={'Learn More'} />
                            </Link>

                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <GrayButton imageIconPath={Moniter} label='WebApp' />
                            </Link>
                        </Stack>
                    </Grid>
                    {
                        [
                            {
                                image: img1,
                                title: "High Yields: ",
                                description: "earn the highest stable yield in crypto with terra treasury savings.",
                            },
                            {
                                image: img2,
                                title: "Security: ",
                                description: " Our highest priority is to maximize the safety of our users funds, our partner projects, and our community.",
                            },
                            {
                                image: img3,
                                title: "Flexibility: ",
                                description: "Deposit and withdraw your savings anytime, anywhere.No minimum deposit required for maximum flexibility!",
                            },
                            {
                                image: img4,
                                title: "Stability: ",
                                description: "Terra Treasury offers unparalleled stable interest rates for UST and LUNA.",
                            },
                        ].map((obj, index) => {
                            return <Grid item xs={12} md={6} mb={4} key={index}>
                                <Box
                                    sx={{
                                        width: '90%',
                                        margin: 'auto',
                                        background: 'linear-gradient(90deg, #0B0B0B -44.86%, #181A1E 78.85%)',
                                        borderRadius: '25px',
                                        padding: '5%',
                                        color: 'CEBFBF',
                                    }}
                                >
                                    <Stack minHeight='100px' direction='row' alignItems='center' justifyContent='center' spacing={4}>
                                        <Box component="img" src={obj.image} alt='Section5' />
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'SF Pro',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '18px',
                                                    lineHeight: '100%',
                                                    color: '#CEBFBF',

                                                }}
                                            >
                                                <strong>{obj.title}</strong>
                                                <span>{obj.description}</span>

                                            </Typography>

                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        })
                    }

                </Grid>
            </Container>
        </Box>
    )
}