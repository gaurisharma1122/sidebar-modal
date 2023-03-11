import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";


function Home() {
    const { openSidebar, openModal }= useGlobalContext();
    
    return ( 
        <section className="home">
            <button className="sidebar-toggle" onClick={ openSidebar } ><FaBars/></button>
            <button className="btn" onClick={ openModal }>Show Modal</button>
        </section>
     );
}

export default Home;