import { React, useState } from 'react';
import { data } from "../data/data.js";
import {BsGithub, BsFillPlayBtnFill} from 'react-icons/bs';
const Work = () => {
  const [category, setCategory] = useState("All");

  const filteredData = category === "All" ? data : data.filter(item => item.category === category);

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1C1C1C] '>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <br />
          <div className="flex justify-center flex-col sm:flex-row">
            <button onClick={() => setCategory("All")} className="mx-2 bg-[#1C1C1C] hover:border-[#E50072] p-2 rounded border-2 border-[#1C1C1C] duration-500">All</button>
            <button onClick={() => setCategory("Web")} className="mx-2 bg-[#1C1C1C] hover:border-[#E50072] p-2 rounded border-2 border-[#1C1C1C] duration-500">Web Development</button>
            <button onClick={() => setCategory("Data")} className="mx-2 bg-[#1C1C1C] hover:border-[#E50072] p-2 rounded border-2 border-[#1C1C1C] duration-500">Data Science</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {filteredData.map((item, index) => (
           <div
           key={index}
           style={{
             backgroundImage: `url(${item.image})`,
             width: "100%", 
             height: "200px", 
           }}
           className="shadow-lg shadow-[#040c16] group container rounded-md 
           flex justify-center text-center items-center mx-auto content-div"
         >
              <div className="opacity-0 group-hover:opacity-100 duration-200 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      <BsGithub size={20}/>
                    </button>
                  </a>

                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      <BsFillPlayBtnFill size={20}/>
                    </button>
                  </a>

                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
