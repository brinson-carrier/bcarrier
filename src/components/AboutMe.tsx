"use client";

import React from 'react';

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 p-6">
      <div className="w-3/4 md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-center text-gray-700">
        I am a U.S. Navy submarine veteran turned software engineer with a passion for 
        solving complex problems and building impactful digital solutions. With hands-on 
        experience operating nuclear reactor systems and a degree in Software Engineering 
        from Arizona State University, I possess a unique combination of technical expertise 
        and modern development skills.
        </p>
      </div>
      <div className="w-3/4 md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-center text-gray-700">
        My expertise encompasses embedded programming, web development, and mobile 
        development, with proficiency in industry-standard tools and technologies 
        such as Next.js, Tailwind CSS, MySQL, and Linux systems. I thrive in environments 
        that challenge me to innovate and continuously learn, and I am always seeking 
        opportunities to enhance my engineering capabilities.

        </p>
      </div>
      <div className="w-3/4 md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <p className="text-center text-gray-700">
        During my tenure in the Navy, I cultivated my leadership, troubleshooting, 
        and critical thinking skills, which now form the foundation of my software 
        development approach. Whether it involves creating user-friendly web applications, 
        optimizing system performance, or delving into embedded systems, I am committed to 
        delivering high-quality, reliable results.
        </p>
      </div>
    </div>
  );
}
