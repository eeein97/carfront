import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList  from './CarList';
import Login from './Login';

function CarFront({isAuthenticated, loginAuth, logoautAuth}) {
    return (
        <div>
        <AppBar position='static'>
            <Toolbar>
            <Typography>
                CarShop {isAuthenticated ? <span onClick={logoautAuth}>logout</span> : ""}
            </Typography>
            </Toolbar>
        </AppBar>
        {isAuthenticated ? <CarList /> : <Login loginAuth={loginAuth} /> }
        </div>
    );
}

export default CarFront;

