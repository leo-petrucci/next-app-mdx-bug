import { MDXRemote } from "../components/MDXRemote";
import { serialize } from "next-mdx-remote/serialize";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function RemoteMdxPage() {
  try {
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...
    const res = await fetch(
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}/index.mdx`
        : `http://localhost:3000/index.mdx`
    );
    const markdown = await res.text();
    const serialized = await serialize(markdown, {
      mdxOptions: {
        development: process.env.NODE_ENV === "development",
      },
    });
    return <MDXRemote serialized={serialized} />;
  } catch (err) {
    console.log("Error rendering", err);
    return <>Error</>;
  }
}
