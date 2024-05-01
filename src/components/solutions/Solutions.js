import React from 'react';
import Slider from "react-slick";
// import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uber from '../../assets/uber.png';
import Tules from '../../assets/telus.png';
import Du from '../../assets/du.png';
import Accenture from '../../assets/accenture.png';
import Emirates from '../../assets/emirates.png';
import Dubai from '../../assets/dubai.png';
import Photo4 from '../../assets/photogirls.png'
import Photo5 from '../../assets/photo5.png';
import Photo7 from '../../assets/photo7.png';
import Herotext from '../../assets/herotext.png';
import Photo9 from '../../assets/photo9.png';
import Photo10 from '../../assets/photo10.png';
import Photo11 from '../../assets/photo11.png';
import Photo17s from '../../assets/photo17s.png';
import Photo61 from '../../assets/photo61.png';
import Photo64 from '../../assets/benefitstitle.png';
import Photo62 from '../../assets/photo62.png';
import Photo63 from '../../assets/photo63.png';
import Getstart from '../forms/Getstart';

import Bookdemo from '../../assets/bookdemo.png';
import Bookdem from '../forms/Bookdem';
import TalktoSale from '../forms/TalktoSale';
import '../app.css'
// import { FaZ } from 'react-icons/fa6';
function Solutions() {




const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev rounded-full" onClick={onClick} style={{ backgroundColor: 'purple' }}>
        Previous
      </button>
    );
  };


  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next rounded-full" onClick={onClick} style={{ backgroundColor: 'purple' }}>
        Next
      </button>
    );
  };
  return (

    <div className=' ' id="Solutions">
<div className='relative max-w-full' >
  <div>
    <img className='mt-16 w-[2500px] h-auto' src={Photo17s} alt="Your Image" />
  </div>

  <div className='absolute w-full h-auto top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto'>
    <div>
    <img className='  h-auto' src={Herotext} alt="Your Image" />
   <div className='flex'>
   <Bookdem className='sm:w-2'/>
   <Getstart/>
   </div>

    </div>

  </div>


       </div>


<div className='max-w-screen-lg m-auto'>
<div className='relative marginsoluation container '>

    <img  className='  absolute  z-50 ' src={Photo5} alt="Photo5" />

    <div  data-aos="fade-up"
     data-aos-duration="3000" >
        <img className='img' src={Photo4}   alt="Photo4"  />
    </div>
</div>
<div className=' container photo9 '>
    <div className='flex justify-center gap-10 mb-4' data-aos="zoom-in" data-aos-duration="1000">
        <img className='Photo64' src={Photo64} alt="Photo64" />
    </div>
    <div data-aos="fade-left" data-aos-duration="1000">
        <img src={Photo61} alt="Photo61" />
    </div>
    <div data-aos="fade-right" data-aos-duration="1500">
        <img src={Photo62} alt="Photo62" />
    </div>
    <div data-aos="fade-left" data-aos-duration="1800">
        <img className='' src={Photo63} alt="Photo63" />
    </div>
    <div data-aos="zoom-in" data-aos-duration="1000">
        <img src={Photo7} alt="Photo7" />
    </div>
</div>



        <div className='Slider  m-auto slider-container  mt-4'>
<Slider   {...settings} prevArrow={<CustomPrevArrow/>} nextArrow={<CustomNextArrow />}>
  <div>
    <img  src={Uber} alt="Resim 1" />
  </div>
  <div>
    <img    src={Tules} alt="Resim 2" />
  </div>
  <div>
    <img  src={Dubai} alt="Resim 3" />
  </div>
  <div>
    <img  src={Emirates} alt="Resim 4" />
  </div>
  <div>
    <img   src={Du} alt="Resim 4" />
  </div>
  <div>
    <img  src={Accenture} alt="Resim 4" />
  </div>


</Slider>
</div>



<div className='photo9soluation container'  data-aos="zoom-in" data-aos-duration="1000">  <img  src={Photo9} /></div>



       <div className='relative w-full  empowersoluation'>
  <div>
    <img className=' ' src={Photo10} alt="Your Image" />
  </div>
<div className='photoempower '>
  <img className=' ' src={Bookdemo} alt="Your Image" />
  <button className='link'>
    <Bookdem/></button>
    <button className='link1'>
   <TalktoSale/></button>

    </div>
</div>

        <div>
  <img className='mt-35' src={Photo11}/>
</div>
</div>
</div>
  )
}

export default Solutions