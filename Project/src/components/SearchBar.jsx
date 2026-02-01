import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"
import { Link } from "react-router-dom"
import { Search } from "lucide-react"

const SearchBar = () => {

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    // setText('')
  }

  return (
    <div>
      <form
        className="flex flex-col gap-5 bg-gray-900 items-center p-10 md:flex-row md:justify-between md:gap-10"
        onSubmit={(e) => {
          submitHandler(e)
        }}
      >
        <Link to='/' className="font-semibold text-4xl tracking-wider italic">
          LuxGallery
        </Link>

        <div className="flex relative md:w-3/4">
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

          <button className="absolute right-0 top-0 flex items-center justify-center px-4 py-2.5 text-xl rounded outline-none cursor-pointer">
            <Search />
          </button>
        </div>

      </form>
    </div >
  )
}

export default SearchBar