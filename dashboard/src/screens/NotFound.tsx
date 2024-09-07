import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from '../navigation/NavBar';

function NotFound() {
    return (
        <>
        <NavBar />
        <Paper>
            <Typography variant="h6">
                <b>Oops!… This is a dead end.</b>
            </Typography>
            <Box>
                <Button variant='contained' component={Link} to="/">
                        Take me home!
                    </Button>
            </Box>
        </Paper>
        </>
    )
}

export default NotFound;