const express = require("express");
const {
  handleGenerateShortUrl,
  redirectShortUrl,
  handleAnalyticsUrl,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleGenerateShortUrl);
router.get("/:shortId", redirectShortUrl);
router.get("/analytics/:shortId", handleAnalyticsUrl);

module.exports = router;
