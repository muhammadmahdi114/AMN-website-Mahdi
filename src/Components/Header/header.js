import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../Assets/images/Amn-Logo 1.svg'
export default function Header() {
    const [activeSection, setActiveSection] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;

        if (currentPath === "/") {
            setActiveSection("صفحہ اول");
        } else if (currentPath.startsWith( "/taaruf")) {
            setActiveSection("تعارف");
        } else if (currentPath.startsWith("/tableeghat")) {
            setActiveSection("تبلیغات");
        } else if (currentPath.startsWith("/tazakurat")) {
            setActiveSection("تذکرات");
        } else if (currentPath.startsWith("/munasibat")) {
            setActiveSection("مناسبات");
        }

        window.scrollTo(0, 0);
    }, [location]);

    const menuItems = [
        {
            id: 1,
            name: "مناسبات",
            route: "munasibat",
        },
        {
            id: 2,
            name: "تذکرات",
            route: "tazakurat",
        },
        {
            id: 3,
            name: "تبلیغات",
            route: "tableeghat",
        },
        {
            id: 4,
            name: "تعارف",
            route: "taaruf",
        },
        {
            id: 5,
            name: "صفحہ اول",
            route: "",
        },
    ];

    const handleMainItemClick = (item) => {
        setActiveSection(item.name);
        navigate(`/${item.route}`);
    };

    return (
        <div className="fixed top-0 bg-primaryBG w-full h-[88px] flex items-center justify-center">
            {menuItems.map((item) => (
                <div key={item.id} className="my-2 font-nastaleeqRegular">
                    <button
                        onClick={() => handleMainItemClick(item)}
                        className={`relative flex text-lg font-semibold items-center gap-x-2 px-6 py-2 w-full 
                            ${activeSection === item.name ? "text-primary" : "text-black"}
                        `}
                    >
                        <span>{item.name}</span>
                        {activeSection === item.name && (
                            <span
                                className="absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-primary transition-all duration-300 ease-in-out"
                            ></span>
                        )}
                    </button>
                </div>
            ))}
            <div className="absolute right-20 top-4">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-[60px]"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
        </div>

    );
}
