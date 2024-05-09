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
import Photo17s from "../../assets/photo17.png";
import Photo61 from "../../assets/photo61.png";
import Photo64 from "../../assets/benefitstitle.png";
import Photo62 from "../../assets/photo62.png";
import Photo63 from "../../assets/photo63.png";
import Getstart from "../forms/Getstart";

import Bookdemo from "../../assets/bookdemo.png";
import Bookdem from "../forms/Bookdem";
import TalktoSale from "../forms/TalktoSale";
import "../app.css";
import "../../styles/main.css";
import Brands from "../subcomponents/Brands";
import Footer from "../subcomponents/Footer";
// import { FaZ } from 'react-icons/fa6';
function Home() {
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
    <div className="flex w-full flex-col font-rubik gap-[130px]" id="Home">
      <div
        className="flex bg-cover bg-center pt-[305px] responsive-padding"
        style={{
          backgroundImage: `url("/img/photo17.png")`,
          height: 1083,
        }}
      >
        <div className="text-left text-white container mx-auto max-w-[1540px] flex-col items-start gap-[64px] justify-start px-[10px]">
          <div className="flex flex-col gap-[41px]">
            <p className="w-full text-[74.4px] text-[#FFF] font-chakra font-medium leading-[135%] tracking-[0.233px]">
              Navigate <br /> the Future of Identity <br />
              with One37
            </p>
            <p className="text-[33px] text-[#FFF] font-normal leading-[135%] tracking-[0.233px]">
              Your partner in establishing trust through innovative <br />
              enterprise identity solutions.
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
      <div className="flex flex-col gap-[130px] responsive-padding">
        <div className="relative max-w-[1540px] container mx-auto flex flex-col gap-[111.7px]">
          <div className="flex flex-col gap-[117px]">
            <p className="flex text-[51.73px] font-chakra text-secondary font-medium tracking-[0.233px]">
              Mission Statement
            </p>
            <p className="flex text-primary font-rubik text-[33px] font-normal leading-[27.934px]tracking-[0.233px]">
              At One37, we are pioneering the future of data <br /> monetization
              by empowering businesses and <br /> individuals with secure,
              transparent, and <br /> efficient access to digital identity
              solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-col lg:flex-row gap-[45.5px]">
            <div className="flex flex-1 p-[31px] items-center justify-content rounded-[5.173px] border-[3.1px] border-solid border-secondary bg-[rgba(255, 255, 255, 0.85)] shadow-[0px 4.138px 4.138px 0px rgba(0, 0, 0, 0.25)]">
              <span className="text-primary font-rubik text-[33.1px] font-normal leading-[27.934px]tracking-[0.233px]">
                Our mission is to{" "}
                <span className="text-secondary">
                  unlock the full potential of data as a valuable asset,
                </span>{" "}
                ensuring privacy, enhancing trust, and fostering new revenue{" "}
                opportunities in the digital economy.
              </span>
            </div>
            <div className="flex flex-1 p-[31px] items-center justify-content rounded-[5.173px] border-[3.1px] border-solid border-secondary bg-[rgba(255, 255, 255, 0.85)] shadow-[0px 4.138px 4.138px 0px rgba(0, 0, 0, 0.25)]">
              <span className="text-primary font-rubik text-[33.1px] font-normal leading-[27.934px]tracking-[0.233px]">
                We are{" "}
                <span className="text-secondary">
                  dedicated to transforming the way data is managed,
                </span>{" "}
                shared, and monetized, making it a cornerstone of digital
                innovation and user empowerment.
              </span>
            </div>
          </div>
        </div>
        <div className="flex max-w-[1540px] container mx-auto flex-col gap-[62px]">
          <p className="flex text-secondary text-center font-chakra text-[51.73px] font-medium tracking-normal pb-[10px]">
            Unlock the Potential <br /> Transform Data into Value with One37
          </p>
          <div className="flex flex-col sm:flex-col md:flex-row px-[20.7px] items-center justify-between sm:gap-[50px] xl:gap-[256px] rounded-[5px] bg-layout-grid">
            <div className="flex flex-col py-[25px] gap-[25px] font-rubik ">
              <p className="flex text-secondary text-center font-chakra text-[41px] font-medium tracking-[0.233x]">
                Enhanced Data Value <br /> and Revenue Streams
              </p>
              <div className="flex flex-col">
                <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                  By improving the quality and relevance of data, One37 unlocks
                  its true potential for monetization.
                </span>
                <br />
                <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                  Our platform facilitates{" "}
                  <span className="text-secondary">new revenue streams</span> by
                  enabling businesses to monetize their data assets more
                  effectively, with clear consent mechanisms and transparent
                  practices.
                </span>
              </div>
            </div>
            <img
              src="/img/Revenue.svg"
              className="flex w-[207px] h-[207px]"
              alt="Revenue"
            />
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row px-[20.7px] items-center justify-between sm:gap-[50px] xl:gap-[256px] rounded-[5px] bg-layout-grid">
            <div className="flex flex-col py-[25px] gap-[25px] font-rubik ">
              <p className="flex text-secondary text-center font-chakra text-[41px] font-medium tracking-[0.233x]">
                Secure and Ethical <br /> Data Monetization
              </p>
              <div className="flex flex-col">
                <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                  One37 leverages advanced, decentralized technology to ensure
                  data is{" "}
                  <span className="text-secondary">
                    monetized securely and ethically,
                  </span>{" "}
                  emphasizing user consent and privacy.
                </span>
                <br />
                <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                  This approach not only protects against data breaches but also
                  builds trust with customers, aligning with global privacy
                  regulations.
                </span>
              </div>
            </div>
            <img
              src="/img/Revenue.svg"
              className="w-[207px] h-[207px]"
              alt="Security"
            />
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row px-[20.7px] items-center justify-between sm:gap-[50px] xl:gap-[256px] rounded-[5px] bg-layout-grid">
            <div className="flex flex-col py-[25px] gap-[25px] font-rubik ">
              <p className="flex text-secondary text-center font-chakra text-[41px] font-medium tracking-[0.233x]">
                Operational Efficiency <br /> and Easy Integration
              </p>
              <div className="flex flex-col">
                <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                  <span className="text-secondary">
                    Our platform is designed for seamless integration with
                    existing systems,
                  </span>{" "}
                  enabling businesses to adopt new data monetization strategies
                  without operational disruptions.
                </span>
                <br />
                <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                  This efficiency reduces time-to-market and operational costs,
                  providing a smooth transition to innovative monetization
                  models.
                </span>
              </div>
            </div>
            <img
              src="/img/Efficiency.svg"
              className="w-[207px] h-[207px]"
              alt="Efficiency"
            />
          </div>
        </div>

        {/* <div className="Slider  m-auto slider-container  mt-4">
          <Slider
            {...settings}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
          >
            <div>
              <img src={Uber} alt="Resim 1" />
            </div>
            <div>
              <img src={Tules} alt="Resim 2" />
            </div>
            <div>
              <img src={Dubai} alt="Resim 3" />
            </div>
            <div>
              <img src={Emirates} alt="Resim 4" />
            </div>
            <div>
              <img src={Du} alt="Resim 4" />
            </div>
            <div>
              <img src={Accenture} alt="Resim 4" />
            </div>
          </Slider>
        </div>

        <div
          className="photo9soluation container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {" "}
          <img src={Photo9} />
        </div>

        <div className="relative w-full  empowersoluation">
          <div>
            <img className=" " src={Photo10} alt="Your Image" />
          </div>
          <div className="photoempower ">
            <img className=" " src={Bookdemo} alt="Your Image" />
            <button className="link">
              <Bookdem />
            </button>
            <button className="link1">
              <TalktoSale />
            </button>
          </div>
        </div>

        <div id="footer">
          <img className="mt-35" src={Photo11} />
        </div> */}
      </div>
      {/* "Cards" */}
      <div className="flex bg-btn-grid py-[54px] items-center responsive-padding">
        <div className="w-full mx-auto container flex flex-col gap-[86px]">
          <span className="flex text-center text-white text-[52px] font-normal tracking-normal font-chakra">
            Elevate Your Business <br /> Unleash the Power of Digital Identity
            with One37
          </span>
          <div className="grid sm:grid-rows-4 sm:cols-1 md:grid-rows-2 md:grid-cols-2 gap-x-[64px] gap-y-[85px]">
            <div className="flex flex-col sm:flex-col lg:flex-row gap-[64px] px-[23px] py-[40px] bg-card-background rounded-[5px] text-white justify-between">
              <div className="flex flex-col gap-[16px] justify-between ">
                <span className="flex text-[33px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Data Privacy and <br /> Compliance
                </span>
                <span className="flex text-[21px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Our on-device biometric processing and selective data
                  disclosure ensure customer data privacy, meeting the highest
                  standards of compliance.
                </span>
              </div>
              <div className="flex items-center min-w-[168px] relative justify-center">
                <img
                  src="/img/Frame.png"
                  className="w-[165px] h-[165px]"
                  alt="Vector"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-col lg:flex-row gap-[64px] px-[23px] py-[40px] bg-card-background rounded-[5px] text-white justify-between">
              <div className="flex flex-col gap-[16px] justify-between ">
                <span className="flex text-[33px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Enhanced Trust
                </span>
                <span className="flex text-[21px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Build a stronger relationship with customers by offering a
                  decentralized identity solution that places privacy and
                  control in their hands.
                </span>
              </div>
              <div className="flex items-center min-w-[168px] relative justify-center">
                <img
                  src="/img/Shield.svg"
                  className="w-[124px] h-[103px]"
                  alt="Shield"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-col lg:flex-row gap-[64px] px-[23px] py-[40px] bg-card-background rounded-[5px] text-white justify-between">
              <div className="flex flex-col gap-[16px] justify-between">
                <span className="flex text-[33px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Simplified Access <br /> Management
                </span>
                <span className="flex text-[21px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Enable secure and efficient access for your workforce with
                  decentralized identifiers and verifiable credentials.
                </span>
              </div>
              <div className="flex items-center min-w-[168px] relative justify-center">
                <img
                  src="/img/Earth.svg"
                  className="w-[124px] h-[103px]"
                  alt="Earth"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-col lg:flex-row gap-[64px] px-[23px] py-[40px] bg-card-background rounded-[5px] text-white justify-between">
              <div className="flex flex-col gap-[16px] justify-between">
                <span className="flex text-[33px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Reduced IT Friction
                </span>
                <span className="flex text-[21px] font-rubik font-normal leading-[27.934px]tracking-[0.233px]">
                  Cut down on helpdesk costs and operational bottlenecks with
                  self-service identity recovery and password-less
                  authentication.
                </span>
              </div>
              <div className="flex items-center min-w-[168px] relative justify-center">
                <img
                  src="/img/Drive.svg"
                  className="w-[124px] h-[103px]"
                  alt="Drive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* "brands" part */}
      <div className="flex flex-col gap-[130px] container mx-auto max-w-[1450px] responsive-padding">
        {/* Brands */}
        <Brands />

        <div className="flex flex-col gap-[86px]">
          <div className="flex flex-col gap-[24px] px-[143px]">
            <span className="flex text-secondary text-[30px] sm:text-[40px] lg:text-[52px] font-medium leading-normal text-center px-[80px] font-chakra">
              Discover One37's Product Suite <br /> Pioneering Digital Identity
              Management
            </span>
            <span className="flex text-[#A4A4A4] text-[25px] font-normal leading-[135%] tracking-[0.233px] text-center">
              Dive into the future of digital identity with One37's
              comprehensive suite of products. Designed for businesses seeking
              to innovate, our solutions offer seamless integration, unmatched
              security, and user-centric control. Unlock the power of digital
              transformation with One37, where security meets simplicity.
            </span>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row gap-[78px]">
            <div className="flex flex-col gap-[144px]">
              {/* Card */}
              <div className="relative flex flex-row lg:flex-col 2xl:flex-row gap-[38px] pl-[26px] pt-[36px] pr-[33px] pb-[15px] rounded-[10.5px] border-[#4B1790] border-[4px]">
                <div className="flex flex-col justify-between gap-[33px] min-w-[215px] items-center">
                  <img
                    src="/img/Wallet1.svg"
                    className="flex w-[206px] h-[206px] ml-[10px]"
                    alt="Wallet1"
                  />
                  <div className="flex flex-col gap-[8px] justify-between">
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Enhanced Security
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Trust & Integrity
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Privacy-Preserving
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] pb-[40px]">
                  <span className="text-[21px] text-primary font-medium tracking-[0.233px] leading-[135%]">
                    <span className="text-secondary font-chakra">
                      The One37 Wallet
                    </span>{" "}
                    is a state-of-the-art mobile application that empowers users
                    with a secure and convenient way to manage their digital
                    identity. <br />
                    <br />
                    With password-less authentication and live proof of
                    presence, the wallet simplifies access to services while
                    ensuring the highest standards of security and privacy.
                  </span>
                  <div className="flex flex-row justify-end items-center gap-[8px]">
                    <button
                      href="/"
                      className="flex text-secondary text-[16px] font-light leading-[27.934px]tracking-normal underline"
                    >
                      Learn More About
                    </button>
                    <img
                      src="/img/SmallArrowIcon.svg"
                      className="flex w-[25px] h-[25px]"
                      alt="SmallArrowIcon"
                    />
                  </div>
                </div>
                <div className="absolute z-10 w-[400px] h-[45px] bottom-[-5px] right-0 bg-white"></div>
                <div className="absolute flex flex-row justify-center items-center gap-[11px] z-20 w-[395px] h-[0px] bottom-[-13.5px] right-[-4px] border-[#4B1790] border-b-[54px] border-l-[54px] border-l-transparent">
                  <img
                    src="/img/WalletIcon.png"
                    className="flex w-[26px] h-[21px] mt-12"
                    alt="WalletIcon"
                  />
                  <span className="flex text-[25px] mt-12 text-white font-medium leading-[27.934px]tracking-[0.223px]">
                    Wallet
                  </span>
                </div>
              </div>
              {/* Card */}
              <div className="relative flex flex-row lg:flex-col 2xl:flex-row gap-[38px] pl-[26px] pt-[36px] pr-[33px] pb-[15px] rounded-[10.5px] border-[#4B1790] border-[4px]">
                <div className="flex flex-col justify-between gap-[33px] min-w-[215px] items-center">
                  <img
                    src="/img/Workflow.png"
                    className="flex w-[206px] h-[206px] ml-[10px]"
                    alt="Workflow"
                  />
                  <div className="flex flex-col gap-[8px] justify-between">
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Enhanced Security
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Trust & Integrity
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Privacy-Preserving
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] pb-[40px]">
                  <span className="text-[21px] text-primary font-medium tracking-[0.233px] leading-[135%]">
                    <span className="text-secondary">The One37 Wallet</span> is
                    a state-of-the-art mobile application that empowers users
                    with a secure and convenient way to manage their digital
                    identity. <br />
                    <br />
                    With password-less authentication and live proof of
                    presence, the wallet simplifies access to services while
                    ensuring the highest standards of security and privacy.
                  </span>
                  <div className="flex flex-row justify-end items-center gap-[8px]">
                    <button
                      href="/"
                      className="flex text-secondary text-[16px] font-light leading-[27.934px]tracking-normal underline"
                    >
                      Learn More About
                    </button>
                    <img
                      src="/img/SmallArrowIcon.svg"
                      className="flex w-[25px] h-[25px]"
                      alt="SmallArrowIcon"
                    />
                  </div>
                </div>
                <div className="absolute z-10 w-[400px] h-[45px] bottom-[-5px] right-0 bg-white"></div>
                <div className="absolute flex flex-row justify-center items-center gap-[11px] z-20 w-[395px] h-[0px] bottom-[-13.5px] right-[-4px] border-[#4B1790] border-b-[54px] border-l-[54px] border-l-transparent">
                  <img
                    src="/img/BusinessIcon.svg"
                    className="flex w-[26px] h-[21px] mt-12"
                    alt="BusinessIcon"
                  />
                  <span className="flex text-[25px] mt-12 text-white font-medium leading-[27.934px]tracking-[0.223px]">
                    Workflow Orchestrator
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[144px] pt-[196px]">
              {/* Card */}
              <div className="relative flex flex-row lg:flex-col 2xl:flex-row gap-[38px] pl-[26px] pt-[36px] pr-[33px] pb-[15px] rounded-[10.5px] border-[#4B1790] border-[4px]">
                <div className="flex flex-col justify-between gap-[33px] min-w-[215px] items-center">
                  <img
                    src="/img/BusinessConnector.png"
                    className="flex w-[206px] h-[206px] ml-[10px]"
                    alt="BusinessConnector"
                  />
                  <div className="flex flex-col gap-[8px] justify-between">
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Enhanced Security
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Trust & Integrity
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Privacy-Preserving
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] pb-[40px]">
                  <span className="text-[21px] text-primary font-medium tracking-[0.233px] leading-[135%]">
                    <span className="text-secondary">The One37 Wallet</span> is
                    a state-of-the-art mobile application that empowers users
                    with a secure and convenient way to manage their digital
                    identity. <br />
                    <br />
                    With password-less authentication and live proof of
                    presence, the wallet simplifies access to services while
                    ensuring the highest standards of security and privacy.
                  </span>
                  <div className="flex flex-row justify-end items-center gap-[8px]">
                    <button
                      href="/"
                      className="flex text-secondary text-[16px] font-light leading-[27.934px]tracking-normal underline"
                    >
                      Learn More About
                    </button>
                    <img
                      src="/img/SmallArrowIcon.svg"
                      className="flex w-[25px] h-[25px]"
                      alt="SmallArrowIcon"
                    />
                  </div>
                </div>
                <div className="absolute z-10 w-[400px] h-[45px] bottom-[-5px] right-0 bg-white"></div>
                <div className="absolute flex flex-row justify-center items-center gap-[11px] z-20 w-[395px] h-[0px] bottom-[-13.5px] right-[-4px] border-[#4B1790] border-b-[54px] border-l-[54px] border-l-transparent">
                  <img
                    src="/img/BusinessIcon.svg"
                    className="flex w-[26px] h-[21px] mt-12"
                    alt="BusinessIcon"
                  />
                  <span className="flex text-[25px] mt-12 text-white font-medium leading-[27.934px]tracking-[0.223px]">
                    Business Connector
                  </span>
                </div>
              </div>
              {/* Card */}
              <div className="relative flex flex-row lg:flex-col 2xl:flex-row gap-[38px] pl-[26px] pt-[36px] pr-[33px] pb-[15px] rounded-[10.5px] border-[#4B1790] border-[4px]">
                <div className="flex flex-col justify-between gap-[33px] min-w-[215px] items-center">
                  <img
                    src="/img/BusinessStudio.png"
                    className="flex w-[206px] h-[206px] ml-[10px]"
                    alt="BusinessStudio"
                  />
                  <div className="flex flex-col gap-[8px] justify-between">
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Enhanced Security
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Trust & Integrity
                      </span>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img
                        src="/img/CheckIcon.svg"
                        className="flex w-[25px] h-[25px]"
                        alt="CheckIcon"
                      />
                      <span className="text-primary text-[21px] font-light leading-[27.934px]tracking-[0.233px]">
                        Privacy-Preserving
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] pb-[40px]">
                  <span className="text-[21px] text-primary font-medium tracking-[0.233px] leading-[135%]">
                    <span className="text-secondary">The One37 Wallet</span> is
                    a state-of-the-art mobile application that empowers users
                    with a secure and convenient way to manage their digital
                    identity. <br />
                    <br />
                    With password-less authentication and live proof of
                    presence, the wallet simplifies access to services while
                    ensuring the highest standards of security and privacy.
                  </span>
                  <div className="flex flex-row justify-end items-center gap-[8px]">
                    <button
                      href="/"
                      className="flex text-secondary text-[16px] font-light leading-[27.934px]tracking-normal underline"
                    >
                      Learn More About
                    </button>
                    <img
                      src="/img/SmallArrowIcon.svg"
                      className="flex w-[25px] h-[25px]"
                      alt="SmallArrow"
                    />
                  </div>
                </div>
                <div className="absolute z-10 w-[400px] h-[45px] bottom-[-5px] right-0 bg-white"></div>
                <div className="absolute flex flex-row justify-center items-center gap-[11px] z-20 w-[395px] h-[0px] bottom-[-13.5px] right-[-4px] border-[#4B1790] border-b-[54px] border-l-[54px] border-l-transparent">
                  <img
                    src="/img/StudioIcon.svg"
                    className="flex w-[26px] h-[21px] mt-12"
                    alt="StudioIcon"
                  />
                  <span className="flex text-[25px] mt-12 text-white font-medium leading-[27.934px]tracking-[0.223px]">
                    Business Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div
        className="flex bg-cover bg-center justify-center items-center"
        style={{
          backgroundImage: `url("/img/people.png")`,
          height: 750,
        }}
      >
        <div className="flex flex-col gap-[42px] items-center rounded-[5px] bg-white/85 w-full max-w-[800px] mx-10 sm:w-full sm:mx-10 lg:min-w-[810px] responsive-padding">
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
            <button className="flex text-secondary py-[25px] px-[33px] text-center rounded-[8px] border-[#4B1790] border-[2px] border-solid text-[25px] font-medium leading-normal">
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

export default Home;
