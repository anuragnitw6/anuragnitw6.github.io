// "use client";
// import { useState } from "react";

// const patterns = [
//   { name: "HashMap", desc: "Fast lookups using key-value pairs.", tag: "Array" },
//   { name: "Linked List", desc: "Node-based sequential data traversal.", tag: "List" },
//   { name: "Sliding Window", desc: "Efficient subarray and substring problems.", tag: "Array" },
//   { name: "Binary Search", desc: "O(log n) search on sorted structures.", tag: "Search" },
//   { name: "Palindrome", desc: "Two-pointer symmetry checking pattern.", tag: "String" },
// ];

// const problems = [
//   { name: "Two Sum", difficulty: "Easy", color: "#16a34a" },
//   { name: "Add Two Numbers", difficulty: "Medium", color: "#d97706" },
//   { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", color: "#d97706" },
//   { name: "Median of Two Sorted Arrays", difficulty: "Hard", color: "#dc2626" },
//   { name: "Longest Palindromic Substring", difficulty: "Medium", color: "#d97706" },
// ];

// const stats = [
//   { label: "Problems Solved", value: "5", color: "#2563eb", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)" },
//   { label: "Patterns Learned", value: "5", color: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
//   { label: "Personal Notes", value: "100%", color: "#059669", bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.2)" },
// ];

// export default function Home() {
//   const [activeTab, setActiveTab] = useState<"patterns" | "problems">("patterns");

//   return (
//     <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a", fontFamily: "inherit" }}>

//       {/* Ambient glows */}
//       <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
//         <div style={{
//           position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
//           width: "600px", height: "600px", borderRadius: "50%",
//           background: "rgba(37,99,235,0.06)", filter: "blur(120px)",
//         }} />
//         <div style={{
//           position: "absolute", top: "40%", right: "-100px",
//           width: "400px", height: "400px", borderRadius: "50%",
//           background: "rgba(124,58,237,0.05)", filter: "blur(100px)",
//         }} />
//       </div>

//       {/* Hero */}
//       <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 24px 80px", textAlign: "center" }}>

//         <span style={{
//           display: "inline-flex", alignItems: "center", gap: "8px",
//           padding: "4px 14px", borderRadius: "99px", marginBottom: "24px",
//           border: "1px solid rgba(37,99,235,0.2)", background: "rgba(37,99,235,0.06)",
//           fontSize: "12px", fontWeight: 500, color: "#2563eb", letterSpacing: "0.04em",
//         }}>
//           DSA Patterns Collection
//         </span>

//         <h1 style={{
//           fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 800,
//           letterSpacing: "-2px", lineHeight: 1.05, margin: "0 0 24px", color: "#0f172a",
//         }}>
//           Learn{" "}
//           <span style={{
//             background: "linear-gradient(135deg, #2563eb, #7c3aed)",
//             WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//           }}>
//             Patterns
//           </span>
//           ,<br />Not Problems
//         </h1>

//         <p style={{
//           fontSize: "18px", color: "#64748b", maxWidth: "480px",
//           margin: "0 auto 40px", lineHeight: 1.7,
//         }}>
//           A growing collection of DSA patterns, solutions, interview notes and cheat sheets.
//         </p>

//         <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
//           <button style={{
//             padding: "12px 24px", borderRadius: "10px", border: "none",
//             background: "#2563eb", color: "#fff", fontSize: "15px", fontWeight: 600,
//             cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
//             boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
//           }}>
//             Explore Patterns →
//           </button>
//           <button style={{
//             padding: "12px 24px", borderRadius: "10px",
//             border: "1px solid #e2e8f0",
//             background: "#fff", color: "#374151",
//             fontSize: "15px", fontWeight: 500, cursor: "pointer",
//             boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
//           }}>
//             View Problems
//           </button>
//         </div>
//       </section>

//       {/* Stats */}
//       <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 64px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
//           {stats.map(({ label, value, color, bg, border }) => (
//             <div key={label} style={{
//               padding: "24px", borderRadius: "16px",
//               border: "1px solid #e2e8f0",
//               background: "#fff",
//               display: "flex", alignItems: "center", gap: "16px",
//               boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//             }}>
//               <div style={{
//                 width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
//                 border: `1px solid ${border}`, background: bg,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: "18px", fontWeight: 700, color,
//               }}>
//                 {value.includes("%") ? "%" : "#"}
//               </div>
//               <div>
//                 <p style={{ fontSize: "24px", fontWeight: 700, color: "#0f172a", margin: 0 }}>{value}</p>
//                 <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>{label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tab switcher + content */}
//       <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 96px" }}>

//         {/* Tabs */}
//         <div style={{
//           display: "inline-flex", gap: "4px", marginBottom: "40px", padding: "4px",
//           borderRadius: "12px", border: "1px solid #e2e8f0",
//           background: "#f1f5f9",
//         }}>
//           {(["patterns", "problems"] as const).map((tab) => (
//             <button key={tab} onClick={() => setActiveTab(tab)} style={{
//               padding: "8px 20px", borderRadius: "8px", border: "none",
//               background: activeTab === tab ? "#fff" : "transparent",
//               color: activeTab === tab ? "#0f172a" : "#64748b",
//               fontSize: "14px", fontWeight: 500, cursor: "pointer",
//               textTransform: "capitalize", transition: "all 0.2s",
//               boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
//             }}>
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Patterns Grid */}
//         {activeTab === "patterns" && (
//           <>
//             <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "24px", color: "#0f172a" }}>
//               Core Patterns
//             </h2>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
//               {patterns.map(({ name, desc, tag }) => (
//                 <div key={name} style={{
//                   padding: "24px", borderRadius: "16px",
//                   border: "1px solid #e2e8f0", background: "#fff",
//                   cursor: "pointer", transition: "all 0.2s",
//                   boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//                 }}
//                   onMouseEnter={e => {
//                     (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(37,99,235,0.35)";
//                     (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
//                     (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(37,99,235,0.1)";
//                   }}
//                   onMouseLeave={e => {
//                     (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
//                     (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
//                     (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
//                   }}
//                 >
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
//                     <div style={{
//                       width: "36px", height: "36px", borderRadius: "10px",
//                       border: "1px solid rgba(37,99,235,0.2)", background: "rgba(37,99,235,0.06)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontSize: "14px", color: "#2563eb", fontWeight: 700, fontFamily: "monospace",
//                     }}>{"()"}</div>
//                     <span style={{
//                       fontSize: "11px", fontWeight: 500, padding: "3px 8px",
//                       borderRadius: "99px", background: "rgba(124,58,237,0.08)",
//                       border: "1px solid rgba(124,58,237,0.18)", color: "#7c3aed",
//                     }}>{tag}</span>
//                   </div>
//                   <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0f172a", margin: "0 0 6px" }}>{name}</h3>
//                   <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0, lineHeight: 1.6 }}>{desc}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Problems List */}
//         {activeTab === "problems" && (
//           <>
//             <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "24px", color: "#0f172a" }}>
//               Recently Solved
//             </h2>
//             <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//               {problems.map(({ name, difficulty, color }, i) => (
//                 <div key={name} style={{
//                   display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "16px 20px", borderRadius: "12px",
//                   border: "1px solid #e2e8f0", background: "#fff",
//                   cursor: "pointer", transition: "all 0.2s",
//                   boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
//                 }}
//                   onMouseEnter={e => {
//                     (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.25)";
//                     (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(124,58,237,0.08)";
//                   }}
//                   onMouseLeave={e => {
//                     (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
//                     (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
//                   }}
//                 >
//                   <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//                     <span style={{ fontSize: "12px", color: "#cbd5e1", fontFamily: "monospace", width: "20px" }}>
//                       {i + 1}.
//                     </span>
//                     <span style={{ fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>{name}</span>
//                   </div>
//                   <span style={{
//                     fontSize: "12px", fontWeight: 600, color,
//                     padding: "3px 10px", borderRadius: "99px",
//                     background: `${color}12`, border: `1px solid ${color}30`,
//                   }}>
//                     {difficulty}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>
//     </main>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const patterns = [
  { slug: "hashmap", name: "HashMap", desc: "Fast O(1) lookups using key-value pairs to avoid nested loops.", tag: "Array", difficulty: "Easy" },
  // { slug: "linked-list", name: "Linked List", desc: "Node-based pointer manipulation — reversal, cycle detection, merging.", tag: "List", difficulty: "Medium" },
  { slug: "sliding-window", name: "Sliding Window", desc: "Maintain a window over a sequence to find subarrays efficiently.", tag: "Array", difficulty: "Medium" },
  { slug: "binary-search", name: "Binary Search", desc: "Halve the search space each step for O(log n) time complexity.", tag: "Search", difficulty: "Medium" },
  // { slug: "palindrome", name: "Palindrome", desc: "Two-pointer symmetry checking pattern for strings.", tag: "String", difficulty: "Easy" },
];

const problems = [
  { name: "Two Sum", difficulty: "Easy", color: "#16a34a" },
  { name: "Add Two Numbers", difficulty: "Medium", color: "#d97706" },
  { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", color: "#d97706" },
  { name: "Median of Two Sorted Arrays", difficulty: "Hard", color: "#dc2626" },
  { name: "Longest Palindromic Substring", difficulty: "Medium", color: "#d97706" },
];

const stats = [
  { label: "Problems Solved", value: "16", icon: "#" },
  { label: "Patterns Learned", value: "4", icon: "#" },
  // { label: "Personal Notes", value: "100%", icon: "%" },
];

const difficultyStyle: Record<string, { color: string; bg: string; border: string }> = {
  Easy: { color: "#16a34a", bg: "rgba(22,163,74,0.08)", border: "rgba(22,163,74,0.2)" },
  Medium: { color: "#d97706", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)" },
  Hard: { color: "#dc2626", bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.2)" },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"patterns" | "problems">("patterns");
  const router = useRouter();

  return (
    <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>

      {/* Hero */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 24px 64px", textAlign: "center" }}>
        <p style={{
          fontSize: "12px", fontWeight: 500, color: "#6366f1",
          textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px",
          fontFamily: font,
        }}>
          DSA Patterns Collection
        </p>

        <h1 style={{
          fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700,
          letterSpacing: "-0.5px", lineHeight: 1.15,
          margin: "0 0 20px", color: "#09090b", fontFamily: font,
        }}>
          Learn{" "}
          <span style={{
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Patterns
          </span>
          , Not Problems
        </h1>

        <p style={{
          fontSize: "16px", color: "#71717a", maxWidth: "440px",
          margin: "0 auto 36px", lineHeight: 1.7, fontFamily: font, fontWeight: 400,
        }}>
          A growing collection of DSA patterns, solutions, interview notes and cheat sheets.
        </p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => router.push("/patterns")}
            style={{
              padding: "10px 22px", borderRadius: "8px", border: "none",
              background: "#18181b", color: "#fff",
              fontSize: "14px", fontWeight: 500, cursor: "pointer",
              fontFamily: font,
            }}>
            Explore Patterns →
          </button>
          <button
            onClick={() => router.push("/problems")}
            style={{
              padding: "10px 22px", borderRadius: "8px",
              border: "1px solid #e4e4e7", background: "#fff", color: "#3f3f46",
              fontSize: "14px", fontWeight: 500, cursor: "pointer",
              fontFamily: font,
            }}>
            View Problems
          </button>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {stats.map(({ label, value, icon }) => (
            <div key={label} style={{
              padding: "20px 24px", borderRadius: "12px",
              border: "1px solid #e4e4e7", background: "#fafafa",
              display: "flex", alignItems: "center", gap: "14px",
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "8px",
                border: "1px solid #e4e4e7", background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px", fontWeight: 600, color: "#71717a",
                fontFamily: "monospace", flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <p style={{ fontSize: "22px", fontWeight: 600, color: "#09090b", margin: 0, fontFamily: font }}>{value}</p>
                <p style={{ fontSize: "13px", color: "#a1a1aa", margin: 0, fontFamily: font, fontWeight: 400 }}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs + content */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 96px" }}>

        {/* Tab switcher */}
        <div style={{
          display: "inline-flex", gap: "2px", marginBottom: "32px", padding: "3px",
          borderRadius: "8px", border: "1px solid #e4e4e7", background: "#f4f4f5",
        }}>
          {(["patterns", "problems"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "7px 18px", borderRadius: "6px", border: "none",
              background: activeTab === tab ? "#fff" : "transparent",
              color: activeTab === tab ? "#09090b" : "#71717a",
              fontSize: "14px", fontWeight: 500, cursor: "pointer",
              textTransform: "capitalize", transition: "all 0.15s",
              boxShadow: activeTab === tab ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
              fontFamily: font,
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Patterns Grid */}
        {activeTab === "patterns" && (
          <>
            <h2 style={{
              fontSize: "20px", fontWeight: 600, color: "#09090b",
              margin: "0 0 20px", letterSpacing: "-0.2px", fontFamily: font,
            }}>
              Core Patterns
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
              {patterns.map(({ slug, name, desc, tag, difficulty }) => {
                const d = difficultyStyle[difficulty];
                return (
                  <div
                    key={name}
                    onClick={() => router.push(`/patterns/${slug}`)}
                    style={{
                      padding: "20px", borderRadius: "12px",
                      border: "1px solid #e4e4e7", background: "#fff",
                      cursor: "pointer", transition: "all 0.15s",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#a1a1aa";
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.07)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#e4e4e7";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                      <div style={{
                        width: "34px", height: "34px", borderRadius: "8px",
                        border: "1px solid #e4e4e7", background: "#fafafa",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "12px", color: "#71717a", fontWeight: 500,
                        fontFamily: "monospace",
                      }}>{"()"}</div>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <span style={{
                          fontSize: "11px", fontWeight: 400, padding: "2px 8px",
                          borderRadius: "99px", background: "#f4f4f5",
                          border: "1px solid #e4e4e7", color: "#52525b", fontFamily: font,
                        }}>{tag}</span>
                        <span style={{
                          fontSize: "11px", fontWeight: 500, padding: "2px 8px",
                          borderRadius: "99px", background: d.bg,
                          border: `1px solid ${d.border}`, color: d.color, fontFamily: font,
                        }}>{difficulty}</span>
                      </div>
                    </div>
                    <h3 style={{
                      fontSize: "15px", fontWeight: 600, color: "#09090b",
                      margin: "0 0 6px", fontFamily: font,
                    }}>{name}</h3>
                    <p style={{
                      fontSize: "13px", color: "#71717a", margin: 0,
                      lineHeight: 1.6, fontFamily: font, fontWeight: 400,
                    }}>{desc}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Problems List */}
        {activeTab === "problems" && (
          <>
            <h2 style={{
              fontSize: "20px", fontWeight: 600, color: "#09090b",
              margin: "0 0 20px", fontFamily: font,
            }}>
              Recently Solved
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {problems.map(({ name, difficulty, color }, i) => (
                <div key={name} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 18px", borderRadius: "10px",
                  border: "1px solid #e4e4e7", background: "#fff",
                  cursor: "pointer", transition: "all 0.15s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#a1a1aa";
                    (e.currentTarget as HTMLDivElement).style.background = "#fafafa";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#e4e4e7";
                    (e.currentTarget as HTMLDivElement).style.background = "#fff";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{
                      fontSize: "12px", color: "#d4d4d8",
                      fontFamily: "monospace", width: "18px", fontWeight: 400,
                    }}>
                      {i + 1}.
                    </span>
                    <span style={{
                      fontSize: "14px", fontWeight: 500,
                      color: "#09090b", fontFamily: font,
                    }}>{name}</span>
                  </div>
                  <span style={{
                    fontSize: "12px", fontWeight: 500, color,
                    padding: "2px 9px", borderRadius: "99px",
                    background: `${color}12`, border: `1px solid ${color}25`,
                    fontFamily: font,
                  }}>
                    {difficulty}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}