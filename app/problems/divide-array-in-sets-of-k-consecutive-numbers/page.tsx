export default function DivideArrayIntoSetsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">

        <div className="flex flex-wrap gap-2 mb-4">

          <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
            Greedy
          </span>

          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            HashMap
          </span>

          <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
            Medium
          </span>

        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          Divide Array in Sets of K Consecutive Numbers
        </h1>

        <p className="text-muted-foreground mt-4 text-lg">
          Learn how Greedy thinking, Sorting, and a Frequency Map efficiently
          divide an array into consecutive groups of equal size.
        </p>

      </div>

      {/* Metadata */}
      <section className="grid md:grid-cols-3 gap-4 mb-10">

        <div className="border rounded-lg p-4">

          <h3 className="font-semibold">
            Pattern
          </h3>

          <p className="text-muted-foreground">
            Greedy + Sorting + HashMap
          </p>

        </div>

        <div className="border rounded-lg p-4">

          <h3 className="font-semibold">
            Time Complexity
          </h3>

          <p className="text-muted-foreground">
            O(n log n)
          </p>

        </div>

        <div className="border rounded-lg p-4">

          <h3 className="font-semibold">
            Space Complexity
          </h3>

          <p className="text-muted-foreground">
            O(n)
          </p>

        </div>

      </section>

      {/* Why This Problem Matters */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Why This Problem Matters
        </h2>

        <p className="leading-8 text-muted-foreground">
          At first glance, this looks like a grouping problem. However,
          the real challenge is determining whether every element can be
          placed into a valid consecutive sequence without leaving any
          unused numbers behind.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          Many candidates immediately think about backtracking or generating
          all possible groups. While those approaches may work for small
          inputs, they become far too slow as the array grows.
        </p>

        <blockquote className="border-l-4 pl-4 mt-4 italic">
          The breakthrough comes from realizing that the smallest unused
          number has only one possible place—it must begin a new consecutive
          group.
        </blockquote>

      </section>

      {/* Problem Overview */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Problem Overview
        </h2>

        <p className="leading-8 text-muted-foreground">
          You are given an integer array and an integer <strong>k</strong>.
          Your task is to determine whether the array can be divided into
          groups such that:
        </p>

        <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">

          <li>Every group contains exactly k elements.</li>

          <li>All numbers inside a group are consecutive.</li>

          <li>Every element is used exactly once.</li>

        </ul>

        <div className="bg-muted rounded-lg p-4 font-mono mt-8">
          nums = [1,2,3,3,4,4,5,6]
          <br />
          k = 4
        </div>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Output:
          <br />
          true
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          One possible division is:
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          [1,2,3,4]
          <br />
          [3,4,5,6]
        </div>

      </section>

      {/* Key Observation */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          The Key Observation
        </h2>

        <p className="leading-8 text-muted-foreground">
          After sorting the array, the smallest remaining number cannot belong
          to any previous consecutive sequence.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          1 2 3 3 4 4 5 6
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Since there is no smaller number available, this value must become
          the first element of a new group.
        </p>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          Every valid solution starts by processing the smallest unused
          element first.
        </blockquote>

      </section>

      {/* Brute Force */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Brute Force Thinking
        </h2>

        <p className="leading-8 text-muted-foreground">
          One possible strategy is to repeatedly search for the next
          consecutive number while building each group.
        </p>

        <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">

          <li>Choose an unused number.</li>

          <li>Find the next consecutive value.</li>

          <li>Repeat until the group reaches size k.</li>

          <li>Continue until every element is assigned.</li>

        </ul>

        <p className="leading-8 text-muted-foreground mt-6">
          Unfortunately, repeated searching makes this solution inefficient
          for large inputs.
        </p>

      </section>

      {/* Greedy Insight */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          The Greedy Insight
        </h2>

        <p className="leading-8 text-muted-foreground">
          Instead of exploring every possible grouping, always begin from the
          smallest available value and immediately construct its consecutive
          sequence.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          x
          <br />
          x + 1
          <br />
          x + 2
          <br />
          ...
          <br />
          x + k - 1
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          If any required value is unavailable, then no valid grouping can
          exist.
        </p>

      </section>

      {/* Why Sorting */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Why Sorting Helps
        </h2>

        <p className="leading-8 text-muted-foreground">
          Sorting places numbers in increasing order, making it easy to find
          the smallest unused value at every step.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Before
          <br />
          4 1 6 2 3 5 4 3
        </div>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          After
          <br />
          1 2 3 3 4 4 5 6
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          This ordering naturally supports the greedy strategy and avoids
          repeatedly searching the array.
        </p>

      </section>
      {/* Frequency Map */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Building the Frequency Map
        </h2>

        <p className="leading-8 text-muted-foreground">
          Before constructing any groups, count how many times each number
          appears in the array. This allows us to quickly determine whether
          a required number is still available without searching the array
          repeatedly.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          nums = [1,2,3,3,4,4,5,6]
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Frequency Map:
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          1 → 1
          <br />
          2 → 1
          <br />
          3 → 2
          <br />
          4 → 2
          <br />
          5 → 1
          <br />
          6 → 1
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Updating these counts is much faster than repeatedly removing
          elements from the array.
        </p>

      </section>

      {/* Creating Groups */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Creating Consecutive Groups
        </h2>

        <p className="leading-8 text-muted-foreground">
          Visit every number in sorted order. Whenever you encounter a number
          that still has a positive frequency, start a new group from it.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Current Number = 1
          <br />
          Need:
          <br />
          1 → 2 → 3 → 4
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Since every required number exists, decrease each frequency by one.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Updated Frequency
          <br />
          1 → 0
          <br />
          2 → 0
          <br />
          3 → 1
          <br />
          4 → 1
          <br />
          5 → 1
          <br />
          6 → 1
        </div>

      </section>

      {/* Dry Run */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Complete Dry Run
        </h2>

        <p className="leading-8 text-muted-foreground">
          Let's execute the algorithm step by step.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          nums = [1,2,3,3,4,4,5,6]
          <br />
          k = 4
        </div>

        <h3 className="font-semibold mt-8">
          Step 1
        </h3>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Smallest unused number = 1
          <br />
          Required sequence:
          <br />
          1 2 3 4
        </div>

        <p className="leading-8 text-muted-foreground mt-4">
          All four numbers exist, so consume one occurrence of each.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Remaining Numbers
          <br />
          3 4 5 6
        </div>

        <h3 className="font-semibold mt-8">
          Step 2
        </h3>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Smallest unused number = 3
          <br />
          Required sequence:
          <br />
          3 4 5 6
        </div>

        <p className="leading-8 text-muted-foreground mt-4">
          Every required value still exists.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Frequency becomes zero for every number.
        </div>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          Every element has been placed into exactly one valid group.
          Therefore, the answer is true.
        </blockquote>

      </section>

      {/* Visual Representation */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Visual Representation
        </h2>

        <div className="bg-muted rounded-lg p-5 font-mono mt-6">

          Sorted Array

          <br /><br />

          1 2 3 3 4 4 5 6

          <br /><br />

          ↓

          <br />

          Group 1

          <br />

          [1 2 3 4]

          <br /><br />

          Remaining

          <br />

          3 4 5 6

          <br /><br />

          ↓

          <br />

          Group 2

          <br />

          [3 4 5 6]

          <br /><br />

          Remaining

          <br />

          Empty

          <br /><br />

          ✓ Done

        </div>

      </section>

      {/* Why Frequency Counting */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Why Frequency Counting Works
        </h2>

        <p className="leading-8 text-muted-foreground">
          Instead of deleting values from the array, we simply reduce their
          frequency whenever they are used in a group.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          frequency[4]--

          <br /><br />

          instead of

          <br /><br />

          remove(4)
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Updating a count is much faster than shifting array elements after
          every deletion.
        </p>

      </section>

      {/* Duplicate Values */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Handling Duplicate Values
        </h2>

        <p className="leading-8 text-muted-foreground">
          Duplicate numbers are completely valid because each occurrence has
          its own frequency.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          3 → 2
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          This means the value 3 can participate in two different consecutive
          groups.
        </p>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          A frequency map naturally handles duplicates without any additional
          logic.
        </blockquote>

      </section>

      {/* Important Rule */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          The Golden Rule
        </h2>

        <p className="leading-8 text-muted-foreground">
          Never skip the smallest unused number.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          If it cannot start a valid consecutive sequence, then no future
          arrangement will ever be able to use it correctly.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Smallest Remaining

          <br />

          ↓

          <br />

          Must Start

          <br />

          Every New Group

        </div>

      </section>
      {/* Algorithm Walkthrough */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Algorithm Walkthrough
        </h2>

        <p className="leading-8 text-muted-foreground">
          The algorithm follows a simple sequence of steps that guarantees
          every number is processed exactly once.
        </p>

        <div className="bg-muted rounded-lg p-5 font-mono mt-6">
          Sort the array
          <br />
          ↓
          <br />
          Count frequencies
          <br />
          ↓
          <br />
          Visit every number
          <br />
          ↓
          <br />
          Frequency is zero?
          <br />
          Skip
          <br />
          ↓
          <br />
          Otherwise create
          <br />
          x, x+1 ... x+k-1
          <br />
          ↓
          <br />
          Reduce frequencies
          <br />
          ↓
          <br />
          Missing number?
          <br />
          Return false
          <br />
          ↓
          <br />
          Finished
          <br />
          Return true
        </div>

      </section>

      {/* High Level Algorithm */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          High-Level Algorithm
        </h2>

        <div className="bg-muted rounded-lg p-5 font-mono overflow-x-auto whitespace-pre mt-6">
          {`Sort nums

Create frequency map

For every number in nums

    if frequency[number] == 0
        continue

    Repeat k times

        if frequency[current] == 0
            return false

        frequency[current]--
        current++

Return true`}
        </div>

      </section>

      {/* Why Greedy Works */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Why the Greedy Strategy Works
        </h2>

        <p className="leading-8 text-muted-foreground">
          Every unused number must eventually belong to some consecutive
          sequence. The smallest unused value has no smaller neighbor that
          could appear before it.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          Because of this, delaying the smallest value never creates a better
          solution. It can only reduce the available options later.
        </p>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          Choosing the smallest unused number first is always a safe and
          optimal decision.
        </blockquote>

      </section>

      {/* Edge Cases */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Important Edge Cases
        </h2>

        <div className="space-y-8">

          <div>

            <h3 className="font-semibold">
              Array Size Isn't Divisible by k
            </h3>

            <p className="text-muted-foreground mt-2">
              If nums.length % k != 0, forming equal-sized groups is
              impossible.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Missing Consecutive Number
            </h3>

            <p className="text-muted-foreground mt-2">
              If any required number doesn't exist while building a
              sequence, immediately return false.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Duplicate Numbers
            </h3>

            <p className="text-muted-foreground mt-2">
              Duplicate values are handled naturally through the frequency
              map.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Single Element Groups
            </h3>

            <p className="text-muted-foreground mt-2">
              When k equals 1, every number forms its own group.
            </p>

          </div>

        </div>

      </section>

      {/* Complexity */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Complexity Analysis
        </h2>

        <div className="border rounded-lg p-6">

          <div className="mb-6">

            <h3 className="font-semibold">
              Sorting
            </h3>

            <p className="text-muted-foreground mt-2">
              Sorting dominates the running time.
            </p>

          </div>

          <div className="mb-6">

            <h3 className="font-semibold">
              Frequency Counting
            </h3>

            <p className="text-muted-foreground mt-2">
              Each element is counted once.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Overall Complexity
            </h3>

            <p className="text-muted-foreground mt-2">
              Time Complexity : O(n log n)
            </p>

            <p className="text-muted-foreground mt-2">
              Space Complexity : O(n)
            </p>

          </div>

        </div>

      </section>

      {/* Interview Perspective */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Interview Perspective
        </h2>

        <p className="leading-8 text-muted-foreground">
          This problem is popular because it tests several interview concepts
          within a relatively small amount of code.
        </p>

        <div className="border rounded-lg p-6 mt-6">

          <ul className="space-y-3">

            <li>✓ Greedy Thinking</li>

            <li>✓ HashMap Usage</li>

            <li>✓ Sorting</li>

            <li>✓ Pattern Recognition</li>

            <li>✓ Efficient Data Processing</li>

          </ul>

        </div>

      </section>

      {/* Common Mistakes */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Common Mistakes
        </h2>

        <div className="space-y-8">

          <div>

            <h3 className="font-semibold">
              Forgetting the Length Check
            </h3>

            <p className="text-muted-foreground mt-2">
              Always verify that the array length is divisible by k before
              doing any work.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Removing Elements from the Array
            </h3>

            <p className="text-muted-foreground mt-2">
              Modifying the array repeatedly is much slower than updating
              frequencies.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Starting from Random Values
            </h3>

            <p className="text-muted-foreground mt-2">
              Always begin with the smallest unused number.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Ignoring Duplicate Frequencies
            </h3>

            <p className="text-muted-foreground mt-2">
              Every duplicate must be counted separately.
            </p>

          </div>

        </div>

      </section>

      {/* Pattern Recognition */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Pattern Recognition
        </h2>

        <p className="mb-4">
          Think about this solution whenever you encounter:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">

          <li>Consecutive sequence problems</li>

          <li>Grouping numbers</li>

          <li>Frequency counting</li>

          <li>Greedy construction</li>

          <li>Sorting before processing</li>

          <li>Multiset problems</li>

        </ul>

      </section>

      {/* Related Problems */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Related Problems
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">

          <li>846. Hand of Straights</li>

          <li>56. Merge Intervals</li>

          <li>435. Non-overlapping Intervals</li>

          <li>452. Minimum Number of Arrows to Burst Balloons</li>

          <li>621. Task Scheduler</li>

        </ul>

      </section>

      {/* Real World Applications */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Real World Applications
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">

          <li>Batch processing systems</li>

          <li>Inventory grouping</li>

          <li>Warehouse order organization</li>

          <li>Memory allocation strategies</li>

          <li>Scheduling continuous resources</li>

          <li>Data stream segmentation</li>

        </ul>

      </section>

      {/* Key Takeaways */}
      <section>

        <h2 className="text-2xl font-semibold mb-4">
          Key Takeaways
        </h2>

        <ul className="space-y-3">

          <li>✓ Always sort before processing.</li>

          <li>✓ Build a frequency map for constant-time lookups.</li>

          <li>✓ Start every group from the smallest unused number.</li>

          <li>✓ Decrease frequencies instead of deleting elements.</li>

          <li>✓ Return false immediately when a required number is missing.</li>

          <li>✓ Handle duplicates naturally through frequency counting.</li>

          <li>✓ Overall complexity is O(n log n).</li>

          <li>✓ This problem is essentially the array version of Hand of Straights.</li>

        </ul>

      </section>
    </main>
  );
}
