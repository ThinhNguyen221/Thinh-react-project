
import Footer from "../Footer"
import Header from "../Header"
import ProductList from "../ProductList"


const ProductList1 =()=>{
    return(
        <div>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold text-red-500">DỰ ÁN HOÀN THÀNH MÔN HỌC REACT - BATCH 36 - APTECH SOFTECH  <br /> <br />
            Product Page <br /> <br />
            <hr /> 
            </div> <br /> <br />
            <ProductList/>
            <Footer/>
        </div>
    )
}
export default ProductList1