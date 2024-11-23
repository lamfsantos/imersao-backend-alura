import fs from "fs";
import { getTodosPosts, enviarPost } from "../models/postModel.js"

export async function listarPosts(req, res) {
	const response = await getTodosPosts();
	res.status(200).json(response);
}

export async function criarPost(req, res) {
	const novoPost = req.body;

	try {
		const postCriado = await enviarPost(novoPost);
		res.status(200).json(postCriado);
	} catch(erro) {
		console.error(erro.message);
		res.status(500).json({"Erro:": "Falha na requisição"});
	}
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await enviarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}