import game from '../image and icons/game-development_2029515.png';
import computer from '../image and icons/computer_10940047.png';
import virtual from '../image and icons/virtual-reality_1377790.png';
import ux from '../image and icons/ux-design_7889802.png';
import cpu from '../image and icons/cpu_888995.png';
import workplace from '../image and icons/workplace_8170939.png';
import studio from '../image and icons/studio_9200070.png';
import team from '../image and icons/team_2083290.png';
import model from '../image and icons/3d-model_14189680.png';
import visual from '../image and icons/visual-effect_3879988.png';
import production from '../image and icons/production_13136249.png';
import edite from '../image and icons/film-editing_4035077.png';
function Service() {
    return ( 
        <div id='service' className='service-bg'>
            <h1 className='flex justify-center text-3xl font-bold px-10
            service-h1'>
            Our Services
            </h1>
            <h5 className='flex justify-center px-10'>
            Reinvent your industry with our industrial solutions
            </h5>
            <div className='flex flex-col md:flex-row  px-10 justify-around py-10'>

            <section>
                <ul>
                    <li className='flex p-5 s-li'><img className='s-img' src={game}/> <h5 className='p-2'>Game Development</h5></li>
                    <li className='flex p-5 s-li'><img className='s-img' src={computer}/> <h5 className='p-2'>2D/3D Animation</h5></li>
                    <li className='flex p-5 s-li'><img className='s-img' src={virtual}/> <h5 className='p-2'>AR/VR/MR/XR</h5></li>
                    <li className='flex p-5 s-li'><img className='s-img' src={ux}/> <h5 className='p-2'>UI/UX</h5></li>
                </ul>

            </section>
            <section>
                <ul>
                <li className='flex p-5 s-li'><img className='s-img' src={cpu}/> <h5 className='p-2'>Generatives AI</h5></li>
                <li className='flex p-5 s-li'><img className='s-img' src={workplace}/> <h5 className='p-2'>Motion Graphics</h5></li>
                <li className='flex p-5 s-li'><img className='s-img' src={studio}/> <h5 className='p-2'>Virtual Production</h5></li>
                <li className='flex p-5 s-li'><img className='s-img' src={team}/> <h5 className='p-2'>Academic Alliances</h5></li>
                </ul>

            </section>
            <section >
                <ul>
                <li className='flex p-5 s-li'><img className='s-img' src={model}/> <h5 className='p-2'>3D Modeling/Rendering</h5></li>
                <li className='flex p-5 s-li'><img className='s-img' src={visual}/> <h5 className='p-2'>VFX</h5></li>
                <li className='flex p-5 s-li'><img className='s-img' src={production}/> <h5 className='p-2'> CG</h5></li>
                <li className='flex p-5 s-li'><img className='s-img' src={edite}/> <h5 className='p-2'>Video Editing</h5></li>
                </ul>

            </section>
            </div>

        </div>
        



     );
}

export default Service;
