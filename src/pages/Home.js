import React from 'react'
import Layout from '../components/Layout'
import { FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaReact, FaGithub, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";

function Home() {
    return (
        <div>
            <Layout>
                <div>
                    {/* intro section */}
                    <div className='h-screen bg-theme'>
                        <div className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
                        mx-10 z-10 bg-theme
                        border-white transform rotate-12 md:rotate-0 '>
                            <div className='h-1/2'>
                                <lottie-player
                                    src="https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json"
                                    background="transparent" speed="3"
                                    loop autoplay>
                                </lottie-player>
                            </div>
                            <div className='font-bold text-white md:px-5'>
                                <h1 className='text-7xl md:text-4xl'>Hi, I am <b className='text-yellow-500'>AWAIS</b></h1>
                                <h1 className='text-4xl md:text-xl'>React JS <b className='text-red-500'>Developer</b></h1>
                            </div>
                        </div>

                    </div>
                    {/* Technologies */}
                    <div className='mt-20'>
                        <h1 className='my-8 text-4xl text-blue-800 font-bold text-center'>Technologies I USE</h1>
                        <div className='grid md:grid-cols-1 grid-cols-4'>
                            <FaReact size={180} color='cyan' className='w-full text-center mt-20' />
                            <FaGithub size={180} color='#24292f' className='w-full text-center mt-20 animate-bounce' />
                            <FaHtml5 size={180} color='#f46403' className='w-full text-center mt-20 animate-bounce' />

                            <FaBootstrap size={180} color='#563d7c' className='w-full text-center mt-20' />
                            <FaJsSquare size={180} color='green' className='w-full text-center mt-20 animate-bounce' />
                            <FaPython size={180} color='orange' className='w-full text-center mt-20' />
                            <FaCss3 size={180} color='#1c36a2' className='w-full text-center mt-20 ' />

                            <SiTailwindcss size={180} color='#069' className='w-full text-center mt-20 animate-bounce' />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Home