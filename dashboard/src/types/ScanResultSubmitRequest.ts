import { SecurityScanFinding } from "./SecurityScanFinding";
import { SecurityScanResult } from "./SecurityScanResult";

type ScanResultSubmitRequest = {
    result: SecurityScanResult
    findings: SecurityScanFinding[]
};

export type { ScanResultSubmitRequest };