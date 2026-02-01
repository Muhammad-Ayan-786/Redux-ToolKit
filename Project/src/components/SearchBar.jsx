import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

const SearchBar = () => {

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form
        className="flex gap-6 bg-gray-900 p-10"
        onSubmit={(e) => {
          submitHandler(e)
        }}
      >
        <input
          autoComplete="off"
          name="inputSearch"
          required
          className="border-2 w-full px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder='Search Anything...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer"
        > Search</button>
      </form>
    </div>
  )
}

export default SearchBar