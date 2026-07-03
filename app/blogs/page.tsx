"use client";
import Link from "next/link";
import { blogData } from "./blogsData";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

export default function BlogsPage() {
    const posts = Object.entries(blogData).map(([slug, b]) => ({ slug, ...b }));

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 96px" }}>

                {/* Header */}
                <div style={{ marginBottom: "40px" }}>
                    <p style={{
                        fontSize: "13px", fontWeight: 500, color: "#6366f1",
                        textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px",
                        fontFamily: font,
                    }}>
                        Blogs
                    </p>
                    <h1 style={{
                        fontSize: "32px", fontWeight: 600,
                        color: "#09090b", margin: "0 0 8px",
                        letterSpacing: "-0.3px", fontFamily: font,
                    }}>
                        Notes &amp; Deep Dives
                    </h1>
                    <p style={{ fontSize: "15px", color: "#71717a", margin: 0, fontFamily: font }}>
                        {posts.length} post{posts.length !== 1 ? "s" : ""} · Longer write-ups on patterns, tricks, and interview intuition
                    </p>
                </div>

                {/* Grid */}
                {posts.length === 0 ? (
                    <div style={{
                        textAlign: "center", padding: "60px 0",
                        color: "#a1a1aa", fontSize: "14px", fontFamily: font,
                        border: "1px dashed #e4e4e7", borderRadius: "12px",
                    }}>
                        No posts yet — check back soon.
                    </div>
                ) : (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "16px",
                    }}>
                        {posts.map((b) => (
                            <Link
                                key={b.slug}
                                href={`/blogs/${b.slug}`}
                                style={{
                                    display: "block",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    border: "1px solid #e4e4e7",
                                    background: "#fff",
                                    textDecoration: "none",
                                    color: "inherit",
                                    transition: "all 0.15s ease",
                                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                                    fontFamily: font,
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.borderColor = "#a1a1aa";
                                    el.style.transform = "translateY(-2px)";
                                    el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.borderColor = "#e4e4e7";
                                    el.style.transform = "translateY(0)";
                                    el.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)";
                                }}
                            >
                                {/* Top row */}
                                <div style={{
                                    display: "flex", alignItems: "center",
                                    justifyContent: "space-between", marginBottom: "16px",
                                }}>
                                    <div style={{
                                        width: "34px", height: "34px", borderRadius: "8px",
                                        border: "1px solid #e4e4e7", background: "#fafafa",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "13px", color: "#71717a", fontWeight: 500,
                                        fontFamily: "monospace",
                                    }}>{"§"}</div>

                                    <span style={{
                                        fontSize: "12px", fontWeight: 400,
                                        padding: "2px 9px", borderRadius: "99px",
                                        background: "#f4f4f5", border: "1px solid #e4e4e7",
                                        color: "#52525b", fontFamily: font,
                                    }}>
                                        {b.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: "17px", fontWeight: 600,
                                    color: "#09090b", margin: "0 0 8px",
                                    letterSpacing: "-0.1px", fontFamily: font,
                                }}>
                                    {b.title}
                                </h3>

                                {/* Excerpt */}
                                <p style={{
                                    fontSize: "14px", color: "#71717a",
                                    margin: "0 0 20px", lineHeight: 1.65,
                                    fontFamily: font, fontWeight: 400,
                                }}>
                                    {b.excerpt}
                                </p>

                                {/* Footer */}
                                <div style={{
                                    display: "flex", alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingTop: "14px",
                                    borderTop: "1px solid #f4f4f5",
                                }}>
                                    <span style={{
                                        fontSize: "13px", color: "#a1a1aa",
                                        fontFamily: font, fontWeight: 400,
                                    }}>
                                        {b.date} · {b.readTime}
                                    </span>
                                    <span style={{
                                        fontSize: "13px", fontWeight: 500,
                                        color: "#3f3f46", fontFamily: font,
                                    }}>
                                        Read →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
