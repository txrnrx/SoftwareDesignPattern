import React from 'react';
import Logo from '../../assets/img/car-logo.png';
import { FaUser, FaSearch } from 'react-icons/fa'; // Import the FaSearch icon

const NavMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About us",
    link: "/aboutus",
  },
  {
    id: 3,
    title: "Service",
    link: "/service",
  },
  {
    id: 4,
    title: "Map",
    link: "/map",
  },
];

const Navbar = () => {
  return (
    <div className='bg-white bg-opacity-85 backdrop-filter backdrop-saturate-10'>
      <div className="flex justify-between items-center h-[14vh] px-4">
        {/* Logo Section */}
        <div>
          <a href="/">
            <img src={Logo} alt='Logo' className='w-[150px] hover:bg-opacity-30'/>
          </a>  
        </div>
        {/* Nav Menu Section */}
        <div className='hidden md:flex items-center gap-4'>
          <ul className='flex gap-4'>
            {NavMenu.map((menu) => (
              <li key={menu.id}>
                <a 
                  href={menu.link} 
                  className='relative inline-block px-4 py-2 uppercase
                             rounded-md text-gray-900 bg-transparent
                             overflow-hidden transition-all duration-300
                             hover:text-white hover:scale-110 hover:font-bold hover:bg-primary hover:bg-opacity-60'
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/search"
            className='flex items-center px-4 py-2 text-gray-900 bg-transparent rounded-md hover:text-white hover:scale-110 hover:font-bold hover:bg-primary hover:bg-opacity-60'
          >
            <FaSearch className='mr-2' /> Search
          </a>
        </div>
        {/* Log in and Register Section */}
        <div>
          <a 
            href="/login" 
            className='h-[30px] w-[30px] flex items-center justify-center 
            cursor-pointer bg-gray-200 rounded-full p-2 
            hover:scale-110 hover:text-white  hover:bg-opacity-70 hover:bg-primary duration-200'>
            <FaUser />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
