import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaAPI"

const App = () => {

  return (
    <div className='w-full h-screen bg-gray-950 text-white'>
      <button
        className="py-3 px-10 rounded-xl text-xl cursor-pointer bg-gray-800 active:scale-95 m-8"
        onClick={async () => {
          console.log("Photos");
          let data = await fetchPhotos('dog')
          console.log(data.results)
        }}>
        Get Photo
      </button>

      <button
        className="py-3 px-10 rounded-xl text-xl cursor-pointer bg-gray-800 active:scale-95 m-8"
        onClick={async () => {
          console.log("Videos");
          let data = await fetchVideos('dog')
          console.log(data.data.videos)
        }}>
        Get Videos
      </button>

      <button
        className="py-3 px-10 rounded-xl text-xl cursor-pointer bg-gray-800 active:scale-95 m-8"
        onClick={async () => {
          console.log("Gifs");
          let data = await fetchGIF('dog')
          console.log(data.data.results)
        }}>
        Get Gifs
      </button>
    </div>
  )
}

export default App