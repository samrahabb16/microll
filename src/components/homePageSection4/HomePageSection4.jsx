import { Box, Button, Container, Grid, Hidden, Stack, Typography } from "@mui/material"
import SectionImage from "./sectionImage.png"
import CoinImg from "./coin.png"
import { GoldButton, GrayButton, MyText } from "../helper/Helper"
import { Link } from "react-router-dom"





export default () => {
    return (
        <Box sx={{marginTop:'380px'}}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={9} mt={8}>
                        <MyText
                            normal='Terra Treasury offers'
                            colored='frictionless access'
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
                            Earn 34.87% APY in just three simple steps. <br />
                            Start you savings journey now and grow your portfolio today.
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
                                <GrayButton imageIconPath={CoinImg} label='Save Now' />
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} textAlign='center' mt={7}>
                        <Box component="img" src={SectionImage} alt='Section4' width='95%'  />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}