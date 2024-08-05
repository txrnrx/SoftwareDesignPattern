import React from 'react';
import Bg from "../../assets/img/bg-building-1.webp";
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';
import SearchForm from '@/components/Searchform';
import { motion } from "framer-motion"

const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const cardData = [
  { name: 'Car Wash', image: 'https://via.placeholder.com/150x100?text=Car+Wash' },
  { name: 'Mechanic Shop', image: 'https://via.placeholder.com/150x100?text=Mechanic+Shop' },
  { name: 'Detailing Shop', image: 'https://via.placeholder.com/150x100?text=Detailing+Shop' },
];

const getRandomCard = () => cardData[Math.floor(Math.random() * cardData.length)];

const Search = () => {
  return (
    <main style={bgImage}>
      <Navbar />
      <div className="bg-gradient-to-r from-primary to bg-primaryDark/85">
        <div className='container text-white'>
          <motion.section
          initial={{opacity:0,y:-100}}
          whileInView={{opacity:1,y:0}}
          transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.5,
            duration:0.4,
          }} className="py-8 ml-10">
            <SearchForm />
          </motion.section>
          <section className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12 px-6 md:px-2 ml-40">
            {Array.from({ length: 10 }).map((_, index) => {
              const { name, image } = getRandomCard();
              return (
                <motion.div
                initial={{opacity:0,x:200}}
                whileInView={{opacity:1,x:0}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.5,
                  duration:0.4,
                }}
                 key={index} className="bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center">
                  <img src={image} alt={`${name} ${index + 1}`} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="mt-4 text-xl font-bold">{name}</h3>
                  <div className="flex mt-2">
                    {/* Render 5 stars */}
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FaStar key={starIndex} className="text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Search;
