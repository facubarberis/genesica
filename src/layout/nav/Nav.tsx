import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import isoLogo from "../../assets/img/logo/isologo.png"
export const Nav = () => {
    const navItems = ['Inicio', 'Sobre Nosotros', 'Contacto'];
    return (
        <>
            <AppBar>
                <Toolbar sx={{
                    backgroundColor: 'white',
                    color: '#223840',
                    height: '7.625rem',
                }}>
                    <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}> 
                        <Grid item xs={4} display={'inherit'} justifyContent={'flex-start'}>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={{ color: '#223840' }}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={4} display={'inherit'} justifyContent={'center'}>
                            <img src={isoLogo} width={300} height={80}/>
                        </Grid>
                        <Grid item xs={4} display={'inherit'} justifyContent={'flex-end'} alignItems={'center'}>
                            <Search />
                            <TextField id="outlined-basic" label="Buscar" variant="outlined" sx={{
                                marginLeft: 2
                            }} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </>
    )
}
