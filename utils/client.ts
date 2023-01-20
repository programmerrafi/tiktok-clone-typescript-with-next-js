import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "87e1va6e",
  dataset: "production",
  apiVersion: "2023-01-21",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
