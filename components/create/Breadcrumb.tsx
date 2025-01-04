"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const steps = [
  { id: 1, name: "Enter Details" },
  { id: 2, name: "Generate Podcast" },
  { id: 3, name: "Generate Social Media Content" },
];

export function Breadcrumb({ currentStep }: { currentStep: number }) {
  return (
    <nav className="py-4 px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center justify-center space-x-4">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className="flex items-center">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200",
                currentStep >= step.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step.id}
            </div>
            <span
              className={cn(
                "ml-4 text-sm font-medium",
                currentStep >= step.id
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {step.name}
            </span>
            {stepIdx < steps.length - 1 && (
              <ChevronRight className="ml-4 h-5 w-5 text-muted-foreground" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}