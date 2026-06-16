export default function MaximumAverageSubarrayPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            Sliding Window
          </span>

          <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
            Easy
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          Maximum Average Subarray I
        </h1>

        <p className="text-muted-foreground mt-4 text-lg">
          Learn the Fixed Sliding Window pattern and understand how
          to reuse previous calculations instead of recomputing every
          subarray sum.
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
          Maximum Average Subarray I is one of the most important
          introductory Sliding Window problems.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          At first glance, the problem appears to be about averages.
          However, the real lesson is learning how to efficiently
          process fixed-size subarrays without repeatedly calculating
          their sums.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          This problem introduces a technique that appears throughout
          coding interviews and real-world applications:
        </p>

        <blockquote className="border-l-4 pl-4 mt-4 italic">
          Reuse previous work instead of recomputing everything from
          scratch.
        </blockquote>
      </section>

      {/* Problem Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Problem Overview
        </h2>

        <p className="leading-8 text-muted-foreground">
          You are given an array of integers and an integer k.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          Your goal is to find a contiguous subarray of size exactly k
          that has the maximum average value.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          A brute-force approach would calculate the sum of every
          possible window separately. While this works, it becomes
          inefficient as the array grows.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          The Sliding Window pattern allows us to solve the same
          problem in linear time.
        </p>
      </section>

      {/* Key Observation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          The Key Observation
        </h2>

        <div className="bg-muted rounded-lg p-4 font-mono">
          Average = Sum / Length
        </div>

        <p className="leading-8 text-muted-foreground mt-4">
          Since every window has the same length k, maximizing the
          average is exactly the same as maximizing the sum.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          This simplifies the problem significantly.
        </p>

        <div className="border rounded-lg p-4 mt-6">
          <p>
            Instead of asking:
          </p>

          <p className="font-medium mt-2">
            “Which window has the highest average?”
          </p>

          <p className="mt-4">
            We can ask:
          </p>

          <p className="font-medium mt-2">
            “Which window has the highest sum?”
          </p>
        </div>
      </section>

      {/* Brute Force */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Brute Force Thinking
        </h2>

        <div className="bg-muted rounded-lg p-4 font-mono">
          nums = [1, 12, -5, -6, 50, 3]
          <br />
          k = 4
        </div>

        <p className="mt-6 font-medium">
          Possible windows:
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          [1,12,-5,-6]
          <br />
          [12,-5,-6,50]
          <br />
          [-5,-6,50,3]
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          A naive solution calculates every window sum independently.
        </p>

        <p className="leading-8 text-muted-foreground mt-4">
          For small inputs this is acceptable, but for larger arrays
          the repeated calculations become expensive.
        </p>
      </section>

      {/* Sliding Window Insight */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          The Sliding Window Insight
        </h2>

        <p className="leading-8 text-muted-foreground">
          Observe what happens when the window moves.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Current Window:
          <br />
          [1,12,-5,-6]
        </div>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Window Sum = 2
        </div>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          Move One Position Right:
          <br />
          [12,-5,-6,50]
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          Instead of recalculating:
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          12 + (-5) + (-6) + 50
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          We can reuse the previous sum.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono mt-4">
          previousSum - 1 + 50
        </div>

        <p className="leading-8 text-muted-foreground mt-6">
          This update takes constant time and is the foundation of the
          Fixed Sliding Window pattern.
        </p>
      </section>

      {/* Pattern Recognition */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Pattern Recognition
        </h2>

        <p className="mb-4">
          Consider Sliding Window whenever you see:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
          <li>Fixed-size subarray</li>
          <li>Fixed-size substring</li>
          <li>Consecutive elements</li>
          <li>Window length remains constant</li>
          <li>Maximum or minimum value inside a fixed range</li>
        </ul>
      </section>

      {/* Interview Perspective */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Interview Perspective
        </h2>

        <p className="leading-8 text-muted-foreground">
          Interviewers often use this problem to evaluate whether
          candidates can identify unnecessary repeated work.
        </p>

        <div className="border rounded-lg p-6 mt-6">
          <ul className="space-y-3">
            <li>✓ Pattern Recognition</li>
            <li>✓ Optimization Skills</li>
            <li>✓ Time Complexity Awareness</li>
            <li>✓ Reusing Previous Computation</li>
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
              Calculating Averages Repeatedly
            </h3>
            <p className="text-muted-foreground mt-2">
              Since k never changes, tracking the sum alone is enough.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Recomputing Window Sums
            </h3>
            <p className="text-muted-foreground mt-2">
              Recalculating every window defeats the purpose of Sliding
              Window.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Confusing Fixed and Variable Windows
            </h3>
            <p className="text-muted-foreground mt-2">
              This problem uses a fixed-size window. The window length
              never changes.
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
          <li>Minimum Recolors to Get K Consecutive Black Blocks</li>
          <li>Find K-Beauty of a Number</li>
          <li>Number of Substrings of Size Three With Distinct Characters</li>
          <li>Defuse the Bomb</li>
          <li>Grumpy Bookstore Owner</li>
          <li>Maximum Sum Subarray of Size K</li>
        </ul>
      </section>

      {/* Real World Applications */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Real-World Applications
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Monitoring network traffic</li>
          <li>Rolling averages in analytics systems</li>
          <li>Financial moving averages</li>
          <li>Sensor data analysis</li>
          <li>Streaming applications</li>
          <li>Time-series processing</li>
        </ul>
      </section>

      {/* Key Takeaways */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Key Takeaways
        </h2>

        <ul className="space-y-3">
          <li>✓ The problem is fundamentally about maximizing a window sum.</li>
          <li>✓ Every window has the same length.</li>
          <li>✓ Reuse previous calculations whenever possible.</li>
          <li>✓ Sliding Window avoids unnecessary repeated work.</li>
          <li>✓ This pattern appears throughout technical interviews.</li>
        </ul>
      </section>
    </main>
  );
}