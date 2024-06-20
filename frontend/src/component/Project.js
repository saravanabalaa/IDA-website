import fourthimg from '../image and icons/WhatsApp Image 2024-01-02 at 09.57.14_a3069c35.jpg';
import fifthimg from '../image and icons/2.1.jpg';
import sixthimg from '../image and icons/2.3.jpeg';
function Project() {
    return ( 
        <div className='project-bg'>
            <h1 className='flex justify-center text-3xl font-bold service-h1'>
            Our projects
            </h1>
            <h5 className='flex justify-center'>
            Have a sneak peak at the Arts we Crafted
            </h5>
        <section className='flex flex-col md:flex-row justify-around px-20 py-20'>
            <div className='relative p-img p-5'>
            <img className='h-[250px] w-[300px] p-r'  src={fourthimg}/>
            <div className='absolute left-0 right-0 bottom-[0px] top-0 card-bg opacity-0 py-12 duration-500 hover:opacity-100 p-r'>
              <h4 className='text-center font-bold text-black py-3'>
                Precision Strike
                </h4>
              
                <p className='text-center font-bold text-black'>
                Mobile shooting game
                <div className='py-5'>
                <button className='text-black p-2 px-1  btn-1'>Learn more</button> 
                </div>
                </p>
               
                
            </div>

            </div>
            <div className='relative p-img p-5'>
            <img className='h-[250px] w-[300px] p-r'  src={fifthimg}/>
            <div className='absolute left-0 right-0 bottom-[0px] top-0 card-bg py-12 opacity-0 duration-500 hover:opacity-100 p-r'>
            <h4 className='text-center font-bold text-black py-3'>
            Turbo Thurst
                </h4>
                <p className='text-center font-bold text-black py-3'>
                Mobile legends AAA title racing mobile game
                <div className='py-5'>
                <button className='text-black p-2 px-1  btn-1'>Learn more</button> 
                </div>
                </p>
               
            </div>

            </div>
            <div className='relative  p-img p-5'>
            <img className='h-[250px] w-[300px] p-r' src={sixthimg}/>
            <div className='absolute left-0 right-0 bottom-[0px] top-0 card-bg py-12 opacity-0 duration-500 hover:opacity-100 p-r'>
            <h4 className='text-center font-bold text-black py-3'>
            Startup Fest Expo
                </h4>
                <p className='text-center font-bold text-black py-3'>
                Oneyes startup fest expo
                <div className='py-5'>
                <button className='text-black p-2 px-1  btn-1'>Learn more</button> 
                </div>
                </p>
                
            </div> 

            </div>
        </section>
        </div>
     );
}

export default Project;