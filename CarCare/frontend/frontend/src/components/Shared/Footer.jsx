import { Facebook, Twitter } from 'lucide-react';
import React from 'react';
import ShinyButton from '../magicui/shiny-button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-white bg-opacity-90'>
      <div className="w-full h-[12vh] flex flex-row justify-center items-center border-t-2 border-primary/1">
        <div className="w-1/4 h-1/8 text-primary font-bold flex justify-start items-center text-lg">
          ©CarCare
          <div className='h-3/10'>
          <Link to="/contact">
            <ShinyButton text="Contact Us" className="ml-4 bg-primary text-white px-4 py-2 rounded hover:bg-primaryDark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50" />
          </Link>
          </div>
        </div>
        <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
          <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
            <Facebook className='h-6 w-6' />
          </a>
          <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
            <Twitter className='h-6 w-6' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
