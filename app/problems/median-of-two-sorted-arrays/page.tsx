export const metadata = {
    title: "Median of Two Sorted Arrays Explained | Binary Search Pattern",
    description:
        "Master Median of Two Sorted Arrays using Binary Search on partitions. Learn the intuition, partition logic, and interview strategy behind LeetCode 4.",
    keywords: [
        "median of two sorted arrays",
        "leetcode 4 explained",
        "binary search partition",
        "advanced binary search",
        "median interview question",
        "binary search pattern"
    ]
};
export default function MedianOfTwoSortedArraysPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                        Binary Search
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700">
                        Hard
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Median of Two Sorted Arrays
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn one of the most famous Binary Search interview problems
                    and understand how searching for the correct partition leads
                    to an O(log(min(m,n))) solution.
                </p>
            </div>

            {/* Metadata */}
            <section className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Pattern</h3>
                    <p className="text-muted-foreground">
                        Binary Search on Partition
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Time Complexity</h3>
                    <p className="text-muted-foreground">
                        O(log(min(m,n)))
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Space Complexity</h3>
                    <p className="text-muted-foreground">
                        O(1)
                    </p>
                </div>
            </section>

            {/* Why This Problem Matters */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why This Problem Matters
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Median of Two Sorted Arrays is considered one of the most
                    challenging and important Binary Search interview problems.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Most candidates immediately think about merging the arrays,
                    but interviewers expect a more efficient solution.
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    The challenge is not finding the median. The challenge is
                    finding it without merging the arrays.
                </blockquote>

                <p className="leading-8 text-muted-foreground mt-4">
                    This problem teaches an advanced concept:
                    Binary Search can be applied to positions and partitions,
                    not just values.
                </p>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    nums1 = [1,3]
                    <br />
                    nums2 = [2]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Combined sorted array would be:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [1,2,3]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Median = 2
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    The challenge is finding this answer without actually
                    creating the combined array.
                </p>
            </section>

            {/* Brute Force */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Obvious Approach
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Merge both arrays into one sorted array.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    nums1 + nums2
                    <br />
                    ↓
                    <br />
                    Sort
                    <br />
                    ↓
                    <br />
                    Find Median
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    While correct, this ignores the fact that both arrays are
                    already sorted.
                </p>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    We do not actually need the merged array.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    We only need the middle position.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Left Half
                    <br />
                    |
                    <br />
                    Right Half
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    If we can correctly partition the arrays into equal halves,
                    the median becomes easy to calculate.
                </p>
            </section>

            {/* Partition Idea */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Partition Insight
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    nums1 = [1,3]
                    <br />
                    nums2 = [2,4]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Imagine splitting both arrays into:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Left Side
                    <br />
                    |
                    <br />
                    Right Side
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    We want:
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Equal number of elements on both sides</li>
                    <li>
                        Largest element on the left ≤ Smallest element on the right
                    </li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    Once these conditions hold, we have found the correct median.
                </p>
            </section>

            {/* Binary Search Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Binary Search Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Instead of searching for a value, we search for the correct
                    partition position.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Partition Too Far Left
                    <br />
                    →
                    <br />
                    Move Right
                </div>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Partition Too Far Right
                    <br />
                    →
                    <br />
                    Move Left
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    This creates a monotonic search space, making Binary Search
                    possible.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <p className="mb-4">
                    Consider Binary Search on Partition whenever you see:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Two sorted arrays</li>
                    <li>Median problems</li>
                    <li>Order statistics</li>
                    <li>Balanced partitions</li>
                    <li>Need better than O(n)</li>
                </ul>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Advanced Binary Search</li>
                        <li>✓ Partition Logic</li>
                        <li>✓ Sorted Array Reasoning</li>
                        <li>✓ Mathematical Thinking</li>
                        <li>✓ Hard-Level Optimization</li>
                    </ul>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Common Mistakes
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold">
                            Merging The Arrays
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Correct but fails to achieve the required efficiency.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Binary Searching Values
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            The search is performed on partition positions, not
                            element values.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Ignoring Edge Cases
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Empty arrays and uneven lengths require careful handling.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Problems */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Related Problems
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Binary Search</li>
                    <li>Search Insert Position</li>
                    <li>Find Peak Element</li>
                    <li>Kth Smallest Element in Sorted Matrix</li>
                    <li>Split Array Largest Sum</li>
                    <li>Find Median from Data Stream</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Statistical analysis systems</li>
                    <li>Large-scale data processing</li>
                    <li>Database query optimization</li>
                    <li>Search infrastructure</li>
                    <li>Distributed computing systems</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ This is an advanced Binary Search problem.</li>
                    <li>✓ Search partitions, not values.</li>
                    <li>✓ Correct partition determines the median.</li>
                    <li>✓ Sorted arrays make logarithmic search possible.</li>
                    <li>✓ One of the most important hard interview questions.</li>
                </ul>
            </section>
        </main>
    );
}