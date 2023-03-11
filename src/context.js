import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const openSidebar = () => { setShowSidebar(true) };
    const closeSidebar = () => { setShowSidebar(false) };
    const openModal = () => { setShowModal(true) };
    const closeModal = () => { setShowModal(false) };

    return (
        <AppContext.Provider value={{ showSidebar, showModal, openSidebar, openModal, closeSidebar, closeModal }}>
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export { AppContext, AppProvider };