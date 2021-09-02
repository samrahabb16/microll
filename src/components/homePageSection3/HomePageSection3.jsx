import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import SectionImage from "./sectionImage.png"
import { GoldButton, GrayButton, MyText } from "../helper/Helper"
import { Link } from "react-router-dom"
import Moniter from './monitor.png';
import OAK from './oak.png';
import LaptopDashboard from './LaptopDashboard.svg';

export default () => {
    const match440 = useMediaQuery('(max-width:440px)');
    return (
        <Box maxWidth='1440px' marginRight={'auto'} marginLeft='auto' sx={{ marginTop: '342px' }}>
            <Grid container spacing={4} alignItems="center" justifyContent={{ xs: 'center', md: "space-around" }} >
                <Grid item xs={12} md={6} textAlign='center' mt={3} sx={{ position: 'relative' }}>
                    <Box component="img" src={SectionImage} alt='Section1' width='100%' textAlign='center' sx={{ position: 'relative' }} />
                    <Box sx={{
                        position: 'absolute',
                        top: { xs: match440 ? '21%' : '19%' },//
                        left: { xs: match440 ? '19%' : '17%' },//20
                        height: { xs: '35%', sm: '37%' },
                        width: { xs: match440 ? '64%' : '67%' },
                        transform: 'rotate(-15deg)',
                        overflowY: 'scroll',
                    }}>
                        <img src={LaptopDashboard} alt='Laptop' width='100%' />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} mt={3}>
                    <Container>
                        <MyText
                            normal='Terra Treasury offers '
                            colored='optimized interest'
                        />
                        <Typography
                            sx={{
                                fontFamily: 'SF Pro',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: { xs: '17px', md: '21px' },
                                lineHeight: '24px',
                                color: '#CEBFBF',
                            }}
                            mt={3}
                        >
                            Built simple and secure - Enjoy the most valuable ecosystem in the world.
                        </Typography>


                        <Box mt={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'SF Pro',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: { xs: '17px', md: '21px' },
                                    lineHeight: '24px',
                                    color: '#CEBFBF',
                                }}

                            >
                                Audit in Progress by:
                            </Typography>
                            <Box component='img' src={OAK} alt='Monitor' width='69px' sx={{ marginLeft: '20px' }} />
                        </Box>




                        <Stack
                            marginTop='25px'
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
                    </Container>
                </Grid>

            </Grid>
        </Box>
    )
}