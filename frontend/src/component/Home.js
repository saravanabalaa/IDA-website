import firstimg from '../image and icons/1_xKfrcrFty_-xaXcfUjOSKg (1).webp';
import secondimg from '../image and icons/Vid.png';
function Home() {
    return (
      <>
        <section className='flex flex-col md:flex-row px-10 justify-between py-10 bg-secondary'>
            <nav className='md:w-1/3 h-1/4 '>
           <img  className='img-1' src={firstimg}/>
           <h1 className='text-white text-4xl py-5'>Bringing Ideas To Our Reality</h1>

           <button className='text-black p-2 btn-1'>Explore</button>
           </nav>
           <img className='md:w-1/2 h-1/2 img-1' src={secondimg}/>

           </section>
          
        </>
      );
}

export default Home;