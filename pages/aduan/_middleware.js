import { NextResponse } from "next/server";
import * as jose from 'jose';
import { removeCookies } from "cookies-next";

export async function middleware(req, ev) {
    const { pathname, origin } = req.nextUrl
    return NextResponse.redirect(`${origin}/`);
}