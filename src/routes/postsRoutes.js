import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, criarPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

// Para Windows]
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

const corsOptions = {
	origin: "http://localhost:8000",
	optionsSuccessStatus: 200
}

const upload = multer({
	dest: "./uploads"//, storage
});

const routes = (app) => {
	app.use(express.json());
	app.use(cors(corsOptions));

	app.get("/posts", listarPosts);
	app.post("/posts", criarPost);
	app.post("/posts/upload", upload.single("imagem"), uploadImagem);
	app.put("/upload/:id", atualizarNovoPost);
}

export default routes;