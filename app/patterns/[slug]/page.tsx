// import PatternDetail from "./PatternDetail";

// export function generateStaticParams() {
//     return [
//         { slug: "hashmap" },
//         { slug: "sliding-window" },
//         { slug: "two-pointers" },
//         { slug: "binary-search" },
//         { slug: "linked-list" },
//         { slug: "dynamic-programming" },
//     ];
// }

// export default function Page({ params }: { params: { slug: string } }) {
//     return <PatternDetail slug={params.slug} />;
// }
import PatternDetail from "./PatternDetail";

export function generateStaticParams() {
    return [
        { slug: "hashmap" },
        { slug: "sliding-window" },
        { slug: "two-pointers" },
        { slug: "binary-search" },
        { slug: "linked-list" },
        { slug: "dynamic-programming" },
    ];
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return <PatternDetail slug={slug} />;
}