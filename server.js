import express from "express";

const app = express();
app.listen(3000, () => {
	console.log("Sevidor escutando na porta 3000...")
})

app.get("/", (req, res) => {
	res.status(200).send("Funcionando")
})