import React from 'react'
import Layout from '../components/Layout'
import projectsData from '../resources/projects'


const Projects = () => {

    return (
        <Layout>
            <div className='mt-20'>
                <div className='h-screen'>
                    <div className='h-3/4'>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ygiuluqn.json"
                            background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                    <p className='text-xl font-semibold text-center'>Good ideas are adopted automatically. They must be driven into practice with courageous patience.</p>
                    <h1 className='text-4xl md:text-3xl font-bold text-center mt-5'>Because</h1>
                </div>
                <div className='rounded-tl-full rounded-br-full font-semibold text-center bg-red-500 mx-20 p-20 md:mx-5 text-white'>
                    <h1 className='text-7xl md:text-3xl'>THE GAME IS...</h1>
                    <h1 className='text-7xl md:text-3xl'>CONSISTANCY</h1>
                </div>
            </div>
            <div className='grid md:grid-cols-1 grid-cols-2 mt-20'>
                {projectsData.map(projects => {
                    return (
                        <div>
                            <img src={projects.image} width="200" height="200" alt='projects' />
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}


export default Projects