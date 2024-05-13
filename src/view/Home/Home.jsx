import Navbar from "../../components/Navbar/Navbar"
import edificios from '../../assets/edificios.mp4';
import Carrousel from "../../components/Carrousel/Carrousel";
import About from "../../components/AboutUs/About";
import Products from "../../components/Products/Products";
import video from '../../assets/background.mp4';
import obras from '../../assets/obraIndustrial.mp4';
import carrousel1 from '../../assets/carrousel1.jpg';

const products = [
  {
    id : 1,
    video:video,
    tittle: "Proyectos Individuales",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta provident vel nisi enim quo dolorum. Eveniet, ducimus recusandae quaerat animi harum ex, quos esse repudiandae nisi officia quam non laudantium!"
  },
  {
    id : 2,
    video:edificios,
    tittle: "Edificios",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta provident vel nisi enim quo dolorum. Eveniet, ducimus recusandae quaerat animi harum ex, quos esse repudiandae nisi officia quam non laudantium!"
  },
  {
    id : 3,
    video: obras,
    tittle: "Servicios Industriales",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta provident vel nisi enim quo dolorum. Eveniet, ducimus recusandae quaerat animi harum ex, quos esse repudiandae nisi officia quam non laudantium!"
  },
]

const Home = () => {

  const images = [ carrousel1 ];

  return (
    <>
    <Navbar/>
    <Carrousel images={images}/>
    <About/>
    <Products products={products}/>
    </>
  )
}

export default Home