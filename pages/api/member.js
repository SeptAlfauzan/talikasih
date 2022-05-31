// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { deleteMember, getMembers, insertMember } from "../../lib/member";

export default async function handler(req, res) {
    console.log(req.query);
    switch (req.method) {
        case 'POST':
            const isSaved = await insertMember(req.body);
            isSaved ?
                res.status(200).json({ name: req.body }) :
                res.status(500).json({ message: 'fail to save member' });
            break;
        case 'DELETE':
            console.log('delete')
            const isDeleted = await deleteMember(req.query.id);
            isDeleted ?
                res.status(200).json({ name: req.body }) :
                res.status(500).json({ message: 'fail to delete member' });
            break;
        default:
            const data = await getMembers();
            data ?
                res.status(200).json(data) :
                res.status(500);
            break;
    }
}
