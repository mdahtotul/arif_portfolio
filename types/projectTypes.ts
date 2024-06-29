import { TIconNames } from "./commonTypes";

export type TProjectItem = {
  id: number;
  slug?: string;
  title: string;
  thumbnail: string;
  description?: string;
  priority: number;
  ratings?: number;
  techIconLists: TIconNames[];
  status?: "completed" | "ongoing" | "upcoming";
  sub_images?: string[];
  tags?: string[];
  categories?: string[];
  projectOwnerType?: "personal" | "office" | "client";
  client_repo?: string;
  server_repo?: string;
  live_site?: string;
};
