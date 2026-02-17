import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./store/feature/todoSlice";
import Container from "./components/Container";
import FetchBtn from "./components/FetchBtn";
import Header from "./components/Header";
import TodoCard from "./components/TodoCard";

const App = () => {

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo)
  const todoList = Array.isArray(todos.data) ? todos.data : []
  const totalTodos = todoList.length
  const completedTodos = todoList.reduce((acc, t) => acc + (t.completed ? 1 : 0), 0)
  const pendingTodos = Math.max(0, totalTodos - completedTodos)

  return (
    <div className="w-screen min-h-screen bg-gray-950 text-white">

      <Header totalTodos={totalTodos} completedTodos={completedTodos} pendingTodos={pendingTodos} />

      <FetchBtn isLoading={todos.isLoading} onClick={() => dispatch(fetchTodo())} />

      {todos.isLoading && (
        <div className="h-[45vh] flex flex-col justify-center items-center gap-5 px-4">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/10 border-t-cyan-300" />
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide text-cyan-200">Loading todos</h1>
            <p className="mt-1 text-sm text-white/60">Hang tight - fetching from the API.</p>
          </div>
        </div>
      )}

      {todos.isError && (
        <div className="h-[45vh] flex justify-center items-center px-4">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-7 text-center shadow-lg shadow-blue-500/10">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <span className="text-2xl font-black">!</span>
            </div>
            <h1 className="text-2xl font-bold text-blue-200">Something went wrong</h1>
            <p className="mt-2 text-sm text-white/60">Couldn't fetch todos. Please try again.</p>
            <button
              type="button"
              className="mt-6 rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-blue-500/50"
              onClick={() => dispatch(fetchTodo())}
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {!todos.isLoading && !todos.isError && todoList.length > 0 && (
        <Container className="pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {todoList.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </div>
        </Container>
      )}

      {Array.isArray(todos.data) && todos.data.length === 0 && !todos.isLoading && !todos.isError && (
        <div className="h-[45vh] flex justify-center items-center">
          <h1 className="text-2xl text-white/70 font-semibold">No todos yet. Click "Fetch Todos".</h1>
        </div>
      )}

    </div>
  )
}

export default App
