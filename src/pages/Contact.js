import React from 'react'
import Layout from '../components/Layout'
function Contact() {
    return (
        <Layout>
            <div>
                <h1> Contact</h1>
                <div>
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_in4cufsz.json"
                        background="transparent" speed="1" loop autoplay></lottie-player>
                </div>


                <div className='w-screen flex justify-center'>
                    <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
                        <h1 className='font-semibold text-2xl'>Contact me to know more</h1>
                        <input type="text" placeholder="Name" className='w-full border-2 border-gray-300 rounded p-1 shadow-lg mt-5' />
                        <input type="text" placeholder="Email" className='w-full border-2 border-gray-300 rounded p-1 shadow-lg mt-5' />
                        <textarea type="text" placeholder="Message" className='w-full border-2 border-gray-300 rounded p-1 shadow-lg mt-5' />

                        <button className='bg-red-500 rounded text-white px-7 py-1 p-2 mt-4 font-semibold'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact