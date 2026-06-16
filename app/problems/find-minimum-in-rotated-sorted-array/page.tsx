export const metadata = {
    title: "Find Minimum in Rotated Sorted Array Explained | Binary Search Pattern",
    description:
        "Learn how Binary Search finds the minimum element in a rotated sorted array. Understand pivot detection, rotated array logic, and interview strategies.",
    keywords: [
        "find minimum in rotated sorted array",
        "leetcode 153 explained",
        "binary search rotated array",
        "pivot detection",
        "rotated sorted array tutorial",
        "binary search pattern"
    ]
};
export default function FindMinimumInRotatedSortedArrayPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                        Binary Search
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                        Medium
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Find Minimum in Rotated Sorted Array
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn how Binary Search can identify the smallest element in a
                    rotated sorted array by locating the rotation point instead of
                    scanning every value.
                </p>
            </div>

            {/* Metadata */}
            <section className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Pattern</h3>
                    <p className="text-muted-foreground">
                        Binary Search on Rotated Array
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Time Complexity</h3>
                    <p className="text-muted-foreground">O(log n)</p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Space Complexity</h3>
                    <p className="text-muted-foreground">O(1)</p>
                </div>
            </section>

            {/* Why This Problem Matters */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why This Problem Matters
                </h2>

                <p className="leading-8 text-muted-foreground">
                    This problem introduces one of the most important Binary Search
                    interview concepts:
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    The array is not fully sorted, but Binary Search still works.
                </blockquote>

                <p className="leading-8 text-muted-foreground mt-4">
                    Many developers assume Binary Search only works on perfectly
                    sorted arrays.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This problem proves that Binary Search can also be applied to
                    partially sorted structures when a predictable pattern exists.
                </p>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    nums = [4,5,6,7,0,1,2]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The array was originally sorted:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [0,1,2,4,5,6,7]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Then rotated around some pivot.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Our goal is to find the minimum element efficiently.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Answer = 0
                </div>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A rotated sorted array contains two sorted portions.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [4,5,6,7 | 0,1,2]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The minimum element is always located at the rotation point.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Therefore, instead of searching for the minimum value, we can
                    search for the position where the rotation occurred.
                </p>
            </section>

            {/* Brute Force */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Brute Force Thinking
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A straightforward solution scans every element and keeps track
                    of the smallest value.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    min = nums[0]
                    <br />
                    Check Every Element
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    This works, but requires O(n) time.
                </p>
            </section>

            {/* Binary Search Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Binary Search Insight
                </h2>

                <p className="leading-8 text-muted-foreground">
                    One side of the array is always properly sorted.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [4,5,6,7,0,1,2]
                    ↑
                    mid
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    By comparing the middle element with the right boundary, we
                    can determine which half contains the minimum.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>If mid is greater than right, minimum lies right.</li>
                    <li>If mid is less than right, minimum lies left.</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    This allows us to discard half of the search space every
                    iteration.
                </p>
            </section>

            {/* Why Binary Search Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Binary Search Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    The rotation creates a monotonic structure.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Large Values
                    <br />
                    ↓
                    <br />
                    Rotation Point
                    <br />
                    ↓
                    <br />
                    Small Values
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Binary Search exploits this structure to quickly narrow the
                    search toward the minimum element.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <p className="mb-4">
                    Consider this Binary Search variation whenever you see:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Rotated sorted arrays</li>
                    <li>Pivot detection</li>
                    <li>Find minimum or maximum efficiently</li>
                    <li>Partially sorted structures</li>
                    <li>O(log n) requirement</li>
                </ul>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Binary Search Beyond Sorted Arrays</li>
                        <li>✓ Pivot Detection</li>
                        <li>✓ Rotated Array Logic</li>
                        <li>✓ Boundary Handling</li>
                        <li>✓ O(log n) Optimization</li>
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
                            Treating It Like A Normal Sorted Array
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            The rotation breaks the normal Binary Search assumptions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Using Linear Scan
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Correct but misses the intended Binary Search solution.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Comparing Wrong Boundaries
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            The comparison with the right boundary is what reveals the
                            correct search direction.
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
                    <li>Search in Rotated Sorted Array</li>
                    <li>Find Peak Element</li>
                    <li>Search Insert Position</li>
                    <li>Search a 2D Matrix</li>
                    <li>Median of Two Sorted Arrays</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Circular buffers</li>
                    <li>Rotating logs</li>
                    <li>Distributed systems</li>
                    <li>Database indexing</li>
                    <li>Search infrastructure</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ Rotated arrays still support Binary Search.</li>
                    <li>✓ The minimum value exists at the rotation point.</li>
                    <li>✓ One half is always sorted.</li>
                    <li>✓ Compare middle with the right boundary.</li>
                    <li>✓ Achieve O(log n) time complexity.</li>
                </ul>
            </section>
        </main>
    );
}