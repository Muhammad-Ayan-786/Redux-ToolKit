import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice"

const Tabs = () => {

  const tabs = ['photos', 'videos', 'gif']

  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-8 pb-6 px-5 mb-2">
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            className={`
              ${activeTab == elem ? 'bg-amber-500' : 'bg-gray-600'}
              transition-all md:min-w-1/12 px-5 py-2 rounded-xl text-md font-semibold uppercase
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