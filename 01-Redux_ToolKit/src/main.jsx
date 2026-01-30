import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Provider makes Redux store available to ALL components
import { Provider } from 'react-redux'

// The Redux store we created using configureStore
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(

  // Provider wraps the entire app
  // store={store} gives Redux data access to all components inside
  <Provider store={store}>

    { /* App (and all its child components) can now use:
          useSelector() and useDispatch() */ }
    <App />

  </Provider>
)
