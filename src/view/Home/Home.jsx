import Navbar from "../../components/Navbar/Navbar"
import carrousel1 from '../../assets/carrousel1.jpg';
import Carrousel from "../../components/Carrousel/Carrousel";
import About from "../../components/AboutUs/About";



const Home = () => {

  const images = [ carrousel1 ];

  return (
    <>
    <Navbar/>
    <Carrousel images={images}/>
    <About/>
    </>
  )
}

export default Home