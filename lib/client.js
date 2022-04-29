import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "6kh2dliy",
  dataset: "production",
  apiVersion: "2022-04-23",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY,
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
