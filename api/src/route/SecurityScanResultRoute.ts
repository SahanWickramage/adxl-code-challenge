import { Router, Request, Response } from "express";
import securityScanResultModel from "../model/SecurityScanResultModel";
import securityScanFindingModel from "../model/SecurityScanFindingModel";
import { ScanResultSubmitRequest } from "../types/ScanResultSubmitRequest";
import { SecurityScanResult } from "../types/SecurityScanResult";
import { SecurityScanResultResponse } from "../types/SecurityScanResultResponse";

import { ApiResponse } from "../types/ApiResponse";
import mongoose from "mongoose";

const securityScanResultRouter = Router();

securityScanResultRouter.post<{}, ApiResponse, ScanResultSubmitRequest>('/',
    async (req: Request<{}, ApiResponse, ScanResultSubmitRequest>,
    res: Response<ApiResponse>) => {

    const newScanResultId = new mongoose.Types.ObjectId();

    const newScanResult = new securityScanResultModel({
        _id: newScanResultId,
        status: req.body.result.status,
        repoName: req.body.result.repoName,
        queuedAt: req.body.result.queuedAt,
        findingCount: req.body.result.findingCount
    });
    
    await newScanResult.save();

    for (const finding of req.body.findings) {
        const newFinding = new securityScanFindingModel({
            _id: new mongoose.Types.ObjectId(),
            securityScanResultId: newScanResultId,
            type: finding.type,
            ruleId: finding.ruleId,
            path: finding.path,
            description: finding.description
        });

        await newFinding.save();
    }

    const apiResponse: ApiResponse = {
        success: true,
        message: "Security scan result submitted successfully",
        data: null
    };

    res.status(201).send(apiResponse);
});

securityScanResultRouter.get<{}, ApiResponse, ScanResultSubmitRequest>('/',
    async (_req: Request<{}, ApiResponse, ScanResultSubmitRequest>,
    res: Response<ApiResponse>) => {

    const scanResults = await securityScanResultModel.find().lean<SecurityScanResult[]>();
    const apiResponse: ApiResponse<SecurityScanResultResponse> = {
        success: true,
        message: "Security scan results retrieved successfully",
        data: {securityScanResults: scanResults}
    };

    res.status(200).send(apiResponse);
});

export default securityScanResultRouter;