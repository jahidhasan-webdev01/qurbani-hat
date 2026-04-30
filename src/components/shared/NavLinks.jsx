"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname()
    const allNavLinks = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/animals",
            name: "All Animals"
        }
    ];

    return (
        <>
            {
                allNavLinks.map((nav, index) => <li key={index} className={`${pathname === nav.path ? "border-b-2 border-red-500" : "hover:text-red-500"}`}>
                    <Link href={nav.path} className="hover:bg-transparent">{nav.name}</Link>
                </li>)
            }
        </>
    );
};

export default NavLinks;