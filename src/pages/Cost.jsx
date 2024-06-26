// import { IoIosTimer, IoIosAnalytics } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { MdOutlineSupport } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { RiHandCoinFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoIosWater, IoIosHammer, IoIosPhonePortrait } from "react-icons/io";
import flow from "/flow2.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Marquee from 'react-fast-marquee';

gsap.registerPlugin(ScrollTrigger);

import {
  IoIosWallet,
  IoIosCard,
  IoIosCar,
  IoIosDesktop,
  IoIosPaper,
  IoIosPeople,
  IoIosLock,
  IoIosShirt,
  IoIosPrint,
} from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const WorkIcon = () => <></>;

const Cost = () => {
  const features = [
   
    
  ];

  const features1 = [
    {
      name: "Packaging",
      description:
        "Continuous review and improvement of packaging processes for cost reduction and efficient packaging designs.",
      icon: FaArrowUpShortWide,
    },
    {
      name: "Waste Management",
      description:
        "ILS empowers employees to identify various ways for waste reduction and participate actively in waste management initiatives",
      icon: FaArrowRight,
    },
    {
      name: "Direct Materials",
      description:
        "Develop strong leadership skills to guide your team through the lean transformation journey with confidence and efficiency.",
      icon: MdOutlineSupport,
    },
    {
      name: "MRO/Factory Consumables",
      description:
        "Standardization to simplify inventory management allowing for better control over maintenance and repair expenses.",
      icon: RiHandCoinFill,
    },
    {
      name: "Insurance",
      description:
        "Comprehensive coverage for business operations and employee benefits, protecting against unforeseen risks while supporting staff.",
      icon: IoSpeedometer,
    },
    {
      name: "Freight (LTL, TL, International)/ Logistics",
      description:
        " Negotiation of favorable rates and contracts with freight carriers to minimize transportation expenses.",
      icon: IoShuffleOutline,
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".anime").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  const Card = ({ number, text }) => (
    <div className="bg-[#1E2634] border border-gray-300 rounded-lg text-center  w-64 h-64 p-4 mx-4 md:w-64 md:h-64 flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-8 bg-[#007dbd] w-12 h-12 rounded-full text-white">{number}</div>
      <div className="text-lg leading-tight text-white">{text}</div>
    </div>
  );
  return (
    <div className="md:py-20 py-20">
      <div>
        {/* Main */}
        <div className="container-fluid lg:px-20 xl:px-20 md:p-14 p-8">
          <div className="row">
            <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center rounded-md">
              <img
                src="/Cost_Containment_Img.jpg"
                alt="No_Img"
                className="w-full h-auto lg:p-10 border-none my-3"
              />
            </div>
            <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-black font-bold my-lg-4 my-2 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
                  Cost Containment
                </h3>
                <p className="text-black text-semibold text-justify text-md md:text-lg  xl:text-lg xxl:text-2xl lg:text-lg">
                  In today's competitive business landscape, effective cost
                  containment is crucial for maintaining profitability and
                  sustainable growth. At ILS, we understand the importance of
                  optimizing resources while maintaining the highest standards
                  of quality and service. To ensure our continued success, we
                  employ a range of cost containment strategies tailored to our
                  unique business needs.
                </p>
                {/* <div className="md:flex-row flex-col md:justify-content-around py-3 text-black text-semibold text-justify text-md md:text-lg  xl:text-lg xxl:text-2xl lg:text-lg">
      <div className="flex md:flex md:justify-content-around py-3 text-black text-semibold text-justify text-md md:text-lg  xl:text-lg xxl:text-2xl lg:text-lg">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
          }}
          className="px-3"
        >
          <IoIosTimer style={{ marginRight: "5px" }} />{" "}
          <span>Lean Management</span>
        </p>
        <p style={{ display: "flex", alignItems: "center" }} className="px-3">
          <IoIosAnalytics style={{ marginRight: "5px" }} />{" "}
          Activity-Based Costing (ABC)
        </p>
      </div>
    </div> */}
              </div>
            </div>
          </div>
        </div>

       

        {/* Cards Layout Start */}
        <div className="bg-[#1E2634] md:my-10 lg:my-10 my-5">
          <div className="container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-10 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
            <h3 className="text-white text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
              Cost Containment Areas - Other
            </h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosWallet className="w-16 h-16 mb-2  text-[#007dbd]" />
                  <p className="text-md mb-0">Bank Fees</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosWater className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Energy Efficiency</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosHammer className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Equipment Maintenance</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosCard className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Merchant Card Fees</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosCar className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Fleet Management</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosDesktop className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Information Technology</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPhonePortrait className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Telecommunications</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPaper className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Office Supplies</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPeople className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Payroll Processing</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPrint className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Capital Projects</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosLock className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">
                    Security (Electronic & Physical)
                  </p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosShirt className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Uniforms & Linens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards Layout End */}
 {/* Timeline Content Start */}
 <div className="pb-10">
          <div>
            <h3 className="text-black  text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl ">
              ILS cost containment areas
            </h3>
          </div>
          <div className="flex items-center justify-center md:mt-5">
          
          </div>
          <div className="ml-4">
            {activeStep === 1 && (
              <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-6xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-32 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features1.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative pl-16 text-left "
                    >
                      <dt className=" text-base font-bold leading-7 text-gray-900 ">
                        <div className=" absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#007dbd]">
                          <feature.icon
                            className="animated h-6 w-6 text-white "
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="animated mt-2  text-sm leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {activeStep === 2 && (
              <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-6xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-32 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative pl-16 text-left  "
                    >
                      <dt className="text-base font-bold leading-7 text-gray-900 ">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#007dbd]">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2  text-sm leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
        {/* Timeline Content End */}
        <div className="anime">
          <h3 className=" text-center text-black font-bold my-lg-6   my-5 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl ">
            ILS Cost Containment Process Flow
          </h3>
          {/* <div className="animated container flex items-center justify-center">
            <img src={flow} alt="" className="lg:w-10/12" />
          </div> */}
           <div className="mx-10 md:mx-auto md:px-40">
      {/* <h1 className="text-3xl font-bold mb-8">Marquee with 6 Cards</h1> */}
      <Marquee gradient={false}>
        <Card number={1} text="Gather data from clients and suppliers, compile information." />
        <Card number={2} text="Conduct detailed analysis by specialists, examine findings." />
        <Card number={3} text="Evaluate vendors and manage auctions, oversee bidding process." />
        <Card number={4} text="Present findings and results, summarize outcomes." />
        <Card number={5} text="Implement changes with chosen vendors, execute modifications." />
        <Card number={6} text="Regular audit to sustain the savings through 2-yr term or more." />
      </Marquee>
    </div>
           {/* vertical timeline start */}
 
    
      {/* <div className="bg-white ">
        <div className="container-fluid py-md-5 py-3 mt-md-5">
        
          <div>
            <div className=" mx-auto py-8 mb-5 w-full px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer  hover:border-gray-900">
                 
                  <p className="text-gray-700">
                  Gathering data from customers and suppliers is crucial for informed decision-making. Customer data provides insights into preferences, behaviors, and satisfaction levels, guiding product/service enhancements and fostering loyalty.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer hover:border-gray-900">
                  
                  <p className="text-gray-700">
                  Functional Analysts are pivotal in conducting analysis within organizations. Their expertise lies in dissecting complex systems, processes, and requirements to derive actionable insights.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                
                  <p className="text-gray-700">
                  In procurement, qualifying vendors and managing auction processes are critical tasks. Vendor qualification involves assessing supplier capabilities, reliability, and compliance with organizational standards.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer  hover:border-gray-900">
                  
                  <p className="text-gray-700">
                  Reporting out is a crucial aspect of project management, involving the communication of project progress, findings, and insights to stakeholders. This process ensures transparency, accountability, and alignment with project goals.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer hover:border-gray-900">
                 
                  <p className="text-gray-700">
                  Executing changes with either the existing vendor or a new vendor, selected by the customer, necessitates a strategic approach and seamless collaboration. With an existing vendor, leveraging established relationships and mutual understanding accelerates the implementation process.


                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                 
                  <p className="text-gray-700">
                 Sustaining savings over a two-year term or more, as per customer request, requires implementing regular audits as a proactive measure. These audits serve to monitor and evaluate the effectiveness of cost-saving initiatives, ensuring continued efficiency and adherence to budgetary goals.               </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* vertical timeline end */}
        </div>
      </div>
    </div>
  );
};

export default Cost;
