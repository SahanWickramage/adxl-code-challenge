import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <form>
            <h2>This is home</h2>
            <Button color="inherit" component={Link} to="/submit">
                Submit
            </Button>
        </form>
    )
}

export default Home;