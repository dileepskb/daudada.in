import Link from "next/link";

export default function SignIN(){
    return(
        <main className="flex-1">
  <div
    className="min-h-[70vh] flex items-center justify-center px-6 py-16"
    data-testid="login-page"
  >
    <div className="w-full max-w-md bg-white rounded-3xl border border-brand-cream p-10 shadow-soft">
      <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">
        Welcome back
      </div>
      <h1 className="font-display text-4xl font-medium text-brand-ink mb-6">
        Sign in
      </h1>
      <form className="flex flex-col gap-4">
        <input
          className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
          data-testid="login-email"
          required
          placeholder="Email"
          type="email"
          defaultValue=""
        />
        <input
          className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
          data-testid="login-password"
          required
          placeholder="Password"
          type="password"
          defaultValue=""
        />
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow px-4 py-2 h-11 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark shadow-brand"
          data-testid="login-submit-btn"
        >
          Sign in
        </button>
      </form>
      <p className="text-sm text-brand-ink-soft mt-6 text-center">
        New to Dau Dada?{" "}
        <Link
          className="text-brand-red font-medium"
          data-testid="login-go-register"
          href="/register"
          data-discover="true"
        >
          Create an account
        </Link>
      </p>
    </div>
  </div>
</main>

    )
}