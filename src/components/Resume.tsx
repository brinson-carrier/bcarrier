import React from 'react';

const Resume: React.FC = () => {
    const resumePath = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/files/carrier_resume_web.pdf`;

  return (
    <div className="p-4">

      <iframe 
        src={resumePath} 
        title="Resume" 
        className="w-full h-[1000px] border-2 border-gray-300 rounded-lg"
      ></iframe>

      <div className="text-center mt-4">
        <a 
          href={resumePath} 
          download="carrier_resume_web.pdf" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
