const TodoCard = ({ todo }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-lg shadow-cyan-500/10 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.28),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.22),transparent_55%)]" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-[0.22em] text-white/60">Todo #{todo.id}</div>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-cyan-100">{todo.title}</h3>
        </div>

        <span
          className={[
            "shrink-0 rounded-full border px-3 py-1 text-xs font-semibold",
            todo.completed
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
              : "border-amber-400/30 bg-amber-400/10 text-amber-200",
          ].join(" ")}
        >
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="relative mt-5 flex items-center justify-between">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className={[
              "h-full rounded-full transition-all duration-300",
              todo.completed ? "w-full bg-emerald-400/70" : "w-1/3 bg-amber-400/70",
            ].join(" ")}
          />
        </div>
        <div className="ml-4 text-xs text-white/50">{todo.completed ? "Done" : "In progress"}</div>
      </div>
    </div>
  )
}

export default TodoCard

