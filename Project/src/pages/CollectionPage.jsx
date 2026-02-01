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
        <div className="w-full flex justify-between items-center pr-4">
          <h2 className="text-2xl font-bold uppercase">
            Your Collection
          </h2>
          <button
            className="bg-red-500 px-5 py-2 text-base font-medium rounded"
            onClick={() => {
              clearAll()
            }}
          >Clear Collection</button>
        </div>
        :
        <div className="w-full">
          <h2 className="text-3xl font-bold uppercase text-center">Collection Is Empty</h2>
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