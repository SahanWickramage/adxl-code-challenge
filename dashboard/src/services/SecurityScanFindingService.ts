import { ApiResponse } from "../types/ApiResponse";
import { SecurityScanFinding } from "../types/SecurityScanFinding";
import { SecurityScanFindingResponse } from "../types/SecurityScanFindingResponse";

const url: string = process.env.API_URL || "http://localhost:3030/api/v1";
console.log(`API URL: ${url}`);

async function listAllByResultId(resultId: string) : Promise<SecurityScanFinding[] | undefined> {
    
    const response = await fetch(`${url}/findings/${resultId}`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ApiResponse<SecurityScanFindingResponse> = await response.json();
    return data.data?.securityScanFindings;
}

export { listAllByResultId };