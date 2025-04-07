import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to PartyTime 🎉</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a stub homepage. You’ll soon be able to see scheduled events, join parties, and more!
          </p>
        </CardContent>
      </Card>
    </>
  );
}
