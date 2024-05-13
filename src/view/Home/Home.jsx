import Navbar from "../../components/Navbar/Navbar"
import carrousel1 from '../../assets/carrousel1.jpg';
import Carrousel from "../../components/Carrousel/Carrousel";
import About from "../../components/AboutUs/About";
import Products from "../../components/Products/Products";



const Home = () => {

  const images = [ carrousel1 ];

  return (
    <>
    <Navbar/>
    <Carrousel images={images}/>
    <About/>
    <Products/>
    </>
  )
}

export default Home