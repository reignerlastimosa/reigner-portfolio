import React from 'react';
import { BsEnvelopePaper } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Resume from '../assets/resume.pdf';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1C1C1C]'>
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#E50072]'>Welcome! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Reigner Lastimosa
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#E50072]'>
          I'm an IS Fresh Graduate
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m an Information Systems fresh graduate specializing in building websites specifically front-end as well as data cleaning, data visualization, and creating machine learning models. Currently looking for software developer, data engineer, and machine learning roles.
        </p>
        <div>
          <a href={Resume} target="_blank" rel="noopener noreferrer">  
           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E50072] hover:border-[#E50072]'>
            View Resume
            <span >
              <BsEnvelopePaper className='ml-3 ' />
            </span>
          </button>
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Home;