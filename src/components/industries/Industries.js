import React from "react";
import { useState } from "react";
import Photo7 from "../../assets/photo7.png";
import Photo10 from "../../assets/photo10.png";
import Photo11 from "../../assets/photo11.png";
import Photo17 from "../../assets/photo17.png";
import Photo18 from "../../assets/photo18.png";
import Photo19 from "../../assets/photo19.png";
import data1 from "../../assets/data1.png";
import data2 from "../../assets/data2.png";
import data3 from "../../assets/data3.png";
import datatext1 from "../../assets/datatext1.png";
import datatext2 from "../../assets/datatext2.png";
import datatext3 from "../../assets/datatext3.png";
import key from "../../assets/key.png";
import key1 from "../../assets/key1.png";
import Askedques from "../../assets/askedques.png";
import Herotext from "../../assets/herotext.png";
import Title1 from "../../assets/title1.png";
import Textpro1 from "../../assets/textpro1.png";
import Textpro2 from "../../assets/textpro2.png";
import Getstart from "../forms/Getstart";
import Bookdem from "../forms/Bookdem";
import TalktoSale from "../forms/TalktoSale";
import Bookdemo from "../../assets/bookdemo.png";
import Brands from "../subcomponents/Brands";
import Accordion from "../subcomponents/Accordion";
import Footer from "../subcomponents/Footer";
function Industries() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-prev"
        onClick={onClick}
        style={{ backgroundColor: "purple" }}
      >
        Previous
      </button>
    );
  };

  // Özel sağ ok butonu bileşeni
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-next"
        onClick={onClick}
        style={{ backgroundColor: "purple" }}
      >
        Next
      </button>
    );
  };
  return (
    //     <div id="Industries">

    //    <div className='relative w-full'>
    //   <div>
    //     <img className='  h-auto' src={Photo17} alt="Your Image" />
    //   </div>

    //   <div className='absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto'>
    //     <div>

    //     <img className=' mb-4 h-auto' src={Textpro1} alt="Your Image" />
    //     <img className='  h-auto' src={Textpro2} alt="Your Image" />
    //     </div>
    //     <div className='flex'>
    //    <Bookdem/>
    //    <Getstart/>
    //    </div>

    //   </div>

    //        </div>
    // <div className='max-w-screen-lg m-auto'>
    //   <div className=' w-[800px] m-auto mt-10 md:flex-wrap' >
    //   <div><img src={datatext1}/></div>
    //   <div><img src={datatext2}/></div>
    //   <div><img src={datatext3}/></div>
    //   </div>

    // <div className='  flex '>

    //   <div data-aos="fade-left"  data-aos-duration="1000"><img src={data1}/></div>
    //   <div data-aos="fade-up"  data-aos-duration="2000"><img src={data2}/></div>
    //   <div data-aos="fade-right"  data-aos-duration="1000"><img src={data3}/></div>
    // </div>

    // <div className='flex '>
    //   <div className="" data-aos="fade-up"  data-aos-duration="1000">
    //     <img src={key1}  />
    //   </div>
    //   <div className="" data-aos="fade-left"  data-aos-duration="2000">
    //     <img src={key}  />
    //   </div>
    // </div>

    // <div className='mt-10'>
    // <div><img src={Photo18}/></div>
    // </div>
    // <div className='mt-10'>
    // <div><img src={Photo7}/></div>
    // </div>
    // <div className='mt-10 w-[900px] m-auto'>
    // <div><img src={Photo19}/></div>
    // </div>
    // <div className=' md:px-12 p-4 max-w-screen-2xl mx-auto mt-28 '  id="Products">
    //  <div className='flex justify-center mb-7'><img src={Askedques}/></div>
    //       <div id="accordion-collapse" data-accordion="collapse">
    //         <h2 id="accordion-collapse-heading-1">
    //           <button
    //             type="button"
    //             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
    //             data-accordion-target="#accordion-collapse-body-1"
    //             aria-expanded={accordionOpen ? 'true' : 'false'}
    //             onClick={toggleAccordion}
    //           >
    //             <span>Flowbite nedir?</span>
    //             <svg
    //               data-accordion-icon
    //               className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`}
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 10 6"
    //             >
    //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
    //             </svg>
    //           </button>
    //         </h2>
    //         <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
    //           <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
    //             <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
    //             <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
    //           </div>
    //         </div>

    //       </div>
    //       <div id="accordion-collapse" data-accordion="collapse">
    //         <h2 id="accordion-collapse-heading-1">
    //           <button
    //             type="button"
    //             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
    //             data-accordion-target="#accordion-collapse-body-1"
    //             aria-expanded={accordionOpen ? 'true' : 'false'}
    //             onClick={toggleAccordion}
    //           >
    //             <span>Flowbite nedir?</span>
    //             <svg
    //               data-accordion-icon
    //               className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`}
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 10 6"
    //             >
    //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
    //             </svg>
    //           </button>
    //         </h2>
    //         <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
    //           <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
    //             <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
    //             <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
    //           </div>
    //         </div>

    //       </div>
    //       <div id="accordion-collapse" data-accordion="collapse">
    //         <h2 id="accordion-collapse-heading-1">
    //           <button
    //             type="button"
    //             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
    //             data-accordion-target="#accordion-collapse-body-1"
    //             aria-expanded={accordionOpen ? 'true' : 'false'}
    //             onClick={toggleAccordion}
    //           >
    //             <span>Flowbite nedir?</span>
    //             <svg
    //               data-accordion-icon
    //               className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`}
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 10 6"
    //             >
    //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
    //             </svg>
    //           </button>
    //         </h2>
    //         <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
    //           <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
    //             <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
    //             <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
    //           </div>
    //         </div>

    //       </div>
    //     </div>

    //     <div className='relative w-full'>
    //   <div>
    //     <img className=' ' src={Photo10} alt="Your Image" />
    //   </div>
    // <div className='photoempower '>
    //   <img className=' ' src={Bookdemo} alt="Your Image" />
    //   <button className='link'>
    //     <Bookdem/></button>
    //     <button className='link1'>
    //    <TalktoSale/></button>

    //     </div>
    // </div>

    // <div>
    //   <img src={Photo11}/>
    // </div>

    //     </div>
    //     </div>
    <div className="w-full flex flex-col gap-[130px] font-rubik">
      <div
        className="flex bg-cover bg-center pt-[383px] responsive-padding"
        style={{
          backgroundImage: `url("/img/photo17.png")`,
          height: 1083,
        }}
      >
        <div className="relative flex text-left text-white container mx-auto max-w-[1540px] flex-col items-start gap-[41px] justify-start">
          <span className="flex text-white text-[24px] font-normal leading-[135%] tracking-[0.233px]">
            Tackling Challenges with One37
          </span>
          <span className="flex text-white font-chakra text-[74px] font-medium leading-[135%] tracking-[0.233px]">
            Health
          </span>
          <span className="flex text-white text-[33px] font-normal leading-[135%] tracking-[0.233px]">
            Cybersecurity & Privacy in Healthcare
          </span>
          <div className="flex gap-[25px] mt-[52px]">
            <button className="flex h-[54px] items-center justify-center flex-shrink-0 rounded-[5.173px] bg-btn-grid p-[16.5px]">
              <p className="flex text-[24.831px] text-white font-medium leading-normal">
                Book Demo
              </p>
            </button>
            <button className="flex h-[54px] items-center justify-center flex-shrink-0 rounded-[5.173px] text-white border-solid border-[2px] border-white text-center p-[16.5px]">
              <p className="flex text-[24.831px] text-white font-medium leading-normal">
                Get Started
              </p>
            </button>
          </div>
          <img
            src="/img/Stethoscope.png"
            className="hidden sm:hidden 2xl:block w-[431px] h-[400px] absolute top-[-144px] right-[250px] z-20"
            alt="Stethoscope"
          />
          <img
            src="/img/Doctors.png"
            className="hidden sm:hidden 2xl:block w-[359px] h-[603px] absolute top-[-94px] right-[-20px] z-10"
            alt="Doctors"
          />
        </div>
      </div>
      <div className="flex container mx-auto max-w-[1540px] flex-col sm:flex-col xl:flex-row gap-[20px] sm:gap-[30px] xl:gap-[100px] 2xl:gap-[206px] responsive-padding">
        <div className="flex flex-col py-[25px] gap-[25px]">
          <span className="text-secondary font-chakra text-[42px] font-medium leading-[135%] tracking-[0.223px]">
            Cybersecurity & Privacy Challenges
          </span>
          <span className="text-primary font-rubik text-[26.9px] font-normal leading-[135%] tracking-[0.223px]">
            Health providers face daunting challenges in protecting sensitive
            data against cyber-attacks, data breaches, and privacy violations.{" "}
            <br />
            The sector is a prime target for hackers due to the valuable
            personal health information (PHI) held. Moreover, the increasing
            adoption of telehealth services has expanded the attack surface.
            Compliance with stringent regulations like HIPAA further complicates
            cybersecurity efforts.
          </span>
        </div>
        <div className="flex flex-col items-center gap-[50px] min-w-[590px]">
          <span className="w-full text-center text-secondary text-[31px] font-medium leading-[135%] tracking-[0.233px]">
            Health sector encounters unique challenges that require robust
            solutions
          </span>
        </div>
      </div>
      <div className="flex container mx-auto max-w-[1540px] flex-col gap-[62px] responsive-padding">
        <span className="w-full text-center font-chakra text-[52px] font-medium leading-normal">
          Industry at a Glance
        </span>
        <div className="w-full grid grid-cols-1 grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 sm:gap-6 lg:gap-[101px]">
          <div className="flex flex-col px-[16px] py-[20px] gap-[10px]">
            <span className="w-full text-center bg-btn-grid clip-text text-[52px] font-medium leading-[135%] tracking-[0.223px] bg-clip-text">
              25%
            </span>
            <span className="w-full text-primary text-center text-[29px] font-medium leading-[135%] tracking-[0.223px]">
              Cybersecurity
            </span>
            <span className="w-full text-primary text-center text-[20px] font-normal leading-[135%] tracking-[0.223px]">
              Increase in attacks on healthcare systems each year.
            </span>
          </div>
          <div className="flex flex-col px-[16px] py-[20px] gap-[10px]">
            <span className="w-full text-center bg-btn-grid clip-text text-[52px] font-medium leading-[135%] tracking-[0.223px] bg-clip-text">
              $11 million
            </span>
            <span className="w-full text-primary text-center text-[29px] font-medium leading-[135%] tracking-[0.223px]">
              Data Breaches
            </span>
            <span className="w-full text-primary text-center text-[20px] font-normal leading-[135%] tracking-[0.223px]">
              Cost the health industry an average of $11t million, impacting
              patient trust and operational continuity.
            </span>
          </div>
          <div className="flex flex-col px-[16px] py-[20px] gap-[10px]">
            <span className="w-full text-center bg-btn-grid clip-text text-[52px] font-medium leading-[135%] tracking-[0.223px] bg-clip-text">
              60%
            </span>
            <span className="w-full text-primary text-center text-[29px] font-medium leading-[135%] tracking-[0.223px]">
              Patient Experience
            </span>
            <span className="w-full text-primary text-center text-[20px] font-normal leading-[135%] tracking-[0.223px]">
              Patients express significant concerns regarding the security of
              their medical records.
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[135px] w-full flex flex-col items-center bg-product-grid gap-[83px] py-[56px]">
        <div className="flex text-center text-white text-[52px] font-chakra font-medium leading-normal">
          Discover One37's Diverse Range of Solutions
        </div>
        <div className="container mx-auto max-w-[1540px] grid grid-cols-1 grid-rows-4 sm:grid-cols-1 sm:grid-rows-4lg:grid-cols-2 lg:grid-rows-2 2xl:grid-rows-1 2xl:grid-cols-4 sm:gap-[40px] 2xl:gap-[72px] responsive-padding">
          <div className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background">
            <div className="flex flex-col gap-[16px]">
              <span className="flex text-[24px] font-medium">Product No.1</span>
              <span className="text-[22px] font-normal leading-[135%] tracking-[0.233px]">
                A short description of the product.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor.
              </span>
            </div>
            <div className="flex justify-end text-[16px] font-light underline leading-[135%] tracking-[0.233px]">
              Learn More
            </div>
          </div>
          <div className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background">
            <div className="flex flex-col gap-[16px]">
              <span className="flex text-[24px] font-medium">Product No.2</span>
              <span className="text-[22px] font-normal leading-[135%] tracking-[0.233px]">
                A short description of the product.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor.
              </span>
            </div>
            <div className="flex justify-end text-[16px] font-light underline leading-[135%] tracking-[0.233px]">
              Learn More
            </div>
          </div>
          <div className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background">
            <div className="flex flex-col gap-[16px]">
              <span className="flex text-[24px] font-medium">Product No.3</span>
              <span className="text-[22px] font-normal leading-[135%] tracking-[0.233px]">
                A short description of the product.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor.
              </span>
            </div>
            <div className="flex justify-end text-[16px] font-light underline leading-[135%] tracking-[0.233px]">
              Learn More
            </div>
          </div>
          <div className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background">
            <div className="flex flex-col gap-[16px]">
              <span className="flex text-[24px] font-medium">Product No.4</span>
              <span className="text-[22px] font-normal leading-[135%] tracking-[0.233px]">
                A short description of the product.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor.
              </span>
            </div>
            <div className="flex justify-end text-[16px] font-light underline leading-[135%] tracking-[0.233px]">
              Learn More
            </div>
          </div>
        </div>
        <button className="flex px-[33px] py-[25px] text-center rounded-[8px] border-[2px] border-solid border-white text-white font-rubik text-[24px] font-normal leading-normal">
          See All Products
        </button>
      </div>
      <div className="flex flex-col gap-[130px]">
        {/* Brands */}
        <Brands />
        <Accordion />
      </div>
      <div
        className="flex bg-cover bg-center justify-center items-center"
        style={{
          backgroundImage: `url("/img/people.png")`,
          height: 750,
        }}
      >
        <div className="flex flex-col gap-[42px] items-center rounded-[5px] bg-white/85 max-w-[800px] w-full mx-10 sm:w-full sm:mx-10 lg:min-w-[810px] responsive-padding">
          <span className="flex pt-[45px] text-black font-chakra text-[52px] font-medium leading-normal text-center">
            Empower your team
          </span>
          <div className="flex text-black font-rubik text-[25px] font-normal leading-[135%] tracking-[0.223px] text-center">
            Drive your business forward with transformative solutions.
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-[25px] pb-[43px]">
            <button className="flex py-[25px] px-[33px] text-center rounded-[8px] bg-btn-grid text-white text-[25px] font-medium leading-normal">
              Book Demo
            </button>
            <button className="flex py-[25px] px-[33px] text-center rounded-[8px] border-[#4B1790] border-[2px] border-solid  text-secondary text-[25px] font-medium leading-normal">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Industries;
