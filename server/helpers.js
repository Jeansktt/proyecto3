const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');
const { v4: uuid } = require('uuid');

const generateError = (msg, code) => {
    const err = new Error(msg);
    err.httpStatus = code;
    throw err;
};

const savePhoto = async (img, width) => {
    try {
        const uploadsPath = path.join(__dirname, process.env.UPLOADS_DIR);

        try {
            await fs.access(uploadsPath);
        } catch {
            await fs.mkdir(uploadsPath);
        }

        const imgName = `${uuid()}.jpg`;

        const imgPath = path.join(uploadsPath, imgName);

        const sharpImg = sharp(img.data);

        await sharpImg.resize(width);

        await sharpImg.toFile(imgPath);

        return imgName;
    } catch (err) {
        console.error(err);
        generateError('Error al guardar la imagen en el servidor', 500);
    }
};

module.exports = {
    generateError,
    savePhoto,
};
