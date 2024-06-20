import thirdimg from '../image and icons/6650956 copy.png';
function About() {
    return (
        < >
        <div id='about' className='about-bg  '>
        <h1 className='flex px-10 justify-center about-h1 text-3xl font-bold py-5 font-hero-font'>IDA - AR, VR and MR Company in India</h1>
        
          <section className='flex flex-col md:flex-row justify-between px-10 '>
          
          
      
           
            <div className='md:w-1/2 py-20'>
                <p className='pb-8 font-hero-font'>
                We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Insustry and Business With Immersive Technical solution with extensiveand wide range of Imagination that becomes Possible.
                </p>
                <p className='pb-8 font-hero-font'>
                We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future.
                </p>
                <p className='pb-8 font-hero-font'>
                Join Us into the Immersive Future
                <p className='py-5'>
                <button className='text-black p-2 px-1 btn-1'>Learn more</button> 
                </p>
                </p>
            
                </div>
                
                


        
            <div className='md:w-1/2 flex justify-around'>
            <img  className='md:w-1/2 a-img'src={thirdimg}/>

            </div>
            </section>
            </div>
       
        </> )
       
     ;
}

export default About;