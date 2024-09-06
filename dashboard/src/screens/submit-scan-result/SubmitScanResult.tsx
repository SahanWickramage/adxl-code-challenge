import { FormEvent, useState } from 'react';
import { Paper, Box, Button, TableContainer, TextField, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { SecurityScanResult } from '../../types/SecurityScanResult';
import { SecurityScanFinding } from '../../types/SecurityScanFinding';
import parseDate from '../../util/DateUtil';

type FormData = {
  securityScanResult: SecurityScanResult;
  securityScanFindingList: SecurityScanFinding[];
  toBeAddedFinding: SecurityScanFinding;
};

function SubmitScanResult() {
    const [formData, setFormData] = useState<FormData>({
        securityScanResult: {_id: '', status: '', repoName: '', queuedAt: new Date(1970)},
        securityScanFindingList: [],
        toBeAddedFinding: {type: '', ruleId: '', path: '', description: ''}
    });
    
    
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

    const handleResultChange = (field: keyof SecurityScanResult) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleResultChange', field, event.target.value);
        setFormData({
            ...formData,
            securityScanResult: {
                ...formData.securityScanResult,
                [field]: field === 'queuedAt' ? parseDate(event.target.value) : event.target.value
            }
        });
      };

      const handleFindingChange = (field: keyof SecurityScanFinding) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            toBeAddedFinding: {
                ...formData.toBeAddedFinding,
                [field]: event.target.value
            }
        });
      };

    return (
        <Paper>
            <Box component="form" onSubmit={handleSubmit}>

                <Box key="scan-result-box" display="flex" alignItems="center" marginY={1}>
                    <TextField name="scan-result-status"
                        label="Status"
                        value={formData.securityScanResult.status}
                        onChange={handleResultChange('status')}
                        margin="normal"
                    />
                    <TextField name="scan-result-repo-name"
                        label="Repositoty Name"
                        value={formData.securityScanResult.repoName}
                        onChange={handleResultChange('repoName')}
                        margin="normal"
                    />
                    <TextField name="scan-result-queued-at"
                        label="Queued At"
                        type='date'
                        value={formData.securityScanResult.queuedAt.toISOString().split('T')[0]}
                        onChange={handleResultChange('queuedAt')}
                        margin="normal"
                    />
                </Box>

                <Button type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </Box>
        </Paper>
    );
}

export default SubmitScanResult;