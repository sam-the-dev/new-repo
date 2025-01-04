"use client";

import { TopNav } from "@/components/navigation/TopNav";
import { Breadcrumb } from "@/components/create/Breadcrumb";
import { SocialContent } from "@/components/social/SocialContent";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <TopNav />
      <div className="max-w-7xl mx-auto">
        <Breadcrumb currentStep={3} />
        <div className="px-4 sm:px-6 lg:px-8">
          <SocialContent />
        </div>
      </div>
    </main>
  );
}