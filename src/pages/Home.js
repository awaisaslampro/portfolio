import React from 'react'
import Layout from '../components/Layout'

function Home() {
    return (
        <div>
            <Layout>
                <div>
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
                </div>
            </Layout>
        </div>
    );
}

export default Home