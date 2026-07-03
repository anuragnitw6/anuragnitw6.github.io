export type BlogSection = {
    title: string;
    content?: string;
    bullets?: string[];
    code?: string;
    after?: string;
    walkthrough?: {
        input: string;
        steps: { i: number; num: number | string; complement: string; action: string; found: boolean }[];
        output: string;
    };
    takeaways?: { icon: string; text: string }[];
};

export type BlogPost = {
    title: string;
    tag: string;
    date: string;
    readTime: string;
    excerpt: string;
    sections: BlogSection[];
    code: string;
};

// Add a new post by adding one entry here — the listing page and
// /blogs/[slug] route both derive automatically from this object.
export const blogData: Record<string, BlogPost> = {
    "parity-permutation": {
        title: "Parity Permutation",
        tag: "Two Pointers",
        date: "Jul 2026",
        readTime: "6 min read",
        excerpt:
            "Rearrange an array so even and odd values fall into place — a two-pointer pattern that quietly powers several classic interview problems.",
        sections: [
            {
                title: "What Is a Parity Permutation",
                content:
                    "A parity permutation is just a rearrangement of an array so that elements alternate by parity — even, odd, even, odd — or so all evens land at even indices and all odds land at odd indices. It shows up under different names (\"Sort Array By Parity II\", \"wiggle by parity\", \"segregate evens and odds\") but it's always the same idea: partition or interleave a sequence based on a two-way split condition.",
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
                content:
                    "Instead of building two new arrays (one for evens, one for odds) and merging them, walk the array with two pointers that each hunt for a value in the \"wrong\" slot, then swap:",
                code: "if (nums[i] is even but sits in an odd slot) swap it with nums[j], an odd value sitting in an even slot",
                after:
                    "Every swap fixes two elements at once, so the whole array is corrected in a single pass with no extra memory.",
            },
            {
                title: "Step-by-Step Walkthrough",
                walkthrough: {
                    input: "nums = [4, 2, 5, 7], goal: even values at even indices, odd values at odd indices",
                    steps: [
                        { i: 0, num: 4, complement: "index 0 (even) — already even ✓", found: true, action: "nums[0]=4 is even and sits at even index 0 — leave it" },
                        { i: 1, num: 2, complement: "index 1 (odd) — currently even ✗", found: false, action: "nums[1]=2 is even but sits at odd index 1 — needs a fix" },
                        { i: 2, num: 5, complement: "advance evenPtr to find a slot", found: false, action: "Scan forward from evenPtr for the next even-indexed slot holding an odd value" },
                        { i: 3, num: 7, complement: "swap nums[1] and nums[3]", found: true, action: "Swap the misplaced even (2) with the odd (7) — both land correctly" },
                    ],
                    output: "Return [4, 7, 5, 2] — evens at even indices, odds at odd indices",
                },
            },
            {
                title: "Interview Insight",
                content:
                    "Parity permutation is really a two-pointer partitioning problem wearing a costume. The same \"advance a pointer only through the slots you care about, swap on mismatch\" idea powers Dutch National Flag (sort 0s/1s/2s), moving zeroes to the end, and even quicksort's partition step. Once you see it as \"two independent pointers walking their own lane,\" you stop needing to memorize each variant separately.",
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
        ],
        code: `function sortArrayByParity(nums: number[]): number[] {
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
}`,
    },

    // Next post — just add a new key here, e.g.:
    // "sliding-window-cheatsheet": {
    //     title: "Sliding Window Cheatsheet",
    //     tag: "Sliding Window",
    //     date: "Aug 2026",
    //     readTime: "8 min read",
    //     excerpt: "A quick-reference mental model for fixed vs. variable size windows.",
    //     sections: [ ... ],
    //     code: `...`,
    // },
};
