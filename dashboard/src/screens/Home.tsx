import { Link } from "react-router-dom";

function Home() {
    return (
        <form>
            <h2>This is home</h2>
            <Link to='/submit'>Submit Result</Link>
            <Link to='/list'>List Results</Link>
        </form>
    )
}

export default Home;