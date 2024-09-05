import SecurityScanResultItem from "./SecurityScanResultItem";
import { SecurityScanResultRecord } from "../../types/data";

const securityScanResults: SecurityScanResultRecord[] = [
    { status: "good", repoName: "repo1", queuedAt: new Date(2023, 4, 15, 10, 30, 0) },
    { status: "bad", repoName: "repo2", queuedAt: new Date(2022, 14, 15, 10, 40, 0) }
]

function SecurityScanResultList() {
    return (
        <form>
            <h2>This is security scan result list</h2>
            <div>
                {securityScanResults.map((record) => <SecurityScanResultItem
                key={record.repoName + record.queuedAt}
                status={record.status}
                repoName={record.repoName}
                queuedAt={record.queuedAt} />)}
            </div>
        </form>
    )
}

export default SecurityScanResultList;