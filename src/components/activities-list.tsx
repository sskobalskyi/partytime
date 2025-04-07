import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Activity = {
  id: string;
  title: string;
  tags: string[];
  description: string;
};

const activities: Activity[] = [
  {
    id: "1",
    title: "Game Night",
    tags: ["Casual", "Fun"],
    description: "Join us for a relaxing evening of games.",
  },
  {
    id: "2",
    title: "D&D Session",
    tags: ["Roleplay", "Campaign"],
    description: "Epic fantasy session, bring your dice!",
  },
  {
    id: "3",
    title: "Raid Event",
    tags: ["MMO", "Hardcore"],
    description: "Coordinated raid run, level 30+ only.",
  },
];

export function ActivitiesList() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {activities.map((activity) => (
        <Card key={activity.id}>
          <CardHeader>
            <CardTitle>{activity.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm text-muted-foreground">
              {activity.description}
            </div>
            <div className="flex gap-2 flex-wrap">
              {activity.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button variant="outline" className="mt-2" size="sm">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
