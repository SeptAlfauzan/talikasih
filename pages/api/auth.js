// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { removeCookies, setCookies } from "cookies-next";
import { login } from "../../lib/auth";


export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const data = req.body;
            try {
                const response = await login(data);
                const oneDay = 60 * 60 * 24;
                console.log("response", response);
                setCookies("auth", response, { req, res, maxAge: oneDay });
                res.status(200).json({ message: 'authentication success' });
            } catch (error) {
                console.log(error.message)
                res.status(500).json({ message: error.message });
            }
            break;
        default:
            if (!req.query.logout) return res.status(500);
            try {
                removeCookies('auth', { req, res });
                res.status(200).json({ message: 'logout success' });
            } catch (error) {
                console.log(error.message)
                res.status(500).json({ message: error.message });
            }
            break;
    }
}
