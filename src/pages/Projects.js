import React, { useState } from 'react'
import Layout from '../components/Layout'


const Projects = () => {
    const [counter, setCounter] = useState(0);

    function countMe() {
        console.log("clicked");
        setCounter(counter + 1)
    }
    return (
        <Layout>
            <div className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
                        mx-10 z-10 bg-theme
                        border-white transform rotate-12 md:rotate-0 '>
                <div className='font-bold text-white md:px-5'>
                    <h1 className='text-7xl md:text-4xl'>Hi, I am <b className='text-yellow-500'>AWAIS</b></h1>
                    <h1 className='text-4xl md:text-xl'>React JS <b className='text-red-500'>Developer</b></h1>

                    <h1 className='text-4xl md:text-xl'
                    >Click here
                        to speed me up <b className='text-red-500'
                        >
                            {counter}
                        </b></h1>
                    <button onClick={countMe}>click here</button>
                </div>
            </div>
        </Layout>
    )
}


export default Projects