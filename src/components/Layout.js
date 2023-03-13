import { React, useState } from "react";
import Footer from './Footer';
import Header from './Header';
const Layout = ({ children }) => {
    const [say, setSay] = useState('Good Morning');

    const handleSay = () => {
        setSay("Boa Noite")
    }

    return (
        <div>
            <Header />
            <div className="content">{children}</div>

            <div>Say something: {say}</div>
            <Footer changeSay={handleSay} name="Awais" girlFriend="Stephnie" />
        </div>
    )
}
export default Layout;