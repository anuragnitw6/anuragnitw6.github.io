export default function ContainerWithMostWaterPage() {
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
                    Container With Most Water
                </h1>

                <p className="text-muted-foreground mt-4 text-lg">
                    Learn how the Two Pointers pattern eliminates unnecessary
                    comparisons and finds the maximum water container in linear
                    time.
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
                    Container With Most Water is one of the most elegant Two
                    Pointer interview problems.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Many candidates immediately think about checking every pair of
                    lines. While correct, that approach performs unnecessary work.
                </p>

                <blockquote className="border-l-4 pl-4 mt-4 italic">
                    The key insight is understanding which pointer movement can
                    actually improve the answer.
                </blockquote>

                <p className="leading-8 text-muted-foreground mt-4">
                    Once you understand that idea, the solution becomes
                    surprisingly simple.
                </p>
            </section>

            {/* Problem Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Problem Overview
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Each element represents the height of a vertical line.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                    height = [1,8,6,2,5,4,8,3,7]
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    Select two lines that form a container capable of holding the
                    maximum amount of water.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Maximum Area = 49
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The width comes from the distance between the lines, while the
                    height is determined by the shorter line.
                </p>
            </section>

            {/* Key Observation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    The Key Observation
                </h2>

                <div className="bg-muted rounded-lg p-4 font-mono">
                    Area = Width × Min(LeftHeight, RightHeight)
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The shorter line always limits the amount of water.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Even if one side is extremely tall, water spills over the
                    shorter side.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    Height = Min(8, 3)
                    <br />
                    Width = 5
                    <br />
                    Area = 15
                </div>
            </section>

            {/* Brute Force Thinking */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Brute Force Thinking
                </h2>

                <p className="leading-8 text-muted-foreground">
                    A beginner might examine every pair of lines.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Choose first line</li>
                    <li>Choose second line</li>
                    <li>Calculate area</li>
                    <li>Track maximum area</li>
                </ul>

                <p className="leading-8 text-muted-foreground mt-6">
                    This requires O(n²) comparisons.
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
                    Start with the widest possible container.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Compute the current area.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Then move the pointer corresponding to the shorter line.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    If Left Height &lt; Right Height
                    <br />
                    Move Left Pointer
                    <br />
                    <br />
                    Else
                    <br />
                    Move Right Pointer
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    This is the crucial observation that makes the algorithm work.
                </p>
            </section>

            {/* Why Move The Smaller Pointer */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Move The Smaller Pointer?
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Suppose the left height is smaller.
                </p>

                <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                    3 ............ 8
                </div>

                <p className="leading-8 text-muted-foreground mt-6">
                    The area is limited by height 3.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    Moving the taller pointer only decreases width while keeping
                    the limiting height unchanged.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    The only chance to improve the area is finding a taller
                    replacement for the shorter line.
                </p>
            </section>

            {/* Pattern Recognition */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Pattern Recognition
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>Need maximum or minimum from two ends</li>
                    <li>Opposite-side comparisons</li>
                    <li>Pair-based optimization</li>
                    <li>Linear scan opportunity</li>
                    <li>Eliminating impossible candidates</li>
                </ul>
            </section>

            {/* Why Two Pointers Works */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Two Pointers Works
                </h2>

                <p className="leading-8 text-muted-foreground">
                    Every movement eliminates a set of impossible solutions.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    We never need to revisit a pointer position once it has been
                    processed.
                </p>

                <p className="leading-8 text-muted-foreground mt-4">
                    This allows us to reduce O(n²) work to O(n).
                </p>
            </section>

            {/* Interview Perspective */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Interview Perspective
                </h2>

                <div className="border rounded-lg p-6 mt-6">
                    <ul className="space-y-3">
                        <li>✓ Two Pointer Pattern Recognition</li>
                        <li>✓ Greedy Reasoning</li>
                        <li>✓ Optimization Skills</li>
                        <li>✓ Mathematical Observation</li>
                        <li>✓ Complexity Reduction</li>
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
                            Moving The Larger Pointer
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            This cannot increase the limiting height and usually makes
                            the area smaller.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Ignoring Width
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            Area depends on both height and distance.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Using Brute Force
                        </h3>

                        <p className="text-muted-foreground mt-2">
                            The problem is specifically designed to reward pointer
                            optimization.
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
                    <li>3Sum</li>
                    <li>Trapping Rain Water</li>
                    <li>Valid Palindrome</li>
                    <li>Squares of a Sorted Array</li>
                </ul>
            </section>

            {/* Real World Applications */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Real World Applications
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Resource allocation systems</li>
                    <li>Capacity planning</li>
                    <li>Optimization algorithms</li>
                    <li>Data visualization analysis</li>
                    <li>Geometric computation</li>
                </ul>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Key Takeaways
                </h2>

                <ul className="space-y-3">
                    <li>✓ This is a classic Two Pointers problem.</li>
                    <li>✓ Area depends on width and minimum height.</li>
                    <li>✓ Always move the smaller pointer.</li>
                    <li>✓ Eliminate impossible candidates efficiently.</li>
                    <li>✓ Reduce O(n²) to O(n).</li>
                </ul>
            </section>
        </main>
    );
}