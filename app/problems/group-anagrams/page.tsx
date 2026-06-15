"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const code = `function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  // key = sorted string, value = list of anagrams

  for (const s of strs) {
    // Transform: sort the characters to get the canonical key
    const key = s.split("").sort().join("");

    // Group: add this string under its key
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(s);
  }

  // Return all the groups
  return Array.from(map.values());
}`;

export default function GroupAnagramsPage() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
                            borderRadius: "99px", background: "rgba(217,119,6,0.08)",
                            border: "1px solid rgba(217,119,6,0.2)", color: "#d97706", fontFamily: font,
                        }}>Medium</span>
                        <a
                            href="https://leetcode.com/problems/group-anagrams"
                            target="_blank" rel="noreferrer"
                            style={{
                                fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                                borderRadius: "99px", background: "#f4f4f5",
                                border: "1px solid #e4e4e7", color: "#52525b",
                                textDecoration: "none", fontFamily: font,
                            }}
                        >
                            LeetCode #49 ↗
                        </a>
                    </div>

                    <h1 style={{
                        fontSize: "32px", fontWeight: 700, letterSpacing: "-0.5px",
                        color: "#09090b", margin: "0 0 12px", fontFamily: font,
                    }}>
                        Group Anagrams
                    </h1>
                    <p style={{
                        fontSize: "15px", color: "#71717a", margin: 0, lineHeight: 1.65, fontFamily: font,
                    }}>
                        Learn Hash-based grouping — how to transform data into a canonical signature and collect equivalent items together efficiently.
                    </p>
                </div>

                {/* Complexity row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
                    {[
                        { label: "Time", value: "O(n · k log k)" },
                        { label: "Space", value: "O(n · k)" },
                        { label: "Pattern", value: "HashMap" },
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
                        Group Anagrams is one of the most important HashMap problems because it introduces a new way of thinking about data grouping. Unlike Two Sum, where the goal is to find a matching value, this problem teaches how to <strong style={{ color: "#09090b" }}>identify items that belong to the same category</strong> and collect them together.
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        This pattern appears frequently in interviews, real-world applications, search engines, recommendation systems, and data processing pipelines.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 2 — What is an anagram */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        What Is an Anagram?
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Two words are considered anagrams when they contain exactly the same characters with the same frequencies, regardless of order.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                        {[
                            { a: "listen", b: "silent" },
                            { a: "eat", b: "tea" },
                            { a: "rat", b: "tar" },
                        ].map(({ a, b }) => (
                            <div key={a} style={{
                                display: "flex", alignItems: "center", gap: "12px",
                                padding: "10px 14px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontFamily: "monospace", fontSize: "13px",
                            }}>
                                <span style={{ color: "#2563eb", fontWeight: 600 }}>{a}</span>
                                <span style={{ color: "#a1a1aa" }}>→</span>
                                <span style={{ color: "#2563eb", fontWeight: 600 }}>{b}</span>
                                <span style={{ color: "#71717a", fontFamily: font, fontSize: "12px", marginLeft: "auto" }}>
                                    same characters
                                </span>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Although the letters appear in different positions, the character composition remains identical. The challenge is determining whether two words belong to the same anagram group — efficiently.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 3 — Core Insight */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Core Insight
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        When humans compare anagrams, they mentally ignore the order of characters and focus on the letters themselves. Computers need a <strong style={{ color: "#09090b" }}>consistent representation</strong> that allows different words with identical character compositions to be recognized as equivalent.
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        A simple observation solves the problem: if two words become identical after sorting their characters, they belong to the same anagram group.
                    </p>

                    {/* Sorting examples */}
                    <div style={{
                        padding: "18px 20px", borderRadius: "8px",
                        background: "#625c5cff", marginBottom: "16px",
                    }}>
                        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: font }}>
                            Sorted representation
                        </p>
                        {[
                            { word: "eat", sorted: "aet" },
                            { word: "tea", sorted: "aet" },
                            { word: "ate", sorted: "aet" },
                        ].map(({ word, sorted }) => (
                            <div key={word} style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                fontSize: "13px", fontFamily: "monospace", marginBottom: "6px",
                            }}>
                                <span style={{ color: "#60a5fa", minWidth: "50px" }}>{word}</span>
                                <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
                                <span style={{ color: "#4ade80", fontWeight: 600 }}>{sorted}</span>
                                <span style={{ color: "rgba(255,255,255,0.3)", fontFamily: font, fontSize: "12px" }}>← same key</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Since all three produce the same sorted representation, they belong in the same group.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 4 — The Hidden Pattern */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        The Hidden Pattern
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 20px", fontFamily: font }}>
                        The real pattern underlying this problem is a three-step process:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        {[
                            { step: "1", label: "Transform", desc: "Convert each item into a standard canonical representation" },
                            { step: "2", label: "Identify", desc: "Use that representation as a HashMap key" },
                            { step: "3", label: "Group", desc: "Store all matching items under the same key" },
                        ].map(({ step, label, desc }) => (
                            <div key={step} style={{
                                display: "flex", alignItems: "flex-start", gap: "14px",
                                padding: "14px 16px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                            }}>
                                <span style={{
                                    width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0,
                                    background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "11px", color: "#2563eb", fontWeight: 700, fontFamily: font,
                                }}>{step}</span>
                                <div>
                                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#09090b", margin: "0 0 3px", fontFamily: font }}>{label}</p>
                                    <p style={{ fontSize: "13px", color: "#71717a", margin: 0, fontFamily: font }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        This idea appears in many interview questions beyond anagrams — any time you need to group equivalent items, this is the blueprint.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 5 — Pattern Recognition */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Pattern Recognition
                    </h2>
                    <p style={{ fontSize: "14px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Reach for a HashMap-based grouping solution whenever you see:
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Group similar items together",
                            "Categorize data by a shared property",
                            "Find equivalent or matching objects",
                            "Cluster related strings or sequences",
                            "Frequency-based or canonical matching",
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

                {/* Section 6 — Step-by-Step Walkthrough */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Step-by-Step Walkthrough
                    </h2>

                    <div style={{
                        padding: "12px 16px", borderRadius: "8px",
                        background: "#fafafa", border: "1px solid #e4e4e7", marginBottom: "16px",
                    }}>
                        <code style={{ fontSize: "13px", color: "#52525b", fontFamily: "monospace" }}>
                            strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
                        </code>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {[
                            { word: "eat", key: "aet", map: '{"aet":["eat"]}', note: "New key. Store eat." },
                            { word: "tea", key: "aet", map: '{"aet":["eat","tea"]}', note: "Key exists. Append tea." },
                            { word: "tan", key: "ant", map: '{"aet":[…],"ant":["tan"]}', note: "New key. Store tan." },
                            { word: "ate", key: "aet", map: '{"aet":["eat","tea","ate"]}', note: "Key exists. Append ate." },
                            { word: "nat", key: "ant", map: '{"ant":["tan","nat"]}', note: "Key exists. Append nat." },
                            { word: "bat", key: "abt", map: '{"abt":["bat"]}', note: "New key. Store bat." },
                        ].map((step, idx) => (
                            <div key={idx} style={{
                                display: "grid",
                                gridTemplateColumns: "50px 50px 1fr",
                                gap: "10px", alignItems: "center",
                                padding: "10px 14px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontSize: "13px",
                            }}>
                                <span style={{ fontFamily: "monospace", color: "#2563eb", fontWeight: 600 }}>{step.word}</span>
                                <span style={{ fontFamily: "monospace", color: "#4ade80", background: "#09090b", padding: "2px 6px", borderRadius: "4px", fontSize: "11px" }}>{step.key}</span>
                                <span style={{ color: "#52525b", fontFamily: font, fontSize: "12px" }}>{step.note}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: "12px", padding: "12px 16px", borderRadius: "8px",
                        background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)",
                        fontSize: "13px", fontFamily: "monospace", color: "#16a34a", fontWeight: 600,
                    }}>
                        → [["eat","tea","ate"], ["tan","nat"], ["bat"]]
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 7 — Solution */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Solution
                    </h2>
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
                                    group-anagrams.ts
                                </span>
                            </div>
                            <button onClick={copyCode} style={{
                                padding: "5px 12px", borderRadius: "6px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.05)",
                                color: "rgba(255,255,255,0.6)", fontSize: "12px",
                                fontWeight: 500, cursor: "pointer", fontFamily: font,
                            }}>
                                {copied ? "✓ Copied" : "Copy"}
                            </button>
                        </div>
                        <pre style={{
                            margin: 0, padding: "24px",
                            background: "#09090b", color: "#d4d4d8",
                            fontSize: "13px", lineHeight: 1.8,
                            fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
                            overflowX: "auto", whiteSpace: "pre",
                        }}>
                            {code}
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
                        Many candidates immediately think about comparing every word with every other word. This quickly becomes inefficient. Strong candidates instead look for a <strong style={{ color: "#09090b" }}>property that uniquely identifies an entire group</strong>.
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        The interview is often less about coding and more about discovering the identifier. Once a reliable signature is found, grouping becomes straightforward.
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
                            { title: "Comparing every pair", desc: "A brute-force approach compares each string against every other string — O(n²·k). Scales poorly." },
                            { title: "Missing the signature", desc: "The biggest challenge is finding a representation that uniquely identifies an anagram group. Without a signature, grouping becomes difficult." },
                            { title: "Focusing on individual strings", desc: "The problem is not about processing one word. It's about recognizing relationships between many words." },
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

                {/* Section 10 — Key Takeaways */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Key Takeaways
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "HashMaps are powerful grouping tools — not just lookup tools",
                            "Similar items often share a common canonical signature",
                            "Transforming data simplifies comparison and grouping",
                            "Look for canonical representations as HashMap keys",
                            "Group Anagrams teaches the foundation of many classification problems",
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
                        Once you understand Group Anagrams, you're prepared for a wide range of HashMap-based grouping and categorization questions. The pattern is always the same — Transform → Identify → Group.
                    </p>
                </div>

            </div>
        </main>
    );
}