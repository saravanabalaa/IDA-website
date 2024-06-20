import{Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import logo from '../image and icons/2.1.ico';
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Navication() {
    const [togglemenu,settogglemenu]=useState(false);
    return (
       <header className="flex justify-around py-5 bg-primary sticky top-0 ... z-10">
        <a href="#"><img className='logo' src={logo}/></a>
        <nav className="hidden md:block py-2">
        <ul className="flex text-white  ">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#career">Client</a></li>
            <li><a href="#form">Careers</a></li>
            <li><a className='bg-orange-500 n-c p-3' href="#contact"> Contact US</a></li>
         </ul >
       
         </nav>
         <nav className='hidden md:block py-3'>
         <ul className='flex '>
         <li><a href="#" className='hover:text-orange-500'><FaInstagramSquare size={20}/></a></li>
            <li><a href="#"className='hover:text-orange-500'>< FaXTwitter size={20}/></a></li>
            <li><a href="#"className='hover:text-orange-500'><FaFacebook size={20}/></a></li>
            <li><a href="#"className='hover:text-orange-500'><FaLinkedin size={20}/></a></li>

         </ul>
         </nav>
         {togglemenu &&<nav className="block md:hidden ">
        <ul onClick={()=>settogglemenu(!togglemenu)} className="flex flex-col justify-center pr-16   text-white mobile-nav  ">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#service">Services</a></li>
            <li><a href="/#career">Client</a></li>
            <li><a href="/#form">Careers</a></li>
            <li><a href="/#contact"> Contact US</a></li>
         </ul>
         </nav>
          }
         <button onClick={()=>settogglemenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-7'/></button>
    </header>
    )
}

export default Navication;