"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { format, isSameDay, addDays, startOfDay } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

type Activity = {
  id: string;
  title: string;
  date: string; // ISO
  tags?: string[];
};

const activities: Activity[] = [
  {
    id: "1",
    title: "D&D Session",
    date: "2025-04-10T20:00:00Z",
    tags: ["Fantasy", "RP"],
  },
  {
    id: "2",
    title: "Raid Practice",
    date: "2025-04-10T22:00:00Z",
    tags: ["MMO", "Hardcore"],
  },
  {
    id: "3",
    title: "Board Game Night",
    date: "2025-04-11T18:00:00Z",
    tags: ["Casual"],
  },
  {
    id: "4",
    title: "Board Game Night",
    date: "2025-04-11T18:00:00Z",
    tags: ["Casual"],
  },
  {
    id: "5",
    title: "Board Game Night",
    date: "2025-04-11T18:00:00Z",
    tags: ["Casual"],
  },
  {
    id: "6",
    title: "Board Game Night",
    date: "2025-04-11T18:00:00Z",
    tags: ["Casual"],
  },
];

export function UpcomingActivities() {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const eventsForDay = activities
    .filter((a) => isSameDay(new Date(a.date), selectedDate))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  function goToPreviousDay() {
    setSelectedDate((prev: any) => addDays(prev, -1));
  }

  function goToNextDay() {
    setSelectedDate((prev: any) => addDays(prev, 1));
  }

  return (
    <div className="space-y-4">
      {/* Header with pagination */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={goToPreviousDay}>
          <ChevronLeft />
        </Button>
        <h2 className="text-lg font-medium">
          {format(selectedDate, "EEEE, MMMM d, yyyy")}
        </h2>
        <Button variant="ghost" size="icon" onClick={goToNextDay}>
          <ChevronRight />
        </Button>
      </div>

      {/* Timeline cards */}
      <ScrollArea className="h-[450px] w-full p-4">
        <div className="space-y-4">
          {eventsForDay.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center">
              No activities scheduled for this day.
            </p>
          ) : (
            eventsForDay.map((activity) => (
              <Card key={activity.id}>
                <CardHeader>
                  <CardTitle>{activity.title}</CardTitle>
                  <CardDescription>
                    {format(new Date(activity.date), "p")}
                  </CardDescription>
                </CardHeader>
                {activity.tags && (
                  <CardContent className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                )}
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
