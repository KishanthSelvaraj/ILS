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
import { useState } from "react";
import { IoIosWater, IoIosHammer, IoIosPhonePortrait } from "react-icons/io";
import flow from "/flow.jpg";
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
const Cost = () => {
  const features = [
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

  const features1 = [
    {
      name: "Packaging",
      description:
        "Continuous review and improvement of packaging processes for cost reduction and efficient packaging designs.",
      icon: FaArrowUpShortWide,
    },
    {
      name: "Energy Efficiency",
      description:
        "At ILS, we recognize the importance of energy efficiency in controlling operational costs and reducing our environmental footprint",
      icon: AiOutlineLineChart,
    },
    {
      name: "Capital Projects",
      description:
        "Handling capital projects often involve investments in new technologies that can improve operational efficiency.",
      icon: GiMagnifyingGlass,
    },
    {
      name: "Waste Management",
      description:
        "ILS empowers employees to identify various ways for waste reduction and participate actively in waste management initiatives",
      icon: FaArrowRight,
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
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

        {/* Timeline Content Start */}
        <div>
          <div>
            <h3 className="text-black text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
              ILS Cost Containment Areas
            </h3>
          </div>
          <div className="flex items-center justify-center md:mt-5">
            <div className="flex items-center">
              <div
                className={"step hover:cursor-pointer"}
                onClick={() => handleStepClick(1)}
              >
                <span
                  className={`text-sm relative inline-block ${
                    activeStep === 1
                      ? "bg-indigo-500 rounded-full text-white"
                      : ""
                  }`}
                >
                  <span className="border border-black w-5 h-5 p-2 rounded-full flex items-center justify-center">
                    1
                  </span>
                </span>{" "}
              </div>

              <div className="connector h-0.5 md:w-96 w-40 bg-indigo-500"></div>
              <div
                className={"step hover:cursor-pointer"}
                onClick={() => handleStepClick(2)}
              >
                <span
                  className={`text-sm relative inline-block ${
                    activeStep === 2
                      ? "bg-indigo-500 rounded-full text-white"
                      : ""
                  }`}
                >
                  <span className="border border-black w-5 h-5 p-2 rounded-full flex items-center justify-center">
                    2
                  </span>
                </span>{" "}
              </div>
            </div>
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
                      <dt className="text-base font-bold leading-7 text-gray-900 ">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                          <feature.icon
                            className="h-6 w-6 text-white "
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base text-sm leading-7 text-gray-600">
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
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base text-sm leading-7 text-gray-600">
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

        {/* Cards Layout Start */}
        <div className="bg-[#1E2634] md:my-10 lg:my-10 my-5">
          <div className="container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-10 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
            <h3 className="text-white text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
              Cost Containment Areas - Other
            </h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosWallet className="w-16 h-16 mb-2  text-indigo-500" />
                  <p className="text-md mb-0">Bank Fees</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosWater className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Cleaning Services & Supplies</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosHammer className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Equipment Maintenance</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosCard className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Merchant Card Fees</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosCar className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Fleet Management</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosDesktop className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Information Technology</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPhonePortrait className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Telecommunications</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPaper className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Office Supplies</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPeople className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Payroll Processing</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPrint className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Printing</p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosLock className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">
                    Security (Electronic & Physical)
                  </p>
                </div>
              </div>
              <div className="col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosShirt className="w-16 h-16 mb-2 text-indigo-500" />
                  <p className="text-md mb-0">Uniforms & Linens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards Layout End */}

        <div className="d">
          <h3 className=" text-center text-black font-bold my-lg-4 my-2 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
            ILS Cost Containment Process Flow
          </h3>
          <div className="container flex items-center justify-center">
            <img src={flow} alt="" className="lg:w-10/12" />
          </div>
          <div className="container-md container-fluid">
            <div className="md:py-10 py-6">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      1
                    </div>
                   
                  </div>
                  <p className="text-md pt-3">
                    Gathering data from customers and suppliers is crucial for
                    informed decision-making. Customer data provides insights
                    into preferences, behaviors, and satisfaction levels,
                    guiding product/service enhancements and fostering loyalty.{" "}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6 mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      2
                    </div>
                   
                  </div>
                  <p className="text-md  pt-3">
                    Functional Analysts are pivotal in conducting analysis
                    within organizations. Their expertise lies in dissecting
                    complex systems, processes, and requirements to derive
                    actionable insights.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6 mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      3
                    </div>
                    
                  </div>
                  <p className="text-md pt-3">
                    In procurement, qualifying vendors and managing auction
                    processes are critical tasks. Vendor qualification involves
                    assessing supplier capabilities, reliability, and compliance
                    with organizational standards.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6 mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      4
                    </div>
                    
                  </div>
                  <p className="text-md pt-3">
                    Reporting out is a crucial aspect of project management,
                    involving the communication of project progress, findings,
                    and insights to stakeholders. This process ensures
                    transparency, accountability, and alignment with project
                    goals.
                  </p>
                </div>
              </div>
              <div className="row sm:mt-5">
                
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6 mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      5
                    </div>
                    
                  </div>
                  <p className="text-md pt-3">
                    Executing changes with either the existing vendor or a new
                    vendor, selected by the customer, necessitates a strategic
                    approach and seamless collaboration. With an existing
                    vendor, leveraging established relationships and mutual
                    understanding accelerates the implementation process.{" "}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6 mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      6
                    </div>
                   
                  </div>
                  <p className="text-md pt-3">
                    Sustaining savings over a two-year term or more, as per
                    customer request, requires implementing regular audits as a
                    proactive measure. These audits serve to monitor and
                    evaluate the effectiveness of cost-saving initiatives,
                    ensuring continued efficiency and adherence to budgetary
                    goals.{" "}
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;