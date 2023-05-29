import { Box, CssBaseline, Container } from "@mui/material"
import Toolbar from '@mui/material/Toolbar';
import { Nav } from "./nav/Nav"
interface Props {
    children?: React.ReactNode;
}
export const HomeLayout = ({ children }: Props) => {
    return (
        <>
            <CssBaseline />
            <Box sx={{
               display: 'block',
                backgroundColor: '#fffcf9'
            }}>

                <Toolbar />
                <Nav />
                <Container disableGutters={true} maxWidth={false} sx={{
                    marginTop: '4.5rem',
                    minHeight: '100vh',
                    marginLeft: 0,
                    marginRight: 0,
                    paddingLeft: 0
                }}>
                    {children}
                </Container>
            </Box>
        </>
    )
}
