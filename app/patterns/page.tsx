// "use client";
// import { useRouter } from "next/navigation";

// const patterns = [
//     {
//         slug: "hashmap",
//         name: "HashMap",
//         tag: "Array",
//         difficulty: "Easy",
//         problems: 12,
//         desc: "Fast O(1) lookups using key-value pairs to avoid nested loops.",
//         color: "#2563eb",
//         bg: "rgba(37,99,235,0.08)",
//         border: "rgba(37,99,235,0.2)",
//     },
//     {
//         slug: "sliding-window",
//         name: "Sliding Window",
//         tag: "Array",
//         difficulty: "Medium",
//         problems: 18,
//         desc: "Maintain a window over a sequence to find subarrays efficiently.",
//         color: "#7c3aed",
//         bg: "rgba(124,58,237,0.08)",
//         border: "rgba(124,58,237,0.2)",
//     },
//     {
//         slug: "two-pointers",
//         name: "Two Pointers",
//         tag: "Array",
//         difficulty: "Easy",
//         problems: 15,
//         desc: "Use two indices moving toward each other to solve array problems.",
//         color: "#0891b2",
//         bg: "rgba(8,145,178,0.08)",
//         border: "rgba(8,145,178,0.2)",
//     },
//     {
//         slug: "binary-search",
//         name: "Binary Search",
//         tag: "Search",
//         difficulty: "Medium",
//         problems: 20,
//         desc: "Halve the search space each step for O(log n) time complexity.",
//         color: "#059669",
//         bg: "rgba(5,150,105,0.08)",
//         border: "rgba(5,150,105,0.2)",
//     },
//     {
//         slug: "linked-list",
//         name: "Linked List",
//         tag: "List",
//         difficulty: "Medium",
//         problems: 14,
//         desc: "Node-based pointer manipulation — reversal, cycle detection, merging.",
//         color: "#d97706",
//         bg: "rgba(217,119,6,0.08)",
//         border: "rgba(217,119,6,0.2)",
//     },
//     {
//         slug: "dynamic-programming",
//         name: "Dynamic Programming",
//         tag: "DP",
//         difficulty: "Hard",
//         problems: 30,
//         desc: "Break problems into overlapping subproblems and cache results.",
//         color: "#dc2626",
//         bg: "rgba(220,38,38,0.08)",
//         border: "rgba(220,38,38,0.2)",
//     },
// ];

// const difficultyColor: Record<string, string> = {
//     Easy: "#16a34a",
//     Medium: "#d97706",
//     Hard: "#dc2626",
// };

// export default function PatternsPage() {
//     const router = useRouter();

//     return (
//         <main style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "inherit" }}>

//             {/* Ambient glow */}
//             <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
//                 <div style={{
//                     position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
//                     width: "500px", height: "500px", borderRadius: "50%",
//                     background: "rgba(37,99,235,0.05)", filter: "blur(100px)",
//                 }} />
//             </div>

//             <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 96px" }}>

//                 {/* Header */}
//                 <div style={{ marginBottom: "48px" }}>
//                     <span style={{
//                         display: "inline-flex", alignItems: "center", gap: "6px",
//                         padding: "3px 12px", borderRadius: "99px", marginBottom: "16px",
//                         border: "1px solid rgba(37,99,235,0.2)", background: "rgba(37,99,235,0.06)",
//                         fontSize: "12px", fontWeight: 500, color: "#2563eb", letterSpacing: "0.04em",
//                     }}>
//                         ✦ Pattern Library
//                     </span>
//                     <h1 style={{
//                         fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800,
//                         letterSpacing: "-1.5px", color: "#0f172a", margin: "0 0 12px",
//                     }}>
//                         Core Patterns
//                     </h1>
//                     <p style={{ fontSize: "16px", color: "#64748b", margin: 0 }}>
//                         {patterns.length} patterns · Click any card to explore theory, code, and problems
//                     </p>
//                 </div>

//                 {/* Grid */}
//                 <div style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
//                     gap: "20px",
//                 }}>
//                     {patterns.map((p) => (
//                         <div
//                             key={p.slug}
//                             onClick={() => router.push(`/patterns/${p.slug}`)}
//                             style={{
//                                 padding: "28px", borderRadius: "18px",
//                                 border: "1px solid #e2e8f0", background: "#fff",
//                                 cursor: "pointer", transition: "all 0.2s",
//                                 boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//                                 position: "relative", overflow: "hidden",
//                             }}
//                             onMouseEnter={e => {
//                                 const el = e.currentTarget as HTMLDivElement;
//                                 el.style.borderColor = p.border;
//                                 el.style.transform = "translateY(-3px)";
//                                 el.style.boxShadow = `0 12px 32px ${p.bg}`;
//                             }}
//                             onMouseLeave={e => {
//                                 const el = e.currentTarget as HTMLDivElement;
//                                 el.style.borderColor = "#e2e8f0";
//                                 el.style.transform = "translateY(0)";
//                                 el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
//                             }}
//                         >
//                             {/* Top row */}
//                             <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
//                                 <div style={{
//                                     width: "42px", height: "42px", borderRadius: "12px",
//                                     border: `1px solid ${p.border}`, background: p.bg,
//                                     display: "flex", alignItems: "center", justifyContent: "center",
//                                     fontSize: "15px", color: p.color, fontWeight: 700, fontFamily: "monospace",
//                                 }}>{"()"}</div>
//                                 <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
//                                     <span style={{
//                                         fontSize: "11px", fontWeight: 500, padding: "3px 8px", borderRadius: "99px",
//                                         background: p.bg, border: `1px solid ${p.border}`, color: p.color,
//                                     }}>{p.tag}</span>
//                                     <span style={{
//                                         fontSize: "11px", fontWeight: 600, padding: "3px 8px", borderRadius: "99px",
//                                         background: `${difficultyColor[p.difficulty]}12`,
//                                         border: `1px solid ${difficultyColor[p.difficulty]}30`,
//                                         color: difficultyColor[p.difficulty],
//                                     }}>{p.difficulty}</span>
//                                 </div>
//                             </div>

//                             {/* Title + desc */}
//                             <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a", margin: "0 0 8px", letterSpacing: "-0.3px" }}>
//                                 {p.name}
//                             </h3>
//                             <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 24px", lineHeight: 1.6 }}>
//                                 {p.desc}
//                             </p>

//                             {/* Footer */}
//                             <div style={{
//                                 display: "flex", alignItems: "center", justifyContent: "space-between",
//                                 paddingTop: "16px", borderTop: "1px solid #f1f5f9",
//                             }}>
//                                 <span style={{ fontSize: "13px", color: "#94a3b8" }}>
//                                     {p.problems} problems
//                                 </span>
//                                 <span style={{
//                                     fontSize: "13px", fontWeight: 600, color: p.color,
//                                     display: "flex", alignItems: "center", gap: "4px",
//                                 }}>
//                                     Explore →
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </main>
//     );
// }
"use client";
import { useRouter } from "next/navigation";

const patterns = [
    {
        slug: "hashmap",
        name: "HashMap",
        tag: "Array",
        difficulty: "Easy",
        problems: 12,
        desc: "Fast O(1) lookups using key-value pairs to avoid nested loops.",
    },
    {
        slug: "sliding-window",
        name: "Sliding Window",
        tag: "Array",
        difficulty: "Medium",
        problems: 18,
        desc: "Maintain a window over a sequence to find subarrays efficiently.",
    },
    {
        slug: "two-pointers",
        name: "Two Pointers",
        tag: "Array",
        difficulty: "Easy",
        problems: 15,
        desc: "Use two indices moving toward each other to solve array problems.",
    },
    {
        slug: "binary-search",
        name: "Binary Search",
        tag: "Search",
        difficulty: "Medium",
        problems: 20,
        desc: "Halve the search space each step for O(log n) time complexity.",
    },
    // {
    //     slug: "linked-list",
    //     name: "Linked List",
    //     tag: "List",
    //     difficulty: "Medium",
    //     problems: 14,
    //     desc: "Node-based pointer manipulation — reversal, cycle detection, merging.",
    // },
    // {
    //     slug: "dynamic-programming",
    //     name: "Dynamic Programming",
    //     tag: "DP",
    //     difficulty: "Hard",
    //     problems: 30,
    //     desc: "Break problems into overlapping subproblems and cache results.",
    // },
];

const difficultyStyle: Record<string, { color: string; bg: string; border: string }> = {
    Easy: { color: "#16a34a", bg: "rgba(22,163,74,0.08)", border: "rgba(22,163,74,0.2)" },
    Medium: { color: "#d97706", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)" },
    Hard: { color: "#dc2626", bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.2)" },
};

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

export default function PatternsPage() {
    const router = useRouter();

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 96px" }}>

                {/* Header */}
                <div style={{ marginBottom: "40px" }}>
                    <p style={{
                        fontSize: "13px", fontWeight: 500, color: "#6366f1",
                        textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px",
                        fontFamily: font,
                    }}>
                        Pattern Library
                    </p>
                    <h1 style={{
                        fontSize: "32px", fontWeight: 600,
                        color: "#09090b", margin: "0 0 8px",
                        letterSpacing: "-0.3px", fontFamily: font,
                    }}>
                        Core Patterns
                    </h1>
                    <p style={{ fontSize: "15px", color: "#71717a", margin: 0, fontFamily: font }}>
                        {patterns.length} patterns · Click any card to explore theory, code, and problems
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "16px",
                }}>
                    {patterns.map((p) => {
                        const d = difficultyStyle[p.difficulty];
                        return (
                            <div
                                key={p.slug}
                                onClick={() => router.push(`/patterns/${p.slug}`)}
                                style={{
                                    padding: "24px",
                                    borderRadius: "12px",
                                    border: "1px solid #e4e4e7",
                                    background: "#fff",
                                    cursor: "pointer",
                                    transition: "all 0.15s ease",
                                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                                    fontFamily: font,
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLDivElement;
                                    el.style.borderColor = "#a1a1aa";
                                    el.style.transform = "translateY(-2px)";
                                    el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLDivElement;
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
                                    }}>{"()"}</div>

                                    <div style={{ display: "flex", gap: "6px" }}>
                                        <span style={{
                                            fontSize: "12px", fontWeight: 400,
                                            padding: "2px 9px", borderRadius: "99px",
                                            background: "#f4f4f5", border: "1px solid #e4e4e7",
                                            color: "#52525b", fontFamily: font,
                                        }}>
                                            {p.tag}
                                        </span>
                                        <span style={{
                                            fontSize: "12px", fontWeight: 500,
                                            padding: "2px 9px", borderRadius: "99px",
                                            background: d.bg, border: `1px solid ${d.border}`,
                                            color: d.color, fontFamily: font,
                                        }}>
                                            {p.difficulty}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: "17px", fontWeight: 600,
                                    color: "#09090b", margin: "0 0 8px",
                                    letterSpacing: "-0.1px", fontFamily: font,
                                }}>
                                    {p.name}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: "14px", color: "#71717a",
                                    margin: "0 0 20px", lineHeight: 1.65,
                                    fontFamily: font, fontWeight: 400,
                                }}>
                                    {p.desc}
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
                                        {p.problems} problems
                                    </span>
                                    <span style={{
                                        fontSize: "13px", fontWeight: 500,
                                        color: "#3f3f46", fontFamily: font,
                                    }}>
                                        Explore →
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}