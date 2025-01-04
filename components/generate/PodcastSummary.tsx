"use client";

import { Card } from "@/components/ui/card";
import { ListChecks, Clock, Users, Target } from "lucide-react";

const summaryItems = [
  {
    icon: ListChecks,
    title: "Key Topics",
    content: "AI Technology, Future Trends, Digital Innovation",
  },
  {
    icon: Clock,
    title: "Duration",
    content: "25 minutes",
  },
  {
    icon: Users,
    title: "Target Audience",
    content: "Tech enthusiasts, Business professionals",
  },
  {
    icon: Target,
    title: "Main Takeaways",
    content: "Understanding AI impact, Implementation strategies, Future outlook",
  },
];

export function PodcastSummary() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur">
      <h2 className="text-2xl font-bold mb-6">Podcast Summary</h2>
      <div className="space-y-6 mb-6">
        {summaryItems.map((item) => (
          <div key={item.title} className="flex items-start space-x-4">
            <div className="p-2 rounded-lg bg-accent">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-foreground">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <h3 className="font-medium mb-2">Episode Summary</h3>
        <p className="text-sm text-muted-foreground">
          In this thought-provoking episode, we explore the transformative power of AI
          technology and its impact on various industries. From machine learning
          breakthroughs to ethical considerations, we cover the essential aspects of
          AI's role in shaping our future.
        </p>
      </div>
    </Card>
  );
}