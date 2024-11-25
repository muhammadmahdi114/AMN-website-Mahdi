import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const [activeSection, setActiveSection] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;

        if (currentPath === "/") {
            setActiveSection("صفحہ اول");
        } else if (currentPath === "/taaruf") {
            setActiveSection("تعارف");
        } else if (currentPath === "/tableeghat") {
            setActiveSection("تبلیغات");
        } else if (currentPath === "/tazakurat") {
            setActiveSection("تذکرات");
        } else if (currentPath === "/munasibat") {
            setActiveSection("مناسبات");
        }
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
        <div className="fixed top-0 bg-primaryBG w-full h-28 flex items-center justify-center">
            {menuItems.map((item) => (
                <div key={item.id} className="my-2">
                    <button
                        onClick={() => handleMainItemClick(item)}
                        className={`relative flex text-lg font-semibold items-center gap-x-2 px-6 py-2 w-full 
                            ${activeSection === item.name ? "text-primary" : "text-black"}
                        `}
                    >
                        <span>{item.name}</span>
                        {activeSection === item.name && (
                            <span
                                className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-primary"
                            ></span>
                        )}
                    </button>
                </div>
            ))}
            <div className="absolute right-20 top-4">
                <img src="logo.png" alt="Logo" className="h-20" />
            </div>
        </div>
    );
}
