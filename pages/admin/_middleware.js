import { NextResponse } from "next/server";
import * as jose from 'jose';
import { removeCookies } from "cookies-next";

export async function middleware(req, ev) {
    const { pathname, origin } = req.nextUrl
    const { cookies } = req;
    if (!cookies.auth) {
        return NextResponse.redirect(`${origin}/login`);
    }
    try {
        var { payload } = await jose.jwtVerify(
            cookies.auth,
            new TextEncoder().encode(`secret`)
        );
        return NextResponse.next();
    } catch (err) {
        console.log("token invalid");
        // removeCookies("token");
        return NextResponse.rewrite(`${origin}/login`);
    }
}