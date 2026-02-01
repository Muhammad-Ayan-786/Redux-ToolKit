import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection, clearToast } from "../redux/features/collectionSlice"

const CollectionPage = () => {

  const collection = useSelector((state) => state.collection.items)

  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(clearCollection())
    dispatch(clearToast())
  }

  return (
    <div className="px-10 py-8 flex flex-wrap gap-10">

      {collection.length > 0 ?
        <div className="bg-gray-900 w-full py-7 px-4 flex flex-wrap justify-between items-center gap-5 rounded md:justify-between md:gap-6">
          <h2 className="text-3xl text-center font-bold uppercase md:text-5xl md:text-start">
            Your Collection
          </h2>
          <button
            className="bg-red-500 w-full px-5 py-2 text-base font-medium rounded md:w-fit"
            onClick={() => {
              clearAll()
            }}
          >Clear Collection</button>
        </div>
        :
        <div className="w-full h-80 flex items-end justify-center">
          <h2 className="text-5xl leading-16 font-bold uppercase text-center md:leading-none">
            Your Collection Is Empty
          </h2>
        </div>
      }

      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        {collection.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage