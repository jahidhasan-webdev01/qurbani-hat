import Image from "next/image";
import bannerImage from "@/assests/cow.png"
import Link from "next/link";

const Banner = () => {
    return (
        <div className="bg-purple-50 py-10 lg:py-20">
           <div className="animate__animated animate__fadeIn container mx-auto flex flex-col-reverse lg:flex-row items-center justify-evenly gap-20">
             <div className="space-y-3 text-center lg:text-left">
                <h1 className="font-bold text-4xl lg:text-5xl uppercase text-purple-400 ">Healthy Animals,</h1>
                <h1 className="font-bold text-orange-300 text-4xl lg:text-5xl uppercase"> Hassle-Free Qurbani </h1>
                <h1 className="mt-5 text-xl lg:text-2xl font-bold uppercase">Best Deals on Qurbani Animals <br /> & Care Supplies!</h1>
                <p className="text-gray-600 mt-5 italic text-sm">Find Your Perfect Qurbani Animal —  Trusted, Healthy, Ready.</p>
                <Link href={"/animals"} className="btn btn-sm btn-neutral">View All Animals</Link>
            </div>

            <div>
                <Image
                    src={bannerImage}
                    width={300}
                    height={300}
                    alt="Banner Cow"
                ></Image>
            </div>
           </div>
        </div>
    );
};

export default Banner;