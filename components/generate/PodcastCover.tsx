"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Download, Edit, RefreshCcw } from "lucide-react";

export function PodcastCover() {
  const [showEdit, setShowEdit] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <Card className="p-6 bg-card/50 backdrop-blur relative group">
        <div className="aspect-square w-64 mx-auto rounded-lg overflow-hidden mb-4 relative">
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60"
            alt="Podcast Cover"
            className="w-full h-full object-cover"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setShowEdit(true)}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        <div>
          <h2 className="text-xl font-bold">The Future of AI</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Exploring the latest trends and innovations in artificial intelligence
          </p>
        </div>
        <Button variant="outline" className="w-full mt-4">
          <Download className="mr-2 h-4 w-4" /> Download Cover
        </Button>
      </Card>

      <Dialog open={showEdit} onOpenChange={setShowEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Cover Image</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Enter a new prompt for the cover image..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
            />
            <Button className="w-full">
              <RefreshCcw className="mr-2 h-4 w-4" /> Regenerate Cover
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}