import { name } from "../../package.json";

export default function sitemap() {
  return [
    {
      url: `https://${name}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
