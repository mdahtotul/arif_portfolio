"use client";

import VideoPlayerModal from "@/components/Common/Modals/VideoPlayerModal";
import { useEffect, useState } from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <VideoPlayerModal />
    </>
  );
}
