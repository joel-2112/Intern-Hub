import { useState } from "react";
import home from "../../assets/homeillu.png"
import Student from "./howtouse/Student";
import Company from "./howtouse/Company";
import { PiStudentFill } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { Link } from "react-router-dom";
const Home = () => {

  const [selectedTab, setSelectedTab] = useState('Student'); // Default selected tab
  return (
    <div className=' '  >
      <div className="lg:py-10 lg:px-10 relative lg:h-[500px] flex flex-col lg:flex-row">
        <div className="flex justify-center items-center lg:w-1/2">
          {/* Text Content */}
          <div className="w-full lg:w-4/5  p-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-blue-500">
              Welcome to Intern-Hub
            </h1>
            <p className="text-xl lg:text-xl mb-8 text-gray-500">
              InternHub is dedicated to bridging the gap between academia and industry, ensuring that
              students gain valuable real-world experience while companies
              find the talent they need to thrive. Join us today and take the first step towards
              a successful future
            </p>
            <Link to="/auth/login" className="text-center bg-blue-500 text-white p-3 px-6 w-32 rounded-lg hover:bg-blue-600 transition duration-300">
              get started
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          {/* Travel Image */}
          <img src={home} className="w-full lg:w-4/5 lg:max-h-full" alt="home Logo" />
        </div>
      </div>


      <div className=" ">
        <div className='items-center   flex-col lg:px-32 lg:my-10'>
          <h1 className="text-4xl mb-4 text-blue-500 font-serif">How to use the system</h1>
          <p className='text-slate-400'> What is your role?</p>
        </div>
        <div className="flex flex-col items-center justify-center pb-6">
          <div className="flex flex-col lg:flex-row gap-6 h-32 lg:mb-4 sm:pb-6 pb-6">
            {/* the active link Background white */}

            <div className={` text-blue-500 w-[250px]  border border-blue-300 font-serif flex gap-2 items-center justify-center cursor-pointer px-4 py-2 rounded-lg ${selectedTab === 'Student' ? 'bg-blue-500 text-white' : ''} `}
              onClick={() => setSelectedTab('Student')}
            >
              <PiStudentFill size={60} />
              <h1>Student</h1>
            </div>

            <div
              className={` font-serif border w-[250px] text-blue-500 border-blue-300 flex gap-2 cursor-pointer justify-center items-center  px-4 py-2 rounded-lg ${selectedTab === 'Company' ? 'bg-blue-500 text-white' : ''} `}
              onClick={() => setSelectedTab('Company')}
            >
              <GrUserManager size={60} />
              <h1>Company</h1>
            </div>
          </div>
          <div className="mt-4 w-full px-10 rounded-md">
            {/* Conditionally render the outlet content based on the selected tab */}
            {selectedTab === 'Student' && (
              <Student />
            )}
            {selectedTab === 'Company' && (
              <Company />
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;