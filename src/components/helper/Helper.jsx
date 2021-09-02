import { Button, Typography } from "@mui/material"
import InfoIcon from "./Info.png"






// headings Formatter

export const MyText = ({ normal, colored ,mar='50px'}) => {
    return <Typography
        sx={{
            fontFamily: 'SF Pro',
            fontStyle: 'normal',
            fontWeight: '860',
            fontSize: { xs: '36px', sm: '60px' },
            lineHeight: '100%',
            /* or 68px */
            color: '#CEBFBF',
            textAlign: { xs: 'center', md: 'left' },
            marginBottom:mar,
        }}
    >
        <span>{normal} </span>
        <span
            style={{
                backgroundimage: 'linear-gradient(45deg, #E96ED6, #F39D6C)',
                background: '-webkit-linear-gradient(45deg, #E96ED6, #F39D6C)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
            }}
        >
            {colored}
        </span>
    </Typography>
}


// Button Gray
export const GrayButton = ({ imageIconPath, label }) => {
    return <Button sx={{
        padding: '0px 25px',
        height: '42px',
        fontFamily: 'SF Pro',
        fontStyle: 'normal',
        fontWeight: '590',
        fontSize: '17px',
        lineHeight: '100%',
        color: '#CEBFBF',
        backgroundColor: '#676060',
        borderRadius: '25px',
        border: 'none',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#676060',
        },
    }}
        startIcon={<img src={imageIconPath} style={{ marginRight: '10px' }} />}
    >
        {label}
    </Button>
}



// Button Gray
export const GoldButton = ({ label }) => {
    return <Button sx={{
        padding: '0px 25px',
        height: '42px',
        fontFamily: 'SF Pro',
        fontStyle: 'normal',
        fontWeight: '590',
        fontSize: '17px',
        lineHeight: '100%',
        color: '#F9D85E',
        backgroundColor: 'trnasparent',
        borderRadius: '25px',
        border: 'none',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'trnasparent',
        },
    }}
        endIcon={<img src={InfoIcon} style={{ marginleft: '10px' }} />}
    >
        {label}
    </Button>
}

