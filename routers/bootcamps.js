const { Router } = require("express");
const {
    createBootCamp,
    deleteBootcamp,
    updateBootcamp,
    getBootcamps,
    getBotcamp,
} = require("../controllers/bootcamps");

const router = Router();

router.get("/", getBootcamps);
router.get("/:id", getBotcamp);

router.post("/", createBootCamp);
router.put("/:id", updateBootcamp);
router.delete("/:id", deleteBootcamp);

module.exports = router;
