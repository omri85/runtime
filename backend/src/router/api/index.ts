import express from "express";

const router = express.Router();

router.use("/careerFramework", require("./careerFramework"));

module.exports = router;
