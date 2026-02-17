import Container from "./Container"

const FetchBtn = ({ isLoading = false, onClick }) => {
  return (
    <Container className="flex justify-center py-8">
      <button
        type="button"
        disabled={isLoading}
        className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gray-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        onClick={onClick}
      >
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
        </span>

        {isLoading && (
          <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-gray-950/30 border-t-gray-950" />
        )}
        <span className="relative">{isLoading ? "Fetching..." : "Fetch Todos"}</span>
      </button>
    </Container>
  )
}

export default FetchBtn

