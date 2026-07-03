"use client";
import Link from "next/link";
import { useState } from "react";
import { blogData } from "../blogsData";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

export default function BlogDetail({ slug }: { slug: string }) {
    const post = blogData[slug];
    const [copied, setCopied] = useState(false);

    if (!post) {
        return (
            <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
                <div style={{ maxWidth: "760px", margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
                    <h1 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "12px", fontFamily: font }}>
                        Post not found
                    </h1>
                    <Link href="/blogs" style={{ color: "#2563eb", fontFamily: font, fontSize: "14px" }}>
                        ← Back to Blogs
                    </Link>
                </div>
            </main>
        );
    }

    const copyCode = () => {
        navigator.clipboard.writeText(post.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 24px 96px" }}>

                {/* Back */}
                <Link
                    href="/blogs"
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "7px 14px", borderRadius: "8px",
                        border: "1px solid #e4e4e7", background: "#fff",
                        color: "#71717a", fontSize: "13px", fontWeight: 500,
                        textDecoration: "none", marginBottom: "32px", fontFamily: font,
                    }}
                >
                    ← Back to Blogs
                </Link>

                {/* Header */}
                <div style={{ marginBottom: "36px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(37,99,235,0.08)",
                            border: "1px solid rgba(37,99,235,0.2)", color: "#2563eb",
                            fontFamily: font,
                        }}>{post.tag}</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "#f4f4f5",
                            border: "1px solid #e4e4e7", color: "#52525b",
                            fontFamily: font,
                        }}>{post.date}</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "#f4f4f5",
                            border: "1px solid #e4e4e7", color: "#52525b",
                            fontFamily: font,
                        }}>{post.readTime}</span>
                    </div>

                    <h1 style={{
                        fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700,
                        letterSpacing: "-0.6px", color: "#09090b",
                        margin: "0 0 14px", lineHeight: 1.2, fontFamily: font,
                    }}>
                        {post.title}
                    </h1>
                    <p style={{ fontSize: "16px", color: "#71717a", margin: 0, lineHeight: 1.7, fontFamily: font }}>
                        {post.excerpt}
                    </p>
                </div>

                {/* Sections */}
                {post.sections.map((s) => (
                    <section key={s.title} style={{ marginBottom: "36px" }}>
                        <h2 style={{
                            fontSize: "18px", fontWeight: 600, color: "#09090b",
                            margin: "0 0 12px", letterSpacing: "-0.2px", fontFamily: font,
                        }}>
                            {s.title}
                        </h2>

                        {s.content && (
                            <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.75, margin: "0 0 12px", fontFamily: font }}>
                                {s.content}
                            </p>
                        )}

                        {s.bullets && (
                            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                {s.bullets.map((b) => (
                                    <li key={b} style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.65, fontFamily: font }}>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {s.code && (
                            <pre style={{
                                background: "#fafafa", border: "1px solid #e4e4e7",
                                borderRadius: "10px", padding: "14px 16px",
                                fontSize: "13px", fontFamily: "monospace",
                                color: "#18181b", overflowX: "auto", margin: "0 0 12px",
                            }}>
                                {s.code}
                            </pre>
                        )}

                        {s.after && (
                            <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.75, margin: 0, fontFamily: font }}>
                                {s.after}
                            </p>
                        )}

                        {s.walkthrough && (
                            <div style={{
                                border: "1px solid #e4e4e7", borderRadius: "10px",
                                overflow: "hidden", marginTop: "8px",
                            }}>
                                <div style={{
                                    padding: "10px 14px", background: "#fafafa",
                                    borderBottom: "1px solid #e4e4e7",
                                    fontSize: "13px", fontFamily: "monospace", color: "#52525b",
                                }}>
                                    Input: {s.walkthrough.input}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    {s.walkthrough.steps.map((step, idx) => (
                                        <div key={idx} style={{
                                            display: "flex", gap: "12px", alignItems: "flex-start",
                                            padding: "10px 14px",
                                            borderBottom: idx < s.walkthrough!.steps.length - 1 ? "1px solid #f4f4f5" : "none",
                                        }}>
                                            <span style={{
                                                fontSize: "12px", color: "#a1a1aa", fontFamily: "monospace",
                                                minWidth: "18px", paddingTop: "2px",
                                            }}>
                                                {step.i}
                                            </span>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: "13px", fontFamily: "monospace", color: "#18181b", marginBottom: "2px" }}>
                                                    value={step.num} · {step.complement}
                                                </div>
                                                <div style={{ fontSize: "13px", color: step.found ? "#16a34a" : "#71717a", fontFamily: font }}>
                                                    {step.action}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{
                                    padding: "10px 14px", background: "rgba(22,163,74,0.06)",
                                    borderTop: "1px solid #e4e4e7",
                                    fontSize: "13px", fontFamily: "monospace", color: "#16a34a", fontWeight: 600,
                                }}>
                                    {s.walkthrough.output}
                                </div>
                            </div>
                        )}

                        {s.takeaways && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {s.takeaways.map((t) => (
                                    <div key={t.text} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                        <span style={{ color: "#16a34a", fontSize: "14px", fontWeight: 700, lineHeight: 1.6 }}>{t.icon}</span>
                                        <span style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.65, fontFamily: font }}>{t.text}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))}

                {/* Full solution code */}
                <section style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                        <h2 style={{
                            fontSize: "18px", fontWeight: 600, color: "#09090b",
                            margin: 0, letterSpacing: "-0.2px", fontFamily: font,
                        }}>
                            Full Solution
                        </h2>
                        <button
                            onClick={copyCode}
                            style={{
                                padding: "6px 12px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fff",
                                color: "#3f3f46", fontSize: "12px", fontWeight: 500,
                                cursor: "pointer", fontFamily: font,
                            }}
                        >
                            {copied ? "Copied ✓" : "Copy code"}
                        </button>
                    </div>
                    <pre style={{
                        background: "#0f172a", border: "1px solid #e4e4e7",
                        borderRadius: "10px", padding: "18px 20px",
                        fontSize: "13px", fontFamily: "monospace",
                        color: "#e2e8f0", overflowX: "auto", lineHeight: 1.6,
                    }}>
                        {post.code}
                    </pre>
                </section>

                {/* Back to list, again, at the bottom */}
                <Link
                    href="/blogs"
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        marginTop: "12px",
                        color: "#2563eb", fontSize: "14px", fontWeight: 500,
                        textDecoration: "none", fontFamily: font,
                    }}
                >
                    ← Back to all posts
                </Link>
            </div>
        </main>
    );
}
