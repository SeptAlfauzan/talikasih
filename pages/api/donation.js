// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getDonations, getDonationsData, insertDonation, save } from "../../lib/donation"

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const isSaved = await insertDonation(req.body);
            isSaved ?
                res.status(200).json({ name: req.body }) :
                res.status(500).json({ message: 'fail to save donation' });
            break;
        default:
            const data = await getDonations();
            data ?
                res.status(200).json(data) :
                res.status(500);
            break;
    }
}
