
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
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogHome/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/product' element={<ProductList1/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

