import React from "react";
import Slider from "react-slick";
// import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uber from "../../assets/uber.png";
import Tules from "../../assets/telus.png";
import Du from "../../assets/du.png";
import Accenture from "../../assets/accenture.png";
import Emirates from "../../assets/emirates.png";
import Dubai from "../../assets/dubai.png";
import Photo4 from "../../assets/photogirls.png";
import Photo5 from "../../assets/photo5.png";
import Photo7 from "../../assets/photo7.png";
import Herotext from "../../assets/herotext.png";
import Photo9 from "../../assets/photo9.png";
import Photo10 from "../../assets/photo10.png";
import Photo11 from "../../assets/photo11.png";
import Photo17s from "../../assets/photo17s.png";
import Photo61 from "../../assets/photo61.png";
import Photo64 from "../../assets/benefitstitle.png";
import Photo62 from "../../assets/photo62.png";
import Photo63 from "../../assets/photo63.png";
import Getstart from "../forms/Getstart";

import Bookdemo from "../../assets/bookdemo.png";
import Bookdem from "../forms/Bookdem";
import TalktoSale from "../forms/TalktoSale";
import "../app.css";
import Footer from "../subcomponents/Footer";
import Brands from "../subcomponents/Brands";
import Accordion from "../subcomponents/Accordion";
// import { FaZ } from 'react-icons/fa6';
function Solutions() {
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
      <button
        className="slick-prev rounded-full"
        onClick={onClick}
        style={{ backgroundColor: "purple" }}
      >
        Previous
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-next rounded-full"
        onClick={onClick}
        style={{ backgroundColor: "purple" }}
      >
        Next
      </button>
    );
  };
  return (
    // <div className=" " id="Solutions">
    //   <div className="relative max-w-full">
    //     <div>
    //       <img
    //         className="mt-16 w-[2500px] h-auto"
    //         src={Photo17s}
    //         alt="Your Image"
    //       />
    //     </div>

    //     <div className="absolute w-full h-auto top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto">
    //       <div>
    //         <img className="  h-auto" src={Herotext} alt="Your Image" />
    //         <div className="flex">
    //           <Bookdem className="sm:w-2" />
    //           <Getstart />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="max-w-screen-lg m-auto">
    //     <div className="relative marginsoluation container ">
    //       <img className="  absolute  z-50 " src={Photo5} alt="Photo5" />

    //       <div data-aos="fade-up" data-aos-duration="3000">
    //         <img className="img" src={Photo4} alt="Photo4" />
    //       </div>
    //     </div>
    //     <div className=" container photo9 ">
    //       <div
    //         className="flex justify-center gap-10 mb-4"
    //         data-aos="zoom-in"
    //         data-aos-duration="1000"
    //       >
    //         <img className="Photo64" src={Photo64} alt="Photo64" />
    //       </div>
    //       <div data-aos="fade-left" data-aos-duration="1000">
    //         <img src={Photo61} alt="Photo61" />
    //       </div>
    //       <div data-aos="fade-right" data-aos-duration="1500">
    //         <img src={Photo62} alt="Photo62" />
    //       </div>
    //       <div data-aos="fade-left" data-aos-duration="1800">
    //         <img className="" src={Photo63} alt="Photo63" />
    //       </div>
    //       <div data-aos="zoom-in" data-aos-duration="1000">
    //         <img src={Photo7} alt="Photo7" />
    //       </div>
    //     </div>

    //     <div className="Slider  m-auto slider-container  mt-4">
    //       <Slider
    //         {...settings}
    //         prevArrow={<CustomPrevArrow />}
    //         nextArrow={<CustomNextArrow />}
    //       >
    //         <div>
    //           <img src={Uber} alt="Resim 1" />
    //         </div>
    //         <div>
    //           <img src={Tules} alt="Resim 2" />
    //         </div>
    //         <div>
    //           <img src={Dubai} alt="Resim 3" />
    //         </div>
    //         <div>
    //           <img src={Emirates} alt="Resim 4" />
    //         </div>
    //         <div>
    //           <img src={Du} alt="Resim 4" />
    //         </div>
    //         <div>
    //           <img src={Accenture} alt="Resim 4" />
    //         </div>
    //       </Slider>
    //     </div>

    //     <div
    //       className="photo9soluation container"
    //       data-aos="zoom-in"
    //       data-aos-duration="1000"
    //     >
    //       {" "}
    //       <img src={Photo9} />
    //     </div>

    //     <div className="relative w-full  empowersoluation">
    //       <div>
    //         <img className=" " src={Photo10} alt="Your Image" />
    //       </div>
    //       <div className="photoempower ">
    //         <img className=" " src={Bookdemo} alt="Your Image" />
    //         <button className="link">
    //           <Bookdem />
    //         </button>
    //         <button className="link1">
    //           <TalktoSale />
    //         </button>
    //       </div>
    //     </div>

    //     <div>
    //       <img className="mt-35" src={Photo11} />
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex-col gap-[130px] font-rubik">
      <div
        className="flex bg-cover bg-center pt-[305px]"
        style={{
          backgroundImage: `url("/img/photo17.png")`,
          height: 1083,
        }}
      >
        <div className="text-left text-white container mx-auto max-w-[1540px] flex-col items-start gap-[64px] justify-start responsive-padding">
          <div className="flex flex-col gap-[41px]">
            <p className="text-[74.4px] text-[#FFF] font-chakra font-medium leading-[135%] tracking-[0.233px]">
              Workforce Identity <br /> Solution
            </p>
            <p className="text-[33px] text-[#FFF] font-normal leading-[135%] tracking-[0.233px]">
              Streamline Seamless Integration, <br /> Enhanced Security
            </p>
          </div>
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
        </div>
      </div>
      <div className="flex flex-col gap-[31px] container mx-auto pt-[130px] items-center responsive-padding">
        <p className="text-secondary text-center w-full font-chakra text-[51.73px] font-medium tracking-normal pb-[10px]">
          Secure, Simplify, Succeed: <br /> Revolutionizing Workforce Identity
          with One37
        </p>
        <p className="w-full sm:w-full text-[#A4A4A4] xl:w-[1147px] text-center font-chakra text-[24px] font-normal leading-[135%] tracking-[0.223px] pb-[10px]">
          In the rapidly evolving digital landscape, enterprises face
          unprecedented challenges in managing workforce identities. One37's
          decentralized digital identity platform presents a transformative
          solution that addresses these challenges head-on.
        </p>
        <p className="flex text-primary text-center font-rubik text-[33px] font-normal leading-[135%] tracking-[0.223px] pt-[41px]">
          Enterprises today grapple with multiple issues
        </p>
        <div className="grid pt-[62px] gap-[50px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-[50px] xl:grid-cols-3 xl:grid-rows-1 xl:gap-[50px] max-w-[1450px] responsive-padding">
          <div className="flex flex-col py-[31px] px-[29px] gap-[19px] items-center rounded-[24px] border-[3px] border-solid border-[#4B1790]">
            <span className="w-full text-center text-secondary text-[33px] font-normal leading-[135%] tracking-[0.272px]">
              Data Breach Risks
            </span>
            <img
              src="/img/ExclamationMark.svg"
              className="flex w-[85px] h-[85px]"
              alt="ExclamationMark"
            />
            <span className="w-full text-center text-primary text-[27px] font-normal leading-[135%] tracking-[0.272px]">
              Centralized databases are enticing targets for cyber-attacks.
            </span>
          </div>
          <div className="flex flex-col py-[31px] px-[29px] gap-[19px] items-center rounded-[24px] border-[3px] border-solid border-[#4B1790]">
            <span className="w-full text-center text-secondary text-[33px] font-normal leading-[135%] tracking-[0.272px]">
              Operational Costs
            </span>
            <img
              src="/img/ExclamationMark.svg"
              className="w-full text-center w-[85px] h-[85px]"
              alt="ExclamationMark"
            />
            <span className="flex text-primary text-[27px] text-center font-normal leading-[135%] tracking-[0.272px]">
              Managing identity systems is resource-intensive.
            </span>
          </div>
          <div className="flex flex-col py-[31px] px-[29px] gap-[19px] items-center rounded-[24px] border-[3px] border-solid border-[#4B1790]">
            <span className="w-full text-center text-secondary text-[33px] font-normal leading-[135%] tracking-[0.272px]">
              Fraud Risks
            </span>
            <img
              src="/img/ExclamationMark.svg"
              className="flex w-[85px] h-[85px]"
              alt="ExclamationMark"
            />
            <span className="w-full text-center text-primary text-[27px] font-normal leading-[135%] tracking-[0.272px]">
              Traditional verification methods are susceptible to identity
              fraud.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 sm:flex-col sm:gap-10 xl:flex-row justify-content xl:gap-[200px] 2xl:gap-[290px] items-center mx-auto container pt-[130px] responsive-padding">
        <img
          src="/img/Volt.svg"
          className="flex w-[351px] h-[351px]"
          alt="Volt"
        />
        <div className="flex flex-col gap-[64px] items-center">
          <span className="flex text-center text-[52px] font-chakra font-medium text-secondary leading-[135%] tracking-[0.233px]">
            Key Features
          </span>
          <div className="flex flex-col gap-[53px]">
            <div className="flex flex-row gap-[8px]">
              <img
                src="/img/CheckIcon.svg"
                className="flex w-[24px] h-[24px]"
                alt="CheckIcon"
              />
              <span className="w-full text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                <span className="text-secondary">
                  Decentralized Identifiers (DIDs):
                </span>{" "}
                Empower individuals with control over their identities, free
                from centralized authority vulnerabilities.
              </span>
            </div>
            <div className="flex flex-row gap-[8px]">
              <img
                src="/img/CheckIcon.svg"
                className="flex w-[24px] h-[24px]"
                alt="CheckIcon"
              />
              <span className="w-full text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                <span className="text-secondary">
                  Verifiable Credentials (VCs):
                </span>{" "}
                Enable secure and efficient proof of qualifications, reducing
                fraud and impersonation risks.
              </span>
            </div>
            <div className="flex flex-row gap-[8px]">
              <img
                src="/img/CheckIcon.svg"
                className="flex w-[24px] h-[24px]"
                alt="CheckIcon"
              />
              <span className="w-full text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                <span className="text-secondary">Business Connector:</span>{" "}
                Seamlessly integrate existing IAM and HR systems with our
                platform, facilitating smooth transitions and operations.
              </span>
            </div>
            <div className="flex flex-row gap-[8px]">
              <img
                src="/img/CheckIcon.svg"
                className="flex w-[24px] h-[24px]"
                alt="CheckIcon"
              />
              <span className="w-full text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                <span className="text-secondary">One37 Wallet:</span> Empower
                Provides a secure, user-friendly interface for workforce members
                to manage their digital identities.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[82px] pt-[133px] items-center max-w-[1540px] mx-auto container responsive-padding">
        <span className="flex max-w-[781px] text-center font-chakra text-secondary text-[51px] font-medium leading-[135%] tracking-[0.223px]">
          Benefits Template for the products without images
        </span>
        <div className="grid grid-cols-1 grid-rows-2 gap-10 sm:grid-cols-1 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 sm:gap-10 ">
          <div className="flex flex-col gap-10 sm:gap-10 lg:gap-[144px]">
            {/* Card */}
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px] max-w-[633px]">
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  With no central point of failure and enhanced encryption, the
                  risk of data breaches is significantly minimized.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute flex items-center text-center z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-50px] ml-[20px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Decreased Risk of Data Breach
                </span>
              </div>
            </div>
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px] max-w-[633px]">
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  Automate onboarding, credential management, and verification
                  processes, resulting in substantial cost savings.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute flex items-center text-center z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-50px] ml-[20px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Operational Efficiency
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-0 sm:gap-10 lg:gap-[144px] lg:pt-[100px] sm:pt-0">
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px] max-w-[633px]">
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  Leveraging biometrics and live proof of presence, our platform
                  drastically reduces the potential for identity fraud.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute flex items-center text-center z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-50px] ml-[20px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Fraud Mitigation
                </span>
              </div>
            </div>
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px] max-w-[633px]">
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  Automate onboarding, credential management, and verification
                  processes, resulting in substantial cost savings.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute flex items-center text-center z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-50px] ml-[20px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Operational Efficiency
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[135px] flex flex-col items-center bg-product-grid gap-[83px] px-[223px] py-[56px]">
        <div className="flex text-center text-white text-[52px] font-chakra font-medium leading-normal">
          Discover One37's Diverse Range of Solutions
        </div>
        <div className="container mx-auto max-w-[1540px] grid grid-cols-1 grid-rows-4 sm: 2xl:grid-cols-4 lg:grid-cols-2 lg:grid-rows-2 2xl:grid-rows-1 gap-[72px] responsive-padding">
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
      <div className="flex flex-col gap-[130px] mx-auto container py-[130px] responsive-padding">
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
        <div className="flex flex-col gap-[42px] items-center  rounded-[5px] bg-white/85 min-w-[810px]">
          <span className="flex pt-[45px] text-black font-chakra text-[52px] font-medium leading-normal">
            Empower your team
          </span>
          <div className="flex text-black font-rubik text-[25px] font-normal leading-[135%] tracking-[0.223px]">
            Drive your business forward with transformative solutions.
          </div>
          <div className="flex flex-row justify-center items-center gap-[25px] pb-[43px]">
            <button className="flex py-[25px] px-[33px] text-center rounded-[8px] bg-btn-grid text-white text-[25px] font-medium leading-normal">
              Book Demo
            </button>
            <button className="flex py-[25px] px-[33px] text-center rounded-[8px] border-[#4B1790] border-[2px] border-solid text-primary text-[25px] font-medium leading-normal">
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

export default Solutions;
