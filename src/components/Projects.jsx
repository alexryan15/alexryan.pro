import React from 'react'

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
        </div>

        {/* Projects Container */}
        <div className="w-full grid grid-cols-1 gap-4 text-center py-8 ">
          <div className="pt-4 rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="my-4">Python</p>
          </div>
          <div className="pt-4 rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="my-4">Java</p>
          </div>
          <div className="pt-4 rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="pt-4 rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>
          <div className="pt-4 rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="pt-4 rounded-lg border-2 border-pink-600 shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
