"use client";
import { useState, useMemo } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const difficultyStyle: Record<string, { color: string; bg: string; border: string }> = {
    Easy: { color: "#16a34a", bg: "rgba(22,163,74,0.08)", border: "rgba(22,163,74,0.2)" },
    Medium: { color: "#d97706", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)" },
    Hard: { color: "#dc2626", bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.2)" },
};

const patternStyle: Record<string, { color: string; bg: string; border: string }> = {
    HashMap: { color: "#2563eb", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)" },
    "Sliding Window": { color: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
    "Two Pointers": { color: "#0891b2", bg: "rgba(8,145,178,0.08)", border: "rgba(8,145,178,0.2)" },
    "Binary Search": { color: "#059669", bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.2)" },
    "Linked List": { color: "#d97706", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)" },
    DP: { color: "#dc2626", bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.2)" },
    HashSet: { color: "#2563eb", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)" },
};

type Problem = {
    id: number;
    name: string;
    slug: string;
    pattern: string;
    difficulty: "Easy" | "Medium" | "Hard";
    leetcode: string;
    tag: string;
    hasPage: boolean;
};

const problems: Problem[] = [
    // HashMap
    { id: 1, name: "Two Sum", slug: "two-sum", pattern: "HashMap", difficulty: "Easy", leetcode: "/problems/two-sum", tag: "Array", hasPage: true },
    { id: 2, name: "Group Anagrams", slug: "group-anagrams", pattern: "HashMap", difficulty: "Medium", leetcode: "/problems/group-anagrams", tag: "String", hasPage: true },
    { id: 3, name: "Top K Frequent Elements", slug: "top-k-frequent-elements", pattern: "HashMap", difficulty: "Medium", leetcode: "/problems/top-k-frequent-elements", tag: "Array", hasPage: true },
    { id: 4, name: "Valid Anagram", slug: "valid-anagram", pattern: "HashMap", difficulty: "Easy", leetcode: "/problems/valid-anagram", tag: "String", hasPage: true },
    { id: 5, name: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence", pattern: "HashSet", difficulty: "Medium", leetcode: "/problems/longest-consecutive-sequence", tag: "Array", hasPage: true },
    // Sliding Window
    { id: 6, name: "Maximum Average Subarray I", slug: "maximum-average-subarray-1", pattern: "Sliding Window", difficulty: "Easy", leetcode: "/problems/maximum-average-subarray-1", tag: "Array", hasPage: false },
    { id: 7, name: "Longest Substring Without Repeating", slug: "longest-substring-without-repeating-characters", pattern: "Sliding Window", difficulty: "Medium", leetcode: "/problems/longest-substring-without-repeating-characters", tag: "String", hasPage: false },
    { id: 8, name: "Minimum Window Substring", slug: "minimum-window-substring", pattern: "Sliding Window", difficulty: "Hard", leetcode: "/problems/minimum-window-substring", tag: "String", hasPage: false },
    { id: 9, name: "Permutation in String", slug: "permutation-in-string", pattern: "Sliding Window", difficulty: "Medium", leetcode: "/problems/permutation-in-string", tag: "String", hasPage: false },
    // Two Pointers
    { id: 10, name: "Two Sum II", slug: "two-sum-ii-input-array-is-sorted", pattern: "Two Pointers", difficulty: "Medium", leetcode: "/problems/two-sum-ii-input-array-is-sorted", tag: "Array", hasPage: false },
    { id: 11, name: "Valid Palindrome", slug: "valid-palindrome", pattern: "Two Pointers", difficulty: "Easy", leetcode: "/problems/valid-palindrome", tag: "String", hasPage: false },
    { id: 12, name: "3Sum", slug: "3sum", pattern: "Two Pointers", difficulty: "Medium", leetcode: "/problems/3Sum", tag: "Array", hasPage: false },
    { id: 13, name: "Container With Most Water", slug: "container-with-most-water", pattern: "Two Pointers", difficulty: "Medium", leetcode: "/problems/container-with-most-water", tag: "Array", hasPage: false },
    // Binary Search
    { id: 14, name: "Binary Search", slug: "binary-search", pattern: "Binary Search", difficulty: "Easy", leetcode: "/problems/binary-search", tag: "Search", hasPage: false },
    { id: 15, name: "Find Minimum in Rotated Sorted Array", slug: "find-minimum-in-rotated-sorted-array", pattern: "Binary Search", difficulty: "Medium", leetcode: "/problems/find-minimum-in-rotated-sorted-array", tag: "Search", hasPage: false },
    { id: 16, name: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays", pattern: "Binary Search", difficulty: "Hard", leetcode: "/problems/median-of-two-sorted-arrays", tag: "Search", hasPage: false },
    // Linked List
    // { id: 206, name: "Reverse Linked List", slug: "reverse-linked-list", pattern: "Linked List", difficulty: "Easy", leetcode: "https://leetcode.com/problems/reverse-linked-list", tag: "List", hasPage: false },
    // { id: 141, name: "Linked List Cycle", slug: "linked-list-cycle", pattern: "Linked List", difficulty: "Easy", leetcode: "https://leetcode.com/problems/linked-list-cycle", tag: "List", hasPage: false },
    // { id: 876, name: "Middle of the Linked List", slug: "middle-of-the-linked-list", pattern: "Linked List", difficulty: "Easy", leetcode: "https://leetcode.com/problems/middle-of-the-linked-list", tag: "List", hasPage: false },
    // { id: 21, name: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists", pattern: "Linked List", difficulty: "Easy", leetcode: "https://leetcode.com/problems/merge-two-sorted-lists", tag: "List", hasPage: false },
    // { id: 19, name: "Remove Nth Node From End", slug: "remove-nth-node-from-end-of-list", pattern: "Linked List", difficulty: "Medium", leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list", tag: "List", hasPage: false },
    // DP
    // { id: 70, name: "Climbing Stairs", slug: "climbing-stairs", pattern: "DP", difficulty: "Easy", leetcode: "https://leetcode.com/problems/climbing-stairs", tag: "DP", hasPage: false },
    // { id: 198, name: "House Robber", slug: "house-robber", pattern: "DP", difficulty: "Medium", leetcode: "https://leetcode.com/problems/house-robber", tag: "DP", hasPage: false },
    // { id: 322, name: "Coin Change", slug: "coin-change", pattern: "DP", difficulty: "Medium", leetcode: "https://leetcode.com/problems/coin-change", tag: "DP", hasPage: false },
    // { id: 1143, name: "Longest Common Subsequence", slug: "longest-common-subsequence", pattern: "DP", difficulty: "Medium", leetcode: "https://leetcode.com/problems/longest-common-subsequence", tag: "DP", hasPage: false },
    // { id: 416, name: "Partition Equal Subset Sum", slug: "partition-equal-subset-sum", pattern: "DP", difficulty: "Hard", leetcode: "https://leetcode.com/problems/partition-equal-subset-sum", tag: "DP", hasPage: false },
];
const ALL_PATTERNS = ["All", "HashMap", "Sliding Window", "Two Pointers", "Binary Search"];

// const ALL_PATTERNS = ["All", "HashMap", "HashSet", "Sliding Window", "Two Pointers", "Binary Search", "Linked List", "DP"];
const ALL_DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];

export default function ProblemsPage() {
    const [search, setSearch] = useState("");
    const [pattern, setPattern] = useState("All");
    const [difficulty, setDifficulty] = useState("All");

    const filtered = useMemo(() => {
        return problems.filter(p => {
            const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
            const matchPattern = pattern === "All" || p.pattern === pattern;
            const matchDiff = difficulty === "All" || p.difficulty === difficulty;
            return matchSearch && matchPattern && matchDiff;
        });
    }, [search, pattern, difficulty]);

    const stats = {
        total: problems.length,
        easy: problems.filter(p => p.difficulty === "Easy").length,
        medium: problems.filter(p => p.difficulty === "Medium").length,
        hard: problems.filter(p => p.difficulty === "Hard").length,
        solved: problems.filter(p => p.hasPage).length,
    };

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 96px" }}>

                {/* Header */}
                <div style={{ marginBottom: "36px" }}>
                    <p style={{
                        fontSize: "12px", fontWeight: 500, color: "#6366f1",
                        textTransform: "uppercase", letterSpacing: "0.08em",
                        margin: "0 0 10px", fontFamily: font,
                    }}>
                        Problem Set
                    </p>
                    <h1 style={{
                        fontSize: "clamp(26px,4vw,36px)", fontWeight: 700,
                        letterSpacing: "-0.5px", color: "#09090b",
                        margin: "0 0 10px", fontFamily: font,
                    }}>
                        All Problems
                    </h1>
                    <p style={{ fontSize: "15px", color: "#71717a", margin: 0, fontFamily: font }}>
                        Curated problems organized by pattern. Problems with detailed explanations are marked with a ✦ .
                    </p>
                </div>

                {/* Stats row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" }}>
                    {[
                        { label: "Total", value: stats.total, color: "#09090b" },
                        { label: "Easy", value: stats.easy, color: "#16a34a" },
                        { label: "Medium", value: stats.medium, color: "#d97706" },
                        { label: "Hard", value: stats.hard, color: "#dc2626" },
                        // { label: "With Guide", value: stats.solved, color: "#6366f1" },
                    ].map(({ label, value, color }) => (
                        <div key={label} style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            padding: "6px 12px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fafafa",
                            fontSize: "13px", fontFamily: font,
                        }}>
                            <span style={{ color: "#a1a1aa" }}>{label}</span>
                            <span style={{ color: "#d4d4d8" }}>·</span>
                            <span style={{ fontWeight: 600, color }}>{value}</span>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div style={{
                    display: "flex", gap: "12px", marginBottom: "28px",
                    flexWrap: "wrap", alignItems: "center",
                }}>
                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search problems…"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{
                            padding: "8px 14px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fafafa",
                            fontSize: "14px", fontFamily: font, color: "#09090b",
                            outline: "none", width: "220px",
                        }}
                    />

                    {/* Pattern filter */}
                    <select
                        value={pattern}
                        onChange={e => setPattern(e.target.value)}
                        style={{
                            padding: "8px 14px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fafafa",
                            fontSize: "14px", fontFamily: font, color: "#09090b",
                            outline: "none", cursor: "pointer",
                        }}
                    >
                        {ALL_PATTERNS.map(p => (
                            <option key={p} value={p}>{p === "All" ? "All Patterns" : p}</option>
                        ))}
                    </select>

                    {/* Difficulty filter */}
                    <select
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}
                        style={{
                            padding: "8px 14px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fafafa",
                            fontSize: "14px", fontFamily: font, color: "#09090b",
                            outline: "none", cursor: "pointer",
                        }}
                    >
                        {ALL_DIFFICULTIES.map(d => (
                            <option key={d} value={d}>{d === "All" ? "All Difficulties" : d}</option>
                        ))}
                    </select>

                    {/* Clear */}
                    {(search || pattern !== "All" || difficulty !== "All") && (
                        <button
                            onClick={() => { setSearch(""); setPattern("All"); setDifficulty("All"); }}
                            style={{
                                padding: "8px 14px", borderRadius: "8px",
                                border: "1px solid #e4e4e7", background: "#fff",
                                fontSize: "13px", fontFamily: font, color: "#71717a",
                                cursor: "pointer",
                            }}
                        >
                            Clear
                        </button>
                    )}

                    <span style={{ fontSize: "13px", color: "#a1a1aa", fontFamily: font, marginLeft: "auto" }}>
                        {filtered.length} problem{filtered.length !== 1 ? "s" : ""}
                    </span>
                </div>

                {/* Problem list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {filtered.length === 0 && (
                        <div style={{
                            textAlign: "center", padding: "60px 0",
                            color: "#a1a1aa", fontSize: "14px", fontFamily: font,
                        }}>
                            No problems match your filters.
                        </div>
                    )}

                    {filtered.map((problem, i) => {
                        const diff = difficultyStyle[problem.difficulty];
                        const pat = patternStyle[problem.pattern] ?? patternStyle["HashMap"];
                        const href = problem.hasPage ? `/problems/${problem.slug}` : problem.leetcode;

                        return (
                            <a
                                key={problem.id}
                                href={href}
                                target={problem.hasPage ? "_self" : "_blank"}
                                rel={problem.hasPage ? undefined : "noreferrer"}
                                style={{
                                    display: "flex", alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "14px 18px", borderRadius: "10px",
                                    border: "1px solid #e4e4e7", background: "#fff",
                                    textDecoration: "none", transition: "all 0.15s",
                                    gap: "12px",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#a1a1aa";
                                    (e.currentTarget as HTMLAnchorElement).style.background = "#fafafa";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e4e4e7";
                                    (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                                }}
                            >
                                {/* Left — number + name */}
                                <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: 1, minWidth: 0 }}>
                                    <span style={{
                                        fontSize: "12px", color: "#d4d4d8",
                                        fontFamily: "monospace", minWidth: "32px", flexShrink: 0,
                                    }}>
                                        #{problem.id}
                                    </span>
                                    <span style={{
                                        fontSize: "14px", fontWeight: 500, color: "#09090b",
                                        fontFamily: font, whiteSpace: "nowrap",
                                        overflow: "hidden", textOverflow: "ellipsis",
                                    }}>
                                        {problem.hasPage && (
                                            <span style={{ color: "#6366f1", marginRight: "6px", fontSize: "10px" }}></span>
                                        )}
                                        {problem.name}
                                    </span>
                                </div>

                                {/* Right — pattern + difficulty + arrow */}
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                                    {/* Pattern badge */}
                                    <span style={{
                                        fontSize: "11px", fontWeight: 500,
                                        padding: "2px 8px", borderRadius: "99px",
                                        background: pat.bg, border: `1px solid ${pat.border}`,
                                        color: pat.color, fontFamily: font,
                                        whiteSpace: "nowrap",
                                    }}>
                                        {problem.pattern}
                                    </span>

                                    {/* Difficulty badge */}
                                    <span style={{
                                        fontSize: "11px", fontWeight: 500,
                                        padding: "2px 8px", borderRadius: "99px",
                                        background: diff.bg, border: `1px solid ${diff.border}`,
                                        color: diff.color, fontFamily: font,
                                        minWidth: "54px", textAlign: "center",
                                    }}>
                                        {problem.difficulty}
                                    </span>

                                    <span style={{ fontSize: "12px", color: "#a1a1aa" }}>
                                        {problem.hasPage ? "→" : "↗"}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Legend */}
                {/* <div style={{
                    marginTop: "40px", padding: "14px 18px", borderRadius: "8px",
                    background: "#fafafa", border: "1px solid #e4e4e7",
                    display: "flex", alignItems: "center", gap: "8px",
                    fontSize: "13px", color: "#71717a", fontFamily: font,
                }}>
                    <span style={{ color: "#6366f1", fontSize: "10px" }}>✦</span>
                    Problems with this mark have a detailed in-site explanation. Others link directly to LeetCode.
                </div> */}

            </div>
        </main>
    );
}