import Aos from "aos";
import 'aos/dist/aos.css';
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Product from "../components/Product";
import Mask from "../components/Mask";
import Footer from "../components/Footer";
import Hero from "../components/Hero";


function Home() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container mx-auto">
      <Product></Product>
        <Carousel></Carousel>
        <Mask></Mask>
        <Card></Card>
      </div>
      <Footer></Footer>


    </>

  );
}

export default Home;