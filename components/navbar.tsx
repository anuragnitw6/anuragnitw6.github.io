"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <header style={{
            position: "sticky", top: 0, zIndex: 50, width: "100%",
            borderBottom: "1px solid #e2e8f0",
            background: "rgba(248,250,252,0.85)", backdropFilter: "blur(12px)",
        }}>
            <div style={{
                maxWidth: "1200px", margin: "0 auto",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                height: "64px", padding: "0 24px",
            }}>
                <Link href="/" style={{
                    fontSize: "18px", fontWeight: 700, letterSpacing: "-0.3px",
                    color: "#0f172a", textDecoration: "none",
                }}>
                    DSA<span style={{ color: "#2563eb" }}>Patterns</span>
                </Link>

                <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                    {[
                        { href: "/patterns", label: "Patterns" },
                        { href: "/problems", label: "Problems" },
                        { href: "/blogs", label: "Blogs" },
                    ].map(({ href, label }) => (
                        <Link key={href} href={href} style={{
                            fontSize: "14px", fontWeight: 500,
                            color: "#64748b", textDecoration: "none",
                        }}>
                            {label}
                        </Link>
                    ))}
                </nav>

                <a href="https://github.com" target="_blank" rel="noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "8px 16px", borderRadius: "8px",
                    border: "1px solid #e2e8f0", background: "#fff",
                    color: "#374151", fontSize: "14px", fontWeight: 500,
                    textDecoration: "none", cursor: "pointer",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}>
                    GitHub
                </a>
            </div>
        </header>
    );
}