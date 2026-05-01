"use client"

import Link from "next/link";
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();

    const allNavLinks = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/animals",
            name: "All Animals"
        },
        {
            path: "/my-profile",
            name: "My Profile"
        }
    ];

    const handleLogout = async () => {
        await authClient.signOut()
        redirect("/");
    }

    return (
        <div className="border-b border-gray-200 pt-10 pb-2">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                allNavLinks.map((nav, index) => <NavLinks key={index} nav={nav} />)
                            }
                        </ul>
                    </div>
                    <Link href={"/"} className="font-bold text-2xl text-neutral">QurbaniHat</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {
                            allNavLinks.map((nav, index) => <NavLinks key={index} nav={nav} />)
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        isPending
                            ?
                            <span className="loading loading-spinner loading-xs"></span>
                            :
                            session?.user
                                ?
                                <>
                                    <Image src={session?.user?.image} width={30} height={30} alt={session?.user.name} className="rounded-full"></Image>
                                    <button
                                        onClick={handleLogout}
                                        className="pl-2 btn btn-sm btn-error text-white">Logout</button>
                                </> :
                                <>
                                    <Link href={"/login"}>
                                        <button className="btn btn-sm btn-neutral">Login
                                        </button>
                                    </Link>
                                    <Link href={"/register"}>
                                        <button className="btn btn-sm btn-info text-white">
                                            Register
                                        </button>
                                    </Link>
                                </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;