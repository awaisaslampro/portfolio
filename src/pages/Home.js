import React from 'react'
import Layout from '../components/Layout'

function Home() {
    return (
        <div>
            <Layout>
                <div>
                    <div className='h-screen bg-theme'>

                        <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json" background="transparent" speed="1"
                            loop controls autoplay></lottie-player>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Home