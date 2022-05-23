// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getPostsData, insert, save, supabaseGetFile } from "../../lib/posts"

export default async function handler(req, res) {
    const data = await insert();
    res.status(200).json(data);
}
