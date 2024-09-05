import { SecurityScanFindingRecord } from "../../types/data";

function SecurityScanFindingList(record: SecurityScanFindingRecord) {

    return (
        <>
            <h2>Finding</h2>
            <p>{record.type}</p>
            <p>{record.ruleId}</p>
        </>
    )
}

export default SecurityScanFindingList;