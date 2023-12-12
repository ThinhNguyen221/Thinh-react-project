
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './conponents/Pages/HomePage'
import BlogHome from './conponents/Pages/BlogHome'
import Category from './conponents/Pages/Category'
import ProductList1 from './conponents/Pages/Productt'
import LoginForm from './conponents/Pages/Login'
import Customer from './conponents/Pages/Customer'
import NoPage from './conponents/Pages/NoPage'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='Thinh-react-project/' element={<HomePage/>}/>
        <Route path='Thinh-react-project/blog' element={<BlogHome/>}/>
        <Route path='Thinh-react-project/category' element={<Category/>}/>
        <Route path='Thinh-react-project/product' element={<ProductList1/>}/>
        <Route path='Thinh-react-project/login' element={<LoginForm/>}/>
        <Route path='Thinh-react-project/customer' element={<Customer/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

