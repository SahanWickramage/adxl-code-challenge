import { SecurityScanResultRecord } from "../../types/data";

function SecurityScanResultItem(record: SecurityScanResultRecord) {
    return (
        <>
            <h2>repo: {record.repoName}</h2>
            <p>{record.status}</p>
            <button>View Findings</button>
        </>
    )
}

export default SecurityScanResultItem;