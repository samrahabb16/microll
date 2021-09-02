import { Box, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Twitter from "./twitter.png";
import Telegram from "./telegram.png";
import Medium from "./medium.png";
import Docs from "./docs.png";
import Webapp from "./webapp.png";

export default () => {

    return (
        <Box sx={{marginTop:'460px', marginBottom:'30px'}}>
            <Container>
                <Grid container alignItems="center" justifyContent={{ xs: 'center', md: "space-around" }} >
                    <Grid alignItems='center' container justifyContent={{ xs: 'center', md: 'space-around' }}
                        sx={{ width: '508px !important', marginBottom: { xs: '30px', md: '0px' } }}
                        item xs={8} md={6}
                        spacing={2}
                    >
                        {
                            [
                                {
                                    label: 'contact',
                                    link: '/contact',
                                },
                                {
                                    label: 'WHITEPAPER',
                                    link: '/paper',
                                },
                                {
                                    label: 'WE’RE HIRING',
                                    link: '/hiring',
                                },
                                {
                                    label: 'AUDIT',
                                    link: '/audit',
                                },
                                {
                                    label: 'OFFICIAL TERRASWAP',
                                    link: '/swap',
                                },
                            ].map((obj, indx) => {
                                return <Grid item key={indx}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'SF Pro',
                                            fontStyle: 'normal',
                                            fontWeight: '860',
                                            fontSize: '11px',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        <Link to={obj.link} style={{
                                            color: '#CEBFBF',
                                            textDecoration: 'none'
                                        }} href="#">
                                            {obj.label}
                                        </Link>
                                    </Typography>
                                </Grid>
                            })
                        }
                    </Grid>

                    <Grid container alignItems='center' justifyContent={{ xs: 'center' }}
                        sx={{ width: '508px !important', }}
                        item xs={8} md={4}
                        spacing={4}
                    >

                        {
                            [
                                {
                                    label: Twitter,
                                    link: '/twitter',
                                },
                                {
                                    label: Telegram,
                                    link: '/telegram',
                                },
                                {
                                    label: Medium,
                                    link: '/medium',
                                },
                                {
                                    label: Docs,
                                    link: '/googleDocs',
                                },
                                {
                                    label: Webapp,
                                    link: '/webapp',
                                },
                            ].map((obj, indx) => {
                                return <Grid item key={indx}>
                                    <a href={obj.link}>
                                        <img src={obj.label} alt={obj.label} />
                                    </a>
                                </Grid>
                            })
                        }
                    </Grid>
                    <Grid item xs={11} mt={10} textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography
                            sx={{
                                fontFamily: 'SF Pro',
                                fontStyle: 'normal',
                                fontWeight: '860',
                                fontSize: '9px',
                                color: '#CEBFBF',
                            }}
                            pl={1.5}
                        >
                            © Copyright 2022 - Legal
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}