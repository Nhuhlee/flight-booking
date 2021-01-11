const multer = require("multer");

module.exports.uploadImage = (key) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./uploads`);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    },
  });
  const upload = multer({ storage: storage });
  return upload.single(key); //key name in upload
};
