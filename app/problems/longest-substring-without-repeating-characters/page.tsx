export default function LongestSubstringWithoutRepeatingCharactersPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                        Sliding Window
                    </span>

                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                        Medium
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Longest Substring Without Repeating Characters
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn the Variable Sliding Window pattern and understand how
                    to dynamically expand and shrink a window while maintaining
                    unique characters.
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
                    <p className="text-muted-foreground">O(n)</p>
                </div>
            </section>

            {/* Why This Problem Matters */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why This Problem Matters
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Longest Substring Without Repeating Characters is one of the
                    most famous Sliding Window interview problems.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Unlike fixed-size window problems, the window size changes
                    dynamically based on the input.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This problem introduces a powerful idea:
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    Instead of restarting your search whenever a duplicate
                    appears, adjust the current window and continue processing.
                </blockquote>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Given a string, find the length of the longest substring
                    containing no repeated characters.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    Input: abcabcbb
                    <br />
                    Output: 3
                    <br />
                    Longest substring = abc
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The challenge is efficiently tracking which characters are
                    currently inside the active window.
                </p>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Whenever a duplicate character appears, the current window
                    becomes invalid.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    Current Window:
                    <br />
                    abc
                    <br />
                    <br />
                    Next Character:
                    <br />
                    b
                    <br />
                    <br />
                    New Window:
                    <br />
                    abcb
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Since the character 'b' appears twice, the window is no
                    longer valid.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Instead of rebuilding everything from scratch, we move the
                    left pointer until the duplicate disappears.
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
                    <li>Check for duplicates</li>
                    <li>Calculate length</li>
                    <li>Track maximum answer</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    While this works, many substrings overlap, leading to
                    unnecessary repeated work.
                </p>
            </section>

            {/* Sliding Window Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Sliding Window Insight
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    Window = abc
                    <br />
                    Next Character = b
                    <br />
                    <br />
                    Window = abcb
                    <br />
                    Duplicate Found
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Move the left pointer:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    bcb
                    <br />
                    Duplicate Still Exists
                </div>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    cb
                    <br />
                    Window Valid Again
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Continue expanding the window and updating the answer.
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
                    <li>Longest substring</li>
                    <li>Shortest substring</li>
                    <li>Distinct characters</li>
                    <li>Duplicate elements</li>
                    <li>Continuous range</li>
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
                    Since each character is processed at most twice, the solution
                    runs in linear time.
                </p>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Interviewers use this problem to evaluate whether candidates
                    can recognize overlapping work and maintain a dynamic window.
                </p>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Pattern Recognition</li>
                        <li>✓ HashSet Usage</li>
                        <li>✓ Window Management</li>
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
                            Restarting From Scratch
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            Many candidates rebuild the substring whenever a
                            duplicate appears.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Forgetting To Remove Characters
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            Characters leaving the window must also be removed from
                            the tracking structure.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Confusing Fixed and Variable Windows
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            This problem uses a variable-size window that expands and
                            shrinks dynamically.
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
                    <li>Longest Repeating Character Replacement</li>
                    <li>Minimum Window Substring</li>
                    <li>Permutation in String</li>
                    <li>Find All Anagrams in a String</li>
                    <li>Maximum Erasure Value</li>
                    <li>Longest Nice Substring</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real-World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Network packet analysis</li>
                    <li>Streaming systems</li>
                    <li>Text processing</li>
                    <li>Search engines</li>
                    <li>Log monitoring</li>
                    <li>Data compression</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ This is a Variable Sliding Window problem.</li>
                    <li>✓ Duplicates determine when the window must shrink.</li>
                    <li>✓ HashSets provide efficient duplicate detection.</li>
                    <li>✓ Every character is processed at most twice.</li>
                    <li>✓ This problem is a foundation for advanced Sliding Window questions.</li>
                </ul>
            </section>
        </main>
    );
}