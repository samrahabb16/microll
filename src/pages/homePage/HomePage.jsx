import { Box } from "@mui/material"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import HomePageSection1 from "../../components/homePageSection1/HomePageSection1"
import HomePageSection2 from "../../components/homePageSection2/HomePageSection2"
import HomePageSection3 from "../../components/homePageSection3/HomePageSection3"
import HomePageSection4 from "../../components/homePageSection4/HomePageSection4"
import HomePageSection5 from "../../components/homePageSection5/HomePageSection5"


export default () => {
    return (
        <>
            <Box >
                <Header />
                <HomePageSection1 />
                <HomePageSection2 />
                <HomePageSection3 />
                <HomePageSection4 />
                <HomePageSection5 />
                <Footer />
            </Box>
        </>
    )
}