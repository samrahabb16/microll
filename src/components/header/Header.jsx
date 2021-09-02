import "./header.css";
import * as React from "react";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Grid, Hidden, Typography, Divider, Container, Button } from "@mui/material";
import { Dashboard, DesktopMac, DeveloperBoard, Home, MenuOutlined } from "@mui/icons-material";
import HumBerger from './hum.png';
import Moniter from './monitor.png';
import { Link } from "react-router-dom";


export default () => {
  // Menu Open Direction Handler
  let dir = "right";
  const [state, setState] = React.useState({});
  const toggleDrawer = (open) => () => {
    setState({ [dir]: open });
  };

  return (
    <>
      <Container
      sx={{ paddingTop: '61px' }}
      >
        <Grid
          container
          justifyContent={{ xs: 'space-around', md: "space-between" }}
          alignItems="center"
          
        >
          {/* logo  */}
          <Grid item xs={6} md={3}>

            <Typography
              sx={{
                fontFamily: 'SF Pro',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '17px',
                lineHeight: '100%',
                color: 'rgba(206, 191, 191, 0.5)',
                letterSpacing: '1px'
              }}
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                TERRA TREASURY
              </Link>
            </Typography>
          </Grid>
          {/* my links  */}
          <Hidden mdDown>
            <Grid
              container
              item
              xs={9}
              justifyContent="flex-end"
              alignItems="center"
              columnSpacing={5}
            >

              <Grid item style={{ textAlign: "center" }}>
                <a href={"#"} style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontFamily: 'SF Pro',
                      fontStyle: 'normal',
                      fontWeight: '510',
                      fontSize: '14px',
                      lineHeight: '100%',
                      color: 'rgba(206, 191, 191, 0.5)'
                    }}
                  >
                    DASHBOARD
                  </Typography>
                </a>
              </Grid>



              <Grid item style={{ textAlign: "center" }}>
                <a href={"#"} style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontFamily: 'SF Pro',
                      fontStyle: 'normal',
                      fontWeight: '510',
                      fontSize: '14px',
                      lineHeight: '100%',
                      color: 'rgba(206, 191, 191, 0.5)'
                    }}
                  >
                    DEVEOLPERS
                  </Typography>
                </a>
              </Grid>

              {/* social Media links */}
              <Grid item style={{ textAlign: "center" }}>
                <Button sx={{
                  width: '163px',
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
                  startIcon={<img src={Moniter} alt={<DesktopMac />} style={{ marginRight: '10px' }} />}
                >
                  WebApp
                </Button>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <>
              <img src={HumBerger}
                style={{ cursor: 'pointer', width:'30px' }}
                onClick={toggleDrawer(dir, true)}
              />

              <SwipeableDrawer
                anchor={dir}
                open={state[dir]}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <Box
                  sx={{
                    width: 200,
                    marginLeft: "1vw",
                    marginRight: "1vw",
                    marginTop: "5vh",
                  }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <center>
                    <Typography
                      sx={{
                        fontFamily: 'SF Pro',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '17px',
                        lineHeight: '100%',
                        color: 'rgba(206, 191, 191, 0.5)',
                        letterSpacing: '1px',
                        marginBottom: '30px',
                        backgroundimage: 'linear-gradient(45deg, #E662F1, #F39D6C)',
                        background: '-webkit-linear-gradient(45deg, #E662F1, #F39D6C)',
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                      }}
                    >
                      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        TERRA TREASURY
                      </Link>
                    </Typography>
                  </center>
                  <Divider />
                  <List>
                    {
                      [
                        {
                          name: "DASHBOARD",
                          link: "#dashboard",
                          icon: <Dashboard sx={{ color: "#E970D0" }} />
                        },

                        {
                          name: "DEVELOPERS",
                          link: "#developers",
                          icon: <DeveloperBoard sx={{ color: "#E970D0" }} />
                        },
                      ].map((obj, index) => {
                        return (
                          <ListItem key={obj} sx={{ marginBottom: '20px' }}>
                            <ListItemIcon >{obj.icon} </ListItemIcon>
                            <a href={obj.link} style={{ textDecoration: 'none' }}>
                              <ListItemText >
                                <Typography
                                  sx={{
                                    fontFamily: 'SF Pro',
                                    fontStyle: 'normal',
                                    fontWeight: '510',
                                    fontSize: '14px',
                                    lineHeight: '100%',
                                    color: 'rgba(206, 191, 191, 0.5)'
                                  }}
                                >
                                  {obj.name}
                                </Typography>
                              </ListItemText>
                            </a>
                          </ListItem>
                        );
                      })}
                    <Divider />
                    <ListItem>
                      <ListItemText >
                        <Button sx={{
                          width: '163px',
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
                          startIcon={<img src={Moniter} alt={<DesktopMac />} style={{ marginRight: '10px' }} />}
                        >
                          WebApp
                        </Button>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </SwipeableDrawer>
            </>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
}
