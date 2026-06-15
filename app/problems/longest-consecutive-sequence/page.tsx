"use client";
import { useState } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const code = `function longestConsecutive(nums: number[]): number {
  // Step 1: Store all values in a HashSet for O(1) lookup
  const set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    // Step 2: Only start counting from sequence beginnings
    // A number starts a sequence if num - 1 does NOT exist
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      // Step 3: Expand the sequence as far as it goes
      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}`;

const sortCode = `// Alternative: Sorting approach — O(n log n)
// Simpler to understand, but not optimal
function longestConsecutiveSort(nums: number[]): number {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let longest = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;       // skip duplicates
    if (nums[i] === nums[i - 1] + 1) {
      current++;                                  // extend sequence
    } else {
      longest = Math.max(longest, current);
      current = 1;                                // reset
    }
  }

  return Math.max(longest, current);
}`;

export default function LongestConsecutivePage() {
    const [copied, setCopied] = useState<"main" | "sort" | null>(null);

    const copy = (which: "main" | "sort") => {
        navigator.clipboard.writeText(which === "main" ? code : sortCode);
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
                        }}>HashSet Pattern</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(217,119,6,0.08)",
                            border: "1px solid rgba(217,119,6,0.2)", color: "#d97706", fontFamily: font,
                        }}>Medium</span>
                        <a
                            href="https://leetcode.com/problems/longest-consecutive-sequence"
                            target="_blank" rel="noreferrer"
                            style={{
                                fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                                borderRadius: "99px", background: "#f4f4f5",
                                border: "1px solid #e4e4e7", color: "#52525b",
                                textDecoration: "none", fontFamily: font,
                            }}
                        >
                            LeetCode #128 ↗
                        </a>
                    </div>

                    <h1 style={{
                        fontSize: "32px", fontWeight: 700, letterSpacing: "-0.5px",
                        color: "#09090b", margin: "0 0 12px", fontFamily: font,
                    }}>
                        Longest Consecutive Sequence
                    </h1>
                    <p style={{ fontSize: "15px", color: "#71717a", margin: 0, lineHeight: 1.65, fontFamily: font }}>
                        Learn sequence detection with HashSets — how to find the longest chain of consecutive numbers in O(n) without sorting the array.
                    </p>
                </div>

                {/* Complexity row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
                    {[
                        { label: "Time", value: "O(n)" },
                        { label: "Space", value: "O(n)" },
                        { label: "Pattern", value: "HashSet" },
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
                        Longest Consecutive Sequence is one of the most important HashSet problems in coding interviews because it teaches a powerful lesson:
                    </p>
                    <div style={{
                        padding: "14px 18px", borderRadius: "8px",
                        background: "#09090b", marginBottom: "16px",
                    }}>
                        <code style={{ fontSize: "14px", color: "#d4d4d8", fontFamily: "monospace" }}>
                            "Sometimes the fastest solution comes from changing how you search, not from sorting."
                        </code>
                    </div>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font }}>
                        Many candidates immediately think about sorting the array to find consecutive numbers. While sorting works, interviewers often expect a more efficient O(n) approach. This problem introduces using a HashSet for constant-time lookups to discover sequences without rearranging data at all.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 2 — Understanding the Goal */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Understanding the Goal
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Given an unsorted array of numbers, some values may form consecutive chains. The goal is to find the longest such chain — without sorting.
                    </p>

                    {/* Input visual */}
                    <div style={{
                        padding: "12px 16px", borderRadius: "8px",
                        background: "#fafafa", border: "1px solid #e4e4e7", marginBottom: "16px",
                    }}>
                        <p style={{ fontSize: "11px", color: "#a1a1aa", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: font }}>
                            Input (unsorted)
                        </p>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                            {[100, 4, 200, 1, 3, 2].map(n => (
                                <span key={n} style={{
                                    padding: "6px 12px", borderRadius: "6px",
                                    background: [1, 2, 3, 4].includes(n) ? "rgba(37,99,235,0.1)" : "#f4f4f5",
                                    border: `1px solid ${[1, 2, 3, 4].includes(n) ? "rgba(37,99,235,0.3)" : "#e4e4e7"}`,
                                    fontFamily: "monospace", fontSize: "14px", fontWeight: 600,
                                    color: [1, 2, 3, 4].includes(n) ? "#2563eb" : "#71717a",
                                }}>{n}</span>
                            ))}
                        </div>
                        <p style={{ fontSize: "12px", color: "#a1a1aa", margin: "10px 0 0", fontFamily: font }}>
                            Blue numbers form the longest consecutive sequence: 1 → 2 → 3 → 4 (length 4)
                        </p>
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 3 — Core Idea */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Core Idea — Only Start From the Beginning
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        The most important observation is that a sequence should only be counted from its <strong style={{ color: "#09090b" }}>true starting point</strong>. If you start counting from every number, you repeat work:
                    </p>

                    {/* Bad approach */}
                    <div style={{
                        padding: "14px 16px", borderRadius: "8px",
                        border: "1px solid rgba(220,38,38,0.2)", background: "rgba(220,38,38,0.04)",
                        marginBottom: "16px",
                    }}>
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "#dc2626", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: font }}>
                            ✗ Naïve — starts from every number (repeated work)
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontFamily: "monospace", fontSize: "13px" }}>
                            {[
                                { start: "1", seq: "→ 2 → 3 → 4", len: "length 4" },
                                { start: "2", seq: "→ 3 → 4", len: "length 3 (repeated)" },
                                { start: "3", seq: "→ 4", len: "length 2 (repeated)" },
                                { start: "4", seq: "", len: "length 1 (repeated)" },
                            ].map(({ start, seq, len }) => (
                                <div key={start} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                    <span style={{ color: "#dc2626", minWidth: "14px" }}>{start}</span>
                                    <span style={{ color: "#71717a" }}>{seq}</span>
                                    <span style={{ color: "#a1a1aa", fontSize: "11px", fontFamily: font, marginLeft: "auto" }}>{len}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Instead, ask: <strong style={{ color: "#09090b" }}>Is this number the beginning of a sequence?</strong>
                    </p>

                    <div style={{
                        padding: "14px 16px", borderRadius: "8px",
                        border: "1px solid rgba(22,163,74,0.2)", background: "rgba(22,163,74,0.04)",
                        marginBottom: "16px",
                    }}>
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "#16a34a", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: font }}>
                            ✓ A number starts a sequence if num − 1 does NOT exist
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {[
                                { num: 1, prev: 0, exists: false, start: true },
                                { num: 2, prev: 1, exists: true, start: false },
                                { num: 100, prev: 99, exists: false, start: true },
                                { num: 200, prev: 199, exists: false, start: true },
                            ].map(({ num, prev, exists, start }) => (
                                <div key={num} style={{
                                    display: "grid", gridTemplateColumns: "50px 100px 1fr",
                                    gap: "10px", alignItems: "center",
                                    fontSize: "13px", fontFamily: "monospace",
                                }}>
                                    <span style={{ color: "#09090b", fontWeight: 600 }}>{num}</span>
                                    <span style={{ color: exists ? "#dc2626" : "#16a34a", fontSize: "12px" }}>
                                        {prev} {exists ? "exists ✗" : "absent ✓"}
                                    </span>
                                    <span style={{
                                        fontFamily: font, fontSize: "12px",
                                        color: start ? "#16a34a" : "#a1a1aa",
                                        fontWeight: start ? 600 : 400,
                                    }}>
                                        {start ? "→ start counting here" : "→ skip"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 4 — Hidden Pattern */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        The Hidden Pattern
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 20px", fontFamily: font }}>
                        The algorithm decomposes into three clean steps:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        {[
                            { step: "1", label: "Store", color: "#2563eb", desc: "Put all values into a HashSet for O(1) existence checks" },
                            { step: "2", label: "Detect Start", color: "#7c3aed", desc: "A number is a sequence start only if num − 1 is NOT in the set" },
                            { step: "3", label: "Expand", color: "#059669", desc: "Count upward (num+1, num+2…) until the chain breaks" },
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
                        This approach avoids revisiting the same sequence repeatedly — each number is processed at most twice.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 5 — Pattern Recognition */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Pattern Recognition
                    </h2>
                    <p style={{ fontSize: "14px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Reach for a HashSet solution whenever you see phrases like:
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            "Consecutive numbers or sequence detection",
                            "Fast existence checks — does X exist?",
                            "Longest chain or run",
                            "Presence or absence of values",
                            "Avoid sorting for O(n) lookup",
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

                {/* Section 6 — Why HashSets */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 12px", fontFamily: font }}>
                        Why HashSets Work So Well
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 14px", fontFamily: font }}>
                        The core challenge is repeatedly asking "does this number exist?" Without a HashSet, each check requires scanning the array — O(n) per lookup. With a HashSet, every check is O(1).
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <div style={{
                            padding: "14px 16px", borderRadius: "8px",
                            border: "1px solid rgba(220,38,38,0.2)", background: "rgba(220,38,38,0.04)",
                        }}>
                            <p style={{ fontSize: "12px", fontWeight: 600, color: "#dc2626", margin: "0 0 8px", fontFamily: font }}>
                                ✗ Without HashSet
                            </p>
                            <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#71717a", lineHeight: 1.7 }}>
                                <div>Does 5 exist? → scan…</div>
                                <div>Does 6 exist? → scan…</div>
                                <div>Does 7 exist? → scan…</div>
                            </div>
                            <p style={{ fontSize: "11px", color: "#dc2626", margin: "8px 0 0", fontFamily: font }}>
                                O(n) per check → O(n²) total
                            </p>
                        </div>
                        <div style={{
                            padding: "14px 16px", borderRadius: "8px",
                            border: "1px solid rgba(22,163,74,0.2)", background: "rgba(22,163,74,0.04)",
                        }}>
                            <p style={{ fontSize: "12px", fontWeight: 600, color: "#16a34a", margin: "0 0 8px", fontFamily: font }}>
                                ✓ With HashSet
                            </p>
                            <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#71717a", lineHeight: 1.7 }}>
                                <div>set.has(5) → O(1) ✓</div>
                                <div>set.has(6) → O(1) ✓</div>
                                <div>set.has(7) → O(1) ✓</div>
                            </div>
                            <p style={{ fontSize: "11px", color: "#16a34a", margin: "8px 0 0", fontFamily: font }}>
                                O(1) per check → O(n) total
                            </p>
                        </div>
                    </div>
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
                            nums = [100, 4, 200, 1, 3, 2]
                        </code>
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontFamily: font }}>
                        Step 1 — Build HashSet
                    </p>
                    <div style={{
                        padding: "12px 16px", borderRadius: "8px", border: "1px solid #e4e4e7",
                        background: "#09090b", marginBottom: "20px", fontFamily: "monospace",
                        fontSize: "13px", color: "#4ade80",
                    }}>
                        set = {"{1, 2, 3, 4, 100, 200}"}
                    </div>

                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", fontFamily: font }}>
                        Step 2 — Check each number for sequence start
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                        {[
                            { num: 1, prev: 0, prevIn: false, start: true, seq: "1→2→3→4", len: 4 },
                            { num: 2, prev: 1, prevIn: true, start: false, seq: "—", len: 0 },
                            { num: 3, prev: 2, prevIn: true, start: false, seq: "—", len: 0 },
                            { num: 4, prev: 3, prevIn: true, start: false, seq: "—", len: 0 },
                            { num: 100, prev: 99, prevIn: false, start: true, seq: "100", len: 1 },
                            { num: 200, prev: 199, prevIn: false, start: true, seq: "200", len: 1 },
                        ].map((row, i) => (
                            <div key={i} style={{
                                display: "grid", gridTemplateColumns: "40px 90px 1fr 60px",
                                gap: "8px", alignItems: "center",
                                padding: "8px 12px", borderRadius: "8px",
                                border: `1px solid ${row.start ? "rgba(22,163,74,0.2)" : "#e4e4e7"}`,
                                background: row.start ? "rgba(22,163,74,0.04)" : "#fafafa",
                                fontSize: "12px",
                            }}>
                                <span style={{ fontFamily: "monospace", color: "#09090b", fontWeight: 700 }}>{row.num}</span>
                                <span style={{ fontFamily: "monospace", color: row.prevIn ? "#dc2626" : "#16a34a", fontSize: "11px" }}>
                                    {row.prev} {row.prevIn ? "in set" : "not in set"}
                                </span>
                                <span style={{ color: "#52525b", fontFamily: "monospace", fontSize: "11px" }}>
                                    {row.start ? `→ ${row.seq}` : "→ skip"}
                                </span>
                                {row.start && (
                                    <span style={{
                                        fontFamily: font, fontSize: "11px", fontWeight: 600,
                                        color: row.len === 4 ? "#2563eb" : "#71717a",
                                        textAlign: "right",
                                    }}>
                                        len={row.len}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{
                        padding: "10px 14px", borderRadius: "8px",
                        background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)",
                        fontSize: "13px", fontFamily: "monospace", color: "#16a34a", fontWeight: 600,
                    }}>
                        → Longest sequence: [1, 2, 3, 4] → return 4
                    </div>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 8 — Solution */}
                <section style={{ marginBottom: "24px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 8px", fontFamily: font }}>
                        Solution — HashSet O(n)
                    </h2>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        Optimal — no sorting required
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
                                    longest-consecutive.ts
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
                        Alternative — Sorting
                    </h2>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: "0 0 14px", fontFamily: font }}>
                        O(n log n) — easier to understand but suboptimal. Interviewers expect the O(n) solution.
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
                                    longest-consecutive-sort.ts
                                </span>
                            </div>
                            <button onClick={() => copy("sort")} style={{
                                padding: "5px 12px", borderRadius: "6px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.05)",
                                color: "rgba(255,255,255,0.6)", fontSize: "12px",
                                fontWeight: 500, cursor: "pointer", fontFamily: font,
                            }}>
                                {copied === "sort" ? "✓ Copied" : "Copy"}
                            </button>
                        </div>
                        <pre style={{
                            margin: 0, padding: "24px", background: "#09090b", color: "#d4d4d8",
                            fontSize: "13px", lineHeight: 1.8,
                            fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
                            overflowX: "auto", whiteSpace: "pre",
                        }}>
                            {sortCode}
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
                        Many candidates solve this problem using sorting. While sorting is acceptable, interviewers use this question specifically to evaluate whether candidates can move beyond sorting-based thinking.
                    </p>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: "0 0 16px", fontFamily: font }}>
                        Strong candidates ask themselves:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {[
                            "Do I really need ordering here?",
                            "Can I use fast lookups instead of scanning?",
                            "Can I avoid repeated work by finding true start points?",
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
                        These questions lead directly to the HashSet solution.
                    </p>
                </section>

                <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 40px" }} />

                {/* Section 10 — Common Mistakes */}
                <section style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#09090b", margin: "0 0 16px", fontFamily: font }}>
                        Common Mistakes
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            { title: "Sorting too early", desc: "Sorting feels natural because consecutive numbers become easy to see. But it adds O(n log n) overhead that is entirely avoidable." },
                            { title: "Starting every sequence", desc: "Counting from every number causes repeated work. Only start from numbers where num − 1 does not exist in the set." },
                            { title: "Missing the starting point rule", desc: "The most important optimization. Without checking 'is num − 1 absent?', every number triggers a scan and efficiency drops to O(n²)." },
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
                        After mastering this problem, you may encounter:
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {[
                            "Longest Increasing Subsequence",
                            "Missing Number",
                            "Contains Duplicate",
                            "Sequence Validation",
                            "Consecutive Number Detection",
                            "Find All Missing Numbers",
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
                            "HashSets provide O(1) existence checks — far faster than scanning",
                            "Not every sequence problem requires sorting the input",
                            "Always identify the true starting point before expanding a sequence",
                            "Avoid repeated work by processing each sequence only once",
                            "This is one of the most important HashSet interview patterns",
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
                        Once you understand this problem, you gain a deeper understanding of lookup-based optimization. The pattern is always: <strong style={{ color: "#09090b" }}>Store → Detect Start → Expand</strong>. Only start counting from true sequence beginnings.
                    </p>
                </div>

            </div>
        </main>
    );
}