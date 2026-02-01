import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import { ToastContainer } from 'react-toastify';
import { Bookmark, HomeIcon } from "lucide-react";

const App = () => {
  return (
    <div className='w-full min-h-screen relative bg-gray-950 text-white'>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>

      <ToastContainer />

      <div className="fixed bottom-0 md:bottom-2 md:right-3 flex md:flex-col gap-4 p-3">
        <Link
          to='/'
          className="bg-amber-400 p-3 flex items-center justify-center rounded-full"
        >
          <HomeIcon size={26} />
        </Link>

        <Link
          to='/collection'
          className="bg-amber-400 p-3 flex items-center justify-center rounded-full"
        >
          <Bookmark size={26} />
        </Link>
      </div>

    </div>
  )
}

export default App