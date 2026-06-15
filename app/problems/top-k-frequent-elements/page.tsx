"use client";
import { useState } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const code = `function topKFrequent(nums: number[], k: number): number[] {
  // Step 1: Count frequencies
  const freq = new Map<number, number>();
  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  // Step 2: Bucket sort by frequency
  // buckets[i] = list of numbers that appear exactly i times
  const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  // Step 3: Collect top K from highest frequency down
  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}`;

const heapCode = `// Alternative: Min-Heap approach — O(n log k)
function topKFrequentHeap(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);

  // Sort by frequency descending, take first k
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}`;

export default function TopKFrequentPage() {
    const [copied, setCopied] = useState<"main" | "heap" | null>(null);

    const copy = (which: "main" | "heap") => {
        navigator.clipboard.writeText(which === "main" ? code : heapCode);
        setCopied(which);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 24px 96px" }}>

                {/* Back */}
                <a
                    href="/patterns/hashmap"
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "7px 14px", borderRadius: "8px",
                        border: "1px solid #e4e4e7", background: "#fff",
                        color: "#71717a", fontSize: "13px", fontWeight: 500,
                        cursor: "pointer", marginBottom: "32px", fontFamily: font,
                        textDecoration: "none",
                    }}
                >
                    ← Back to HashMap
                </a>

                {/* Header */}
                <div style={{ marginBottom: "36px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(37,99,235,0.08)",
                            border: "1px solid rgba(37,99,235,0.2)", color: "#2563eb", fontFamily: font,
                        }}>HashMap + Heap</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(217,119,6,0.08)",
                            border: "1px solid rgba(217,119,6,0.2)", color: "#d97706", fontFamily: font,
                        }}>Medium</span>
                        <a
                            href="https://leetcode.com/problems/top-k-frequent-elements"
                            target="_blank" rel="noreferrer"
                            style={{
                                fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                                borderRadius: "99px", background: "#f4f4f5",
                                border: "1px solid #e4e4e7", color: "#52525b",
                                textDecoration: "none", fontFamily: font,
                            }}
                        >
                            LeetCode #347 ↗
                        </a>
                    </div>

                    <h1 style={{
                        fontSize: "32px", fontWeight: 700, letterSpacing: "-0.5px",
                        color: "#09090b", margin: "0 0 12px", fontFamily: font,
                    }}>
                        Top K Frequent Elements
                    </h1>
                    <p style={{ fontSize: "15px", color: "#71717a", margin: 0, lineHeight: 1.65, fontFamily: font }}>
                        Learn frequency counting and ranking — how to efficiently identify the most frequent items from a large collection using HashMaps and Bucket Sort.
                    </p>
                </div>

                {/* Complexity row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
                    {[
                        { label: "Time", value: "O(n)" },
                        { label: "Space", value: "O(n)" },
                        { label: "Pattern", value: "HashMap + Bucket Sort" },
                    ].map(({ label, value }) => (
                        <div key={label} style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            padding: "6px 12px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fafafa",
                            fontSize: "13px", fontFamily: font,
                        }}>
                            <span style={{ color: "#a1a1aa" }}>{label}</span>
                            <span style={{ color: "#d4d4d8" }}>·</span>
                            <span style={{ fontFamily: "monospace", color: "#09090b", fontWeight: 500 }}>{value}</span>
                        </div>
                    ))}
                </div>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 1 — Why it matters */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Why This Problem Matters
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Top K Frequent Elements is one of the most common interview questions because it combines two important concepts: <strong style={{ color: "#09090b" }}>frequency counting</strong> and <strong style={{ color: "#09090b" }}>finding the most important items</strong>. Many real-world systems use the exact same idea.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {[
                            "Trending hashtags on social media",
                            "Most searched keywords",
                            "Most purchased products",
                            "Most viewed videos",
                            "Popular news articles",
                            "Recommendation systems",
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: "flex", alignItems: "center", gap: "8px",
                                padding: "8px 12px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontSize: "13px", color: "#52525b", fontFamily: font,
                            }}>
                                <span style={{ color: "#2563eb", fontSize: "10px" }}>●</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 2 — Core Idea */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        The Core Idea
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        Imagine reading a list of numbers. Some appear once, some appear many times. The first task is not finding the answer — the first task is <strong style={{ color: "#09090b" }}>understanding the data</strong>.
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        A frequency map answers one simple question:
                    </p>
                    <div style={{
                        padding: "14px 18px", borderRadius: "8px",
                        background: "#09090b", marginBottom: "16px",
                    }}>
                        <code style={{ fontSize: "14px", color: "#d4d4d8", fontFamily: "monospace" }}>
                            "How many times does each value appear?"
                        </code>
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Once we know the frequency of every element, finding the most frequent ones becomes much easier — just pick the top K.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 3 — The Hidden Pattern */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        The Hidden Pattern
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 20px", fontFamily: font }}>
                        This problem decomposes cleanly into three stages:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        {[
                            { step: "1", label: "Count", color: "#2563eb", desc: "Build a frequency map — how many times does each number appear?" },
                            { step: "2", label: "Organize", color: "#7c3aed", desc: "Arrange elements by their frequency using a bucket or heap" },
                            { step: "3", label: "Select", color: "#059669", desc: "Extract the top K most frequent elements from the organized structure" },
                        ].map(({ step, label, color, desc }) => (
                            <div key={step} style={{
                                display: "flex", alignItems: "flex-start", gap: "14px",
                                padding: "14px 16px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                            }}>
                                <span style={{
                                    width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0,
                                    background: `${color}15`, border: `1px solid ${color}30`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "11px", color, fontWeight: 700, fontFamily: font,
                                }}>{step}</span>
                                <div>
                                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#09090b", margin: "0 0 3px", fontFamily: font }}>{label}</p>
                                    <p style={{ fontSize: "13px", color: "#71717a", margin: 0, fontFamily: font }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        This pattern appears in many interview questions involving rankings, recommendations, and analytics.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 4 — Pattern Recognition */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Pattern Recognition
                    </h2>
                    <p style={{ fontSize: "14px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Reach for frequency-based solutions whenever you see phrases like:
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Most frequent / least frequent",
                            "Top K elements",
                            "Repeated elements or duplicates",
                            "Count occurrences",
                            "Trending items",
                            "Popular values or rankings",
                        ].map((item, i) => (
                            <li key={i} style={{
                                display: "flex", alignItems: "flex-start", gap: "10px",
                                fontSize: "14px", color: "#52525b", lineHeight: 1.7, fontFamily: font,
                            }}>
                                <span style={{
                                    flexShrink: 0, marginTop: "7px",
                                    width: "5px", height: "5px", borderRadius: "50%",
                                    background: "#2563eb", display: "inline-block",
                                }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 5 — Why HashMaps */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Why HashMaps Are Essential
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        Without a HashMap, counting frequencies becomes expensive — every new element would require searching through previous elements, costing O(n) per insert.
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        A HashMap allows frequency updates in <strong style={{ color: "#09090b" }}>constant O(1) time</strong>, transforming a difficult counting problem into a straightforward lookup:
                    </p>
                    <div style={{
                        padding: "14px 18px", borderRadius: "8px",
                        background: "#09090b",
                    }}>
                        <code style={{ fontSize: "13px", color: "#d4d4d8", fontFamily: "monospace" }}>
                            freq.set(n, (freq.get(n) ?? 0) + 1)
                        </code>
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 6 — Walkthrough */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Step-by-Step Walkthrough
                    </h2>

                    <div style={{
                        padding: "12px 16px", borderRadius: "8px",
                        background: "#fafafa", border: "1px solid #e4e4e7", marginBottom: "20px",
                    }}>
                        <code style={{ fontSize: "13px", color: "#52525b", fontFamily: "monospace" }}>
                            nums = [1, 1, 1, 2, 2, 3],  k = 2
                        </code>
                    </div>

                    {/* Step 1: Freq map */}
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontFamily: font }}>
                        Step 1 — Build frequency map
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
                        {[
                            { num: 1, freq: 3 },
                            { num: 2, freq: 2 },
                            { num: 3, freq: 1 },
                        ].map(({ num, freq }) => (
                            <div key={num} style={{
                                display: "flex", flexDirection: "column", alignItems: "center",
                                padding: "12px 16px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                minWidth: "70px",
                            }}>
                                <span style={{ fontSize: "18px", fontWeight: 700, fontFamily: "monospace", color: "#09090b" }}>{num}</span>
                                <span style={{ fontSize: "11px", color: "#a1a1aa", margin: "2px 0", fontFamily: font }}>appears</span>
                                <span style={{
                                    fontSize: "14px", fontWeight: 700,
                                    color: freq === 3 ? "#2563eb" : freq === 2 ? "#7c3aed" : "#71717a",
                                    fontFamily: "monospace",
                                }}>{freq}x</span>
                            </div>
                        ))}
                    </div>

                    {/* Step 2: Buckets */}
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontFamily: font }}>
                        Step 2 — Bucket sort by frequency
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "24px", alignItems: "flex-end" }}>
                        {[
                            { idx: 1, nums: ["3"], label: "freq = 1" },
                            { idx: 2, nums: ["2"], label: "freq = 2" },
                            { idx: 3, nums: ["1"], label: "freq = 3" },
                        ].map(({ idx, nums, label }) => (
                            <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                                <div style={{
                                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                                    width: "60px", minHeight: "44px", borderRadius: "6px",
                                    border: "1px solid #e4e4e7", background: idx === 3 ? "rgba(37,99,235,0.08)" : "#fafafa",
                                    fontFamily: "monospace", fontSize: "13px", fontWeight: 600,
                                    color: idx === 3 ? "#2563eb" : "#52525b", padding: "6px",
                                }}>
                                    {nums.join(", ")}
                                </div>
                                <span style={{ fontSize: "10px", color: "#a1a1aa", fontFamily: font }}>{label}</span>
                            </div>
                        ))}
                        <div style={{ fontSize: "12px", color: "#a1a1aa", fontFamily: font, marginBottom: "18px", marginLeft: "4px" }}>
                            ← scan right to left for top K
                        </div>
                    </div>

                    {/* Step 3 */}
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontFamily: font }}>
                        Step 3 — Collect top K = 2
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                        {[
                            { pick: "1", from: "bucket[3]", reason: "highest frequency (3x)", ok: true },
                            { pick: "2", from: "bucket[2]", reason: "next highest (2x)", ok: true },
                        ].map((row, i) => (
                            <div key={i} style={{
                                display: "grid", gridTemplateColumns: "40px 90px 1fr",
                                gap: "10px", alignItems: "center",
                                padding: "10px 14px", borderRadius: "8px",
                                border: "1px solid rgba(22,163,74,0.2)",
                                background: "rgba(22,163,74,0.05)",
                                fontSize: "13px",
                            }}>
                                <span style={{ fontFamily: "monospace", color: "#2563eb", fontWeight: 700 }}>
                                    pick {row.pick}
                                </span>
                                <span style={{ fontFamily: "monospace", color: "#71717a", fontSize: "11px" }}>
                                    {row.from}
                                </span>
                                <span style={{ color: "#52525b", fontFamily: font, fontSize: "12px" }}>
                                    {row.reason}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div style={{
                        padding: "10px 14px", borderRadius: "8px",
                        background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)",
                        fontSize: "13px", fontFamily: "monospace", color: "#16a34a", fontWeight: 600,
                    }}>
                        → [1, 2]
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 7 — Solution (Bucket Sort) */}
                <section style={{ marginBottom: "24px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 8px", fontFamily: font }}>
                        Solution — Bucket Sort
                    </h2>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Optimal O(n) — avoids sorting entirely
                    </p>
                    <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e4e4e7" }}>
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "12px 18px", background: "#18181b",
                        }}>
                            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ef4444" }} />
                                <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#f59e0b" }} />
                                <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#22c55e" }} />
                                <span style={{ marginLeft: "10px", fontSize: "12px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
                                    top-k-frequent.ts
                                </span>
                            </div>
                            <button onClick={() => copy("main")} style={{
                                padding: "5px 12px", borderRadius: "6px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.05)",
                                color: "rgba(255,255,255,0.6)", fontSize: "12px",
                                fontWeight: 500, cursor: "pointer", fontFamily: font,
                            }}>
                                {copied === "main" ? "✓ Copied" : "Copy"}
                            </button>
                        </div>
                        <pre style={{
                            margin: 0, padding: "24px", background: "#09090b", color: "#d4d4d8",
                            fontSize: "13px", lineHeight: 1.8,
                            fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
                            overflowX: "auto", whiteSpace: "pre",
                        }}>
                            {code}
                        </pre>
                    </div>
                </section>

                {/* Section 7b — Alternative */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#09090b", margin: "0 0 8px", fontFamily: font }}>
                        Alternative — Sort by Frequency
                    </h2>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Simpler to write — O(n log n) — often acceptable in interviews
                    </p>
                    <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e4e4e7" }}>
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "12px 18px", background: "#18181b",
                        }}>
                            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ef4444" }} />
                                <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#f59e0b" }} />
                                <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#22c55e" }} />
                                <span style={{ marginLeft: "10px", fontSize: "12px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
                                    top-k-heap.ts
                                </span>
                            </div>
                            <button onClick={() => copy("heap")} style={{
                                padding: "5px 12px", borderRadius: "6px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.05)",
                                color: "rgba(255,255,255,0.6)", fontSize: "12px",
                                fontWeight: 500, cursor: "pointer", fontFamily: font,
                            }}>
                                {copied === "heap" ? "✓ Copied" : "Copy"}
                            </button>
                        </div>
                        <pre style={{
                            margin: 0, padding: "24px", background: "#09090b", color: "#d4d4d8",
                            fontSize: "13px", lineHeight: 1.8,
                            fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
                            overflowX: "auto", whiteSpace: "pre",
                        }}>
                            {heapCode}
                        </pre>
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 8 — Interview Insight */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Real Interview Insight
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        Many candidates correctly count frequencies but struggle with the second half. Finding the most frequent elements is where interviewers expect you to think beyond basic HashMaps. Strong candidates naturally separate the problem into stages.
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Interviewers often follow up with:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {[
                            "How do we efficiently find the largest frequencies?",
                            "Can we avoid sorting everything?",
                            "Can we do better than O(n log n)?",
                        ].map((q, i) => (
                            <div key={i} style={{
                                padding: "10px 14px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontSize: "14px", color: "#3f3f46", fontFamily: font,
                                fontStyle: "italic",
                            }}>
                                "{q}"
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: "14px", color: "#71717a", margin: "14px 0 0", fontFamily: font }}>
                        These discussions lead into Heap and Bucket Sort — both valid answers worth knowing.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 9 — Common Mistakes */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Common Mistakes
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            { title: "Focusing only on counting", desc: "Frequency counting is only Step 1. The real challenge is efficiently identifying which frequencies are the largest." },
                            { title: "Sorting too early", desc: "Many candidates immediately sort the entire input array. Build the frequency map first, then decide how to rank." },
                            { title: "Missing the pattern", desc: "Top K Frequent Elements is not primarily about arrays — it is about ranking data after frequency analysis." },
                        ].map(({ title, desc }) => (
                            <div key={title} style={{
                                padding: "14px 16px", borderRadius: "8px",
                                border: "1px solid rgba(220,38,38,0.15)",
                                background: "rgba(220,38,38,0.04)",
                            }}>
                                <p style={{ fontSize: "14px", fontWeight: 600, color: "#09090b", margin: "0 0 4px", fontFamily: font }}>
                                    ✗ {title}
                                </p>
                                <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: 1.65, fontFamily: font }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 10 — Variations */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Interview Variations
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        Once you understand this problem, you will encounter similar questions involving:
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {[
                            "Top K frequent words",
                            "Most common website visits",
                            "Trending search terms",
                            "Most popular products",
                            "Frequency-based recommendations",
                            "Sort characters by frequency",
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: "10px 12px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontSize: "13px", color: "#52525b", fontFamily: font,
                                display: "flex", alignItems: "center", gap: "8px",
                            }}>
                                <span style={{ color: "#7c3aed", fontSize: "10px" }}>●</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 11 — Key Takeaways */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Key Takeaways
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Frequency counting is a foundational HashMap skill",
                            "Always separate counting from selection — two distinct steps",
                            "Look for ranking keywords: 'Top K', 'most frequent', 'trending'",
                            "Bucket Sort achieves O(n) — better than O(n log n) sorting",
                            "Many analytics and recommendation systems rely on this same pattern",
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: "flex", alignItems: "center", gap: "12px",
                                padding: "12px 16px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontSize: "14px", color: "#3f3f46", fontFamily: font,
                            }}>
                                <span style={{
                                    width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                                    background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "11px", color: "#16a34a", fontWeight: 700,
                                }}>✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key insight callout */}
                <div style={{
                    padding: "18px 20px", borderRadius: "8px",
                    background: "#fafafa", border: "1px solid #e4e4e7",
                    borderLeft: "3px solid #18181b",
                }}>
                    <p style={{
                        fontSize: "11px", fontWeight: 600, color: "#a1a1aa",
                        margin: "0 0 8px", textTransform: "uppercase",
                        letterSpacing: "0.07em", fontFamily: font,
                    }}>Key Insight</p>
                    <p style={{ fontSize: "14px", color: "#52525b", margin: 0, lineHeight: 1.75, fontFamily: font }}>
                        Understanding Top K Frequent Elements prepares you for a large family of frequency analysis and ranking problems. The pattern is always: <strong style={{ color: "#09090b" }}>Count → Organize → Select</strong>.
                    </p>
                </div>

            </div>
        </main>
    );
}