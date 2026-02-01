import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice"

const Tabs = () => {

  const tabs = ['photos', 'videos', 'gif']

  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex gap-10 justify-center p-8 px-5">
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            className={`
              ${activeTab == elem ? 'bg-blue-500' : 'bg-gray-600'}
              transition-all px-5 py-2 rounded-xl text-md font-semibold uppercase
              `}
            onClick={() => {
              dispatch(setActiveTab(elem))
            }}
          >
            {elem}
          </button>
        )
      })}
    </div >
  )
}

export default Tabs