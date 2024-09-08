import { Paper, Box, Typography} from '@mui/material';
import SecurityScanResultLabel from "./SecurityScanResulLabel";
import { SecurityScanResult } from "../../types/SecurityScanResult";
import NavBar from '../../navigation/NavBar';
import { useEffect, useState } from 'react';
import { listAll } from '../../services/SecurityScanResultService';

function SecurityScanResultList() {

    const [formData, setFormData] = useState<SecurityScanResult[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await listAll();
            setFormData(data || []);
        }

        fetchData();
    }, []);

    return (
        <>
        <NavBar />
        <Paper>
            <Typography variant="h4"><b>Security Scan Result List</b></Typography>
            <Box>
                {formData.map((result, index) => (
                    <SecurityScanResultLabel
                        key={`scan-result-${index}`}
                        _id={result._id}
                        status={result.status}
                        repoName={result.repoName}
                        queuedAt={result.queuedAt}
                        findingCount={result.findingCount}
                    />
                ))}
            </Box>
        </Paper>
        </>
    )
}

export default SecurityScanResultList;