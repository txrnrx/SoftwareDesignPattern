import React from 'react'
import Carpng from '../../assets/img/car-merc-care.png'
import Bg from "../../assets/img/bg-building-1.webp"
import {FaArrowRight} from 'react-icons/fa';
import { motion } from "framer-motion"
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';
const bgImage={
    backgroundImage: `url(${Bg})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}
const About = () => {
    return (
         <main style={bgImage} >
            <Navbar/>
         <div  className="bg-gradient-to-r
          from-primary to bg-primaryDark/85 ">
        <div className='container text-white'>
        <section className="grid grid-cols-1 
        md:grid-cols-2 place-items-center min-h-[700px]">
      <div className='sapce-y-8'>
      <motion.h1 
      initial={{opacity:0,y:-100}}
      whileInView={{opacity:1,y:0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:1,
        duration:0.4,
      }}
      className='text-5xl lg:text-7xl font-bold leading-tight'>About Us</motion.h1>
 
      </div>
        
        <div className='relative'>
      <motion.div
      initial={{opacity:0,x:200}}
      whileInView={{opacity:1,x:0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.4,
        duration:0.4,
      }}
        className=" h-auto relative z-30" >At CARCARE, we pride ourselves on offering top-tier automotive services that go beyond the ordinary. Our commitment to excellence is reflected in everything we do, ensuring your vehicle receives the care it deserves. Our network of exclusive partner locations guarantees premium service no matter where you are, with each partner carefully vetted to uphold our high standards.

        Discover the ultimate in car wash services with our supreme cleansing packages. Using only the finest products and techniques, we ensure your vehicle is spotless, enhancing its appearance and protecting its finish. Our team of expert technicians is dedicated to providing unparalleled car repair and maintenance services. Equipped with advanced tools and genuine parts, we ensure your vehicle performs at its best, delivering reliability and safety on the road.
        
        Indulge in our luxury detailing and elite refinishing services. We take meticulous care to restore your vehicle’s interior and exterior to pristine condition, making it look and feel like new. From comprehensive cleaning to high-quality refinishing, we offer the finest in automotive detailing. Our mission is to provide exceptional automotive services that combine quality, reliability, and value, exceeding your expectations with every visit.</motion.div>
        </div>
    
  </section>
        </div>
</div>
<Footer />
        </main>
    )
}

export default About