import express from "express";
import careerPathController from "../../../controllers/careerPathController";

const router = express.Router();

router.get("/:id", careerPathController.getCareerPath);
router.post("/", careerPathController.createCareerPath);

module.exports = router;
