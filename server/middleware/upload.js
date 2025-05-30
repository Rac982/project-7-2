const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./assets";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        // Prende il nome del piatto dal campo `name` del form
        const productName = req.body.name?.replace(/\s+/g, "-").toLowerCase() || "image";
        const ext = path.extname(file.originalname);
        const timestamp = Date.now();
        const fileName = `${productName}-${timestamp}${ext}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage });

module.exports = { upload };
