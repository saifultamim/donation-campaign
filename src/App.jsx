import {Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Home/Header'
function App() {
 
  return (
    <>
         <div  className=''>
         <Header></Header>
         <Outlet></Outlet>
         </div>  
    </>
  )
}
export default App
