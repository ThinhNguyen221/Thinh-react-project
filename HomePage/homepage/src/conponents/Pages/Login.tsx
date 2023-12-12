import Footer from "../Footer"
import Header from "../Header"
import Login1 from "../Login1"


const LoginForm =()=>{
    return(
        <div>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold">DỰ ÁN HOÀN THÀNH MÔN HỌC REACT - BATCH 36 - APTECH SOFTECH  <br /> <br />
            Login Page
            </div> <br /> <br />
            <Login1/>
            <Footer/>
        </div>
    )
}
export default LoginForm 