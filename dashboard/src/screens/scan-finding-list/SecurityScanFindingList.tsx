import { Paper, Box, Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import NavBar from '../../navigation/NavBar';
import SecurityScanFindingLabel from "./SecurityScanFindingLabel";
import { SecurityScanFinding } from '../../types/SecurityScanFinding';
import { useEffect, useState } from 'react';
import { listAllByResultId } from '../../services/SecurityScanFindingService';

type RouteParams = {
    resultId: string;
};

function SecurityScanFindingList() {
    const { resultId } = useParams<RouteParams>();

    const [formData, setFormData] = useState<SecurityScanFinding[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await listAllByResultId(resultId || '');
                setFormData(data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (resultId) {
            fetchData();
        }
    }, []);

    return (
        <>
        <NavBar />
        <Paper>
            <Typography variant="h4"><b>Security Scan Findings List</b></Typography>
            <Box>
            {formData.map((result, index) => (
                <SecurityScanFindingLabel
                    key={`scan-finding-${index}`}
                    type={result.type}
                    ruleId={result.ruleId}
                    path={result.path}
                    description={result.description}
                />
            ))}
            </Box>
        </Paper>
        </>        
    )
}

export default SecurityScanFindingList;