import { notFound } from "next/navigation";
import { blogData } from "../blogsData";
import BlogDetail from "./BlogDetail";

// Required for static export (e.g. GitHub Actions -> GitHub Pages).
// Every key in blogData becomes a pre-rendered route at build time.
export function generateStaticParams() {
    return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogData[slug];

    if (!post) {
        notFound();
    }

    return <BlogDetail slug={slug} />;
}
