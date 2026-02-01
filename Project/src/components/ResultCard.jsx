import { Bookmark } from "lucide-react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {

  const dispatch = useDispatch()

  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  return (
    <div className='w-72 h-72 relative rounded-lg bg-gray-200 text-black overflow-hidden'>

      <a target="_blank" href={item.url} className="h-full">
        {item.type == 'photo' ? <img className="h-full w-full object-cover object-center" src={item.src} /> : ''}
        {item.type == 'video' ? <video className="h-full w-full object-cover object-center" autoPlay loop muted src={item.src}></video> : ''}
        {item.type == 'gif' ? <img className="h-full w-full object-cover object-center" src={item.src} /> : ''}
      </a>

      <div
        className="bottomCard h-[30%] w-full flex gap-3 items-center justify-between px-3 py-6 absolute bottom-0 text-white"
      >
        <h2 className="text-md font-semibold capitalize h-13 overflow-hidden">
          {item.title}
        </h2>

        <button
          className="
        bg-indigo-400 text-white rounded-full p-2 font-medium
        active:scale-95
        "
          onClick={() => {
            addToCollection(item)
          }}
        >
          <Bookmark size={20} />
        </button>
      </div>

    </div>
  )
}

export default ResultCard