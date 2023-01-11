import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
function Footer() {
    return (
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
                </div>
            </div>
        </div>
    )
}
export default Footer;