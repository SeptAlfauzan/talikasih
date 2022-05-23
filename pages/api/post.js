// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getPostsData, save } from "../../lib/posts"

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const isSaved = await save(req.body);
            isSaved ?
                res.status(200).json({ name: req.body }) :
                res.status(500).json({ message: 'fail to save report' });
            break;
        default:
            const data = await getPostsData();
            res.status(200).json(data);
            break;
    }
}
