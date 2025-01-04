"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Share2, RefreshCcw, Edit, Copy } from "lucide-react";

export function SocialContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
        Here's Your AI-Generated Magic!
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 bg-card/50 backdrop-blur">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Blog Post</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[300px] rounded-md border p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">The Future of AI Technology</h3>
              <p className="text-muted-foreground">
                Artificial Intelligence has become an integral part of our daily lives,
                transforming how we work, communicate, and solve problems...
              </p>
              <p className="text-muted-foreground">
                In this comprehensive exploration, we'll dive deep into the latest
                trends and innovations shaping the AI landscape...
              </p>
            </div>
          </ScrollArea>
          <Button className="w-full mt-4" variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" /> Regenerate
          </Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Reel Script</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[300px] rounded-md border p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium">Scene 1:</p>
                <p className="text-muted-foreground">
                  Open with a dynamic shot of AI technology in action...
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Scene 2:</p>
                <p className="text-muted-foreground">
                  Transition to real-world applications...
                </p>
              </div>
            </div>
          </ScrollArea>
          <Button className="w-full mt-4" variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" /> Regenerate
          </Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Twitter Thread</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[300px] rounded-md border p-4">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 rounded-lg bg-accent">
                  <p className="text-sm text-muted-foreground">
                    🧵 {i}/3 Exploring the fascinating world of AI technology and its
                    impact on our future...
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
          <Button className="w-full mt-4" variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" /> Regenerate
          </Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">LinkedIn Post</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[300px] rounded-md border p-4">
            <div className="space-y-4">
              <div className="aspect-video rounded-lg bg-accent mb-4" />
              <p className="text-muted-foreground">
                Excited to share insights from our latest podcast episode on AI
                technology! 🚀
              </p>
              <p className="text-muted-foreground">
                In this episode, we explore the transformative power of AI and its
                impact on businesses...
              </p>
            </div>
          </ScrollArea>
          <Button className="w-full mt-4" variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" /> Regenerate
          </Button>
        </Card>
      </div>

      <div className="flex gap-4 justify-center">
        <Button className="bg-gradient-to-r from-primary to-primary/80">
          <Download className="mr-2 h-4 w-4" /> Download All
        </Button>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" /> Share Content
        </Button>
      </div>
    </div>
  );
}