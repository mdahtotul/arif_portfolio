import { create } from "zustand";

type PlayerStore = {
  isModalOpen: boolean;
  videoUrl: string;
  onModalOpen: () => void;
  onModalClose: () => void;
  setVideoUrl: (videoUrl: string) => void;
};

export const usePlayerStore = create<PlayerStore>((set) => ({
  videoUrl: "",
  isModalOpen: false,
  onModalOpen: () => set({ isModalOpen: true }),
  onModalClose: () => set({ isModalOpen: false }),
  setVideoUrl: (videoUrl: string) => set({ videoUrl }),
}));
