import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import cactusAnimation from "./cactus.json";
import Feature from './Feature';
import backgroundImage from 'C:/Users/sumay/landing-page-react-tailwind-main/landing-page-react-tailwind-main/src/Images/BACKGROUND IMAGE (2).jpg'; // Correct path
import logoImage from 'C:/Users/sumay/landing-page-react-tailwind-main/landing-page-react-tailwind-main/src/Images/Colorful Illustrative 3D Robot Artificial Intelligence Logo.png'; // Correct path
import arrowDown from 'C:/Users/sumay/landing-page-react-tailwind-main/landing-page-react-tailwind-main/src/Images/arrow-down.svg'; // Correct path

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border-b border-gray-200 pb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h3 className="text-xl font-semibold">{question}</h3>
        <img src={arrowDown} alt="Arrow down" className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && <p className="mt-2 text-lg">{answer}</p>}
    </div>
  );
};

function App() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
      lottieRef.current.playSegments([1, 100], true);
    }
  }, [lottieRef]);

  return (
    <div className="min-h-screen bg-[#16154E] text-white">
      <header className="container mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-32 mr-6" /> {/* Increased height for larger logo */}
          <div className="flex space-x-4">
            <button type="button" className="px-6 py-3 bg-[#CD86C9] text-white font-medium text-base rounded-lg shadow-md hover:bg-[#D89BCE] active:bg-opacity-75 transition duration-150 ease-in-out">
              Campaigns
            </button>
            <button type="button" className="px-6 py-3 bg-[#CD86C9] text-white font-medium text-base rounded-lg shadow-md hover:bg-[#D89BCE] active:bg-opacity-75 transition duration-150 ease-in-out">
              Content
            </button>
            <button type="button" className="px-6 py-3 bg-[#CD86C9] text-white font-medium text-base rounded-lg shadow-md hover:bg-[#D89BCE] active:bg-opacity-75 transition duration-150 ease-in-out">
              Malware Investigations
            </button>
            <button type="button" className="px-6 py-3 bg-[#CD86C9] text-white font-medium text-base rounded-lg shadow-md hover:bg-[#D89BCE] active:bg-opacity-75 transition duration-150 ease-in-out">
              Malware
            </button>
            <button type="button" className="px-6 py-3 bg-[#CD86C9] text-white font-medium text-base rounded-lg shadow-md hover:bg-[#D89BCE] active:bg-opacity-75 transition duration-150 ease-in-out">
              Phishing
            </button>
            <button type="button" className="px-6 py-3 bg-[#CD86C9] text-white font-medium text-base rounded-lg shadow-md hover:bg-[#D89BCE] active:bg-opacity-75 transition duration-150 ease-in-out">
              Snow
            </button>
          </div>
        </div>
      </header>

      <div className="w-full h-auto overflow-hidden mt-6">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white text-black rounded-lg p-4 mt-10 container mx-auto">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="sm:text-center mb-8">
            <h2 className="text-3xl font-bold leading-8 text-amber-500">Features</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Feature name="Interactive Graph" description="Create a world map visualization that places pins on the cities associated with each IP address.">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </Feature>
            <Feature name="Table Visualization" description="Display a table with IP addresses, number of reports, host names, etc.">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Feature>
            <Feature name="Dashboard" description="Summarize the top countries reported, highlight IP addresses with the highest scores.">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
              </svg>
            </Feature>
            <Feature name="API Abuse IPDP" description="Implement a function to parse the city from the Abuse IPDP data.">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18V3H3zm15 2.25v13.5H6V5.25h12zm-1.5 1.5H7.5v10.5h9V6.75zM9.75 9h4.5v1.5h-4.5V9zm0 3h4.5v1.5h-4.5V12zm0 3h4.5v1.5h-4.5V15z" />
              </svg>
            </Feature>
          </div>
        </div>
      </div>

      <div className="bg-white text-black rounded-lg p-4 mt-20 container mx-auto">
        <h2 className="text-3xl font-bold leading-8 text-amber-500 mb-4">Frequently Asked Questions</h2>
        <div className="px-4 py-6">
          <FAQItem 
            question="How does this dashboard function?" 
            answer="The dashboard integrates various data sources and visualizes the information through interactive charts and tables to provide insights on security metrics and incidents."
          />
          <FAQItem 
            question="Why isn't my Excel file pathway working?" 
            answer="Ensure the file path is correct and the file is accessible. Check for any permission issues or file corruption."
          />
          <FAQItem 
            question="Who should I contact for troubleshooting?" 
            answer="You can contact our support team at support@example.com for any troubleshooting assistance."
          />
        </div>
      </div>

      <div className="w-full px-4 py-8 text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600">
            {/* SVG content */}
          </svg>
          <figcaption className="flex items-center justify-center mt-20 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white"></div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>
      </div>

      <footer className="w-full bg-[#CD86C9] py-6 text-center">
        <p className="text-[#16154E]">© 2024 Intel Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
