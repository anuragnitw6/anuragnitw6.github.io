export default function MinimumWindowSubstringPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                        Sliding Window
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700">
                        Hard
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Minimum Window Substring
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn the Variable Sliding Window pattern and discover how to
                    dynamically expand and shrink a window while satisfying a
                    required condition.
                </p>
            </div>

            {/* Metadata */}
            <section className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Pattern</h3>
                    <p className="text-muted-foreground">
                        Variable Sliding Window
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Time Complexity</h3>
                    <p className="text-muted-foreground">O(n)</p>
                </div>

                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Space Complexity</h3>
                    <p className="text-muted-foreground">O(m)</p>
                </div>
            </section>

            {/* Why This Problem Matters */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why This Problem Matters
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Minimum Window Substring is one of the most important and
                    challenging Sliding Window interview problems.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Unlike simpler window problems, this question requires
                    maintaining character frequencies while dynamically expanding
                    and shrinking the window.
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    The goal is not finding a valid window. The goal is finding
                    the smallest valid window.
                </blockquote>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Given two strings:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    s = "ADOBECODEBANC"
                    <br />
                    t = "ABC"
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Find the smallest substring in s that contains all characters
                    from t.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Output:
                    <br />
                    "BANC"
                </div>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    We do not care about extra characters.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    We only care whether the current window contains all required
                    characters from t.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    Required:
                    <br />
                    A, B, C
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    As soon as a window satisfies all requirements, we try to
                    shrink it to find a smaller valid answer.
                </p>
            </section>

            {/* Brute Force Thinking */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Brute Force Thinking
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A beginner might generate every possible substring.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Generate substring</li>
                    <li>Count characters</li>
                    <li>Check validity</li>
                    <li>Track smallest answer</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    This quickly becomes expensive because there are too many
                    overlapping substrings.
                </p>
            </section>

            {/* Sliding Window Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Sliding Window Insight
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    Expand Right Pointer
                    <br />
                    Until Window Becomes Valid
                </div>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Shrink Left Pointer
                    <br />
                    While Window Stays Valid
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    This creates a cycle:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Expand → Valid
                    <br />
                    Shrink → Still Valid
                    <br />
                    Shrink → Invalid
                    <br />
                    Expand Again
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    This process guarantees that every candidate minimum window is
                    examined.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <p className="mb-4">
                    Consider Variable Sliding Window whenever you see:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Smallest valid substring</li>
                    <li>Minimum length window</li>
                    <li>Contains all characters</li>
                    <li>Required frequencies</li>
                    <li>Dynamic constraints</li>
                </ul>
            </section>

            {/* Why Sliding Window Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Sliding Window Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Every character enters the window once.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Every character leaves the window once.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Because pointers only move forward, the solution runs in
                    linear time.
                </p>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <p className="leading-8 text-muted-foreground">
                    This problem is often considered the ultimate Sliding Window
                    interview question because it combines:
                </p>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Frequency Counting</li>
                        <li>✓ HashMap Usage</li>
                        <li>✓ Window Expansion</li>
                        <li>✓ Window Shrinking</li>
                        <li>✓ Optimization Skills</li>
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
                            Shrinking Too Early
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Only shrink after the window satisfies all requirements.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Ignoring Character Frequency
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Presence alone is not enough. Required counts must also
                            match.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Forgetting Duplicate Characters
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            If t contains multiple copies of a character, the window
                            must contain them as well.
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
                    <li>Longest Substring Without Repeating Characters</li>
                    <li>Permutation in String</li>
                    <li>Find All Anagrams in a String</li>
                    <li>Longest Repeating Character Replacement</li>
                    <li>Minimum Size Subarray Sum</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real-World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Search engines</li>
                    <li>Log analysis</li>
                    <li>DNA sequence matching</li>
                    <li>Text processing</li>
                    <li>Pattern recognition systems</li>
                    <li>Streaming analytics</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ This is a Variable Sliding Window problem.</li>
                    <li>✓ The goal is finding the smallest valid window.</li>
                    <li>✓ Frequency counts matter.</li>
                    <li>✓ Expand first, then shrink.</li>
                    <li>✓ This is one of the most important interview patterns.</li>
                </ul>
            </section>
        </main>
    );
}