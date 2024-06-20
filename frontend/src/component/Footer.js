import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import email from '../image and icons/email.png';
import insta from '../image and icons/instagram.png';
import whatsapp from '../image and icons/whatsapp.png';
function Footer() {
    return (
        <section id='contact' className="flex  flex-col md:flex-row justify-around f-bg text-white">
            <div  className="  px-10 py-10 lg:w-1/2">
            <h1 className=' text-3xl font-bold service-h1'>
            Contact Us
            </h1>
            <p className="py-10" >
            INDUSTRIAL DESIGN & ANIMATIONS
               Karunaa Conclave,
               No.1963, J Block, 3rd Street, 5th Main Road,
               Anna Nagar West, Anna Nagar, Chennai,
                 Tamil Nadu - 600040, INDIA
            </p>
            <h3 className=' font-bold service-h1'>
            Email:
            </h3>
            <h2>info@idacreations.com</h2>
            <ul className='flex py-10 '>
         <li><a href="#" className='hover:text-orange-500'><FaInstagramSquare size={20}/></a></li>
            <li><a href="#"className='hover:text-orange-500'>< FaXTwitter size={20}/></a></li>
            <li><a href="#"className='hover:text-orange-500'><FaFacebook size={20}/></a></li>
            <li><a href="#"className='hover:text-orange-500'><FaLinkedin size={20}/></a></li>

         </ul>
         
            

            </div>
            <div className="py-5 lg:w-1/2 ">
            <h1 className='flex justify-center text-3xl font-bold service-h1'>
            Locate us on Map
            </h1>
            <div className="py-5">
            <iframe className="w-[500px] h-[300px] f-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.256479460653!2d80.208557!3d13.082925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641f73827315%3A0xc60a47141c034265!2sSyncfusion%20Software%20Pvt%20Ltd%2C%20Karuna%20Conclave%20Block!5e0!3m2!1sen!2sin!4v1718903551939!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            



            </div>
            <div className="flex justify-evenly py-20 lg:w-1/2">
                <div>
                <img className='w-[50px] h-[40px] f-img' src={email}/>
                <p> Email</p>
                </div>
                <div>
                <img className='w-[50px] h-[40px] f-img' src={insta}/>
                <p> Instagram</p>

                </div>
                <div>
                <img className='w-[50px] h-[40px] f-img' src={whatsapp}/>
                <p> whatsapp</p>

                </div>

            </div>
        </section>
      );
}

export default Footer;