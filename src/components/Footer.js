import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
function Footer() {
    return (
        <div>
            <div>
                <div className="bg-theme p-10 text-center">
                    <p className="text-gray-50">Design and Develope by</p>
                    <div className="flex">
                        <FaLinkedin />
                        <FaFacebook />
                        <FaInstagram />
                        <FaMailBulk />
                        <FaLinkedin />
                        <FaGithub />

                    </div>
                    <p className="text-gray-50">Muhammad Awais</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;