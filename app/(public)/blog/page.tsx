export default function Blog() {
    return(<main className="flex-1">
  <div
    className="max-w-7xl mx-auto px-6 md:px-10 py-16"
    data-testid="blog-page"
  >
    <div className="mb-14 max-w-3xl">
      <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">
        Insights from the Brij
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-medium text-brand-ink mb-4">
        Stories, guides &amp; legal wisdom
      </h1>
      <p className="text-lg text-brand-ink-soft font-light">
        Practical advice from our lawyers and consultants — written for
        devotees, NRIs and first-time Brij buyers.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" />
  </div>
</main>
)
}