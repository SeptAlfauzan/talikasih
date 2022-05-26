// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { login } from "../../lib/auth";


export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const data = req.body;
            try {
                await login(data);
                res.status(200).json({ message: 'authentication success' });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;
        default:
            break;
    }
}
