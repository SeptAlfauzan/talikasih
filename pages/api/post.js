// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getPosts, getPostsData, insertPost, save } from "../../lib/posts"

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const isSaved = await insertPost(req.body);
            isSaved ?
                res.status(200).json({ name: req.body }) :
                res.status(500).json({ message: 'fail to save report' });
            break;
        default:
            const data = await getPosts();
            data ?
                res.status(200).json(data) :
                res.status(500);
            break;
    }
}
