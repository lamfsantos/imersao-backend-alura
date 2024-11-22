import express from "express";

const posts = [
	{
		id: 1,
		descricao: "Teste",
		imagem: "https://placecats.com/millie/300/150"
	},
	{
		id: 2,
		descricao: "Gato brincando com um novelo de lã",
		imagem: "https://placekitten.com/400/200"
	},
	{
		id: 3,
		descricao: "Paisagem de um pôr do sol na praia",
		imagem: "https://picsum.photos/seed/picsum/600/300"
	},
	{
		id: 4,
		descricao: "Cachorro fazendo uma cara engraçada",
		imagem: "https://place.dog/400/300"
	},
	{
		id: 5,
		descricao: "Comida caseira deliciosa",
		imagem: "https://source.unsplash.com/random/400x300/?food"
	},
	{
		id: 6,
		descricao: "Montanha coberta de neve",
		imagem: "https://unsplash.com/photos/mountain"
	}
]

const app = express();
app.use(express.json());

app.listen(3000, () => {
	console.log("Sevidor escutando na porta 3000...");
})

app.get("/posts", (req, res) => {
	res.status(200).json(posts);
})

function getPostById(id) {
	return posts.findIndex((post) => {
		return post.id === Number(id);
	});
}

app.get("/posts/:id", (req, res) => {
	const index = getPostById(req.params.id);
	res.status(200).json(posts[index]);
})