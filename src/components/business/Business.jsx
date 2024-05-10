import Brands from "../subcomponents/Brands";
import Footer from "../subcomponents/Footer";
import Accordion from "../subcomponents/Accordion";

const Business = () => {
  return (
    <div className="w-full flex-col gap-[130px]">
      <div
        className="flex bg-cover bg-center pt-[305px] responsive-padding"
        style={{
          backgroundImage: `url("/img/photo17.png")`,
          height: 1083,
        }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="text-left text-white container mx-auto max-w-[1540px] flex-col items-start gap-[64px] justify-start px-[10px]">
          <div className="flex flex-col gap-[41px]">
            <p className="text-[74.4px] text-[#FFF] font-chakra font-medium leading-[135%] tracking-[0.233px]">
              Business Studio
            </p>
            <p className="text-[33px] text-[#FFF] font-normal leading-[135%] tracking-[0.233px]">
              Streamline Your Workflow: Design, <br /> Configure, and Manage
              with One37 <br />
              Business Studio
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
      <div className="flex flex-col gap-[31px] container mx-auto items-center responsive-padding">
        <p
          className="text-secondary text-center w-full font-chakra text-[51.73px] font-medium tracking-normal pb-[10px]"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          Craft and Manage Digital Identities with Precision
        </p>
        <p
          className="w-full text-[#A4A4A4] w-[1147px] text-center font-chakra text-[24px] font-normal leading-[135%] tracking-[0.223px] pb-[10px]"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          One37 Business Studio is a comprehensive suite that provides
          businesses with the tools needed to design, manage, and deploy digital
          identity solutions. It offers a user-friendly interface for creating
          workflows and managing digital credentials, making it accessible to
          non-technical staff.
        </p>
        <div
          className="flex px-[20.7px] sm:flex-col md:flex-row items-center justify-between sm:gap-[50px] xl:gap-[256px] rounded-[5px] bg-layout-grid"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="flex flex-col py-[25px] gap-[25px] font-rubik ">
            <p className="flex text-secondary text-center font-chakra text-[41px] font-medium tracking-[0.233x]">
              Workflow Engine
            </p>
            <div className="flex flex-col">
              <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                Allows for the creation of custom identity-related workflows
                without extensive programming knowledge.
              </span>
              <br />
              <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                Democratizes the process of digital identity management,
                enabling more stakeholders to participate in the design and
                implementation.
              </span>
            </div>
          </div>
          <img
            src="/img/CardWorkflow.svg"
            className="w-[207px] h-[207px]"
            alt="CardWorkflow"
          />
        </div>
        <div
          className="flex px-[20.7px] sm:flex-col md:flex-row items-center justify-between sm:gap-[50px] xl:gap-[256px] rounded-[5px] bg-layout-grid"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="flex flex-col py-[25px] gap-[25px] font-rubik ">
            <p className="flex text-secondary text-center font-chakra text-[41px] font-medium tracking-[0.233x]">
              Dynamic UI Configuration
            </p>
            <div className="flex flex-col">
              <span className="text-primary text-[27px] font-normal tracking-[0.233x]">
                Offers a flexible and dynamic user interface that can be
                customized to suit business needs.
              </span>
            </div>
          </div>
          <img
            src="/img/Configuration.svg"
            className="w-[207px] h-[207px]"
            alt="Configuration"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[82px] pt-[133px] items-center max-w-[1540px] mx-auto container responsive-padding">
        <span
          className="w-full max-w-[781px] text-center font-chakra text-secondary text-[51px] font-medium leading-[135%] tracking-[0.223px]"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          Features & Benefits Template for the products without images
        </span>
        <div className="grid grid-cols-1 grid-rows-2 gap-10 sm:grid-cols-1 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 sm:gap-10 ">
          <div
            className="flex flex-col gap-10 sm:gap-10 lg:gap-[144px]"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {/* Card */}
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px]">
              <span className="flex pl-[30px] text-[20px] text-black font-rubik font-light leading-[135%] tracking-[0.223px]">
                Allows for the creation of custom identity-related workflows
                without extensive programming knowledge.
              </span>
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  Democratizes the process of digital identity management,
                  enabling more stakeholders to participate in the design and
                  implementation.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute flex items-center text-center z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-50px] ml-[20px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Workflow Engine
                </span>
              </div>
            </div>
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px]">
              <span className="flex pl-[30px] text-[20px] text-black font-rubik font-light leading-[135%] tracking-[0.223px]">
                Offers a flexible and dynamic user interface that can be
                customized to suit business needs.
              </span>
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  Enhances user engagement by providing a tailored experience
                  for managing digital identities.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute gap-[11px] z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-40px] ml-[20px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Dynamic UI Configuration
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col pt-0 sm:gap-10 lg:gap-[144px] sm:pt-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px]">
              <span className="flex pl-[30px] text-[20px] text-black font-rubik font-light leading-[135%] tracking-[0.223px]">
                Define and manage the structure of digital credentials to ensure
                they meet business requirements.
              </span>
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  Guarantees that the credentials issued are compliant and
                  suitable for the intended use cases.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute gap-[11px] z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-40px] ml-[30px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Schema Management
                </span>
              </div>
            </div>
            <div className="relative flex flex-col gap-[20px] px-[18px] pt-[36px] pb-[20px] items-center rounded-[10.5px] border-[#4B1790] border-[4px]">
              <span className="flex pl-[30px] text-[20px] text-black font-rubik font-light leading-[135%] tracking-[0.223px]">
                Design solutions for a variety of use cases, including personal,
                professional, or dependent identity management.
              </span>
              <div className="flex flex-row gap-[8px]">
                <img
                  src="/img/CheckIcon.svg"
                  className="flex w-[24px] h-[24px]"
                  alt="CheckIcon"
                />
                <span className="flex text-[20px] text-primary font-rubik font-normal leading-[135%] tracking-[0.223px]">
                  Expands the utility of digital wallets, catering to diverse
                  user needs and scenarios.
                </span>
              </div>
              <div className="absolute z-10 w-[400px] h-[45px] top-[-5px] left-0 bg-white"></div>
              <div className="absolute gap-[11px] z-20 w-[395px] h-[0px] top-[-35px] left-[-4px] border-[#4B1790] border-t-[54px] border-r-[54px] border-r-transparent">
                <span className="flex text-[25px] mt-[-40px] ml-[25px] text-white font-medium leading-[27.934px] tracking-[0.223px]">
                  Multi-Wallet Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[135px] w-full flex flex-col items-center bg-product-grid gap-[83px] py-[56px]">
        <div
          className="flex text-center text-white text-[52px] font-chakra font-medium leading-normal"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Discover One37's Diverse Range of Solutions
        </div>
        <div className="container mx-auto max-w-[1540px] grid grid-cols-1 grid-rows-4 sm:grid-cols-1 sm:grid-rows-4lg:grid-cols-2 lg:grid-rows-2 2xl:grid-rows-1 2xl:grid-cols-4 sm:gap-[40px] 2xl:gap-[72px] responsive-padding">
          <div
            className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
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
          <div
            className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
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
          <div
            className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
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
          <div
            className="flex text-white font-rubik px-[16px] py-[33px] flex-col gap-[100px] rounded-[5px] bg-card-background"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
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
      <div className="flex flex-col gap-[130px] py-[130px]">
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
        data-aos="fade-up"
        data-aos-duration="1500"
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
};

export default Business;
