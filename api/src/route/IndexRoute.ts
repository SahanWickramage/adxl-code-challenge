import { Router } from "express";
import securityScanResultRouter from "./SecurityScanResultRoute";
import securityScanFindingRouter from "./SecurityScanFindingRoute";

const indexRouter = Router();
indexRouter.use("/results", securityScanResultRouter);
indexRouter.use("/findings", securityScanFindingRouter);

export default indexRouter;