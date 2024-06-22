"use server";

import {
  googleAppApiKey,
  youtubeChannelId,
  youtubeSearchUrl,
} from "@/lib/envs";
import { TYoutubeSearchResult } from "@/types/youtubeTypes";

export const listYoutubeBlog = async (): Promise<TYoutubeSearchResult> => {
  try {
    const url = `${youtubeSearchUrl}?key=${googleAppApiKey}&channelId=${youtubeChannelId}&order=date&part=snippet&maxResults=50`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch youtube blogs");
  }
};
