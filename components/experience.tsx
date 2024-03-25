import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import "../app/globals.css"

const Experience = () => {
    return (
        <section id="experience" className="py-16">

            <div className='flex item center justify-center'>
                <div className='eurostile animate-slide-up'>
                    <h5 className='sm:text-[18px] text-[15px] ml-7 sm:ml-0'>What Skills I Have</h5>
                    <h1 className='sm:text-[30px] text-[24px] -ml-4 sm:-ml-16 font-medium mt-3'>MY EXPERIENCE</h1>
                </div>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 eurostile sm:mt-12 mt-8 animate-slide-up">
                {/* Languages */}
                <div className="bg-slate-900 rounded-xl p-6 hover:border-[#2b3997] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">Languages & Others</h3>
                    <div className="grid grid-cols-2 gap-8 text-[13px] sm:text-[16px]">
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>HTML</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>CSS</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Javascript</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Typescript</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Git</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Jira</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Agile methodology</div>
                        </div>
                    </div>
                </div>

                {/* Frontend */}
                <div className="bg-slate-900 rounded-xl p-6 hover:border-[#2b3997] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">FRONTEND DEVELOPMENT</h3>
                    <div className="grid grid-cols-2 gap-8 text-[13px] sm:text-[16px]">
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>React.Js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Next.Js</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Redux</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Tailwind CSS</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>Axios</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>WordPress</div>
                        </div>
                        <div className='flex'>
                            <BsPatchCheckFill className='text-[#2b3997]'/>
                            <div className='ml-2 -mt-1'>JQuery</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;