"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit, Copy, RefreshCcw } from "lucide-react";
import { EditContentDialog } from "./EditContentDialog";

interface ContentCardProps {
  title: string;
  content: React.ReactNode;
}

export function ContentCard({ title, content }: ContentCardProps) {
  const [showEdit, setShowEdit] = useState(false);
  const [editContent, setEditContent] = useState("");

  const handleRegenerate = () => {
    // Handle regeneration logic
    setShowEdit(false);
  };

  return (
    <>
      <Card className="p-6 bg-card/50 backdrop-blur">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => setShowEdit(true)}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[200px] rounded-md border p-4">
          {content}
        </ScrollArea>
        <Button className="w-full mt-4" variant="outline">
          <RefreshCcw className="mr-2 h-4 w-4" /> Regenerate
        </Button>
      </Card>

      <EditContentDialog
        open={showEdit}
        onOpenChange={setShowEdit}
        title={title}
        content={editContent}
        onContentChange={setEditContent}
        onRegenerate={handleRegenerate}
      />
    </>
  );
}