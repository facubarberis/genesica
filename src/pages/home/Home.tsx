import { Box, Grid, Typography } from "@mui/material";
import '../../assets/font/PalatinoLTStd-Black.otf';
import '../../assets/font/PalatinoLTStd-Italic.otf';
import { HomeLayout } from "../../layout/HomeLayout";
import './style/styleButton.css';
export const Home = () => {
    const styleFont = {
        fontFamily: 'Tinos, serif',
        fontWeight: 'bold',
        color: '#223840',
        fontStyle: 'italic',

    };
    return (
        <HomeLayout>
            {/* Inicio primera seccion */}
            <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={'50vh'}>
                <Grid item xs={12} sm={12} md={12} lg={3} display={'inherit'} justifyContent={'flex-start'}>
                    <Box sx={{ p: 5, maxWidth: '100%', position: 'relative' }}>
                        <img src={'https://demo.bravisthemes.com/jantel/wp-content/uploads/2023/03/home02-01.jpg'} width={'100%'} height={'350px'} />
                        <img src={'https://demo.bravisthemes.com/jantel/wp-content/uploads/2023/03/home02-02.jpg'} style={{
                            position: 'absolute',
                            bottom: '0px',
                            left: '12rem',
                            border: '0.3rem solid #FFFFFF',
                            borderTopLeftRadius: '150px',
                            borderTopRightRadius: '150px',
                        }}></img>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} display={'inherit'} justifyContent={'center'}>
                    <Grid container >
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Typography variant="h1" style={styleFont}>Lencería </Typography>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Typography variant="h2" style={styleFont}>Hecha a mano</Typography>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'} marginTop={5}>
                            <a className="btn btn-1" href="#" style={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
                                </svg>Catalogo</a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'inherit' }}
                    justifyContent={{ xs: 'flex-start', sm: 'flex-start', md: 'flex-start', lg: 'flex-end' }}
                    alignItems={'center'}>
                    <Box sx={{ p: 5, maxWidth: '100%' }}>
                        <img src={'https://demo.bravisthemes.com/jantel/wp-content/uploads/2023/03/home02-01.jpg'} width={'100%'}
                            style={{
                                borderBottomRightRadius: '8rem'
                            }}
                        />
                        <img src={'https://demo.bravisthemes.com/jantel/wp-content/uploads/2023/03/home02-02.jpg'} style={{
                            position: 'absolute',
                            bottom: '15%',
                            right: '12rem',
                            border: '0.3rem solid #FFFFFF',
                            borderRadius: '10rem',
                        }}></img>

                    </Box>
                </Grid>
            </Grid>
            {/* Fin primera seccion */}

            {/* Inicio Segunda Sección */}
            <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={'50vh'} mt={5}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container spacing={5} p={5}>
                        <Grid item xs={12}>
                            <Typography variant="h3">
                                Descubre la Colección completa Online
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam accusamus, tenetur, officia assumenda repellendus nam vel voluptas
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} p={5}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Colección de lencería básica
                            </Typography>
                            <a href="#">Ver Colección</a>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={'https://demo.bravisthemes.com/jantel/wp-content/uploads/2023/03/home02-06-removebg.png'} width={'100%'}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container spacing={5} p={5}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Colección de lencería de moda
                            </Typography>
                            <a href="#">Ver Colección</a>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={'https://demo.bravisthemes.com/jantel/wp-content/uploads/2023/03/home02-05.jpg'} width={'100%'}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} p={5}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Colección Fiesta de pijamas
                            </Typography>
                            <a href="#">Ver Colección</a>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={'https://demo.bravisthemes.com/jantel/wp-content/uploads/2023/03/home02-07.jpg'} width={'100%'}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </HomeLayout>
    )
}
