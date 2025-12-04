import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./AllStyle.css"
import MiniBlog from './MiniBlog'
import FavoriteFilms from './FavoriteFilms'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiniBlog/>
    <FavoriteFilms/>
  </StrictMode>,
)
