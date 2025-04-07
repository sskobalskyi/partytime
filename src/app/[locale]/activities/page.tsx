"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "@/i18n/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ActivitiesList } from "@/components/activities-list";
import { UpcomingActivities } from "@/components/activities-upcoming";

export default function ActivitiesLayout() {
  const pathname = usePathname();

  return (
    <div className={"w-[76vw]"}>
      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card className="h-[86vh]">
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <UpcomingActivities />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card className="h-[86vh]">
            <CardHeader>
              <CardTitle>List</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ActivitiesList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
