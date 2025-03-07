import React from "react"
import Main from "../components/main"
import { Link } from "gatsby"
import { FaPhotoVideo } from "react-icons/fa"
import { IoHomeOutline, IoPersonOutline, IoReader } from "react-icons/io5"
import { MdContactPhone } from "react-icons/md"
import SideBar from "../components/sidebar"
import SideBarIcon from "../components/sidebar-icon"

function CV() {


    function handleClickScroll(target: string) {
        const element = document.getElementById(target);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return <div> <SideBar>
        <div className="fixed top-[2.5%]">
            <Link to='/'>
                <SideBarIcon><IoHomeOutline size={25} /></SideBarIcon>
            </Link>
            <Link to='/portfolio'>
                <SideBarIcon> <FaPhotoVideo size={20} /></SideBarIcon>
            </Link>
        </div>

        <div className="fixed bottom-[5%] w-[4%] bg-stone-700 rounded-3xl bg-opacity-40 flex flex-col items-center justify-center">
            <button onClick={() => handleClickScroll('profile')}>
                <SideBarIcon> <IoPersonOutline size={20} /></SideBarIcon>
            </button>
            <button onClick={() => handleClickScroll('projects')}>
                <SideBarIcon><IoReader size={20} /></SideBarIcon>
            </button>
            <button onClick={() => handleClickScroll('contact')}>
                <SideBarIcon><MdContactPhone size={20} /></SideBarIcon>
            </button>
        </div>
    </SideBar>

        <div className="absolute left-[--sidebar-size] min-w-[--sidebar-offset]" id='landing'><Main>

        </Main>
        </div>
    </div>
}


export default CV