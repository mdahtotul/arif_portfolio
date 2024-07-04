import { baseURL } from "@/lib/envs";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${baseURL}`,
    },
  ];
}
