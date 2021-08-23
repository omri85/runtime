import express from "express";
import CareerFrameworkController from "../../../controllers/careerFrameworkController";

const router = express.Router();

router.use("/:fid/paths", require("./careerPathsRouter"));
router.get("/:id", CareerFrameworkController.getCareerFramework);
router.post("/", CareerFrameworkController.createFramework);

module.exports = router;
