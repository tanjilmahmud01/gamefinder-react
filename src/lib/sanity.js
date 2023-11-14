import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_PRODUCTION_NAME,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-11-06", // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_SANITY_TOKEN, // Only if you want to update content with the client
});

//image builder for showing image type data field from Sanity
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
