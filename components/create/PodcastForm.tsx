"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileAudio, Upload, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function PodcastForm() {
  const router = useRouter();

  const handleGenerate = () => {
    router.push("/generate");
  };

  return (
    <div className="space-y-8 p-6">
      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Podcast Script
          </label>
          <Textarea
            placeholder="Enter your podcast script here..."
            className="min-h-[200px] resize-none"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium leading-none">
            Upload PDF Script
          </label>
          <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center">
              <Upload className="h-8 w-8 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your PDF file here, or click to select
              </p>
              <input type="file" className="hidden" accept=".pdf" />
              <Button variant="secondary" size="sm">
                Choose File
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium leading-none">Audio Input</label>
          <Button
            variant="outline"
            className="w-full h-20"
            onClick={() => document.getElementById("audio-upload")?.click()}
          >
            <div className="flex flex-col items-center">
              <FileAudio className="h-6 w-6 mb-2" />
              <span>Upload Audio</span>
            </div>
          </Button>
          <input
            type="file"
            id="audio-upload"
            className="hidden"
            accept="audio/*"
          />
        </div>
      </Card>

      <Button
        size="lg"
        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 h-12 text-lg"
        onClick={handleGenerate}
      >
        <Wand2 className="mr-2 h-5 w-5" /> Generate Podcast
      </Button>
    </div>
  );
}