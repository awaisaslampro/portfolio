import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
function Footer(props) {
    return (
        <>

            <div className="md:h-20 h-36 mt-52">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2a2a2a" fill-opacity="1" d="M0,160L0,96L160,96L160,192L320,192L320,64L480,64L480,96L640,96L640,288L800,288L800,64L960,64L960,160L1120,160L1120,96L1280,96L1280,32L1440,32L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"></path></svg>
            </div>
            <div className="bg-theme w-screen flex justify-center">
                <div className="md:w-full w-1/2">
                    <div className="bg-theme p-10 text-center">
                        <p className="text-gray-50 pb-5">Design and Developed by</p>
                        <div className="h-1 border-2 border-gray-50 border-dotted">
                        </div>

                        <div className="flex text-white w-full justify-between pt-5 pb-5">
                            <FaLinkedin />
                            <FaFacebook />
                            <FaInstagram />
                            <FaMailBulk />
                            <FaLinkedin />
                            <FaGithub />

                        </div>
                        <div className="h-1 border-2 border-gray-50 border-dotted">
                        </div>


                        <p className="text-gray-50 pt-5">Muhammad Awais</p>
                        <p className="text-white">{props.name} and his {props.girlFriend}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;