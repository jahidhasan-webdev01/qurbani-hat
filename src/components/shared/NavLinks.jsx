"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({nav}) => {
    const pathname = usePathname();

    return (
        <li className={`${pathname === nav.path ? "border-b-2 border-purple-400" : "hover:text-purple-400"}`}>
            <Link href={nav.path} className="hover:bg-transparent">{nav.name}</Link>
        </li>
    );
};

export default NavLinks;