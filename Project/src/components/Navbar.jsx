import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="py-5 px-10 bg-(--c2) flex justify-between items-center border-b-2 border-gray-600">
      <Link to='/' className="font-semibold text-xl tracking-wider">MediaSearch</Link>
      <div className="flex gap-10 uppercase text-md font-semibold">
        <Link
          className="bg-gray-300 px-4 text-gray-700 font-medium py-2 rounded"
          to='/'
        >
          Search
        </Link>
        <Link
          className="bg-gray-300 px-4 text-gray-700 font-medium py-2 rounded"
          to='/collection'
        >
          Collection
        </Link>
      </div>
    </div>
  )
}

export default Navbar