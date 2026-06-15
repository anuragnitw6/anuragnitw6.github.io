"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const sections = [
    {
        title: "Why This Problem Matters",
        content: "Two Sum is one of the most important coding interview questions because it teaches the concept of fast lookups using a HashMap. It appears in virtually every tech interview and is the foundation for dozens of harder problems.",
    },
    {
        title: "Pattern Recognition",
        bullets: [
            "You need to find a pair of numbers",
            "There's a target sum involved",
            "You need fast lookup — O(1) — not linear scan",
            "You're asked to optimize a brute force O(n²) solution",
        ],
    },
    {
        title: "Core Insight",
        content: "Instead of searching for every possible pair, calculate the complement for each number as you iterate:",
        code: "complement = target - currentNumber",
        after: "Then check whether the complement already exists in a HashMap. If it does — you found your pair. If not — store the current number and move on.",
    },
    {
        title: "Step-by-Step Walkthrough",
        walkthrough: {
            input: "nums = [2, 7, 11, 15], target = 9",
            steps: [
                { i: 0, num: 2, complement: 7, map: "{}", found: false, action: "Store 2 → index 0" },
                { i: 1, num: 7, complement: 2, map: "{2: 0}", found: true, action: "✓ Found! 2 is in map at index 0" },
            ],
            output: "Return [0, 1]",
        },
    },
    {
        title: "Interview Insight",
        content: "Two Sum is not really about addition. It's about recognizing a lookup pattern that appears in many interview problems — anagrams, frequency counting, pair finding. Once you internalize this, you'll spot it everywhere.",
    },
    {
        title: "Key Takeaways",
        takeaways: [
            { icon: "✓", text: "Think in complements, not pairs" },
            { icon: "✓", text: "Use HashMap for O(1) lookups" },
            { icon: "✓", text: "Avoid nested loops — trade space for time" },
            { icon: "✓", text: "Learn the pattern, not just this solution" },
        ],
    },
];

const code = `function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  // map stores: value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If complement exists, we found the pair
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    // Otherwise, store current number and its index
    map.set(nums[i], i);
  }

  return []; // No solution found
}`;

export default function TwoSumPage() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 24px 96px" }}>

                {/* Back */}
                <button
                    // onClick={() => router.back()}
                    onClick={() => router.push("/patterns/hashmap")}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "7px 14px", borderRadius: "8px",
                        border: "1px solid #e4e4e7", background: "#fff",
                        color: "#71717a", fontSize: "13px", fontWeight: 500,
                        cursor: "pointer", marginBottom: "32px", fontFamily: font,
                    }}
                >
                    ← Back to HashMap
                </button>

                {/* Header */}
                <div style={{ marginBottom: "36px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(37,99,235,0.08)",
                            border: "1px solid rgba(37,99,235,0.2)", color: "#2563eb",
                            fontFamily: font,
                        }}>HashMap Pattern</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(22,163,74,0.08)",
                            border: "1px solid rgba(22,163,74,0.2)", color: "#16a34a",
                            fontFamily: font,
                        }}>Easy</span>
                        <a
                            href="https://leetcode.com/problems/two-sum"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                                borderRadius: "99px", background: "#f4f4f5",
                                border: "1px solid #e4e4e7", color: "#52525b",
                                textDecoration: "none", fontFamily: font,
                            }}
                        >
                            LeetCode #1 ↗
                        </a>
                    </div>

                    <h1 style={{
                        fontSize: "32px", fontWeight: 700, letterSpacing: "-0.5px",
                        color: "#09090b", margin: "0 0 12px", fontFamily: font,
                    }}>
                        Two Sum
                    </h1>
                    <p style={{
                        fontSize: "15px", color: "#71717a", margin: 0, lineHeight: 1.65,
                        fontFamily: font,
                    }}>
                        Learn how HashMaps transform an O(n²) search problem into an O(n) lookup problem — the most important insight in interview prep.
                    </p>
                </div>

                {/* Complexity row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
                    {[
                        { label: "Time", value: "O(n)" },
                        { label: "Space", value: "O(n)" },
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
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Two Sum is one of the most important coding interview questions because it teaches the concept of fast lookups using a HashMap. It appears in virtually every tech interview and is the foundation for dozens of harder problems — Group Anagrams, Longest Consecutive Sequence, 3Sum, and more.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 2 — Pattern Recognition */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Pattern Recognition
                    </h2>
                    <p style={{ fontSize: "14px", color: "#71717a", margin: "0 0 12px", fontFamily: font }}>
                        Reach for a HashMap when you see:
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "You need to find a pair of numbers",
                            "There's a target sum involved",
                            "You need O(1) lookup — not a linear scan",
                            "You're asked to optimize a brute force O(n²) solution",
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

                {/* Section 3 — Core Insight */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Core Insight
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Instead of searching for every possible pair, calculate the <strong style={{ color: "#09090b" }}>complement</strong> for each number as you iterate:
                    </p>
                    <div style={{
                        padding: "14px 18px", borderRadius: "8px",
                        background: "#09090b", marginBottom: "16px",
                    }}>
                        <code style={{ fontSize: "14px", color: "#d4d4d8", fontFamily: "monospace" }}>
                            complement = target − currentNumber
                        </code>
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Then check whether the complement already exists in a HashMap. If it does — you found your pair. If not — store the current number and its index, then move on.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 4 — Walkthrough */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Step-by-Step Walkthrough
                    </h2>

                    <div style={{
                        padding: "12px 16px", borderRadius: "8px",
                        background: "#fafafa", border: "1px solid #e4e4e7",
                        marginBottom: "16px",
                    }}>
                        <code style={{ fontSize: "13px", color: "#52525b", fontFamily: "monospace" }}>
                            nums = [2, 7, 11, 15], target = 9
                        </code>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {[
                            { i: 0, num: 2, comp: 7, map: "{}", found: false, note: "Store {2: 0} in map" },
                            { i: 1, num: 7, comp: 2, map: "{2: 0}", found: true, note: "2 is in map at index 0 → return [0, 1]" },
                        ].map((step, idx) => (
                            <div key={idx} style={{
                                display: "grid",
                                gridTemplateColumns: "32px 60px 80px 100px 1fr",
                                gap: "12px", alignItems: "center",
                                padding: "10px 14px", borderRadius: "8px",
                                border: `1px solid ${step.found ? "rgba(22,163,74,0.3)" : "#e4e4e7"}`,
                                background: step.found ? "rgba(22,163,74,0.06)" : "#fafafa",
                                fontSize: "13px", fontFamily: "monospace",
                            }}>
                                <span style={{ color: "#a1a1aa" }}>i={step.i}</span>
                                <span style={{ color: "#09090b" }}>num={step.num}</span>
                                <span style={{ color: "#2563eb" }}>comp={step.comp}</span>
                                <span style={{ color: "#71717a" }}>map={step.map}</span>
                                <span style={{
                                    color: step.found ? "#16a34a" : "#52525b",
                                    fontFamily: font, fontSize: "12px", fontWeight: step.found ? 600 : 400,
                                }}>{step.note}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: "12px", padding: "10px 14px", borderRadius: "8px",
                        background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)",
                        fontSize: "13px", fontFamily: "monospace", color: "#16a34a", fontWeight: 600,
                    }}>
                        → Return [0, 1]
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 5 — Code */}
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
                                    two-sum.ts
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

                {/* Section 6 — Interview Insight */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Interview Insight
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Two Sum is not really about addition. It's about recognizing a <strong style={{ color: "#09090b" }}>lookup pattern</strong> that appears in many interview problems. Once you internalize the complement trick, you'll spot it in anagram problems, pair problems, and subsequence questions without even thinking.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 7 — Key Takeaways */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Key Takeaways
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Think in complements, not pairs",
                            "Use HashMap for O(1) lookups instead of nested loops",
                            "Trade O(n) space to gain O(n) time",
                            "Learn this pattern — it unlocks dozens of harder problems",
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: "flex", alignItems: "center", gap: "12px",
                                padding: "12px 16px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                                fontSize: "14px", color: "#3f3f46", fontFamily: font,
                            }}>
                                <span style={{
                                    width: "20px", height: "20px", borderRadius: "50%",
                                    background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "11px", color: "#16a34a", fontWeight: 700, flexShrink: 0,
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
                        Whenever you see "find two elements that sum to X", think HashMap. Store what you've seen so far, look up the complement.
                    </p>
                </div>

            </div>
        </main>
    );
}