"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Download,
  Share2,
} from "lucide-react";
import { useState } from "react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="p-6 bg-card/50 backdrop-blur space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-1" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
        <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>0:00</span>
          <span>25:00</span>
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80">
          <Share2 className="mr-2 h-4 w-4" /> Distribute
        </Button>
        <Button variant="outline" className="flex-1">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
      </div>
    </Card>
  );
}