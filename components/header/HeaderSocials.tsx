import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const HeaderSocials = () => {
    return ( 
        <div className='flex flex-col items-center sm:gap-6 gap-4 absolute left-0 bottom-12'>
            <a href="https://www.linkedin.com/in/deepshikha-singh-3b3255246/" target="_blank" className='text-primary'><BsLinkedin /></a>
            <a href='https://github.com/Deepshikhamay' target="_blank" className='text-primary'><BsGithub /></a>
            <a href="mailto:deepshikha03dev@gmail.com" target="_blank" className='text-primary'><TfiEmail /></a>
        </div>
    );
}

export default HeaderSocials;
