import Container from "./Container"

const Header = ({ totalTodos = 0, completedTodos = 0, pendingTodos = 0 }) => {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_60%)]" />
      </div>

      <Container className="relative py-10 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 shadow-lg shadow-cyan-500/10">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
          Async API Calling
        </div>

        <h1 className="mt-5 bg-gradient-to-r from-cyan-200 via-cyan-300 to-sky-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Redux Toolkit
        </h1>
        <p className="mt-3 text-lg font-semibold tracking-wide text-cyan-200/80">createAsyncThunk</p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white/70">
            Total: <span className="font-semibold text-white">{totalTodos}</span>
          </div>
          <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-emerald-200">
            Completed: <span className="font-semibold text-white">{completedTodos}</span>
          </div>
          <div className="rounded-2xl border border-amber-400/15 bg-amber-400/10 px-4 py-2 text-amber-200">
            Pending: <span className="font-semibold text-white">{pendingTodos}</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header

