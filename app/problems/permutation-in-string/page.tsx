export default function PermutationInStringPage() {
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
                    Permutation in String
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn how Fixed Sliding Window and Frequency Counting work
                    together to efficiently detect permutations inside a string.
                </p>
            </div>

            {/* Metadata */}
            <section className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">Pattern</h3>
                    <p className="text-muted-foreground">
                        Fixed Sliding Window
                    </p>
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
                    Permutation in String is one of the most important frequency
                    counting interview problems.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    The question appears to be about permutations, but the real
                    lesson is learning how to compare character frequencies
                    efficiently.
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    A permutation is simply another arrangement of the same
                    characters.
                </blockquote>

                <p className="leading-8 text-muted-foreground mt-4">
                    Once you understand that idea, the problem becomes a frequency
                    matching challenge rather than a permutation generation
                    problem.
                </p>
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
                    s1 = "ab"
                    <br />
                    s2 = "eidbaooo"
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Determine whether s2 contains any permutation of s1.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    "ba" exists inside s2
                    <br />
                    Therefore Answer = true
                </div>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <p className="leading-8 text-muted-foreground">
                    We do not need to generate every permutation.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    For example:
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    "ab"
                    <br />
                    "ba"
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Both strings contain exactly the same characters with the same
                    frequencies.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Therefore, if a window in s2 has identical frequency counts
                    as s1, we have found a valid permutation.
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
                    <li>Generate every permutation of s1</li>
                    <li>Search each permutation inside s2</li>
                    <li>Return true if any match exists</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    This quickly becomes impossible because the number of
                    permutations grows factorially.
                </p>
            </section>

            {/* Sliding Window Insight */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Sliding Window Insight
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Every valid permutation must have the same length as s1.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    s1 = "abc"
                    <br />
                    Window Size = 3
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Instead of checking all possible substrings, maintain a fixed
                    window of size three and compare frequency counts.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Slide →
                    <br />
                    Remove Left Character
                    <br />
                    Add Right Character
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    This allows us to examine every candidate efficiently.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <p className="mb-4">
                    Consider this pattern whenever you see:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Permutation detection</li>
                    <li>Anagram matching</li>
                    <li>Frequency comparison</li>
                    <li>Fixed-size substring</li>
                    <li>Character counting</li>
                </ul>
            </section>

            {/* Why Sliding Window Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Sliding Window Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Every candidate substring must have length equal to s1.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Rather than rebuilding frequency counts from scratch, we
                    update the current window as it moves.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This dramatically reduces repeated work and achieves linear
                    performance.
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
                        <li>✓ Frequency Counting</li>
                        <li>✓ HashMap / Array Usage</li>
                        <li>✓ Sliding Window Skills</li>
                        <li>✓ Pattern Recognition</li>
                        <li>✓ Optimization Thinking</li>
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
                            Generating Permutations
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            The solution never requires constructing permutations.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Ignoring Frequency Counts
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Matching characters alone is insufficient. Frequencies
                            must also match.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Rebuilding Every Window
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Sliding Window exists to avoid recalculating everything
                            repeatedly.
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
                    <li>Find All Anagrams in a String</li>
                    <li>Minimum Window Substring</li>
                    <li>Longest Repeating Character Replacement</li>
                    <li>Valid Anagram</li>
                    <li>Group Anagrams</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real-World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Text analysis</li>
                    <li>Search engines</li>
                    <li>DNA sequence matching</li>
                    <li>Pattern recognition</li>
                    <li>Data validation systems</li>
                    <li>Cybersecurity monitoring</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ This is a Fixed Sliding Window problem.</li>
                    <li>✓ Frequency counts are more important than order.</li>
                    <li>✓ Never generate actual permutations.</li>
                    <li>✓ Sliding Window eliminates repeated computation.</li>
                    <li>✓ This pattern appears frequently in interview questions.</li>
                </ul>
            </section>
        </main>
    );
}