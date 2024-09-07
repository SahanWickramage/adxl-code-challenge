import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/submissions">
                    Submit
                </Button>
                <Button color="inherit" component={Link} to="/results">
                    List
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;