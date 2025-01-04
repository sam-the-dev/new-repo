"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RefreshCcw } from "lucide-react";

interface EditContentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
  onContentChange: (content: string) => void;
  onRegenerate: () => void;
}

export function EditContentDialog({
  open,
  onOpenChange,
  title,
  content,
  onContentChange,
  onRegenerate,
}: EditContentDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            className="min-h-[200px]"
          />
          <Button className="w-full" onClick={onRegenerate}>
            <RefreshCcw className="mr-2 h-4 w-4" /> Regenerate Content
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}