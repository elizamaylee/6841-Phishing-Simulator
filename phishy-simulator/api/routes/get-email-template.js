var express = require("express");
var router = express.Router();

/* GET email template listing. */
router.get("/templates/:template_id", function (req, res) {
  res.send(`sending back template ${req.params.template_id}`);
});

module.exports = router;
