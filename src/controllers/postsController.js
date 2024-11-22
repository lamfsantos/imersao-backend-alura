import { getTodosPosts } from "../models/postModel.js"

export async function listaPosts(req, res) {
	const response = await getTodosPosts();
	res.status(200).json(response);
}
