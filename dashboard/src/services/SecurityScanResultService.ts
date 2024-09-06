import { ApiResponse } from "../types/ApiResponse";
import { ScanResultSubmitRequest } from "../types/ScanResultSubmitRequest";

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

export { submit };