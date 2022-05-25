// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { exportCSV, getPosts, getPostsData, insertPost, save } from "../../lib/posts"

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            break;
        default:
            console.log(req.query)
            const data = await exportCSV('members');
            res.status(200).json(data);
            break;
    }
}
