"use client";

import React from 'react';
import LIButton from './LIButton';
import GHButton from './GHButton';
import EmailButton from './EmailButton';

interface ContactProps {
  email: string;
  LI_URL: string;
  GH_URL: string;
}

const Contact: React.FC<ContactProps> = ({ email, LI_URL, GH_URL }) => {
  return (
    <div className="flex items-center justify-center">
        <div className="relative h-20 w-full flex flex-col justify-end">
            <div className="flex-1 flex flex-col justify-end">
                <div className="w-full bg-purple-900 p-5 absolute bottom-0 h-20 flex flex-col justify-center">
                    <ul className="flex justify-center">
                        <li className='mx-6'>
                            <EmailButton email={email} />
                        </li>
                        <li className='mx-6'>
                            <LIButton url={LI_URL} />
                        </li>
                        <li className='mx-6'>
                            <GHButton url={GH_URL} />
                        </li>
                        {/* <li className='mx-6'>
                            <strong className="block text-white">Phone:</strong> 
                            <a href={`tel:${phoneNumber}`} className="text-white underline">{phoneNumber}</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
