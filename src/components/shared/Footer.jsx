import Link from "next/link";
import { FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaYoutube } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="py-10 lg:py-20 bg-purple-50 px-5 lg:px-0">
            <div className="container mx-auto grid grid-cols-12 gap-8 lg:gap-20">
                <div className="col-span-12 lg:col-span-4">
                    <Link href={"/"} className="font-bold text-2xl text-neutral">QurbaniHat</Link>
                    <p className="mt-2 text-gray-600 text-sm">We are dedicated to providing healthy, farm-raised animals for Qurbani and farming needs. Our mission is to ensure quality, transparency, and a hassle-free experience for every customer. From trusted local farms to your doorstep, we make livestock buying simple and reliable.</p>
                </div>

                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <h1 className="font-bold">Contact Info</h1>
                    <div className="mt-2 space-y-2 text-sm">
                        <p className="flex items-center gap-1"><FaLocationArrow /> Bogura, Rajshahi, Bangladesh</p>
                        <p className="flex items-center gap-1"><MdEmail /> qurbani-hat@dairy.com</p>
                        <p className="flex items-center gap-1"><FaPhone /> +880 1234-567890</p>
                        <p className="flex items-center gap-1"><IoTimerOutline /> Working Hours: 9:00 AM – 9:00 PM (Everyday)</p>
                    </div>
                </div>

                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <h1 className="font-bold">Social Links</h1>
                    <div className="flex gap-5 mt-2">
                        <FaFacebook className="text-xl cursor-pointer"/>
                        <FaInstagram className="text-xl cursor-pointer"/>
                        <FaYoutube className="text-xl cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;