import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { GoldButton, GrayButton, MyText } from "../helper/Helper"
import { Link } from "react-router-dom"
import Moniter from './monitor.png';
import * as React from "react";
import AOS from 'aos';

const MyAnimation = () => {

    return <div className="aos-init aos-animate">
        <div className="circle-wrap animate" id="circle-wrap">
            <div className="circle-1">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path className="circle" stroke-dasharray="33, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" ></path>
                </svg>
            </div>
            <div className="circle-2">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path className="circle" stroke-dasharray="44, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" ></path>
                </svg>
            </div>
            <div className="circle-3">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path className="circle" stroke-dasharray="63, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" ></path>
                </svg>
            </div>
            <div className="circle-4">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path className="circle" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" ></path>
                </svg>
            </div>
            <div className="circle-5">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path className="circle" stroke-dasharray="81, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" ></path>
                </svg>
            </div>
        </div>
    </div>
}

export default () => {
    React.useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    })
    return (
        <Box sx={{ marginTop: '337px' }}>
            <Container>
                <Grid container spacing={4} alignItems="center" justifyContent={{ xs: 'center', md: "space-around" }} >
                    <Grid item xs={12} md={6} mt={5}>
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
                            mt={5}
                        >
                            Terra Treasury’s yield is stable, secure and attractive. It is powered by staking returns and 3rd. generation arbitrage farming from multiple proof of stake blockchains & DEX’s.
                        </Typography>
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
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='center' mt={5}>
                        <div
                            data-aos="fade-down"
                            className="aos-init aos-animate"
                        >
                            <MyAnimation />
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}