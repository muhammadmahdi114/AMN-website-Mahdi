import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const [activeSection, setActiveSection] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;

        if (currentPath === "/") {
            setActiveSection("Home");
        }
    }, [location]);

    const menuItems = [
        {
            id: 1,
            name: "مناسبات",
        },
        {
            id: 2,
            name: "تذکرات",
        },
        {
            id: 3,
            name: "تبلیغات",
        },
        {
            id: 4,
            name: "تعارف",
        },
        {
            id: 5,
            name: "صفحہ اول",
        },
    ];

    const handleMainItemClick = (itemName) => {
        setActiveSection(itemName);
        const formattedRoute = itemName.toLowerCase().replace(/ /g, "-");
        navigate(`/${formattedRoute}`);
    };

    return (
        <div className="fixed top-0 bg-primaryBG w-full py-9 flex items-center justify-center">
            {menuItems.map((item) => (
                <div key={item.id} className="my-2">
                    <button
                        onClick={() => handleMainItemClick(item.name)}
                        className={`flex text-lg font-semibold items-center gap-x-2 px-6 py-2 w-full`}
                    ><span>{item.name}</span>
                    </button>
                </div>
            ))}
            <div className="absolute right-10 top-5">
                <img src="logo.png" alt="Logo" />
            </div>
        </div>
    );
}
