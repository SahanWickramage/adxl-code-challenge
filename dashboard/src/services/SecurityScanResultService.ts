import { ApiResponse } from "../types/ApiResponse";
import { ScanResultSubmitRequest } from "../types/ScanResultSubmitRequest";
import { SecurityScanResult } from "../types/SecurityScanResult";
import { SecurityScanResultResponse } from "../types/SecurityScanResultResponse";

const url: string = "http://localhost:3030/api/v1";

async function submit(submitRequest: ScanResultSubmitRequest) {
    const response = await fetch(`${url}/results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitRequest)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    console.log(data.message);
};

async function listAll() : Promise<SecurityScanResult[] | undefined> {
    const response = await fetch(`${url}/results`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ApiResponse<SecurityScanResultResponse> = await response.json();
    const results: SecurityScanResult[] | undefined = data.data?.securityScanResults;
    return results?.map((result) => ({...result, queuedAt: new Date(result.queuedAt)}));
}

export { submit, listAll };