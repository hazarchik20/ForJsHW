import { useEffect, useState } from 'react'
import "./App.scss"
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRouted';

function App() {
  const [isLogined, setIsLogined] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className='app'>
        <NavBar isLogined={isLogined} email ={email} setIsLogined={setIsLogined} />
      <div className="main-wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/details/:id' element={<BookDetails />} />
          <Route path="/addbook" element={
            <ProtectedRoute isLogin={isLogined}>
              <AddBook />
            </ProtectedRoute>} />
          <Route path="/login" element={
            <ProtectedRoute isLogin={!isLogined}>
              <Login onLogIn={() => setIsLogined(true)} onEmail = {setEmail} />
            </ProtectedRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
      </div>

    </div>
  )
}

export default App
