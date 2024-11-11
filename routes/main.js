const experss = require("express");
const router = experss.Router();

const { login, dashboard } = require("../controllers/main");

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

module.exports = router;
