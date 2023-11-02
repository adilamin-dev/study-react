import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/study-react' element={<HomePage/>}/>
          <Route path='/post' element={<PostPage/>}/>
          <Route path='/Products' element={<ProductPage/>}/>
          <Route path='/profile/:myName' element={<ProfilePage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
