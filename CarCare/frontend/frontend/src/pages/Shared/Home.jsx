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
const Home = () => {
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
      className='text-5xl lg:text-7xl font-bold leading-tight'>CAR CARE</motion.h1>
      <a href="/search">
      <motion.button 
      initial={{opacity:0,y:-100}}
      whileInView={{opacity:1,y:0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:1.2,
        duration:0.5,
      }}
      className='outline-btn flex
       justify-center items-center gap-4 group'>Explore
        <FaArrowRight className="group-hover:translate-x-2 transition" />
      </motion.button> </a>
      </div>
        
        <div className='relative'>
      <motion.img
      initial={{opacity:0,x:200}}
      whileInView={{opacity:1,x:0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.4,
        duration:0.4,
      }}
       src={Carpng} alt="" className=" h-auto relative z-30" />
        </div>
    
  </section>
        </div>
</div>
<Footer />

        </main>
    )
}

export default Home