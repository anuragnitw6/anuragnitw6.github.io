export default function BinarySearchPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                        Binary Search
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        Easy
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Binary Search
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn the Binary Search pattern and discover how repeatedly
                    eliminating half of the search space leads to extremely fast
                    algorithms.
                </p>
            </div>

            {/* Metadata */}
            <section className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Pattern</h3>
                    <p className="text-muted-foreground">Binary Search</p>
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
                    Binary Search is one of the most important algorithms in
                    computer science.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    It appears in coding interviews, databases, operating
                    systems, search engines, and countless real-world
                    applications.
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    Instead of checking every element one by one, Binary Search
                    repeatedly eliminates half of the remaining search space.
                </blockquote>

                <p className="leading-8 text-muted-foreground mt-4">
                    This simple idea transforms a slow linear search into one of
                    the fastest search techniques available.
                </p>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Given a sorted array and a target value, determine whether the
                    target exists and return its position.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    nums = [1,3,5,7,9,11]
                    <br />
                    target = 7
                </div>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Output = 3
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The challenge is finding the target without scanning the
                    entire array.
                </p>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    The array is sorted.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [1,3,5,7,9,11]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    When we examine the middle element, we immediately know which
                    half cannot contain the answer.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Middle = 5
                    <br />
                    Target = 7
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Since 7 is greater than 5, everything to the left can be
                    ignored.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Half of the search space disappears instantly.
                </p>
            </section>

            {/* Linear Search Thinking */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Linear Search Thinking
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A beginner might check every element one by one.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    1 → 3 → 5 → 7
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    This requires O(n) time because every element may need to be
                    examined.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    For large datasets, this becomes inefficient.
                </p>
            </section>

            {/* Binary Search Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Binary Search Insight
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    left = 0
                    <br />
                    right = n - 1
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Calculate the middle element.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    mid = left + (right - left) / 2
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Compare the middle value with the target.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Target found → Return answer</li>
                    <li>Target smaller → Search left half</li>
                    <li>Target larger → Search right half</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    Repeat until the target is found or the search space becomes
                    empty.
                </p>
            </section>

            {/* Why It Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Binary Search Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Every iteration removes half of the remaining elements.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    1024 elements
                    <br />
                    ↓
                    <br />
                    512
                    <br />
                    ↓
                    <br />
                    256
                    <br />
                    ↓
                    <br />
                    128
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The search space shrinks extremely quickly.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This is why Binary Search runs in O(log n) time.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <p className="mb-4">
                    Consider Binary Search whenever you see:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Sorted arrays</li>
                    <li>Sorted search space</li>
                    <li>Find a position</li>
                    <li>Find first or last occurrence</li>
                    <li>Search in a monotonic structure</li>
                    <li>Minimize or maximize a value</li>
                </ul>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Binary Search Fundamentals</li>
                        <li>✓ Pointer Management</li>
                        <li>✓ Sorted Array Recognition</li>
                        <li>✓ Boundary Conditions</li>
                        <li>✓ Complexity Analysis</li>
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
                            Incorrect Mid Calculation
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Using (left + right) / 2 may overflow in some languages.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Wrong Loop Condition
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Boundary mistakes are among the most common Binary Search
                            bugs.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Forgetting The Array Must Be Sorted
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Binary Search relies entirely on sorted order.
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
                    <li>Search Insert Position</li>
                    <li>First Bad Version</li>
                    <li>Sqrt(x)</li>
                    <li>Guess Number Higher or Lower</li>
                    <li>Find Peak Element</li>
                    <li>Search in Rotated Sorted Array</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Database indexing</li>
                    <li>Search engines</li>
                    <li>Operating systems</li>
                    <li>Version control systems</li>
                    <li>Large-scale data retrieval</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ Binary Search requires a sorted search space.</li>
                    <li>✓ Each iteration removes half the candidates.</li>
                    <li>✓ Time complexity is O(log n).</li>
                    <li>✓ Boundary handling is critical.</li>
                    <li>✓ This is one of the most important interview patterns.</li>
                </ul>
            </section>
        </main>
    );
}