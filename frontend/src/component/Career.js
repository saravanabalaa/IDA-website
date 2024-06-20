import first from '../image and icons/OIP.jpeg';
import second from '../image and icons/iop2.png';
import third from '../image and icons/oip 3.jpeg';
import fourth from '../image and icons/oip4.jpg';
import fifth from '../image and icons/OIP (1).jpeg';
function Career () {
    return (
        <div id='career' className='py-10 c-bg'>
              <h1 className='flex justify-center text-3xl font-bold service-h1'>
            Our client
            </h1>
            <h5 className='flex justify-center p-3 px-10 font-hero-font'>
            Our clients aren't just clients; they are valued partners in progress. We take pride in understanding their
            </h5>
            <h5 className='flex justify-center p-3 px-10 font-hero-font'>
            unique needs, tailoring solutions, and fostering long-term relationships.
            </h5>
        <div className="slider py-10">
            <div className="slide-track">
                <div className="slide">
                <img className='w-[100px] h-[75px] c-img' src={first}/>


                </div>
                <div className="slide">
                    
                <img className='w-[100px] h-[75px] c-img' src={second}/>
                </div>
                <div className="slide">
                    
                <img className='w-[100px] h-[75px] c-img' src={third}/>
                </div>
                <div className="slide">
                    
                <img className='w-[100px] h-[75px] c-img' src={fourth}/>
                 </div>
                <div className="slide">
                <img className='w-[100px] h-[75px] c-img' src={fifth}/>  

                </div>
                <div className="slide">
                <img className='w-[100px] h-[75px] c-img' src={first}/>  

                </div>
                <div className="slide">
                <img className='w-[100px] h-[75px] c-img' src={second}/>  

                </div>
                <div className="slide">
                <img className='w-[100px] h-[75px] c-img' src={third}/>  

                </div>
                <div className="slide">
                <img className='w-[100px] h-[75px] c-img' src={fourth}/>  

                </div>
                

            </div>

        </div>
        </div>
      );
}

export default Career ;