export default function HandOfStraightsPage() {
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
          Hand of Straights
        </h1>

        <p className="text-muted-foreground mt-4 text-lg">
          Learn how Greedy, Sorting, and Frequency Maps work together to
          efficiently divide cards into consecutive groups.
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
          Hand of Straights is one of the best Greedy interview questions.
          Although the problem looks like a simple grouping exercise, it
          actually tests whether you can identify the smallest valid choice
          at every step.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          Many candidates initially try backtracking or generating every
          possible group. Those approaches quickly become expensive because
          there can be many different combinations.
        </p>

        <blockquote className="border-l-4 pl-4 mt-4 italic">
          The key insight is simple:
          Always start a new group from the smallest unused card.
        </blockquote>

      </section>

      {/* Problem Overview */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Problem Overview
        </h2>

        <p className="leading-8 text-muted-foreground">
          You are given an array representing cards in your hand and an
          integer <strong>groupSize</strong>.
          Your task is to determine whether every card can be arranged into
          groups where:
        </p>

        <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">
          <li>Each group contains exactly groupSize cards.</li>
          <li>All cards inside a group are consecutive numbers.</li>
          <li>Every card must be used exactly once.</li>
        </ul>

        <div className="bg-muted rounded-lg p-4 font-mono mt-8">
          hand = [1,2,3,6,2,3,4,7,8]
          <br />
          groupSize = 3
        </div>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Output:
          <br />
          true
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          One valid grouping is:
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          [1,2,3]
          <br />
          [2,3,4]
          <br />
          [6,7,8]
        </div>

      </section>

      {/* The Key Observation */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          The Key Observation
        </h2>

        <p className="leading-8 text-muted-foreground">
          Imagine you have already sorted all cards.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          1 2 2 3 3 4 6 7 8
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Which card must start the first group?
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          1
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          It cannot belong to any previous consecutive sequence because no
          smaller card exists.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          Therefore, the smallest unused card must always become the starting
          point of a new group.
        </p>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          This greedy decision is what makes the optimal solution possible.
        </blockquote>

      </section>

      {/* Brute Force Thinking */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Brute Force Thinking
        </h2>

        <p className="leading-8 text-muted-foreground">
          A straightforward solution would repeatedly search for consecutive
          numbers to form groups.
        </p>

        <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">
          <li>Pick any unused card.</li>
          <li>Search for the next consecutive number.</li>
          <li>Repeat until the group is complete.</li>
          <li>Continue until all cards are used.</li>
        </ul>

        <p className="leading-8 text-muted-foreground mt-6">
          Unfortunately, searching repeatedly for the next card becomes
          expensive as the input size grows.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          We need a faster way to know whether the next required card still
          exists.
        </p>

      </section>

      {/* Greedy Insight */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          The Greedy Insight
        </h2>

        <p className="leading-8 text-muted-foreground">
          Instead of trying every possible grouping, always build the next
          group starting from the smallest available card.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Smallest unused card
          <br />
          ↓
          <br />
          x
          <br />
          x + 1
          <br />
          x + 2
          <br />
          ...
          <br />
          x + groupSize - 1
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          If any required card is missing, it is impossible to complete a
          valid grouping.
        </p>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          Never delay using the smallest card. If you do, it will never fit
          into another valid sequence later.
        </blockquote>

      </section>

      {/* Why Sorting? */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Why Do We Sort First?
        </h2>

        <p className="leading-8 text-muted-foreground">
          Sorting guarantees that we always encounter the smallest remaining
          card first.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Before Sorting
          <br />
          6 2 8 1 3 7 2 4 3
        </div>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          After Sorting
          <br />
          1 2 2 3 3 4 6 7 8
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Once sorted, the greedy decision becomes obvious because the next
          smallest unused card is always visible.
        </p>

      </section>
      {/* Frequency Map */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Frequency Map
        </h2>

        <p className="leading-8 text-muted-foreground">
          Before creating groups, we count how many times every card appears.
          Instead of removing elements from the array repeatedly, we simply
          decrease their frequency whenever a card is used.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          hand = [1,2,3,6,2,3,4,7,8]
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Frequency Map:
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          1 → 1
          <br />
          2 → 2
          <br />
          3 → 2
          <br />
          4 → 1
          <br />
          6 → 1
          <br />
          7 → 1
          <br />
          8 → 1
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          This allows every lookup to happen in constant time.
        </p>

      </section>

      {/* Building Groups */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Building Consecutive Groups
        </h2>

        <p className="leading-8 text-muted-foreground">
          After sorting, visit each card from left to right.
          If a card has already been used, simply skip it.
          Otherwise, begin constructing a new consecutive group.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Start with 1
          <br />
          Need:
          <br />
          1 → 2 → 3
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Since all three cards exist, consume one occurrence of each.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Updated Frequency
          <br />
          1 → 0
          <br />
          2 → 1
          <br />
          3 → 1
        </div>

      </section>

      {/* Complete Dry Run */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Complete Dry Run
        </h2>

        <p className="leading-8 text-muted-foreground">
          Let's walk through the algorithm step by step.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          hand = [1,2,3,6,2,3,4,7,8]
          <br />
          groupSize = 3
        </div>

        <h3 className="font-semibold mt-8">
          Step 1
        </h3>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Smallest unused card = 1
          <br />
          Build:
          <br />
          1 2 3
        </div>

        <p className="leading-8 text-muted-foreground mt-4">
          Remove one occurrence of each card.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Remaining
          <br />
          2
          <br />
          3
          <br />
          4
          <br />
          6
          <br />
          7
          <br />
          8
        </div>

        <h3 className="font-semibold mt-8">
          Step 2
        </h3>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Smallest unused card = 2
          <br />
          Need:
          <br />
          2 3 4
        </div>

        <p className="leading-8 text-muted-foreground mt-4">
          All cards exist, so consume them.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Remaining
          <br />
          6
          <br />
          7
          <br />
          8
        </div>

        <h3 className="font-semibold mt-8">
          Step 3
        </h3>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Smallest unused card = 6
          <br />
          Need:
          <br />
          6 7 8
        </div>

        <p className="leading-8 text-muted-foreground mt-4">
          Again, every required card exists.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Frequency becomes zero for all cards.
        </div>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          Every card has been used exactly once.
          Therefore, the answer is true.
        </blockquote>

      </section>

      {/* Visualization */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Visualizing the Process
        </h2>

        <div className="bg-muted rounded-lg p-5 font-mono mt-6">
          Sorted Cards
          <br /><br />
          1 2 2 3 3 4 6 7 8
          <br /><br />
          ↓
          <br />
          Build Group
          <br />
          [1 2 3]
          <br /><br />
          Remaining
          <br />
          2 3 4 6 7 8
          <br /><br />
          ↓
          <br />
          Build Group
          <br />
          [2 3 4]
          <br /><br />
          Remaining
          <br />
          6 7 8
          <br /><br />
          ↓
          <br />
          Build Group
          <br />
          [6 7 8]
          <br /><br />
          Done ✓
        </div>

      </section>

      {/* Why Frequency Map Instead of Removing Elements */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Why Use a Frequency Map?
        </h2>

        <p className="leading-8 text-muted-foreground">
          Removing elements from an array is expensive because every deletion
          may shift many remaining elements.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          A frequency map avoids this cost by simply decreasing the count of
          each card whenever it is used.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Instead of
          <br />
          remove(3)
          <br /><br />
          We simply do
          <br />
          frequency[3]--
        </div>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          Counting is much cheaper than constantly modifying the array.
        </blockquote>

      </section>

      {/* Important Greedy Rule */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          The Most Important Greedy Rule
        </h2>

        <p className="leading-8 text-muted-foreground">
          Never skip the smallest unused card.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          If that smallest card cannot begin a consecutive sequence,
          there is no future arrangement that can fix it.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-6">
          Smallest Card
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
          Let's summarize the complete approach from start to finish.
        </p>

        <div className="bg-muted rounded-lg p-5 font-mono mt-6">
          Sort the cards
          <br />
          ↓
          <br />
          Build Frequency Map
          <br />
          ↓
          <br />
          Visit cards from smallest to largest
          <br />
          ↓
          <br />
          If frequency == 0
          <br />
          Skip
          <br />
          ↓
          <br />
          Otherwise build
          <br />
          x, x+1, x+2 ... x+groupSize-1
          <br />
          ↓
          <br />
          Reduce frequency
          <br />
          ↓
          <br />
          If any required card is missing
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

      {/* Pseudocode */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          High-Level Algorithm
        </h2>

        <div className="bg-muted rounded-lg p-5 font-mono mt-6 overflow-x-auto whitespace-pre">
          {`Sort hand

Create Frequency Map

For every card in sorted hand

    if frequency == 0
        continue

    for i = 0 to groupSize-1

        if frequency[current+i] == 0
            return false

        frequency[current+i]--

return true`}
        </div>

      </section>

      {/* Why Greedy Works */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Why the Greedy Strategy Works
        </h2>

        <p className="leading-8 text-muted-foreground">
          Greedy algorithms work only when making the locally optimal choice
          always leads to a globally optimal solution.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          Here, the smallest unused card has only one possible role—it must
          be the beginning of a consecutive sequence.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          Delaying it cannot help because no smaller card exists that could
          appear before it.
        </p>

        <blockquote className="border-l-4 pl-4 mt-6 italic">
          Once you understand this observation, the entire solution becomes
          surprisingly simple.
        </blockquote>

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
              Sorting all cards takes O(n log n).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">
              Frequency Map
            </h3>

            <p className="text-muted-foreground mt-2">
              Building the map requires one pass through the array.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Overall
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
          Interviewers ask this question because it combines multiple
          concepts into one elegant solution.
        </p>

        <div className="border rounded-lg p-6 mt-6">

          <ul className="space-y-3">

            <li>✓ Greedy Thinking</li>

            <li>✓ Sorting</li>

            <li>✓ HashMap Usage</li>

            <li>✓ Pattern Recognition</li>

            <li>✓ Efficient Frequency Counting</li>

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
              Forgetting to Sort
            </h3>

            <p className="text-muted-foreground mt-2">
              Without sorting, the smallest unused card cannot be found
              reliably.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Removing Array Elements
            </h3>

            <p className="text-muted-foreground mt-2">
              Removing values repeatedly is slower than updating
              frequencies.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Ignoring Duplicate Cards
            </h3>

            <p className="text-muted-foreground mt-2">
              Duplicate numbers must be counted correctly using their
              frequencies.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Starting from Any Card
            </h3>

            <p className="text-muted-foreground mt-2">
              The greedy strategy always begins from the smallest unused
              value.
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
          Consider this approach whenever you see:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">

          <li>Grouping elements</li>

          <li>Consecutive numbers</li>

          <li>Frequency counting</li>

          <li>Greedy construction</li>

          <li>Sorting before processing</li>

        </ul>

      </section>

      {/* Related Problems */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Related Problems
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">

          <li>Two Sum</li>

          <li>3Sum</li>

          <li>Merge Intervals</li>

          <li>Task Scheduler</li>

          <li>Non-overlapping Intervals</li>

          <li>Meeting Rooms</li>

        </ul>

      </section>

      {/* Real World Applications */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Real World Applications
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">

          <li>Inventory grouping</li>

          <li>Scheduling consecutive time slots</li>

          <li>Memory block allocation</li>

          <li>Warehouse batch processing</li>

          <li>Log sequence validation</li>

          <li>Ticket allocation systems</li>

        </ul>

      </section>

      {/* Key Takeaways */}
      <section>

        <h2 className="text-2xl font-semibold mb-4">
          Key Takeaways
        </h2>

        <ul className="space-y-3">

          <li>✓ Sort the cards before processing.</li>

          <li>✓ Count frequencies using a HashMap.</li>

          <li>✓ Always begin with the smallest unused card.</li>

          <li>✓ Build one consecutive group at a time.</li>

          <li>✓ Decrease frequencies instead of removing elements.</li>

          <li>✓ Missing any required card immediately means the answer is false.</li>

          <li>✓ Overall complexity is O(n log n).</li>

          <li>✓ This is one of the most important Greedy interview problems.</li>

        </ul>

      </section>
    </main>
  );
}
