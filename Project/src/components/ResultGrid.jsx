import { useDispatch, useSelector } from "react-redux"
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaAPI"
import { setError, setLoading, setResults } from "../redux/features/searchSlice"
import { useEffect } from "react"
import ResultCard from "./ResultCard"

const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      if (!query) return

      try {
        dispatch(setLoading())
        let data = []

        if (activeTab == 'photos') {
          let response = await fetchPhotos(query)
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }))
        }
        if (activeTab == 'videos') {
          let response = await fetchVideos(query)
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }))
        }
        if (activeTab == 'gif') {
          let response = await fetchGIF(query)
          data = response.data.results.map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.title || 'GIF',
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url
          }))
        }

        dispatch(setResults(data))
      } catch (error) {
        dispatch(setError(error.message))
      }
    }
    getData()
  }, [query, activeTab, dispatch])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <div className="flex flex-wrap gap-8 justify-center sm:justify-between px-10 pb-8">
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item} />
        </div>
      })}
    </div>
  )
}

export default ResultGrid