"use client";
import { useState } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const code = `function isAnagram(s: string, t: string): boolean {
  // Quick check: different lengths can't be anagrams
  if (s.length !== t.length) return false;

  // Step 1: Count frequencies in s
  const freq = new Map<string, number>();
  for (const c of s) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
  }

  // Step 2: Subtract frequencies using t
  for (const c of t) {
    if (!freq.has(c)) return false;
    freq.set(c, freq.get(c)! - 1);
    if (freq.get(c)! < 0) return false;
  }

  return true;
}`;

const arrayCode = `// Alternative: Frequency Array — O(n) time, O(1) space
// Works when input is limited to lowercase a-z
function isAnagramArray(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);
  const a = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - a]++;
    count[t.charCodeAt(i) - a]--;
  }

  return count.every(c => c === 0);
}`;

export default function ValidAnagramPage() {
    const [copied, setCopied] = useState<"main" | "alt" | null>(null);

    const copy = (which: "main" | "alt") => {
        navigator.clipboard.writeText(which === "main" ? code : arrayCode);
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
                        }}>HashMap Pattern</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(22,163,74,0.08)",
                            border: "1px solid rgba(22,163,74,0.2)", color: "#16a34a", fontFamily: font,
                        }}>Easy</span>
                        <a
                            href="https://leetcode.com/problems/valid-anagram"
                            target="_blank" rel="noreferrer"
                            style={{
                                fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                                borderRadius: "99px", background: "#f4f4f5",
                                border: "1px solid #e4e4e7", color: "#52525b",
                                textDecoration: "none", fontFamily: font,
                            }}
                        >
                            LeetCode #242 ↗
                        </a>
                    </div>

                    <h1 style={{
                        fontSize: "32px", fontWeight: 700, letterSpacing: "-0.5px",
                        color: "#09090b", margin: "0 0 12px", fontFamily: font,
                    }}>
                        Valid Anagram
                    </h1>
                    <p style={{ fontSize: "15px", color: "#71717a", margin: 0, lineHeight: 1.65, fontFamily: font }}>
                        Learn frequency matching — how to compare two collections by their character counts rather than their order, a foundational HashMap skill for string problems.
                    </p>
                </div>

                {/* Complexity row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
                    {[
                        { label: "Time", value: "O(n)" },
                        { label: "Space", value: "O(1)" },
                        { label: "Pattern", value: "HashMap / Freq Array" },
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
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        Valid Anagram is one of the most important beginner-friendly HashMap problems because it teaches a fundamental interview skill: <strong style={{ color: "#09090b" }}>comparing two collections by their frequencies instead of their order.</strong>
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        At first glance the problem looks like a string manipulation challenge. The real lesson is learning how to count occurrences and verify whether two datasets contain exactly the same information — a pattern that appears in data validation, search engines, and text processing.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 2 — What is an anagram */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        What Is an Anagram?
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Two words are anagrams when they contain the same characters with identical frequencies, regardless of order.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                        {[
                            { a: "listen", b: "silent" },
                            { a: "triangle", b: "integral" },
                            { a: "race", b: "care" },
                        ].map(({ a, b }) => (
                            <div key={a} style={{
                                display: "flex", alignItems: "center", gap: "12px",
                                padding: "10px 14px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontFamily: "monospace", fontSize: "13px",
                            }}>
                                <span style={{ color: "#2563eb", fontWeight: 600, minWidth: "70px" }}>{a}</span>
                                <span style={{ color: "#a1a1aa" }}>↔</span>
                                <span style={{ color: "#2563eb", fontWeight: 600 }}>{b}</span>
                                <span style={{ color: "#71717a", fontFamily: font, fontSize: "12px", marginLeft: "auto" }}>
                                    same characters
                                </span>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Even though the characters appear in different positions, the overall composition remains the same. The challenge is verifying this efficiently.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 3 — Core Idea */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Core Idea
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        When humans compare anagrams, they mentally rearrange letters and check the overall composition. Computers need a systematic approach. Instead of focusing on the order of characters, focus on:
                    </p>
                    <div style={{
                        padding: "14px 18px", borderRadius: "8px",
                        background: "#09090b", marginBottom: "20px",
                    }}>
                        <code style={{ fontSize: "14px", color: "#d4d4d8", fontFamily: "monospace" }}>
                            "How many times does each character appear?"
                        </code>
                    </div>

                    {/* Side-by-side freq comparison */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {[
                            { word: "listen", chars: [["l", "1"], ["i", "1"], ["s", "1"], ["t", "1"], ["e", "1"], ["n", "1"]] },
                            { word: "silent", chars: [["s", "1"], ["i", "1"], ["l", "1"], ["e", "1"], ["n", "1"], ["t", "1"]] },
                        ].map(({ word, chars }) => (
                            <div key={word} style={{
                                padding: "14px 16px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                            }}>
                                <p style={{
                                    fontSize: "13px", fontWeight: 600, color: "#2563eb",
                                    margin: "0 0 10px", fontFamily: "monospace",
                                }}>{word}</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    {chars.map(([c, n]) => (
                                        <div key={c} style={{
                                            display: "flex", justifyContent: "space-between",
                                            fontSize: "12px", fontFamily: "monospace",
                                        }}>
                                            <span style={{ color: "#52525b" }}>{c}</span>
                                            <span style={{ color: "#16a34a", fontWeight: 600 }}>→ {n}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: "14px", color: "#71717a", margin: "12px 0 0", fontFamily: font }}>
                        The frequencies are identical — therefore the strings are anagrams. ✓
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 4 — The Hidden Pattern */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        The Hidden Pattern
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 20px", fontFamily: font }}>
                        The real pattern underlying this problem is a two-step process:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        {[
                            { step: "1", label: "Count", color: "#2563eb", desc: "Build a frequency map for each string — how many times does each character appear?" },
                            { step: "2", label: "Compare", color: "#059669", desc: "Verify that the frequency information is identical across both strings" },
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
                        If every character appears the same number of times in both strings, the strings are anagrams. This pattern is widely used in string-processing interview questions.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 5 — Pattern Recognition */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Pattern Recognition
                    </h2>
                    <p style={{ fontSize: "14px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Reach for frequency-counting solutions whenever you see:
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Same characters or rearranged letters",
                            "Compare character frequencies",
                            "Permutations of a string",
                            "Equivalent strings with different orders",
                            "Character count matching",
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

                {/* Section 6 — Why freq counting works */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Why Frequency Counting Works
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        Many beginners try to compare characters directly. This approach fails because anagrams may have completely different character positions.
                    </p>

                    {/* Counter-example */}
                    <div style={{
                        padding: "14px 16px", borderRadius: "8px",
                        border: "1px solid rgba(220,38,38,0.2)", background: "rgba(220,38,38,0.04)",
                        marginBottom: "16px",
                    }}>
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "#dc2626", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: font }}>
                            ✗ Direct comparison fails
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                            {["listen", "silent"].map(w => (
                                <div key={w} style={{ display: "flex", gap: "4px" }}>
                                    {w.split("").map((c, i) => (
                                        <span key={i} style={{
                                            width: "22px", height: "22px", borderRadius: "4px",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "12px", fontFamily: "monospace", fontWeight: 600,
                                            background: i < 2 ? "rgba(220,38,38,0.15)" : "#f4f4f5",
                                            color: i < 2 ? "#dc2626" : "#52525b",
                                        }}>{c}</span>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: "12px", color: "#dc2626", margin: "8px 0 0", fontFamily: font }}>
                            l ≠ s at position 0, i = i at position 1… breaks immediately
                        </p>
                    </div>

                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Frequency counting <strong style={{ color: "#09090b" }}>removes the influence of ordering</strong> and focuses on the actual information contained within the string — the characters and their counts.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 7 — Walkthrough */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Step-by-Step Walkthrough
                    </h2>

                    <div style={{
                        padding: "12px 16px", borderRadius: "8px",
                        background: "#fafafa", border: "1px solid #e4e4e7", marginBottom: "20px",
                    }}>
                        <code style={{ fontSize: "13px", color: "#52525b", fontFamily: "monospace" }}>
                            s = "anagram",  t = "nagaram"
                        </code>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontFamily: font }}>
                        Step 1 — Count frequencies in s = "anagram"
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
                        {[
                            { c: "a", n: 3 },
                            { c: "n", n: 1 },
                            { c: "g", n: 1 },
                            { c: "r", n: 1 },
                            { c: "m", n: 1 },
                        ].map(({ c, n }) => (
                            <div key={c} style={{
                                display: "flex", flexDirection: "column", alignItems: "center",
                                padding: "10px 14px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                minWidth: "52px",
                            }}>
                                <span style={{ fontSize: "16px", fontWeight: 700, fontFamily: "monospace", color: "#09090b" }}>{c}</span>
                                <span style={{ fontSize: "11px", color: "#a1a1aa", fontFamily: font }}>→</span>
                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#2563eb", fontFamily: "monospace" }}>{n}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontFamily: font }}>
                        Step 2 — Subtract frequencies using t = "nagaram"
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                        {[
                            { c: "n", before: 1, after: 0, ok: true },
                            { c: "a", before: 3, after: 0, ok: true },
                            { c: "g", before: 1, after: 0, ok: true },
                            { c: "r", before: 1, after: 0, ok: true },
                            { c: "m", before: 1, after: 0, ok: true },
                        ].map((row, i) => (
                            <div key={i} style={{
                                display: "grid", gridTemplateColumns: "30px 80px 80px 1fr",
                                gap: "10px", alignItems: "center",
                                padding: "8px 14px", borderRadius: "8px",
                                border: "1px solid rgba(22,163,74,0.2)",
                                background: "rgba(22,163,74,0.04)",
                                fontSize: "13px",
                            }}>
                                <span style={{ fontFamily: "monospace", color: "#2563eb", fontWeight: 700 }}>{row.c}</span>
                                <span style={{ fontFamily: "monospace", color: "#71717a" }}>was: {row.before}</span>
                                <span style={{ fontFamily: "monospace", color: "#16a34a", fontWeight: 600 }}>now: {row.after}</span>
                                <span style={{ color: "#16a34a", fontFamily: font, fontSize: "11px" }}>✓ zero</span>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        padding: "10px 14px", borderRadius: "8px",
                        background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)",
                        fontSize: "13px", fontFamily: "monospace", color: "#16a34a", fontWeight: 600,
                    }}>
                        → All frequencies zero → return true ✓
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 8 — Solution */}
                <section style={{ marginBottom: "24px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 8px", fontFamily: font }}>
                        Solution — HashMap
                    </h2>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Works for any Unicode characters — O(n) time, O(k) space where k = unique chars
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
                                    valid-anagram.ts
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

                {/* Alternative */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#09090b", margin: "0 0 8px", fontFamily: font }}>
                        Alternative — Frequency Array
                    </h2>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        O(1) space when input is limited to lowercase a–z — slightly faster in practice
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
                                    valid-anagram-array.ts
                                </span>
                            </div>
                            <button onClick={() => copy("alt")} style={{
                                padding: "5px 12px", borderRadius: "6px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.05)",
                                color: "rgba(255,255,255,0.6)", fontSize: "12px",
                                fontWeight: 500, cursor: "pointer", fontFamily: font,
                            }}>
                                {copied === "alt" ? "✓ Copied" : "Copy"}
                            </button>
                        </div>
                        <pre style={{
                            margin: 0, padding: "24px", background: "#09090b", color: "#d4d4d8",
                            fontSize: "13px", lineHeight: 1.8,
                            fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
                            overflowX: "auto", whiteSpace: "pre",
                        }}>
                            {arrayCode}
                        </pre>
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 9 — Interview Insight */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Real Interview Insight
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        This problem introduces a technique that appears repeatedly in interviews: <strong style={{ color: "#09090b" }}>represent data using frequencies rather than raw values.</strong>
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Interviewers use this problem to test whether you recognize that order is not always important — frequency is. Once you understand frequency-based thinking, many other problems become easier:
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {[
                            "Group Anagrams",
                            "Find All Anagrams in a String",
                            "Ransom Note",
                            "First Unique Character",
                            "Top K Frequent Elements",
                            "Minimum Window Substring",
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: "10px 12px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontSize: "13px", color: "#52525b", fontFamily: font,
                                display: "flex", alignItems: "center", gap: "8px",
                            }}>
                                <span style={{ color: "#2563eb", fontSize: "10px" }}>●</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 10 — Common Mistakes */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Common Mistakes
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            { title: "Comparing characters directly", desc: "Anagrams have different character positions. Direct character-by-character comparison will fail even for valid anagrams like listen/silent." },
                            { title: "Ignoring character frequency", desc: "Matching character sets is not enough. The frequency of each character must also match. 'aab' and 'abb' share the same characters but are not anagrams." },
                            { title: "Overcomplicating the solution", desc: "Many candidates look for complex string manipulations when simple frequency counting solves the problem efficiently in O(n)." },
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

                {/* Section 11 — Variations */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Interview Variations
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        After mastering Valid Anagram, you will encounter similar questions such as:
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {[
                            "Group Anagrams",
                            "Find All Anagrams in a String",
                            "Check Permutation",
                            "Character Frequency Matching",
                            "String Equivalence Problems",
                            "Ransom Note",
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

                {/* Section 12 — Key Takeaways */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Key Takeaways
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Order does not always matter — frequency often matters more",
                            "HashMaps are powerful tools for counting character occurrences",
                            "Many string problems become easier when converted into frequency comparisons",
                            "Frequency arrays are a space-efficient alternative for fixed alphabets",
                            "Valid Anagram unlocks an entire category of string and HashMap problems",
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
                        Once you understand frequency matching, you unlock an entire category of string and HashMap interview problems. The pattern is always: <strong style={{ color: "#09090b" }}>Count → Compare</strong>.
                    </p>
                </div>

            </div>
        </main>
    );
}