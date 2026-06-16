export default function TwoSumIIPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
                        Two Pointers
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        Medium
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Two Sum II - Input Array Is Sorted
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn how a sorted array allows us to replace HashMaps with
                    the powerful Two Pointers technique and solve the problem
                    using constant extra space.
                </p>
            </div>

            {/* Metadata */}
            <section className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Pattern</h3>
                    <p className="text-muted-foreground">Two Pointers</p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Time Complexity</h3>
                    <p className="text-muted-foreground">O(n)</p>
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
                    Two Sum II is the natural follow-up to the classic Two Sum
                    problem.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    The original problem typically uses a HashMap to find
                    complements efficiently.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    However, this version introduces an important new constraint:
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    The array is already sorted.
                </blockquote>

                <p className="leading-8 text-muted-foreground mt-4">
                    This single detail completely changes the optimal solution and
                    introduces one of the most useful interview patterns:
                    Two Pointers.
                </p>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Given a sorted array and a target value, find two numbers
                    whose sum equals the target.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    numbers = [2,7,11,15]
                    <br />
                    target = 9
                </div>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Answer:
                    <br />
                    [1,2]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The returned indices are 1-indexed according to the problem
                    statement.
                </p>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Because the array is sorted, we know how the sum changes when
                    we move either pointer.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [2,7,11,15]
                    <br />
                    ↑       ↑
                    <br />
                    left   right
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    If the current sum is too large, we must decrease it.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Since the array is sorted, moving the right pointer left will
                    always reduce the sum.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Similarly, if the sum is too small, moving the left pointer
                    right will increase the sum.
                </p>
            </section>

            {/* Brute Force Thinking */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Brute Force Thinking
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A beginner might compare every pair of elements.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Pick first element</li>
                    <li>Try every remaining element</li>
                    <li>Check if sum equals target</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    This approach works but wastes the fact that the array is
                    already sorted.
                </p>
            </section>

            {/* Two Pointer Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Two Pointers Insight
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    left = 0
                    <br />
                    right = n - 1
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Start from both ends of the array.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Sum Too Small → Move Left Pointer
                    <br />
                    Sum Too Large → Move Right Pointer
                    <br />
                    Sum Equal → Answer Found
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Every move eliminates impossible candidates, making the
                    search highly efficient.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <p className="mb-4">
                    Consider Two Pointers whenever you see:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Sorted array</li>
                    <li>Pair finding problems</li>
                    <li>Target sum conditions</li>
                    <li>Opposite-end processing</li>
                    <li>Need for constant space</li>
                </ul>
            </section>

            {/* Why Two Pointers Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Two Pointers Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Sorting provides information about how values change.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Moving pointers is not random. Each movement is guaranteed to
                    move closer to the answer.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Every element is processed at most once, resulting in a
                    linear-time solution.
                </p>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Interviewers use this problem to test whether candidates can
                    identify opportunities to replace HashMaps with a more optimal
                    approach.
                </p>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Two Pointer Pattern Recognition</li>
                        <li>✓ Sorted Array Optimization</li>
                        <li>✓ Space Optimization</li>
                        <li>✓ Efficient Search Strategy</li>
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
                            Using a HashMap Immediately
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            While valid, it ignores the sorted nature of the array and
                            uses unnecessary extra space.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Moving the Wrong Pointer
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Pointer movement should always depend on whether the sum
                            is too large or too small.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Forgetting 1-Based Indexing
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            The problem expects positions starting from 1 rather than
                            0.
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
                    <li>Two Sum</li>
                    <li>3Sum</li>
                    <li>4Sum</li>
                    <li>Container With Most Water</li>
                    <li>Valid Palindrome</li>
                    <li>Squares of a Sorted Array</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real-World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Financial pair analysis</li>
                    <li>Recommendation systems</li>
                    <li>Search optimization</li>
                    <li>Data matching algorithms</li>
                    <li>Inventory balancing systems</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ This is a classic Two Pointers problem.</li>
                    <li>✓ Sorting enables pointer-based optimization.</li>
                    <li>✓ Constant extra space is achievable.</li>
                    <li>✓ Each pointer moves in only one direction.</li>
                    <li>✓ This pattern forms the basis of many advanced sum problems.</li>
                </ul>
            </section>
        </main>
    );
}