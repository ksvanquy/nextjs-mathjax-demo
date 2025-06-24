import MathJaxDemoClient from '../components/MathJaxDemoClient'

const mathHtml = `
  <div>
    <h1>NextJS MathJax Examples</h1>
    <section>
      <h2>Inline Math</h2>
      <p>
        Einstein's famous equation: \\(E = mc^2\\) represents mass-energy equivalence.
      </p>
      <p>
        The quadratic formula: \\(x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}\\) solves quadratic equations.
      </p>
    </section>
    <section>
      <h2>Display Math</h2>
      <div>\\[\\frac{10}{4x} \\approx 2^{12}\\]</div>
      <div>\\[\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}\\]</div>
    </section>
    <section>
      <h2>Complex Equations</h2>
      <div>\\[\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}\\]</div>
      <div>\\[\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1\\]</div>
    </section>
    <section>
      <h2>Matrices</h2>
      <div>\\[\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ax + by \\\\ cx + dy \\end{pmatrix}\\]</div>
    </section>
    <section>
      <h2>Multiple Equations in One Component</h2>
      <div>Pythagorean theorem: \\(x^2 + y^2 = z^2\\)</div>
      <div>Sum of first n integers: \\(\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}\\)</div>
      <div>Binomial theorem: \\((a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k\\)</div>
    </section>
    <section>
      <h2>Advanced Examples</h2>
      <div>\\[\\begin{align*} \\nabla \\cdot \\vec{E} &= \\frac{\\rho}{\\epsilon_0} \\\\ \\nabla \\cdot \\vec{B} &= 0 \\\\ \\nabla \\times \\vec{E} &= -\\frac{\\partial \\vec{B}}{\\partial t} \\\\ \\nabla \\times \\vec{B} &= \\mu_0\\vec{J} + \\mu_0\\epsilon_0\\frac{\\partial \\vec{E}}{\\partial t} \\end{align*}\\]</div>
    </section>
    <section>
      <h2>With Dynamic Content</h2>
      <div>\\[\\lim_{x \\to \\infty} \\frac{1}{x} = 0\\]</div>
    </section>
    <section>
      <h2>Custom Configuration</h2>
      <div>Using dollar signs: $E = mc^2$</div>
      <div>$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$</div>
    </section>
    <footer>
      <p>NextJS MathJax - Modern MathJax 3 integration for Next.js</p>
    </footer>
  </div>
`;

export default function HomePage() {
  return (
    <main>
      <h1>Trang chủ (server component)</h1>
      <MathJaxDemoClient html={mathHtml} />
    </main>
  )
} 