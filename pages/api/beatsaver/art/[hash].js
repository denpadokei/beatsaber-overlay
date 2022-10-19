import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import sharp from "sharp";
import cacheDir from "../../../../src/caches/SongArtCacheDir";

export default async function handler(req, res) {
	const mapHash = req.query.hash.replace("custom_level_", "").toLowerCase();
	const ext = req.query.ext;

	const imagePath = cacheDir + path.sep + mapHash + "." + ext;
	const exists = fs.existsSync(imagePath);
	if (!exists) {
		const data = await fetch(`https://eu.cdn.beatsaver.com/${mapHash}.${ext}`);
		let buffer = await data.buffer();
		buffer = await sharp(buffer).resize(150, 150).toBuffer();
		fs.writeFileSync(imagePath, buffer);
		res.setHeader("Content-Type", "image/" + ext);
		res.send(buffer);
		console.log('Song Art Cache - Added song "' + mapHash + '"');
		return;
	}
	const buffer = fs.readFileSync(imagePath);
	res.setHeader("Content-Type", "image/" + ext);
	res.send(buffer);
}
