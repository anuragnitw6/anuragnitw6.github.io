export default function ValidPalindromePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
                        Two Pointers
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        Easy
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Valid Palindrome
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn how the Two Pointers pattern can efficiently determine
                    whether a string reads the same forwards and backwards while
                    ignoring non-alphanumeric characters.
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
                    Valid Palindrome is one of the most common Two Pointer
                    interview questions.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    At first glance the problem looks like a simple string
                    comparison, but it teaches an important concept:
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    Process information from both ends simultaneously.
                </blockquote>

                <p className="leading-8 text-muted-foreground mt-4">
                    This idea appears in many advanced array and string
                    interview questions.
                </p>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Determine whether a string remains the same when read from
                    left to right and right to left.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    "A man, a plan, a canal: Panama"
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    After removing spaces, punctuation, and converting to
                    lowercase:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    amanaplanacanalpanama
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The string reads the same in both directions, making it a
                    palindrome.
                </p>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A palindrome is symmetric.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    racecar
                    <br />
                    ↑     ↑
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The first and last characters must match.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Then the second and second-last characters must match.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This naturally suggests comparing characters from both ends.
                </p>
            </section>

            {/* Brute Force Thinking */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Brute Force Thinking
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A beginner might:
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Create a cleaned version of the string</li>
                    <li>Reverse it</li>
                    <li>Compare both strings</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    While correct, this requires additional memory.
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
                    Compare characters from both ends.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Match → Move Both Pointers
                    <br />
                    Mismatch → Not a Palindrome
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Ignore spaces, punctuation, and symbols while processing.
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
                    <li>Palindrome checking</li>
                    <li>Symmetric structures</li>
                    <li>Comparisons from both ends</li>
                    <li>Sorted arrays</li>
                    <li>Pair matching problems</li>
                </ul>
            </section>

            {/* Why Two Pointers Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Two Pointers Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Every comparison eliminates two positions at once.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Each character is visited at most once.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This results in a linear-time solution with constant
                    extra memory.
                </p>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Interviewers use this problem to test:
                </p>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Two Pointer Pattern Recognition</li>
                        <li>✓ String Processing</li>
                        <li>✓ Edge Case Handling</li>
                        <li>✓ Space Optimization</li>
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
                            Forgetting Case Conversion
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Uppercase and lowercase letters should be treated as
                            identical.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Comparing Symbols
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Non-alphanumeric characters should be skipped.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Using Extra Memory Unnecessarily
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Two Pointers allows an O(1) space solution.
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
                    <li>Valid Palindrome II</li>
                    <li>Longest Palindromic Substring</li>
                    <li>Palindrome Linked List</li>
                    <li>Two Sum II</li>
                    <li>Container With Most Water</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real-World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Text processing systems</li>
                    <li>DNA sequence analysis</li>
                    <li>Data validation tools</li>
                    <li>Pattern recognition software</li>
                    <li>Search and indexing systems</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ This is a classic Two Pointers problem.</li>
                    <li>✓ Process both ends simultaneously.</li>
                    <li>✓ Skip non-alphanumeric characters.</li>
                    <li>✓ Convert characters to a common case.</li>
                    <li>✓ Achieve O(n) time and O(1) space.</li>
                </ul>
            </section>
        </main>
    );
}