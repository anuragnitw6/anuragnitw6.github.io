// "use client";
// import { useParams, useRouter } from "next/navigation";
// import { useState } from "react";

// const patternData: Record<string, {
//     name: string;
//     color: string;
//     bg: string;
//     border: string;
//     tag: string;
//     difficulty: string;
//     theory: string[];
//     whenToUse: string[];
//     timeComplexity: string;
//     spaceComplexity: string;
//     code: string;
//     problems: { name: string; difficulty: string; link: string }[];
//     notes: string;
// }> = {
//     "hashmap": {
//         name: "HashMap",
//         color: "#2563eb",
//         bg: "rgba(37,99,235,0.08)",
//         border: "rgba(37,99,235,0.2)",
//         tag: "Array",
//         difficulty: "Easy",
//         theory: [
//             "A HashMap (or Hash Table) stores key-value pairs and provides O(1) average time complexity for insertions, deletions, and lookups.",
//             "The core idea is: instead of scanning an array linearly (O(n)), store values at keys derived from the data itself. When you need to find something, you compute the key and jump directly to it.",
//             "In LeetCode problems, HashMaps are typically used to eliminate a nested loop — reducing O(n²) brute force to O(n) by trading space for time.",
//         ],
//         whenToUse: [
//             "You need to find pairs or complements (Two Sum)",
//             "You need to count frequencies of elements",
//             "You need to detect duplicates in O(n)",
//             "You need to group elements by a property (Group Anagrams)",
//             "You need to check if two structures are equivalent",
//         ],
//         timeComplexity: "O(n) — single pass through the array",
//         spaceComplexity: "O(n) — storing up to n elements in the map",
//         code: `// Two Sum — classic HashMap pattern
// function twoSum(nums: number[], target: number): number[] {
//   const map = new Map<number, number>();
//   // map stores: value -> index

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (map.has(complement)) {
//       return [map.get(complement)!, i];
//     }

//     map.set(nums[i], i);
//   }

//   return [];
// }

// // Group Anagrams — HashMap with sorted key
// function groupAnagrams(strs: string[]): string[][] {
//   const map = new Map<string, string[]>();

//   for (const s of strs) {
//     const key = s.split("").sort().join("");
//     if (!map.has(key)) map.set(key, []);
//     map.get(key)!.push(s);
//   }

//   return Array.from(map.values());
// }`,
//         problems: [
//             { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum" },
//             { name: "Group Anagrams", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams" },
//             { name: "Top K Frequent Elements", difficulty: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements" },
//             { name: "Valid Anagram", difficulty: "Easy", link: "https://leetcode.com/problems/valid-anagram" },
//             { name: "Longest Consecutive Sequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-consecutive-sequence" },
//         ],
//         notes: "Key insight: whenever you see 'find two elements that sum to X', think HashMap. Store what you've seen so far, look up the complement.",
//     },
//     "sliding-window": {
//         name: "Sliding Window",
//         color: "#7c3aed",
//         bg: "rgba(124,58,237,0.08)",
//         border: "rgba(124,58,237,0.2)",
//         tag: "Array",
//         difficulty: "Medium",
//         theory: [
//             "The Sliding Window pattern maintains a subset (window) of elements from a sequence, expanding or shrinking the window to satisfy a condition.",
//             "Instead of recalculating from scratch for every subarray (O(n²)), you slide the window by adding one element on the right and optionally removing from the left — achieving O(n).",
//             "There are two variants: Fixed window (size k) and Variable window (expand/shrink based on condition).",
//         ],
//         whenToUse: [
//             "Find max/min subarray of size k",
//             "Longest substring with at most k distinct characters",
//             "Minimum window containing all characters",
//             "Any 'contiguous subarray' problem with an optimal condition",
//         ],
//         timeComplexity: "O(n) — each element enters and leaves the window once",
//         spaceComplexity: "O(k) — storing the window contents",
//         code: `// Fixed window — max sum subarray of size k
// function maxSumSubarray(nums: number[], k: number): number {
//   let windowSum = 0;
//   let maxSum = 0;

//   for (let i = 0; i < k; i++) windowSum += nums[i];
//   maxSum = windowSum;

//   for (let i = k; i < nums.length; i++) {
//     windowSum += nums[i] - nums[i - k]; // slide
//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }

// // Variable window — longest substring without repeating chars
// function lengthOfLongestSubstring(s: string): number {
//   const seen = new Set<string>();
//   let left = 0, max = 0;

//   for (let right = 0; right < s.length; right++) {
//     while (seen.has(s[right])) {
//       seen.delete(s[left]);
//       left++;
//     }
//     seen.add(s[right]);
//     max = Math.max(max, right - left + 1);
//   }

//   return max;
// }`,
//         problems: [
//             { name: "Maximum Average Subarray I", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-average-subarray-i" },
//             { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters" },
//             { name: "Minimum Window Substring", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring" },
//             { name: "Permutation in String", difficulty: "Medium", link: "https://leetcode.com/problems/permutation-in-string" },
//         ],
//         notes: "Two pointers left/right define the window. Expand right always; shrink from left when the window violates the condition.",
//     },
//     "two-pointers": {
//         name: "Two Pointers",
//         color: "#0891b2",
//         bg: "rgba(8,145,178,0.08)",
//         border: "rgba(8,145,178,0.2)",
//         tag: "Array",
//         difficulty: "Easy",
//         theory: [
//             "Two Pointers uses two indices — typically one at each end of a sorted array — moving toward each other based on a condition.",
//             "This eliminates the need for a nested loop in many problems that ask about pairs satisfying a condition.",
//             "Works best on sorted arrays. If the array is unsorted, sort it first (O(n log n)) then apply two pointers (O(n)).",
//         ],
//         whenToUse: [
//             "Find a pair that sums to a target in a sorted array",
//             "Remove duplicates from a sorted array in-place",
//             "Check if a string is a palindrome",
//             "Container with most water type problems",
//         ],
//         timeComplexity: "O(n) after sorting",
//         spaceComplexity: "O(1) — no extra space needed",
//         code: `// Two Sum II — sorted array
// function twoSumSorted(numbers: number[], target: number): number[] {
//   let left = 0, right = numbers.length - 1;

//   while (left < right) {
//     const sum = numbers[left] + numbers[right];
//     if (sum === target) return [left + 1, right + 1];
//     else if (sum < target) left++;
//     else right--;
//   }

//   return [];
// }

// // Valid Palindrome
// function isPalindrome(s: string): boolean {
//   const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let left = 0, right = clean.length - 1;

//   while (left < right) {
//     if (clean[left] !== clean[right]) return false;
//     left++;
//     right--;
//   }

//   return true;
// }`,
//         problems: [
//             { name: "Two Sum II", difficulty: "Medium", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted" },
//             { name: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome" },
//             { name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum" },
//             { name: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water" },
//         ],
//         notes: "If sum too small → move left pointer right. If sum too large → move right pointer left. Simple and powerful.",
//     },
//     "binary-search": {
//         name: "Binary Search",
//         color: "#059669",
//         bg: "rgba(5,150,105,0.08)",
//         border: "rgba(5,150,105,0.2)",
//         tag: "Search",
//         difficulty: "Medium",
//         theory: [
//             "Binary Search divides the search space in half each iteration, achieving O(log n) time — far faster than linear O(n) scanning.",
//             "The key requirement is that the search space must be monotonic — either sorted, or a property that is true on one side and false on the other.",
//             "Beyond classic sorted array search, binary search applies to 'find the minimum value that satisfies condition X' — a template used in many medium/hard problems.",
//         ],
//         whenToUse: [
//             "Search in a sorted array",
//             "Find first/last position of a value",
//             "Find the minimum in a rotated sorted array",
//             "'Minimum X such that condition holds' — binary search on the answer",
//         ],
//         timeComplexity: "O(log n)",
//         spaceComplexity: "O(1) iterative, O(log n) recursive",
//         code: `// Classic binary search
// function search(nums: number[], target: number): number {
//   let left = 0, right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return mid;
//     else if (nums[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }

//   return -1;
// }

// // Binary search on answer — minimum capacity to ship in D days
// function shipWithinDays(weights: number[], days: number): number {
//   let left = Math.max(...weights);
//   let right = weights.reduce((a, b) => a + b, 0);

//   const canShip = (cap: number) => {
//     let d = 1, cur = 0;
//     for (const w of weights) {
//       if (cur + w > cap) { d++; cur = 0; }
//       cur += w;
//     }
//     return d <= days;
//   };

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (canShip(mid)) right = mid;
//     else left = mid + 1;
//   }

//   return left;
// }`,
//         problems: [
//             { name: "Binary Search", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search" },
//             { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array" },
//             { name: "Koko Eating Bananas", difficulty: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas" },
//             { name: "Capacity To Ship Packages", difficulty: "Medium", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days" },
//             { name: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays" },
//         ],
//         notes: "Template: left=min, right=max, shrink toward the answer. Use left < right (not <=) when searching for a boundary.",
//     },
//     "linked-list": {
//         name: "Linked List",
//         color: "#d97706",
//         bg: "rgba(217,119,6,0.08)",
//         border: "rgba(217,119,6,0.2)",
//         tag: "List",
//         difficulty: "Medium",
//         theory: [
//             "Linked List problems require pointer manipulation — you must track prev, curr, and next nodes carefully to avoid losing references.",
//             "The most common techniques are: reversal (iterative or recursive), fast/slow pointers for cycle detection and finding middle, and dummy head nodes to simplify edge cases.",
//             "Dummy nodes eliminate special-casing for head operations — always consider adding one.",
//         ],
//         whenToUse: [
//             "Reverse a list or part of it",
//             "Detect a cycle (Floyd's algorithm)",
//             "Find the middle of a list",
//             "Merge two sorted lists",
//             "Remove nth node from end",
//         ],
//         timeComplexity: "O(n) for most operations",
//         spaceComplexity: "O(1) iterative, O(n) recursive",
//         code: `// Reverse a linked list
// function reverseList(head: ListNode | null): ListNode | null {
//   let prev: ListNode | null = null;
//   let curr = head;

//   while (curr) {
//     const next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// }

// // Detect cycle — Floyd's algorithm
// function hasCycle(head: ListNode | null): boolean {
//   let slow = head, fast = head;

//   while (fast && fast.next) {
//     slow = slow!.next;
//     fast = fast.next.next;
//     if (slow === fast) return true;
//   }

//   return false;
// }

// // Find middle
// function middleNode(head: ListNode): ListNode {
//   let slow = head, fast = head;
//   while (fast.next && fast.next.next) {
//     slow = slow.next!;
//     fast = fast.next.next;
//   }
//   return slow;
// }`,
//         problems: [
//             { name: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list" },
//             { name: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle" },
//             { name: "Middle of the Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/middle-of-the-linked-list" },
//             { name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists" },
//             { name: "Remove Nth Node From End", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list" },
//         ],
//         notes: "Always draw the pointer changes on paper first. Three pointers (prev/curr/next) handle most reversal problems.",
//     },
//     "dynamic-programming": {
//         name: "Dynamic Programming",
//         color: "#dc2626",
//         bg: "rgba(220,38,38,0.08)",
//         border: "rgba(220,38,38,0.2)",
//         tag: "DP",
//         difficulty: "Hard",
//         theory: [
//             "Dynamic Programming solves problems by breaking them into overlapping subproblems, solving each once, and storing the result (memoization or tabulation).",
//             "The two key properties required are: Optimal Substructure (optimal solution built from optimal subproblems) and Overlapping Subproblems (same subproblems solved repeatedly).",
//             "Start with a recursive solution, identify repeated calls, add a memo table → top-down DP. Or define a dp array and fill it bottom-up → tabulation.",
//         ],
//         whenToUse: [
//             "Optimization — min/max of something",
//             "Counting — number of ways to do something",
//             "Decision problems — is it possible?",
//             "String matching, subsequences, partitioning",
//         ],
//         timeComplexity: "O(n) to O(n²) depending on state space",
//         spaceComplexity: "O(n) to O(n²) for the dp table",
//         code: `// Climbing Stairs — 1D DP
// function climbStairs(n: number): number {
//   if (n <= 2) return n;
//   let prev2 = 1, prev1 = 2;

//   for (let i = 3; i <= n; i++) {
//     const curr = prev1 + prev2;
//     prev2 = prev1;
//     prev1 = curr;
//   }

//   return prev1;
// }

// // Longest Common Subsequence — 2D DP
// function longestCommonSubsequence(text1: string, text2: string): number {
//   const m = text1.length, n = text2.length;
//   const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (text1[i - 1] === text2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }
//   }

//   return dp[m][n];
// }`,
//         problems: [
//             { name: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs" },
//             { name: "House Robber", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber" },
//             { name: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change" },
//             { name: "Longest Common Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence" },
//             { name: "0/1 Knapsack", difficulty: "Hard", link: "https://leetcode.com/problems/partition-equal-subset-sum" },
//         ],
//         notes: "Ask: 'What is the minimum info I need to describe a subproblem?' That's your DP state. Then define the transition.",
//     },
// };

// const difficultyColor: Record<string, string> = {
//     Easy: "#16a34a", Medium: "#d97706", Hard: "#dc2626",
// };

// type Tab = "theory" | "code" | "problems" | "notes";

// export default function PatternDetailPage() {
//     const { slug } = useParams<{ slug: string }>();
//     const router = useRouter();
//     const [activeTab, setActiveTab] = useState<Tab>("theory");
//     const [copied, setCopied] = useState(false);

//     const p = patternData[slug];

//     if (!p) return (
//         <main style={{ minHeight: "100vh", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <div style={{ textAlign: "center" }}>
//                 <p style={{ fontSize: "48px", margin: "0 0 16px" }}>404</p>
//                 <p style={{ color: "#64748b", marginBottom: "24px" }}>Pattern not found</p>
//                 <button onClick={() => router.push("/patterns")} style={{
//                     padding: "10px 20px", borderRadius: "8px", border: "none",
//                     background: "#2563eb", color: "#fff", cursor: "pointer", fontWeight: 600,
//                 }}>← Back to Patterns</button>
//             </div>
//         </main>
//     );

//     const copyCode = () => {
//         navigator.clipboard.writeText(p.code);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//     };

//     const tabs: { id: Tab; label: string }[] = [
//         { id: "theory", label: "Theory" },
//         { id: "code", label: "Code" },
//         { id: "problems", label: "Problems" },
//         { id: "notes", label: "My Notes" },
//     ];

//     return (
//         <main style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "inherit" }}>

//             {/* Ambient glow */}
//             <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
//                 <div style={{
//                     position: "absolute", top: "-80px", left: "30%",
//                     width: "400px", height: "400px", borderRadius: "50%",
//                     background: p.bg.replace("0.08", "0.12"), filter: "blur(100px)",
//                 }} />
//             </div>

//             <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px 96px" }}>

//                 {/* Back button */}
//                 <button onClick={() => router.push("/patterns")} style={{
//                     display: "flex", alignItems: "center", gap: "6px",
//                     padding: "8px 14px", borderRadius: "8px",
//                     border: "1px solid #e2e8f0", background: "#fff",
//                     color: "#64748b", fontSize: "14px", fontWeight: 500,
//                     cursor: "pointer", marginBottom: "32px",
//                     boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
//                 }}>
//                     ← Back to Patterns
//                 </button>

//                 {/* Hero */}
//                 <div style={{
//                     padding: "32px", borderRadius: "20px",
//                     border: `1px solid ${p.border}`, background: "#fff",
//                     marginBottom: "28px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//                 }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
//                         <div style={{
//                             width: "48px", height: "48px", borderRadius: "14px",
//                             border: `1px solid ${p.border}`, background: p.bg,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: "16px", color: p.color, fontWeight: 700, fontFamily: "monospace",
//                         }}>{"()"}</div>
//                         <div style={{ display: "flex", gap: "8px" }}>
//                             <span style={{
//                                 fontSize: "12px", fontWeight: 500, padding: "4px 10px", borderRadius: "99px",
//                                 background: p.bg, border: `1px solid ${p.border}`, color: p.color,
//                             }}>{p.tag}</span>
//                             <span style={{
//                                 fontSize: "12px", fontWeight: 600, padding: "4px 10px", borderRadius: "99px",
//                                 background: `${difficultyColor[p.difficulty]}12`,
//                                 border: `1px solid ${difficultyColor[p.difficulty]}30`,
//                                 color: difficultyColor[p.difficulty],
//                             }}>{p.difficulty}</span>
//                         </div>
//                     </div>

//                     <h1 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-1px", color: "#0f172a", margin: "0 0 20px" }}>
//                         {p.name}
//                     </h1>

//                     {/* Complexity badges */}
//                     <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//                         <div style={{
//                             padding: "8px 14px", borderRadius: "10px",
//                             border: "1px solid #e2e8f0", background: "#f8fafc",
//                             fontSize: "13px", color: "#475569",
//                         }}>
//                             ⏱ <strong>Time:</strong> {p.timeComplexity}
//                         </div>
//                         <div style={{
//                             padding: "8px 14px", borderRadius: "10px",
//                             border: "1px solid #e2e8f0", background: "#f8fafc",
//                             fontSize: "13px", color: "#475569",
//                         }}>
//                             💾 <strong>Space:</strong> {p.spaceComplexity}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Tabs */}
//                 <div style={{
//                     display: "flex", gap: "4px", marginBottom: "24px", padding: "4px",
//                     borderRadius: "12px", border: "1px solid #e2e8f0",
//                     background: "#f1f5f9", width: "fit-content",
//                 }}>
//                     {tabs.map(({ id, label }) => (
//                         <button key={id} onClick={() => setActiveTab(id)} style={{
//                             padding: "8px 18px", borderRadius: "8px", border: "none",
//                             background: activeTab === id ? "#fff" : "transparent",
//                             color: activeTab === id ? "#0f172a" : "#64748b",
//                             fontSize: "14px", fontWeight: 500, cursor: "pointer",
//                             transition: "all 0.2s",
//                             boxShadow: activeTab === id ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
//                         }}>
//                             {label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Theory Tab */}
//                 {activeTab === "theory" && (
//                     <article style={{ maxWidth: "680px" }}>

//                         {/* Intro paragraphs */}
//                         <div style={{ marginBottom: "40px" }}>
//                             {p.theory.map((para, i) => (
//                                 <p key={i} style={{
//                                     fontSize: "16px", color: "#334155", lineHeight: 1.85,
//                                     margin: "0 0 20px",
//                                 }}>
//                                     {para}
//                                 </p>
//                             ))}
//                         </div>

//                         {/* Divider */}
//                         <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "0 0 36px" }} />

//                         {/* When to use */}
//                         <h2 style={{
//                             fontSize: "20px", fontWeight: 700, color: "#0f172a",
//                             margin: "0 0 16px", letterSpacing: "-0.3px",
//                         }}>
//                             When to use this pattern
//                         </h2>

//                         <ul style={{ margin: "0 0 40px", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
//                             {p.whenToUse.map((w, i) => (
//                                 <li key={i} style={{
//                                     display: "flex", alignItems: "flex-start", gap: "12px",
//                                     fontSize: "15px", color: "#475569", lineHeight: 1.7,
//                                 }}>
//                                     <span style={{
//                                         flexShrink: 0, marginTop: "4px",
//                                         width: "6px", height: "6px", borderRadius: "50%",
//                                         background: p.color, display: "inline-block",
//                                     }} />
//                                     {w}
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* Divider */}
//                         <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "0 0 36px" }} />

//                         {/* Complexity */}
//                         <h2 style={{
//                             fontSize: "20px", fontWeight: 700, color: "#0f172a",
//                             margin: "0 0 16px", letterSpacing: "-0.3px",
//                         }}>
//                             Complexity
//                         </h2>

//                         <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
//                             <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
//                                 <span style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", minWidth: "120px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//                                     Time
//                                 </span>
//                                 <span style={{ fontSize: "15px", color: "#334155", fontFamily: "monospace" }}>
//                                     {p.timeComplexity}
//                                 </span>
//                             </div>
//                             <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
//                                 <span style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", minWidth: "120px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//                                     Space
//                                 </span>
//                                 <span style={{ fontSize: "15px", color: "#334155", fontFamily: "monospace" }}>
//                                     {p.spaceComplexity}
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Divider */}
//                         <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "0 0 36px" }} />

//                         {/* Key insight callout */}
//                         <div style={{
//                             borderLeft: `3px solid ${p.color}`,
//                             paddingLeft: "20px",
//                         }}>
//                             <p style={{ fontSize: "13px", fontWeight: 700, color: p.color, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//                                 Key Insight
//                             </p>
//                             <p style={{ fontSize: "15px", color: "#475569", margin: 0, lineHeight: 1.75, fontStyle: "italic" }}>
//                                 {p.notes}
//                             </p>
//                         </div>

//                     </article>
//                 )}

//                 {/* Code Tab */}
//                 {activeTab === "code" && (
//                     <div style={{
//                         borderRadius: "16px", overflow: "hidden",
//                         border: "1px solid #e2e8f0",
//                         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//                     }}>
//                         {/* Code header */}
//                         <div style={{
//                             display: "flex", alignItems: "center", justifyContent: "space-between",
//                             padding: "14px 20px", background: "#1e293b",
//                             borderBottom: "1px solid rgba(255,255,255,0.08)",
//                         }}>
//                             <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//                                 <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
//                                 <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
//                                 <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }} />
//                                 <span style={{ marginLeft: "8px", fontSize: "13px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
//                                     {slug}.ts
//                                 </span>
//                             </div>
//                             <button onClick={copyCode} style={{
//                                 padding: "6px 14px", borderRadius: "6px",
//                                 border: "1px solid rgba(255,255,255,0.12)",
//                                 background: "rgba(255,255,255,0.06)",
//                                 color: "rgba(255,255,255,0.7)", fontSize: "12px",
//                                 fontWeight: 500, cursor: "pointer",
//                             }}>
//                                 {copied ? "✓ Copied!" : "Copy"}
//                             </button>
//                         </div>
//                         {/* Code body */}
//                         <pre style={{
//                             margin: 0, padding: "24px",
//                             background: "#0f172a", color: "#e2e8f0",
//                             fontSize: "13px", lineHeight: 1.8,
//                             fontFamily: "'Fira Code', 'Cascadia Code', monospace",
//                             overflowX: "auto", whiteSpace: "pre",
//                         }}>
//                             {p.code}
//                         </pre>
//                     </div>
//                 )}

//                 {/* Problems Tab */}
//                 {activeTab === "problems" && (
//                     <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                         {p.problems.map(({ name, difficulty, link }, i) => (
//                             <a key={name} href={link} target="_blank" rel="noreferrer" style={{
//                                 display: "flex", alignItems: "center", justifyContent: "space-between",
//                                 padding: "16px 20px", borderRadius: "12px",
//                                 border: "1px solid #e2e8f0", background: "#fff",
//                                 textDecoration: "none", transition: "all 0.2s",
//                                 boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
//                             }}
//                                 onMouseEnter={e => {
//                                     (e.currentTarget as HTMLAnchorElement).style.borderColor = p.border;
//                                     (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 12px ${p.bg}`;
//                                 }}
//                                 onMouseLeave={e => {
//                                     (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
//                                     (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
//                                 }}
//                             >
//                                 <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//                                     <span style={{ fontSize: "12px", color: "#cbd5e1", fontFamily: "monospace", width: "20px" }}>
//                                         {i + 1}.
//                                     </span>
//                                     <span style={{ fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>{name}</span>
//                                 </div>
//                                 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                                     <span style={{
//                                         fontSize: "12px", fontWeight: 600,
//                                         color: difficultyColor[difficulty],
//                                         padding: "3px 10px", borderRadius: "99px",
//                                         background: `${difficultyColor[difficulty]}12`,
//                                         border: `1px solid ${difficultyColor[difficulty]}30`,
//                                     }}>
//                                         {difficulty}
//                                     </span>
//                                     <span style={{ fontSize: "12px", color: "#94a3b8" }}>↗</span>
//                                 </div>
//                             </a>
//                         ))}
//                     </div>
//                 )}

//                 {/* Notes Tab */}
//                 {activeTab === "notes" && (
//                     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//                         <div style={{
//                             padding: "24px", borderRadius: "14px",
//                             border: `1px solid ${p.border}`, background: p.bg,
//                         }}>
//                             <p style={{ fontSize: "13px", fontWeight: 700, color: p.color, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//                                 💡 Key Insight
//                             </p>
//                             <p style={{ fontSize: "15px", color: "#334155", margin: 0, lineHeight: 1.75 }}>
//                                 {p.notes}
//                             </p>
//                         </div>

//                         <div style={{
//                             padding: "24px", borderRadius: "14px",
//                             border: "1px solid #e2e8f0", background: "#fff",
//                             boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
//                         }}>
//                             <p style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//                                 📝 Your Notes
//                             </p>
//                             <textarea
//                                 placeholder={`Write your notes on ${p.name} here...`}
//                                 style={{
//                                     width: "100%", minHeight: "180px", padding: "14px",
//                                     borderRadius: "10px", border: "1px solid #e2e8f0",
//                                     background: "#f8fafc", fontSize: "14px", color: "#334155",
//                                     lineHeight: 1.7, resize: "vertical", outline: "none",
//                                     fontFamily: "inherit", boxSizing: "border-box",
//                                 }}
//                             />
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </main>
//     );
// }

"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const difficultyStyle: Record<string, { color: string; bg: string; border: string }> = {
    Easy: { color: "#16a34a", bg: "rgba(22,163,74,0.08)", border: "rgba(22,163,74,0.2)" },
    Medium: { color: "#d97706", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)" },
    Hard: { color: "#dc2626", bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.2)" },
};

// ... keep your existing patternData object unchanged ...
const patternData: Record<string, {
    name: string;
    color: string;
    bg: string;
    border: string;
    tag: string;
    difficulty: string;
    theory: string[];
    whenToUse: string[];
    timeComplexity: string;
    spaceComplexity: string;
    code: string;
    problems: { name: string; difficulty: string; link: string }[];
    notes: string;
}> = {
    "hashmap": {
        name: "HashMap",
        color: "#2563eb",
        bg: "rgba(37,99,235,0.08)",
        border: "rgba(37,99,235,0.2)",
        tag: "Array",
        difficulty: "Easy",
        theory: [
            "A HashMap (or Hash Table) stores key-value pairs and provides O(1) average time complexity for insertions, deletions, and lookups.",
            "The core idea is: instead of scanning an array linearly (O(n)), store values at keys derived from the data itself. When you need to find something, you compute the key and jump directly to it.",
            "In LeetCode problems, HashMaps are typically used to eliminate a nested loop — reducing O(n²) brute force to O(n) by trading space for time.",
        ],
        whenToUse: [
            "You need to find pairs or complements (Two Sum)",
            "You need to count frequencies of elements",
            "You need to detect duplicates in O(n)",
            "You need to group elements by a property (Group Anagrams)",
            "You need to check if two structures are equivalent",
        ],
        timeComplexity: "O(n) — single pass through the array",
        spaceComplexity: "O(n) — storing up to n elements in the map",
        code: `// Two Sum — classic HashMap pattern
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  // map stores: value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Group Anagrams — HashMap with sorted key
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(s);
  }

  return Array.from(map.values());
}`,
        problems: [
            { name: "Two Sum", difficulty: "Easy", link: "/problems/two-sum" },
            { name: "Group Anagrams", difficulty: "Medium", link: "/problems/group-anagrams" },
            { name: "Top K Frequent Elements", difficulty: "Medium", link: "/problems/top-k-frequent-elements" },
            { name: "Valid Anagram", difficulty: "Easy", link: "/problems/valid-anagram" },
            { name: "Longest Consecutive Sequence", difficulty: "Medium", link: "/problems/longest-consecutive-sequence" },
        ],
        notes: "Key insight: whenever you see 'find two elements that sum to X', think HashMap. Store what you've seen so far, look up the complement.",
    },
    "sliding-window": {
        name: "Sliding Window",
        color: "#7c3aed",
        bg: "rgba(124,58,237,0.08)",
        border: "rgba(124,58,237,0.2)",
        tag: "Array",
        difficulty: "Medium",
        theory: [
            "The Sliding Window pattern maintains a subset (window) of elements from a sequence, expanding or shrinking the window to satisfy a condition.",
            "Instead of recalculating from scratch for every subarray (O(n²)), you slide the window by adding one element on the right and optionally removing from the left — achieving O(n).",
            "There are two variants: Fixed window (size k) and Variable window (expand/shrink based on condition).",
        ],
        whenToUse: [
            "Find max/min subarray of size k",
            "Longest substring with at most k distinct characters",
            "Minimum window containing all characters",
            "Any 'contiguous subarray' problem with an optimal condition",
        ],
        timeComplexity: "O(n) — each element enters and leaves the window once",
        spaceComplexity: "O(k) — storing the window contents",
        code: `// Fixed window — max sum subarray of size k
function maxSumSubarray(nums: number[], k: number): number {
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) windowSum += nums[i];
  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k]; // slide
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Variable window — longest substring without repeating chars
function lengthOfLongestSubstring(s: string): number {
  const seen = new Set<string>();
  let left = 0, max = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
}`,
        problems: [
            { name: "Maximum Average Subarray I", difficulty: "Easy", link: "/problems/maximum-average-subarray-1" },
            { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "/problems/longest-substring-without-repeating-characters" },
            { name: "Minimum Window Substring", difficulty: "Hard", link: "/problems/minimum-window-substring" },
            { name: "Permutation in String", difficulty: "Medium", link: "/problems/permutation-in-string" },
        ],
        notes: "Two pointers left/right define the window. Expand right always; shrink from left when the window violates the condition.",
    },
    "two-pointers": {
        name: "Two Pointers",
        color: "#0891b2",
        bg: "rgba(8,145,178,0.08)",
        border: "rgba(8,145,178,0.2)",
        tag: "Array",
        difficulty: "Easy",
        theory: [
            "Two Pointers uses two indices — typically one at each end of a sorted array — moving toward each other based on a condition.",
            "This eliminates the need for a nested loop in many problems that ask about pairs satisfying a condition.",
            "Works best on sorted arrays. If the array is unsorted, sort it first (O(n log n)) then apply two pointers (O(n)).",
        ],
        whenToUse: [
            "Find a pair that sums to a target in a sorted array",
            "Remove duplicates from a sorted array in-place",
            "Check if a string is a palindrome",
            "Container with most water type problems",
        ],
        timeComplexity: "O(n) after sorting",
        spaceComplexity: "O(1) — no extra space needed",
        code: `// Two Sum II — sorted array
function twoSumSorted(numbers: number[], target: number): number[] {
  let left = 0, right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }

  return [];
}

// Valid Palindrome
function isPalindrome(s: string): boolean {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0, right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }

  return true;
}`,
        problems: [
            { name: "Two Sum II", difficulty: "Medium", link: "/problems/two-sum-ii-input-array-is-sorted" },
            { name: "Valid Palindrome", difficulty: "Easy", link: "/problems/valid-palindrome" },
            { name: "3Sum", difficulty: "Medium", link: "/problems/3sum" },
            { name: "Container With Most Water", difficulty: "Medium", link: "/problems/container-with-most-water" },
        ],
        notes: "If sum too small → move left pointer right. If sum too large → move right pointer left. Simple and powerful.",
    },
    "binary-search": {
        name: "Binary Search",
        color: "#059669",
        bg: "rgba(5,150,105,0.08)",
        border: "rgba(5,150,105,0.2)",
        tag: "Search",
        difficulty: "Medium",
        theory: [
            "Binary Search divides the search space in half each iteration, achieving O(log n) time — far faster than linear O(n) scanning.",
            "The key requirement is that the search space must be monotonic — either sorted, or a property that is true on one side and false on the other.",
            "Beyond classic sorted array search, binary search applies to 'find the minimum value that satisfies condition X' — a template used in many medium/hard problems.",
        ],
        whenToUse: [
            "Search in a sorted array",
            "Find first/last position of a value",
            "Find the minimum in a rotated sorted array",
            "'Minimum X such that condition holds' — binary search on the answer",
        ],
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1) iterative, O(log n) recursive",
        code: `// Classic binary search
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Binary search on answer — minimum capacity to ship in D days
function shipWithinDays(weights: number[], days: number): number {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);

  const canShip = (cap: number) => {
    let d = 1, cur = 0;
    for (const w of weights) {
      if (cur + w > cap) { d++; cur = 0; }
      cur += w;
    }
    return d <= days;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canShip(mid)) right = mid;
    else left = mid + 1;
  }

  return left;
}`,
        problems: [
            { name: "Binary Search", difficulty: "Easy", link: "/problems/binary-search" },
            { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "/problems/find-minimum-in-rotated-sorted-array" },
            // { name: "Koko Eating Bananas", difficulty: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas" },
            // { name: "Capacity To Ship Packages", difficulty: "Medium", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days" },
            { name: "Median of Two Sorted Arrays", difficulty: "Hard", link: "/problems/median-of-two-sorted-arrays" },
        ],
        notes: "Template: left=min, right=max, shrink toward the answer. Use left < right (not <=) when searching for a boundary.",
    },
    "linked-list": {
        name: "Linked List",
        color: "#d97706",
        bg: "rgba(217,119,6,0.08)",
        border: "rgba(217,119,6,0.2)",
        tag: "List",
        difficulty: "Medium",
        theory: [
            "Linked List problems require pointer manipulation — you must track prev, curr, and next nodes carefully to avoid losing references.",
            "The most common techniques are: reversal (iterative or recursive), fast/slow pointers for cycle detection and finding middle, and dummy head nodes to simplify edge cases.",
            "Dummy nodes eliminate special-casing for head operations — always consider adding one.",
        ],
        whenToUse: [
            "Reverse a list or part of it",
            "Detect a cycle (Floyd's algorithm)",
            "Find the middle of a list",
            "Merge two sorted lists",
            "Remove nth node from end",
        ],
        timeComplexity: "O(n) for most operations",
        spaceComplexity: "O(1) iterative, O(n) recursive",
        code: `// Reverse a linked list
    function reverseList(head: ListNode | null): ListNode | null {
      let prev: ListNode | null = null;
      let curr = head;

      while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      return prev;
    }

    // Detect cycle — Floyd's algorithm
    function hasCycle(head: ListNode | null): boolean {
      let slow = head, fast = head;

      while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) return true;
      }

      return false;
    }

    // Find middle
    function middleNode(head: ListNode): ListNode {
      let slow = head, fast = head;
      while (fast.next && fast.next.next) {
        slow = slow.next!;
        fast = fast.next.next;
      }
      return slow;
    }`,
        problems: [
            { name: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list" },
            { name: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle" },
            { name: "Middle of the Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/middle-of-the-linked-list" },
            { name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists" },
            { name: "Remove Nth Node From End", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list" },
        ],
        notes: "Always draw the pointer changes on paper first. Three pointers (prev/curr/next) handle most reversal problems.",
    },
    "dynamic-programming": {
        name: "Dynamic Programming",
        color: "#dc2626",
        bg: "rgba(220,38,38,0.08)",
        border: "rgba(220,38,38,0.2)",
        tag: "DP",
        difficulty: "Hard",
        theory: [
            "Dynamic Programming solves problems by breaking them into overlapping subproblems, solving each once, and storing the result (memoization or tabulation).",
            "The two key properties required are: Optimal Substructure (optimal solution built from optimal subproblems) and Overlapping Subproblems (same subproblems solved repeatedly).",
            "Start with a recursive solution, identify repeated calls, add a memo table → top-down DP. Or define a dp array and fill it bottom-up → tabulation.",
        ],
        whenToUse: [
            "Optimization — min/max of something",
            "Counting — number of ways to do something",
            "Decision problems — is it possible?",
            "String matching, subsequences, partitioning",
        ],
        timeComplexity: "O(n) to O(n²) depending on state space",
        spaceComplexity: "O(n) to O(n²) for the dp table",
        code: `// Climbing Stairs — 1D DP
    function climbStairs(n: number): number {
      if (n <= 2) return n;
      let prev2 = 1, prev1 = 2;

      for (let i = 3; i <= n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
      }

      return prev1;
    }

    // Longest Common Subsequence — 2D DP
    function longestCommonSubsequence(text1: string, text2: string): number {
      const m = text1.length, n = text2.length;
      const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          if (text1[i - 1] === text2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
        }
      }

      return dp[m][n];
    }`,
        problems: [
            { name: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs" },
            { name: "House Robber", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber" },
            { name: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change" },
            { name: "Longest Common Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence" },
            { name: "0/1 Knapsack", difficulty: "Hard", link: "https://leetcode.com/problems/partition-equal-subset-sum" },
        ],
        notes: "Ask: 'What is the minimum info I need to describe a subproblem?' That's your DP state. Then define the transition.",
    },
};

type Tab = "theory" | "code" | "problems" | "notes";

const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id: "theory", label: "Theory", emoji: "" },
    { id: "code", label: "Code", emoji: "" },
    { id: "problems", label: "Problems", emoji: "" },
    // { id: "notes", label: "My Notes", emoji: "" },
];
export default function PatternDetailPage({ slug }: { slug: string }) {
    // export default function PatternDetailPage({ slug }: { slug: string }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<Tab>("theory");
    const [copied, setCopied] = useState(false);

    const p = patternData[slug];

    if (!p) return (
        <main style={{ minHeight: "100vh", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: font }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: 700, color: "#09090b", margin: "0 0 8px", fontFamily: font }}>404</p>
                <p style={{ color: "#71717a", marginBottom: "24px", fontFamily: font }}>Pattern not found</p>
                <button onClick={() => router.push("/patterns")} style={{
                    padding: "9px 18px", borderRadius: "8px", border: "none",
                    background: "#18181b", color: "#fff", cursor: "pointer",
                    fontWeight: 500, fontSize: "14px", fontFamily: font,
                }}>← Back to Patterns</button>
            </div>
        </main>
    );

    const copyCode = () => {
        navigator.clipboard.writeText(p.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const d = difficultyStyle[p.difficulty];

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px 96px" }}>

                {/* Back button */}
                <button onClick={() => router.push("/patterns")} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "7px 14px", borderRadius: "8px",
                    border: "1px solid #e4e4e7", background: "#fff",
                    color: "#71717a", fontSize: "13px", fontWeight: 500,
                    cursor: "pointer", marginBottom: "28px", fontFamily: font,
                }}>
                    ← Back to Patterns
                </button>

                {/* Hero card */}
                <div style={{
                    padding: "28px 32px", borderRadius: "12px",
                    border: "1px solid #e4e4e7", background: "#fafafa",
                    marginBottom: "32px",
                }}>
                    {/* Top row — icon + badges */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                        <div style={{
                            width: "36px", height: "36px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fff",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "13px", color: "#71717a", fontWeight: 500,
                            fontFamily: "monospace",
                        }}>{"()"}</div>

                        <span style={{
                            fontSize: "12px", fontWeight: 400, padding: "2px 9px",
                            borderRadius: "99px", background: "#f4f4f5",
                            border: "1px solid #e4e4e7", color: "#52525b", fontFamily: font,
                        }}>{p.tag}</span>

                        <span style={{
                            fontSize: "12px", fontWeight: 500, padding: "2px 9px",
                            borderRadius: "99px", background: d.bg,
                            border: `1px solid ${d.border}`, color: d.color, fontFamily: font,
                        }}>{p.difficulty}</span>
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: "28px", fontWeight: 700, color: "#09090b",
                        margin: "0 0 20px", letterSpacing: "-0.3px", fontFamily: font,
                    }}>
                        {p.name}
                    </h1>

                    {/* Complexity row */}
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            padding: "6px 12px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fff",
                            fontSize: "13px", color: "#52525b", fontFamily: font,
                        }}>
                            <span style={{ color: "#a1a1aa" }}>Time</span>
                            <span style={{ color: "#d4d4d8" }}>·</span>
                            <span style={{ fontFamily: "monospace", color: "#09090b", fontWeight: 500 }}>{p.timeComplexity}</span>
                        </div>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            padding: "6px 12px", borderRadius: "8px",
                            border: "1px solid #e4e4e7", background: "#fff",
                            fontSize: "13px", color: "#52525b", fontFamily: font,
                        }}>
                            <span style={{ color: "#a1a1aa" }}>Space</span>
                            <span style={{ color: "#d4d4d8" }}>·</span>
                            <span style={{ fontFamily: "monospace", color: "#09090b", fontWeight: 500 }}>{p.spaceComplexity}</span>
                        </div>
                    </div>
                </div>

                {/* Tabs — underline style */}
                <div style={{
                    display: "flex", gap: "0",
                    borderBottom: "1px solid #e4e4e7",
                    marginBottom: "32px",
                }}>
                    {tabs.map(({ id, label, emoji }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            style={{
                                padding: "10px 20px",
                                border: "none",
                                borderBottom: activeTab === id ? "2px solid #09090b" : "2px solid transparent",
                                background: "transparent",
                                color: activeTab === id ? "#09090b" : "#71717a",
                                fontSize: "14px",
                                fontWeight: activeTab === id ? 600 : 400,
                                cursor: "pointer",
                                fontFamily: font,
                                marginBottom: "-1px",
                                transition: "all 0.15s",
                                display: "flex", alignItems: "center", gap: "6px",
                            }}
                            onMouseEnter={e => {
                                if (activeTab !== id)
                                    (e.currentTarget as HTMLButtonElement).style.color = "#3f3f46";
                            }}
                            onMouseLeave={e => {
                                if (activeTab !== id)
                                    (e.currentTarget as HTMLButtonElement).style.color = "#71717a";
                            }}
                        >
                            <span style={{ fontSize: "13px" }}>{emoji}</span>
                            {label}
                        </button>
                    ))}
                </div>

                {/* Theory Tab */}
                {activeTab === "theory" && (
                    <article style={{ maxWidth: "680px", fontFamily: font }}>
                        <div style={{ marginBottom: "36px" }}>
                            {p.theory.map((para, i) => (
                                <p key={i} style={{
                                    fontSize: "15px", color: "#3f3f46", lineHeight: 1.85,
                                    margin: "0 0 18px", fontFamily: font, fontWeight: 400,
                                }}>
                                    {para}
                                </p>
                            ))}
                        </div>

                        <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 32px" }} />

                        <h2 style={{
                            fontSize: "17px", fontWeight: 600, color: "#09090b",
                            margin: "0 0 16px", fontFamily: font,
                        }}>
                            When to use this pattern
                        </h2>
                        <ul style={{ margin: "0 0 36px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                            {p.whenToUse.map((w, i) => (
                                <li key={i} style={{
                                    display: "flex", alignItems: "flex-start", gap: "10px",
                                    fontSize: "14px", color: "#52525b", lineHeight: 1.7, fontFamily: font,
                                }}>
                                    <span style={{
                                        flexShrink: 0, marginTop: "7px",
                                        width: "5px", height: "5px", borderRadius: "50%",
                                        background: "#a1a1aa", display: "inline-block",
                                    }} />
                                    {w}
                                </li>
                            ))}
                        </ul>

                        <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 32px" }} />

                        <h2 style={{
                            fontSize: "17px", fontWeight: 600, color: "#09090b",
                            margin: "0 0 14px", fontFamily: font,
                        }}>
                            Complexity
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "36px" }}>
                            {[
                                { label: "Time", value: p.timeComplexity },
                                { label: "Space", value: p.spaceComplexity },
                            ].map(({ label, value }) => (
                                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                                    <span style={{
                                        fontSize: "12px", fontWeight: 500, color: "#a1a1aa",
                                        minWidth: "50px", textTransform: "uppercase",
                                        letterSpacing: "0.06em", fontFamily: font,
                                    }}>{label}</span>
                                    <span style={{ fontSize: "14px", color: "#3f3f46", fontFamily: "monospace" }}>{value}</span>
                                </div>
                            ))}
                        </div>

                        <hr style={{ border: "none", borderTop: "1px solid #f4f4f5", margin: "0 0 32px" }} />

                        {/* Key insight */}
                        <div style={{
                            padding: "16px 20px", borderRadius: "8px",
                            background: "#fafafa", border: "1px solid #e4e4e7",
                            borderLeft: "3px solid #18181b",
                        }}>
                            <p style={{
                                fontSize: "11px", fontWeight: 600, color: "#a1a1aa",
                                margin: "0 0 8px", textTransform: "uppercase",
                                letterSpacing: "0.07em", fontFamily: font,
                            }}>
                                Key Insight
                            </p>
                            <p style={{
                                fontSize: "14px", color: "#52525b", margin: 0,
                                lineHeight: 1.75, fontFamily: font, fontWeight: 400,
                            }}>
                                {p.notes}
                            </p>
                        </div>
                    </article>
                )}

                {/* Code Tab */}
                {activeTab === "code" && (
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
                                    {slug}.ts
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
                            {p.code}
                        </pre>
                    </div>
                )}

                {/* Problems Tab */}
                {activeTab === "problems" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {p.problems.map(({ name, difficulty, link }, i) => {
                            const pd = difficultyStyle[difficulty];
                            return (
                                <a key={name} href={link} target="_blank" rel="noreferrer" style={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    padding: "14px 18px", borderRadius: "10px",
                                    border: "1px solid #e4e4e7", background: "#fff",
                                    textDecoration: "none", transition: "all 0.15s",
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
                                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                        <span style={{ fontSize: "12px", color: "#d4d4d8", fontFamily: "monospace", width: "18px" }}>
                                            {i + 1}.
                                        </span>
                                        <span style={{ fontSize: "14px", fontWeight: 500, color: "#09090b", fontFamily: font }}>{name}</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <span style={{
                                            fontSize: "12px", fontWeight: 500, color: pd.color,
                                            padding: "2px 9px", borderRadius: "99px",
                                            background: pd.bg, border: `1px solid ${pd.border}`,
                                            fontFamily: font,
                                        }}>
                                            {difficulty}
                                        </span>
                                        <span style={{ fontSize: "12px", color: "#a1a1aa" }}>↗</span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                )}

                {/* Notes Tab */}
                {activeTab === "notes" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "680px" }}>
                        <div style={{
                            padding: "18px 20px", borderRadius: "10px",
                            background: "#fafafa", border: "1px solid #e4e4e7",
                            borderLeft: "3px solid #18181b",
                        }}>
                            <p style={{
                                fontSize: "11px", fontWeight: 600, color: "#a1a1aa",
                                margin: "0 0 8px", textTransform: "uppercase",
                                letterSpacing: "0.07em", fontFamily: font,
                            }}>Key Insight</p>
                            <p style={{ fontSize: "14px", color: "#52525b", margin: 0, lineHeight: 1.75, fontFamily: font }}>{p.notes}</p>
                        </div>

                        <div style={{
                            padding: "18px 20px", borderRadius: "10px",
                            border: "1px solid #e4e4e7", background: "#fff",
                        }}>
                            <p style={{
                                fontSize: "11px", fontWeight: 600, color: "#a1a1aa",
                                margin: "0 0 10px", textTransform: "uppercase",
                                letterSpacing: "0.07em", fontFamily: font,
                            }}>Your Notes</p>
                            <textarea
                                placeholder={`Write your notes on ${p.name} here...`}
                                style={{
                                    width: "100%", minHeight: "180px", padding: "12px",
                                    borderRadius: "8px", border: "1px solid #e4e4e7",
                                    background: "#fafafa", fontSize: "14px", color: "#3f3f46",
                                    lineHeight: 1.7, resize: "vertical", outline: "none",
                                    fontFamily: font, boxSizing: "border-box",
                                }}
                            />
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}