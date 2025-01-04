"use client";

import { TopNav } from "@/components/navigation/TopNav";
import { Breadcrumb } from "@/components/create/Breadcrumb";
import { PodcastSummary } from "@/components/generate/PodcastSummary";
import { PodcastCover } from "@/components/generate/PodcastCover";
import { AudioPlayer } from "@/components/generate/AudioPlayer";
import { SocialMediaCard } from "@/components/generate/SocialMediaCard";

export default function GeneratePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <TopNav />
      <div className="max-w-7xl mx-auto">
        <Breadcrumb currentStep={2} />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PodcastSummary />
            <div className="space-y-8">
              <PodcastCover />
              <AudioPlayer />
              <SocialMediaCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}