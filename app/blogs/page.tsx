"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const sections = [
    {
        title: "What Is a Parity Permutation",
        content: "A parity permutation is just a rearrangement of an array so that elements alternate by parity — even, odd, even, odd — or so all evens land at even indices and all odds land at odd indices. It shows up under different names (\"Sort Array By Parity II\", \"wiggle by parity\", \"segregate evens and odds\") but it's always the same idea: partition or interleave a sequence based on a two-way split condition.",
    },
    {
        title: "Pattern Recognition",
        bullets: [
            "You need to reorder elements based on a binary condition (even/odd, positive/negative, 0s/1s)",
            "The output only cares about relative grouping or alternation — not sorted order",
            "You're asked to do it in-place with O(1) extra space",
            "A brute-force split-then-merge solution feels wasteful (extra arrays, extra passes)",
        ],
    },
    {
        title: "Core Insight",
        content: "Instead of building two new arrays (one for evens, one for odds) and merging them, walk the array with two pointers that each hunt for a value in the \"wrong\" slot, then swap:",
        code: "if (nums[i] is even but sits in an odd slot) swap it with nums[j], an odd value sitting in an even slot",
        after: "Every swap fixes two elements at once, so the whole array is corrected in a single pass with no extra memory.",
    },
    {
        title: "Step-by-Step Walkthrough",
        walkthrough: {
            input: "nums = [4, 2, 5, 7], goal: even values at even indices, odd values at odd indices",
            steps: [
                { i: 0, num: 4, complement: "index 0 (even) — already even ✓", map: "evenPtr=2, oddPtr=1", found: true, action: "nums[0]=4 is even and sits at even index 0 — leave it" },
                { i: 1, num: 2, complement: "index 1 (odd) — currently even ✗", map: "evenPtr=2, oddPtr=1", found: false, action: "nums[1]=2 is even but sits at odd index 1 — needs a fix" },
                { i: 2, num: 5, complement: "advance evenPtr to find a slot", map: "evenPtr=2→? scanning", found: false, action: "Scan forward from evenPtr for the next even-indexed slot holding an odd value" },
                { i: 3, num: 7, complement: "swap nums[1] and nums[3]", map: "after swap: [4,7,5,2]", found: true, action: "Swap the misplaced even (2) with the odd (7) — both land correctly" },
            ],
            output: "Return [4, 7, 5, 2] — evens at even indices, odds at odd indices",
        },
    },
    {
        title: "Interview Insight",
        content: "Parity permutation is really a two-pointer partitioning problem wearing a costume. The same \"advance a pointer only through the slots you care about, swap on mismatch\" idea powers Dutch National Flag (sort 0s/1s/2s), moving zeroes to the end, and even quicksort's partition step. Once you see it as \"two independent pointers walking their own lane,\" you stop needing to memorize each variant separately.",
    },
    {
        title: "Key Takeaways",
        takeaways: [
            { icon: "✓", text: "Two pointers can walk independent strides (i += 2), not just i and i+1" },
            { icon: "✓", text: "Swap-on-mismatch avoids allocating a second array" },
            { icon: "✓", text: "One pass, O(n) time, O(1) space" },
            { icon: "✓", text: "The same shape solves any binary-partition rearrangement problem" },
        ],
    },
];

const code = `function sortArrayByParity(nums: number[]): number[] {
  // evenPtr walks even indices, oddPtr walks odd indices
  let evenPtr = 0;
  let oddPtr = 1;
  const n = nums.length;

  while (evenPtr < n && oddPtr < n) {
    // Advance evenPtr until it finds an odd value sitting in an even slot
    if (nums[evenPtr] % 2 === 0) {
      evenPtr += 2;
      continue;
    }

    // Advance oddPtr until it finds an even value sitting in an odd slot
    if (nums[oddPtr] % 2 === 1) {
      oddPtr += 2;
      continue;
    }

    // Both pointers found a misplaced value — swap them
    [nums[evenPtr], nums[oddPtr]] = [nums[oddPtr], nums[evenPtr]];
    evenPtr += 2;
    oddPtr += 2;
  }

  return nums;
}`;

export default function ParityPermutationBlog() {
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
                <button
                    onClick={() => router.push("/blogs")}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "7px 14px", borderRadius: "8px",
                        border: "1px solid #e4e4e7", background: "#fff",
                        color: "#71717a", fontSize: "13px", fontWeight: 500,
                        cursor: "pointer", marginBottom: "32px", fontFamily: font,
                    }}
                >
                    ← Back to Blogs
                </button>

                {/* Header */}
                <div style={{ marginBottom: "36px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "rgba(37,99,235,0.08)",
                            border: "1px solid rgba(37,99,235,0.2)", color: "#2563eb",
                            fontFamily: font,
                        }}>Two Pointers</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "#f4f4f5",
                            border: "1px solid #e4e4e7", color: "#52525b",
                            fontFamily: font,
                        }}>Jul 2026</span>
                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: "#f4f4f5",
                            border: "1px solid #e4e4e7", color: "#52525b",
                            fontFamily: font,
                        }}>6 min read</span>
                    </div>

                    <h1 style={{
                        fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700,
                        letterSpacing: "-0.6px", color: "#09090b",
                        margin: "0 0 14px", lineHeight: 1.2, fontFamily: font,
                    }}>
                        Parity Permutation
                    </h1>
                    <p style={{ fontSize: "16px", color: "#71717a", margin: 0, lineHeight: 1.7, fontFamily: font }}>
                        Rearranging an array so even and odd values fall into place — a two-pointer
                        pattern that quietly powers several classic interview problems.
                    </p>
                </div>

                {/* Sections */}
                {sections.map((s) => (
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
                                            borderBottom: idx < s.walkthrough.steps.length - 1 ? "1px solid #f4f4f5" : "none",
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
                        {code}
                    </pre>
                </section>
            </div>
        </main>
    );
}