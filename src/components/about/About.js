import React from "react";
import Photo11 from "../../assets/photo11.png";
import Aboutph1 from "../../assets/aboutph1.png";
import Aboutph2 from "../../assets/aboutph2.png";
import Aboutph3 from "../../assets/aboutph3.png";
import Aboutph4 from "../../assets/aboutph4.png";
import Aboutph5 from "../../assets/aboutph5.png";
import Aboutph6 from "../../assets/aboutph6.png";
import Aboutph7 from "../../assets/aboutph7.png";
import Aboutph8 from "../../assets/aboutph8.png";
import Aboutph9 from "../../assets/aboutph9.png";
import Aboutph10 from "../../assets/aboutph10.png";
import Aboutph11 from "../../assets/aboutph11.png";
import Photo17 from "../../assets/photo17.png";
import One37 from "../../assets/One37.mp4";
import Abouttext3 from "../../assets/abouttext3.png";
import Abouttext4 from "../../assets/abouttext4.png";
import Getstart from "../forms/Getstart";
import Bookdem from "../forms/Bookdem";
import Policy1 from "../../assets/policy.png";
import Policy2 from "../../assets/policy2.png";
import Brands from "../subcomponents/Brands";
import Footer from "../subcomponents/Footer";

function About() {
  return (
    // <div
    //   className=" solution-section md:px-12 p-4 max-w-screen-xl mx-auto mt-16"
    //   id="About"
    // >
    //   <div className="w-[800px] m-auto">
    //     <img src={Aboutph1} />
    //   </div>

    //   <div>
    //     {/* YouTube gömülü video */}
    //     <iframe
    //       className="m-auto mt-14"
    //       width="800px"
    //       height="315"
    //       src={One37}
    //       title="YouTube video player"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //   </div>
    //   <div
    //     data-aos="fade-left"
    //     data-aos-duration="2000"
    //     className="Aboutph2 w-[900px] gap-6"
    //   >
    //     <img src={Aboutph2} />
    //   </div>
    //   <div
    //     data-aos="fade-right"
    //     data-aos-duration="2500"
    //     className=" Aboutph2 w-[900px]"
    //   >
    //     <img src={Aboutph3} />
    //   </div>
    //   <div data-aos="fade-up" className="w-[900px] ">
    //     <img src={Aboutph4} />
    //   </div>

    //   <div className="w-[900px] lastimg">
    //     <div data-aos="fade-right" className="  ">
    //       <img src={Aboutph10} />
    //     </div>
    //     <div className="flex w-[900px] ">
    //       <div data-aos="fade-up" data-aos-duration="3000">
    //         <img src={Aboutph6} />
    //       </div>
    //       <div data-aos="fade-up" data-aos-duration="3000">
    //         <img src={Aboutph7} />
    //       </div>
    //       <div data-aos="fade-up" data-aos-duration="3300">
    //         <img src={Aboutph8} />
    //       </div>
    //       <div data-aos="fade-up" data-aos-duration="3300">
    //         <img src={Aboutph9} />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative w-full">
    //     <div>
    //       <img className="  h-auto" src={Photo17} alt="Your Image" />
    //     </div>

    //     <div className="absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto">
    //       <div>
    //         <img className="  h-auto" src={Abouttext3} alt="Your Image" />
    //         <img className=" mt-2 h-auto" src={Abouttext4} alt="Your Image" />
    //       </div>
    //       <div className="flex">
    //         <Bookdem />
    //         <Getstart />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="m-auto mt-20">
    //     <img src={Photo11} />
    //   </div>

    //   <div
    //     className=" solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-16"
    //     id="Policy"
    //   >
    //     <div className="w-[600px] m-auto">
    //       <img src={Policy2} />
    //     </div>
    //     <div className="w-[900px] m-auto">
    //       <img src={Policy1} />
    //     </div>
    //     <div className="m-auto mt-20">
    //       <img src={Photo11} />
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex flex-col gap-[130px] font-rubik">
      <div
        className="flex bg-cover bg-center pt-[305px]"
        style={{
          backgroundImage: `url("/img/photo17.png")`,
          height: 1083,
        }}
      >
        <div className="text-left text-white container mx-auto max-w-[1540px] flex-col items-start gap-[64px] justify-start">
          <div className="flex flex-col gap-[41px] max-w-[860px]">
            <p className="text-[74.4px] text-[#FFF] font-chakra font-medium leading-[135%] tracking-[0.233px]">
              Pioneering the Future of Digital Identity
            </p>
            <p className="text-[33px] text-[#FFF] font-normal leading-[135%] tracking-[0.233px]">
              Our mission is rooted in the belief that every individual and
              organization deserves complete control over their digital
              identity, ensuring privacy, enhancing security, and empowering
              users across the globe.
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
      <div className="flex flex-col gap-[90px] container mx-auto max-w-[1540px]">
        <div className="flex flex-row gap-[45px]">
          <div className="flex flex-col gap-[20px] items-center">
            <span className="flex font-chakra text-[51px] text-secondary font-medium text-center">
              Our Vision
            </span>
            <span className="w-full p-[31px] text-primary text-[33px] font-normal leading-[135%] tracking-[0.233px]">
              Leading the vanguard of digital identity,{" "}
              <span className="text-secondary">One37 ID </span> sets the global
              standard for a privacy-first, secure, and user-centric digital
              ecosystem. <br />
              At One37 ID, we harness the power of decentralization to pioneer a
              <span className="text-secondary">
                secure, seamless, and sovereign digital future.
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col gap-[20px] items-center">
            <span className="flex font-chakra text-[51px] text-secondary font-medium text-center">
              Our Vision
            </span>
            <span className="w-full p-[31px] text-primary text-[33px] font-normal leading-[135%] tracking-[0.233px]">
              <span className="text-secondary">Our mission</span> is to empower
              users with self-sovereign identity solutions, ensuring ownership
              and control over personal data. <br />
              We are committed to dismantling the barriers of traditional
              identity systems and establishing a new era of trust and security
              in the digital world.
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-[77px]">
          <div className="flex flex-col pt-[96px] pb-[192px] gap-[54px] items-center w-[960px] flex-shrink-0">
            <span className="text-primary text-[15px] font-normal leading-[135%] tracking-[0.233px]">
              A placeholder <br /> for video
            </span>
            <div className="flex justify-center">
              <img
                src="/img/Video.png"
                className="w-[208px] h-[208px]"
                alt="Video"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-[56px]">
            <div className="flex p-[20px] text-black text-[29px] font-normal">
              Our platform is built to surpass the stringent requirements of
              global privacy and security standards, delivering a solution that
              is as compliant as it is user-friendly
            </div>
            <div className="flex flex-col justify-between gap-[30px]">
              <span className="flex text-[33px] text-secondary font-semibold leading-[135%] tracking-[0.233px]">
                We are dedicated
              </span>
              <div className="flex flex-col justify-between gap-[30px]">
                <div className="flex flex-row gap-[8px] items-center">
                  <img
                    src="/img/CheckIcon.svg"
                    className="flex w-[24px] h-[24px]"
                    alt="CheckIcon"
                  />
                  <span className="flex text-[33px] text-secondary font-rubik font-medium leading-[135%] tracking-[0.223px]">
                    identity spoofing
                  </span>
                </div>
                <div className="flex flex-row gap-[8px] items-center">
                  <img
                    src="/img/CheckIcon.svg"
                    className="flex w-[24px] h-[24px]"
                    alt="CheckIcon"
                  />
                  <span className="flex text-[33px] text-secondary font-rubik font-medium leading-[135%] tracking-[0.223px]">
                    unauthorized data access
                  </span>
                </div>
                <div className="flex flex-row gap-[8px] items-center">
                  <img
                    src="/img/CheckIcon.svg"
                    className="flex w-[24px] h-[24px]"
                    alt="CheckIcon"
                  />
                  <span className="flex text-[33px] text-secondary font-rubik font-medium leading-[135%] tracking-[0.223px]">
                    to eradicating phishing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[66px] container mx-auto max-w-[1540px]">
        <span className="w-full font-chakra text-center text-secondary text-[51px] font-normal leading-normal">
          Our Core Values
        </span>
        <div className="flex flex-row justify-center gap-[100px] flex-wrap">
          <div className="flex flex-col p-[24px] gap-[16px] flex-shrink-0 w-[372px]">
            <span className="w-full text-center text-[33px] text-secondary font-normal leading-[135%] tracking-[0.233px]">
              Privacy
            </span>
            <div className="flex justify-center items-center">
              <img
                src="/img/CorePrivacy.png"
                className="w-[103px] h-[103px]"
                alt=""
              />
            </div>
            <span className="w-full text-center text-[20px] text-primary font-normal leading-[135%] tracking-[0.233px]">
              Championing the sanctity of personal data with leading-edge
              privacy protocols.
            </span>
          </div>
          <div className="flex flex-col p-[24px] gap-[16px] flex-shrink-0 w-[372px]">
            <span className="w-full text-center text-[33px] text-secondary font-normal leading-[135%] tracking-[0.233px]">
              Security
            </span>
            <div className="flex justify-center items-center">
              <img
                src="/img/CoreSecurity.png"
                className="w-[103px] h-[103px]"
                alt=""
              />
            </div>
            <span className="w-full text-center text-[20px] text-primary font-normal leading-[135%] tracking-[0.233px]">
              Building robust defenses against the most sophisticated digital
              threats. privacy protocols.
            </span>
          </div>
          <div className="flex flex-col p-[24px] gap-[16px] flex-shrink-0 w-[372px]">
            <span className="w-full text-center  text-[33px]  text-secondary font-normal leading-[135%] tracking-[0.233px]">
              Innovation
            </span>
            <div className="flex justify-center items-center">
              <img
                src="/img/CoreInnovation.png"
                className="w-[103px] h-[103px]"
                alt=""
              />
            </div>
            <span className="w-full text-center text-[20px] text-primary font-normal leading-[135%] tracking-[0.233px]">
              Designing intuitive and accessible solutions that put users first.
            </span>
          </div>
          <div className="flex flex-col p-[24px] gap-[16px] flex-shrink-0 w-[372px]">
            <div className="flex justify-center items-center">
              <img
                src="/img/CoreTrust.png"
                className="w-[103px] h-[103px]"
                alt=""
              />
            </div>{" "}
            <span className="w-full text-center text-[33px]  text-secondary font-normal leading-[135%] tracking-[0.233px]">
              Trust
            </span>
            <span className="w-full text-center text-[20px] text-primary font-normal leading-[135%] tracking-[0.233px]">
              unwavering trust through transparent and secure digital
              interactions.
            </span>
          </div>
          <div className="flex flex-col p-[24px] gap-[16px] flex-shrink-0 w-[372px]">
            <div className="flex justify-center items-center">
              <img
                src="/img/CoreUser.png"
                className="w-[103px] h-[103px]"
                alt=""
              />
            </div>{" "}
            <span className="w-full text-center text-[33px]  text-secondary font-normal leading-[135%] tracking-[0.233px]">
              User-Centricity
            </span>
            <span className="w-full text-center text-[20px] text-primary font-normal leading-[135%] tracking-[0.233px]">
              Championing the sanctity of personal data with leading-edge
              privacy protocols.
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[135px] flex flex-col items-center bg-product-grid gap-[83px] px-[223px] py-[56px]">
        <div className="flex text-center text-white text-[52px] font-chakra font-medium leading-normal">
          Discover One37's Diverse Range of Solutions
        </div>
        <div className="container mx-auto max-w-[1540px] grid grid-cols-4 grid-rows-1 gap-[72px]">
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
      <Brands />
      <div
        className="flex bg-cover bg-center justify-center items-center"
        style={{
          backgroundImage: `url("/img/Girl.png")`,
          height: 750,
        }}
      >
        <div className="flex flex-col gap-[42px] items-center  rounded-[5px] bg-white/85 min-w-[810px]">
          <span className="flex pt-[45px] text-black font-chakra text-[52px] font-medium leading-normal">
            Your Partner in Digital Identity
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
      <Footer />
    </div>
  );
}

export default About;
