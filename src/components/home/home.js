import "./home.css"
import Navbar from '../NavBar/navbar';
import Header from '../header/header';
import Footer from '../Footer/footer';

function Home() {
  return (
    <div style={{backgroundColor:"white"}}>
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default Home;
