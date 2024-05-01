import React from 'react';
import Slider from "react-slick";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uber from '../../assets/uber.png';
import Tules from '../../assets/telus.png';
import Du from '../../assets/du.png';
import Accenture from '../../assets/accenture.png';
import Emirates from '../../assets/emirates.png';
import Dubai from '../../assets/dubai.png';
import Photo10 from '../../assets/photo10.png';
import Photo11 from '../../assets/photo11.png';
import Photo13 from '../../assets/photo13.png';
import Photo14 from '../../assets/photo14.png';
import Askedques from '../../assets/askedques.png';
import Photo17 from '../../assets/photo17.png';
import Benefittext from '../../assets/benefittext.png';
import Bookdemo from '../../assets/bookdemo.png';
import Benefitstitle2 from '../../assets/benefitstitle2.png';
import Textpro from '../../assets/textpro.png';
import Getstart from '../forms/Getstart';
import Bookdem from '../forms/Bookdem';

import TalktoSale from '../forms/TalktoSale';


function Products() {

  const [accordionOpen, setAccordionOpen] = useState(false);
const [openform, setopenform] = useState('f')
  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,

  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev" onClick={onClick} style={{ backgroundColor: 'purple' }}>
        Previous
      </button>
    );
  };

  // Özel sağ ok butonu bileşeni
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next" onClick={onClick} style={{ backgroundColor: 'purple' }}>
        Next
      </button>
    );
  };

  return (

   <div className='  '  id="Products">

 <div className='relative  max-w-full'>
  <div className='productHim'>
    <img className='mt-16 w-[2500px]  h-auto' src={Photo17} alt="Your Image" />
  </div>

  <div className='absolute w-full h-auto top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto'>
    <div>
    <img className='  h-auto' src={Textpro} alt="Your Image" />
    <div className='flex '>
   <Bookdem/>
   <Getstart/>
   </div>
      </div>
</div>
</div>
<div className='max-w-screen-lg m-auto'>
<div className='prh2 '>

 <div  data-aos="fade-left"><img  src ={Benefitstitle2}/></div>
<div  data-aos="fade-right"><img src ={Benefittext}/></div>
</div>
<div className=' '>
<div  data-aos="fede-left"><img src ={Photo13}/></div>
  <div data-aos="fade-right"><img src ={Photo14}/></div>
</div>




<div className='Slider  m-auto slider-container  mt-4'>
<Slider  {...settings} prevArrow={<CustomPrevArrow className='bg-purple-900'/>} nextArrow={<CustomNextArrow />}>
  <div>
    <img  src={Uber} alt="Resim 1" />
  </div>
  <div>
    <img  src={Tules} alt="Resim 2" />
  </div>
  <div>
    <img  src={Dubai} alt="Resim 3" />
  </div>
  <div>
    <img  src={Emirates} alt="Resim 4" />
  </div>
  <div>
    <img  src={Du} alt="Resim 4" />
  </div>
  <div>
    <img  src={Accenture} alt="Resim 4" />
  </div>
  </Slider>


</div>

<div className=' solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-28 '  id="Products">
 <div className='flex justify-center mb-7'><img src={Askedques}/></div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={accordionOpen ? 'true' : 'false'}
            onClick={toggleAccordion}
          >
            <span>Flowbite nedir?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
            <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
          </div>
        </div>

      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={accordionOpen ? 'true' : 'false'}
            onClick={toggleAccordion}
          >
            <span>Flowbite nedir?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
            <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
          </div>
        </div>
        {/* Diğer accordion öğeleri */}
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={accordionOpen ? 'true' : 'false'}
            onClick={toggleAccordion}
          >
            <span>Flowbite nedir?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
            <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
          </div>
        </div>

      </div>
    </div>


 <div className='relative w-full'>
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
  <img src={Photo11}/>
</div>
</div>
</div>

 )
}

export default Products;
