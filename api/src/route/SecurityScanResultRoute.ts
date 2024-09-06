import { Router, Request, Response } from "express";
import securityScanResultModel from "../model/SecurityScanResultModel";
import securityScanFindingModel from "../model/SecurityScanFindingModel";
import { ScanResultSubmitRequest } from "../types/ScanResultSubmitRequest";
import { ApiResponse } from "../types/ApiResponse";

const securityScanResultRouter = Router();

securityScanResultRouter.post<{}, ApiResponse, ScanResultSubmitRequest>('/',
    async (req: Request<{}, ApiResponse, ScanResultSubmitRequest>,
    res: Response<ApiResponse>) => {

    console.log(req);

    const apiResponse: ApiResponse = {
        success: true,
        message: "Security scan result submitted successfully",
        data: null
    };

    res.status(201).send(apiResponse);
});

export default securityScanResultRouter;