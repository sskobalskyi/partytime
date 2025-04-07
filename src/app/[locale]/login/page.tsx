import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDiscordOAuthUrl } from "@/lib/discord";
import { SiDiscord } from "react-icons/si";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("LoginPage");

  return (
    <main className="flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to PartyTime</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Connect your Discord account to manage events, parties, and
            availability with your server.
          </p>
          <a href={getDiscordOAuthUrl()}>
            <Button className="w-full flex gap-2">
              <SiDiscord size={20} /> Connect with Discord
            </Button>
          </a>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          You’ll be redirected to Discord for authentication.
        </CardFooter>
      </Card>
    </main>
  );
}
