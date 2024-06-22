"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { usePlayerStore } from "@/hooks/useVideoPlayer";
import ResponsivePlayer from "../ResponsivePlayer";

export default function VideoPlayerModal() {
  const { videoUrl, isModalOpen, onModalClose } = usePlayerStore();

  return (
    <Dialog open={isModalOpen} onOpenChange={onModalClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Blog</h2>
        </DialogHeader>
        <div className="relative">
          <ResponsivePlayer videoUrl={videoUrl} playerClass="z-[99999]" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
