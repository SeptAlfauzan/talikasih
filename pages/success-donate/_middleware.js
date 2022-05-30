import { NextResponse } from "next/server";
import * as jose from 'jose';

export async function middleware(req, ev) {
    const { pathname, origin } = req.nextUrl
    const { cookies } = req;
    if (!cookies.submited) {
        console.log('cookies', cookies)
        return NextResponse.redirect(`${origin}/donasi`)
    }
    try {
        // var { payload } = await jose.jwtVerify(
        //     cookies.submited, new TextEncoder().encode(`secret`)
        // );
        return NextResponse.next()
    } catch (err) {
        console.log('token invalid')
        // return NextResponse.redirect(`${origin}/donasi`)
    }
}