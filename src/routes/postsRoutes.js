import express from "express";
import multer from "multer"
import { listarPosts, criarPost, uploadImagem } from "../controllers/postsController.js"

// Para Windows
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

const upload = multer({
	dest: "./uploads"//, storage
});

const routes = (app) => {
	app.use(express.json());

	app.get("/posts", listarPosts);
	app.post("/posts", criarPost);
	app.post("/posts/upload", upload.single("imagem"), uploadImagem);
}

export default routes;