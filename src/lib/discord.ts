export const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!;
export const DISCORD_REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI!;
export const DISCORD_CLIENT_SECRET = process.env.NEXT_PUBLIC_DISCORD_SECRET!;

export function getDiscordOAuthUrl() {
    const params = new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        redirect_uri: DISCORD_REDIRECT_URI,
        response_type: "code",
        scope: "identify guilds guilds.members.read",
    });
    return `https://discord.com/oauth2/authorize?${params.toString()}`;
}