import { Router, Request, Response } from "express";
import { ApiResponse } from "../types/ApiResponse";
import { ScanFindingRequest } from "../types/ScanFindingRequest";
import mongoose from "mongoose";
import { ObjectId } from "../types/ObjectId";
import { SecurityScanFinding } from "../types/SecurityScanFinding";
import securityScanFindingModel from "../model/SecurityScanFindingModel";
import { SecurityScanFindingResponse } from "../types/ScanFindingResponse";

const securityScanFindingRouter = Router();

securityScanFindingRouter.get<{}, ApiResponse, ScanFindingRequest>('/',
    async (req: Request<{}, ApiResponse, ScanFindingRequest>,
    res: Response<ApiResponse>) => {

    const resultId: ObjectId = new mongoose.Types.ObjectId(req.body.resultId);
    const scanFindings = await securityScanFindingModel.find({ securityScanResultId: resultId }).lean<SecurityScanFinding[]>();

    const apiResponse: ApiResponse<SecurityScanFindingResponse> = {
        success: true,
        message: `Security scan findings retrieved successfully for resultId: ${resultId}`,
        data: {securityScanFindings: scanFindings}
    };

    res.status(200).send(apiResponse);
    
});

export default securityScanFindingRouter;