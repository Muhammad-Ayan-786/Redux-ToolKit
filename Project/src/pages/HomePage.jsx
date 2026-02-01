import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"
import ResultGrid from "../components/ResultGrid"
import { useSelector } from "react-redux"

const HomePage = () => {

  const { query } = useSelector((store) => store.search)

  return (
    <div>
      <SearchBar />

      {query != '' ?
        <div><Tabs /><ResultGrid /></div>
        :
        <div className="w-full h-96 flex items-center justify-center">
          <h1 className="text-3xl text-center whitespace-pre-wrap tracking-widest font-bold uppercase sm:text-6xl sm:whitespace-normal">
            Search Something...
          </h1>
        </div>
      }
    </div>
  )
}

export default HomePage