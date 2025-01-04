import { TopNav } from "@/components/navigation/TopNav";
import { Breadcrumb } from "@/components/create/Breadcrumb";
import { PodcastForm } from "@/components/create/PodcastForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <TopNav />
      <div className="max-w-7xl mx-auto">
        <Breadcrumb currentStep={1} />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <PodcastForm />
        </div>
      </div>
    </main>
  );
}