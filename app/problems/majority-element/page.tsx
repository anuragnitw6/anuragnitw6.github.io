import React from "react";

export default function MajorityElementPage() {
    return (<main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */} <div className="mb-10"> <div className="flex flex-wrap gap-2 mb-4"> <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            Arrays </span>

            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                Easy
            </span>
        </div>

            <h1 className="text-4xl font-bold tracking-tight">
                Majority Element
            </h1>

            <p className="text-muted-foreground mt-4 text-lg">
                Learn how the Boyer-Moore Voting Algorithm finds the majority
                element in linear time using constant space, making it one
                of the most elegant interview algorithms.
            </p>
        </div>

        {/* Metadata */}
        <section className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Pattern</h3>
                <p className="text-muted-foreground">
                    Boyer-Moore Voting Algorithm
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
                Majority Element is one of the most famous array interview
                questions because it introduces a surprising optimization.
            </p>

            <p className="leading-8 text-muted-foreground mt-4">
                Most candidates immediately reach for a HashMap to count
                frequencies. While that works, interviewers often ask if
                the problem can be solved using constant extra space.
            </p>

            <blockquote className="border-l-4 pl-4 mt-4 italic">
                The real insight is that a majority element can never be
                completely canceled out by all other elements.
            </blockquote>
        </section>

        {/* Problem Overview */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
                Problem Overview
            </h2>

            <p className="leading-8 text-muted-foreground">
                Given an array of integers, find the element that appears
                more than ⌊n / 2⌋ times.
            </p>

            <div className="bg-muted rounded-lg p-4 font-mono mt-6">
                nums = [2,2,1,1,1,2,2]
            </div>

            <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                Output:
                <br />
                2
            </div>

            <p className="leading-8 text-muted-foreground mt-6">
                The problem guarantees that a majority element always
                exists.
            </p>
        </section>

        {/* Brute Force Thinking */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
                Brute Force Thinking
            </h2>

            <p className="leading-8 text-muted-foreground">
                A beginner might count the frequency of every element by
                scanning the array repeatedly.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Pick an element</li>
                <li>Count its occurrences</li>
                <li>Repeat for every element</li>
            </ul>

            <p className="leading-8 text-muted-foreground mt-6">
                This solution works but requires O(n²) time.
            </p>
        </section>

        {/* Better Approach */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
                Better Approach Using HashMap
            </h2>

            <p className="leading-8 text-muted-foreground">
                Store the frequency of each element in a HashMap.
            </p>

            <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                2 → 4
                <br />
                1 → 3
            </div>

            <p className="leading-8 text-muted-foreground mt-6">
                Once a frequency exceeds n/2, we have found the majority
                element.
            </p>

            <p className="leading-8 text-muted-foreground mt-4">
                This reduces the complexity to O(n) time but still requires
                O(n) additional memory.
            </p>
        </section>

        {/* Key Observation */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
                The Key Observation
            </h2>

            <p className="leading-8 text-muted-foreground">
                Since the majority element appears more than half the time,
                it survives every cancellation process.
            </p>

            <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                [2,2,1,1,1,2,2]
            </div>

            <p className="leading-8 text-muted-foreground mt-6">
                Pair each occurrence of 2 with a different number.
            </p>

            <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                (2,1)
                <br />
                (2,1)
                <br />
                (2,1)
            </div>

            <p className="leading-8 text-muted-foreground mt-6">
                One occurrence of 2 still remains.
            </p>

            <p className="leading-8 text-muted-foreground mt-4">
                This idea leads directly to the Boyer-Moore Voting
                Algorithm.
            </p>
        </section>

        {/* Boyer Moore */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
                The Boyer-Moore Voting Algorithm
            </h2>

            <p className="leading-8 text-muted-foreground">
                Maintain two variables:
            </p>

            <div className="bg-muted rounded-lg p-4 font-mono mt-4">
                candidate
                <br />
                count
            </div>

            <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">
                <li>If count becomes 0, choose a new candidate.</li>
                <li>If current number equals candidate, increment count.</li>
                <li>Otherwise decrement count.</li>
            </ul>

            <p className="leading-8 text-muted-foreground mt-6">
                Majority elements survive every cancellation.
            </p>
        </section>

        {/* Pattern Recognition */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
                Pattern Recognition
            </h2>

            <p className="mb-4">
                Consider Boyer-Moore whenever you see:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Majority element problems</li>
                <li>Frequency dominance</li>
                <li>More than half occurrences</li>
                <li>Voting systems</li>
                <li>O(1) space requirements</li>
            </ul>
        </section>

        {/* Interview Perspective */}
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
                Interview Perspective
            </h2>

            <div className="border rounded-lg p-6 mt-6">
                <ul className="space-y-3">
                    <li>✓ Frequency Analysis</li>
                    <li>✓ HashMap Optimization</li>
                    <li>✓ Space Optimization</li>
                    <li>✓ Boyer-Moore Voting</li>
                    <li>✓ Mathematical Reasoning</li>
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
                        Returning Frequency Instead of Element
                    </h3>

                    <p className="text-muted-foreground mt-2">
                        The problem asks for the majority element, not its
                        occurrence count.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Ignoring the Majority Guarantee
                    </h3>

                    <p className="text-muted-foreground mt-2">
                        The problem guarantees that a majority element
                        exists, making Boyer-Moore possible.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Using Extra Memory Unnecessarily
                    </h3>

                    <p className="text-muted-foreground mt-2">
                        HashMaps work, but the follow-up expects O(1)
                        additional space.
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
                <li>Majority Element II</li>
                <li>Top K Frequent Elements</li>
                <li>Frequency Sort</li>
                <li>Find All Elements Appearing More Than n/3 Times</li>
            </ul>
        </section>

        {/* Key Takeaways */}
        <section>
            <h2 className="text-2xl font-semibold mb-4">
                Key Takeaways
            </h2>

            <ul className="space-y-3">
                <li>✓ Majority Element is fundamentally a frequency problem.</li>
                <li>✓ HashMaps provide an easy O(n) solution.</li>
                <li>✓ Boyer-Moore reduces space complexity to O(1).</li>
                <li>✓ Majority elements survive pairwise cancellation.</li>
                <li>✓ This is one of the most elegant interview algorithms.</li>
            </ul>
        </section>
    </main>
    );

}
