import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
    projectId: "q6g8f8df",
    dataset: "production",
};

export const client = sanityClient({
    projectId: clientConfig.projectId,
    dataset: clientConfig.dataset,
    apiVersion: `1`,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
    ignoreBrowserTokenWarning: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
