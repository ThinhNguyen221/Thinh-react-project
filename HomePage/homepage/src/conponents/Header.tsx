
import { Link } from "react-router-dom";
import Navigation from "./Navigation"


const Header =()=>{
    return(
        <header className='bg-orange-500 '>
            <nav className='max-w-screen-xl mx-auto flex justify-between container 	'>
                <h1 className='text-4xl py-[10px] font-bold text-white mb-0 '><Link to= {'/Thinh-react-project/'} >Electrician</Link></h1>
                <Navigation/>
            </nav>
        </header>
      
    )
}
export default Header