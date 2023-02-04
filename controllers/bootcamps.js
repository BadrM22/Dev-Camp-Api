// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" });
};
// @desc  Get Single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBotcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Get Single Bootcamp" });
};

// @desc  Post Create bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootCamp = (req, res, next) => {
    res.status(201).json({ success: true, msg: "Create new bootcamp" });
};

// @desc  PUT update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Update bootcamp" });
};

// @desc  DELETE delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Delete bootcamp" });
};
