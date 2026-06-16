export default function ThreeSumPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
                        Two Pointers
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                        Medium
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    3Sum
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn how sorting and the Two Pointers pattern transform a
                    brute-force cubic solution into an efficient quadratic-time
                    algorithm.
                </p>
            </div>

            {/* Metadata */}
            <section className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Pattern</h3>
                    <p className="text-muted-foreground">
                        Two Pointers + Sorting
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Time Complexity</h3>
                    <p className="text-muted-foreground">O(n²)</p>
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
                    3Sum is one of the most famous interview problems and serves
                    as a gateway to advanced Two Pointer techniques.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Many candidates initially solve it using three nested loops.
                    While correct, that approach quickly becomes too slow for
                    larger inputs.
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    The real challenge is recognizing how sorting can reduce the
                    search space dramatically.
                </blockquote>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Given an integer array, find all unique triplets whose sum
                    equals zero.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    nums = [-1,0,1,2,-1,-4]
                </div>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Output:
                    <br />
                    [-1,-1,2]
                    <br />
                    [-1,0,1]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The goal is not just finding triplets, but avoiding duplicate
                    answers.
                </p>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    If the array is sorted, fixing one number converts the problem
                    into a Two Sum problem.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [-4,-1,-1,0,1,2]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Suppose we fix:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    -1
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Now we only need two remaining numbers whose sum equals +1.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This is exactly the Two Sum II problem.
                </p>
            </section>

            {/* Brute Force Thinking */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Brute Force Thinking
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A straightforward solution tries every possible triplet.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Choose first element</li>
                    <li>Choose second element</li>
                    <li>Choose third element</li>
                    <li>Check whether the sum equals zero</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    This requires O(n³) time and becomes inefficient quickly.
                </p>
            </section>

            {/* Two Pointer Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Two Pointers Insight
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Sort the array first.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Fix nums[i]
                    <br />
                    left = i + 1
                    <br />
                    right = n - 1
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Compute:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    nums[i] + nums[left] + nums[right]
                </div>

                <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">
                    <li>Sum too small → Move left pointer</li>
                    <li>Sum too large → Move right pointer</li>
                    <li>Sum equals zero → Store answer</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    This eliminates huge portions of the search space.
                </p>
            </section>

            {/* Handling Duplicates */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Handling Duplicates
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Duplicate triplets are the trickiest part of this problem.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    [-1,-1,-1,2,2]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Without skipping duplicates, identical triplets may be added
                    multiple times.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    After finding a valid triplet, continue moving pointers until
                    a different value appears.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <p className="mb-4">
                    Consider this approach whenever you see:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Sorted arrays</li>
                    <li>Triplet problems</li>
                    <li>Target sum questions</li>
                    <li>Unique combinations</li>
                    <li>Pair searching after fixing one element</li>
                </ul>
            </section>

            {/* Why It Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why It Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Sorting allows us to make informed decisions about pointer
                    movement.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Once an element is fixed, Two Pointers efficiently searches
                    for the remaining pair.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Each pointer moves only forward or backward, leading to an
                    O(n²) solution.
                </p>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Interviewers love this question because it tests multiple
                    concepts simultaneously.
                </p>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Sorting Strategy</li>
                        <li>✓ Two Pointer Pattern</li>
                        <li>✓ Duplicate Handling</li>
                        <li>✓ Optimization Skills</li>
                        <li>✓ Problem Decomposition</li>
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
                            Forgetting Duplicate Checks
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Duplicate values can generate duplicate triplets.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Using Three Nested Loops
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            This approach is correct but too slow.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Moving Both Pointers Incorrectly
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Pointer movement should depend on whether the current sum
                            is too large or too small.
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
                    <li>Two Sum II</li>
                    <li>4Sum</li>
                    <li>3Sum Closest</li>
                    <li>Container With Most Water</li>
                    <li>Valid Palindrome</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Portfolio optimization</li>
                    <li>Financial analysis</li>
                    <li>Recommendation systems</li>
                    <li>Data matching algorithms</li>
                    <li>Fraud detection systems</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ Sort first, then apply Two Pointers.</li>
                    <li>✓ Fix one value and reduce to Two Sum.</li>
                    <li>✓ Handle duplicates carefully.</li>
                    <li>✓ Improve O(n³) to O(n²).</li>
                    <li>✓ This is one of the most important interview problems.</li>
                </ul>
            </section>
        </main>
    );
}