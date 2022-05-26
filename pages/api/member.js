// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getMembers, insertMember } from "../../lib/member";

export default async function handler(req, res) {
    console.log(req.query);
    switch (req.method) {
        case 'POST':
            const isSaved = await insertMember(req.body);
            isSaved ?
                res.status(200).json({ name: req.body }) :
                res.status(500).json({ message: 'fail to save report' });
            break;
        case 'DELETE':
            // const isDeleted = await insertMember(req.body);
            // isDeleted ?
            //     res.status(200).json({ name: req.body }) :
            //     res.status(500).json({ message: 'fail to save report' });
            break;
        default:
            const data = await getMembers();
            res.status(200).json(data);
            break;
    }
}
