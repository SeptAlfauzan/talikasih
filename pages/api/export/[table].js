import { exportCSV } from "../../../lib/posts";

export default async function handler(req, res) {
    const { table } = req.query
    console.log(table);
    const data = await exportCSV(table);
    res.status(200).json(data);
}