import { Box, Button, Container, Grid, Hidden, Stack, Typography } from "@mui/material"
import CoinImg from "./coin.png"
import { GrayButton, MyText } from "../helper/Helper"
import { Link } from "react-router-dom"
import jugar from "./jugar.gif"




export default () => {
    return (
        <Box sx={{marginTop:'144px'}}>
            <Container>
                <Grid container spacing={4} alignItems="center" justifyContent={{ xs: 'center', md: "space-around" }} >
                    <Hidden mdUp>
                        <Grid item xs={12} md={6} mb={7}>
                            <MyText
                                normal='Terra Treasury First Decentralized'
                                colored='3rd gen. Savings Protocol'
                            />
                            <Stack
                                marginTop='50px'
                                direction={{ xs: 'column-reverse', sm: 'row' }}
                                textAlign='center'
                                spacing={4}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        padding: '0px 25px',
                                        height: '42px',
                                        fontFamily: 'SF Pro',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '18px',
                                        lineHeight: '100%',
                                        color: '#676060',
                                        backgroundColor: '#CEBFBF',
                                        borderRadius: '25px',
                                        border: 'none',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#CEBFBF',
                                        },
                                    }}
                                    >
                                        Earn 34.87% APY
                                    </Button>
                                </Link>

                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <GrayButton imageIconPath={CoinImg} label='Save Now' />
                                </Link>
                            </Stack>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6} textAlign='center' mb={7}>
                        <Box component="img" src={jugar} alt='Section4' width='80%' />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} md={6} mb={7}>
                            <MyText
                                normal='Terra Treasury First Decentralized'
                                colored='3rd gen. Savings Protocol'
                            />
                            <Stack
                                marginTop='25px'
                                direction={{ xs: 'column', sm: 'row' }}
                                textAlign='center'
                                spacing={4}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        padding: '0px 25px',
                                        height: '42px',
                                        fontFamily: 'SF Pro',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '18px',
                                        lineHeight: '100%',
                                        color: '#676060',
                                        backgroundColor: '#CEBFBF',
                                        borderRadius: '25px',
                                        border: 'none',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#CEBFBF',
                                        },
                                    }}
                                    >
                                        Earn 34.87% APY
                                    </Button>
                                </Link>

                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <GrayButton imageIconPath={CoinImg} label='Save Now' />
                                </Link>
                            </Stack>
                        </Grid>
                    </Hidden>

                </Grid>
            </Container>
        </Box>
    )
}