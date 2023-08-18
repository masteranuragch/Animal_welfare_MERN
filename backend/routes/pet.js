const express = require("express");

const petController = require("../controllers/petController");
const multer = require("multer");
const router = express.Router();

//uuid

const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/images")) {
      fs.mkdirSync("public/images");
    }

    cb(null, "public/images");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);

    if (ext != ".png" && ext != ".jpeg" && ext != "jpg") {
      return cb(new Error("only videos are allowed! "));
    }
    cb(null, true);
  },
});
//image= single image

//additional images=multiple image= limit-5

router.get("/all", petController.getAll);

router.get("/get/:id", petController.getOne);

router.post(
  "/create",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "additionalImages",
      maxCount: 5,
    },
  ]),
  petController.create
);

router.put(
  "/update/:id",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "additionalImages",
      maxCount: 5,
    },
  ]),
  petController.update
);

router.delete("/delete/:id", petController.delete);

module.exports = router;
