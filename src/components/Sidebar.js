import { FaTimes } from "react-icons/fa";
import { links, social } from "../data";
import { useGlobalContext } from "../context";
import { useContext } from "react";

function Sidebar() {
    const { showSidebar, closeSidebar}= useGlobalContext();

    return (  
        <aside className={showSidebar?`sidebar show-sidebar`: `sidebar`}>
            <div className="sidebar-header">
                <h2>Coding Addict</h2>
                <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
            </div>
            <ul className="links">
                {
                    links.map((link)=>{
                        return(
                            <li key={link.id}>
                                <a href={link.url}>
                                   <span>{link.icon}</span>  {link.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="social-icons">
                {
                    social.map((item)=>{
                        return(
                            <li key={item.id}>
                                <a href={item.url}>
                                    {item.icon}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    );
}

export default Sidebar;