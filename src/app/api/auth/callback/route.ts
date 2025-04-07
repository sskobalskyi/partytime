import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI } from "@/lib/discord";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.redirect("/login?error=missing_code");
    }

    const data = new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: DISCORD_REDIRECT_URI,
    });

    const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
    });

    if (!tokenRes.ok) {
        return NextResponse.redirect("/login?error=token_exchange_failed");
    }

    const token = await tokenRes.json();

    const userRes = await fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `${token.token_type} ${token.access_token}`,
        },
    });

    if (!userRes.ok) {
        return NextResponse.redirect("/login?error=user_fetch_failed");
    }

    const user = await userRes.json();
    const cookieStore = await cookies();
    // Store a minimal session in a cookie
    cookieStore.set("session_token", Buffer.from(JSON.stringify(user)).toString("base64"), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });

    return NextResponse.redirect("/");
}