"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Wand2 } from "lucide-react";
import { useRouter } from "next/navigation";

const socialOptions = [
  { id: "blog", label: "Blog Post" },
  { id: "linkedin", label: "LinkedIn Post" },
  { id: "tweets", label: "Twitter Thread" },
  { id: "reel", label: "Reel Script" },
];

export function SocialMediaCard() {
  const router = useRouter();

  const handleGenerate = () => {
    router.push("/social");
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">
        Generate Social Media Content
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Select the content types you want to generate from this podcast
      </p>
      <div className="space-y-4 mb-6">
        {socialOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-3">
            <Checkbox id={option.id} />
            <label
              htmlFor={option.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <Button 
        className="w-full bg-gradient-to-r from-primary to-primary/80"
        onClick={handleGenerate}
      >
        <Wand2 className="mr-2 h-4 w-4" /> Generate Content
      </Button>
    </Card>
  );
}