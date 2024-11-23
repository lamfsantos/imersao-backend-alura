import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
	const db = conexao.db("imersao-alura");
	const colecao = db.collection("posts");

	return colecao.find().toArray();
}

export async function enviarPost(novoPost) {
	const db = conexao.db("imersao-alura");
	const colecao = db.collection("posts");

	return colecao.insertOne(novoPost);
}