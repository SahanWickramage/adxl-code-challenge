import { Paper, Box, Typography} from '@mui/material';
import { useParams } from 'react-router-dom';

type RouteParams = {
    resultId: string;
};

function SecurityScanFindingList() {
    const { resultId } = useParams<RouteParams>();

    return (
        <Paper>
            <Typography variant="h4"><b>ResultId: {resultId}</b></Typography>
            <Box></Box>
        </Paper>        
    )
}

export default SecurityScanFindingList;