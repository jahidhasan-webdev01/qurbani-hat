import Image from "next/image";
import bannerImage from "@/assests/cow.png"
import Link from "next/link";

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-amber-50 py-10 lg:py-20 gap-5">
            <div className="text-center space-y-2">
                <h1 className="font-bold text-neutral text-4xl lg:text-6xl uppercase">grooming and supplies</h1>
                <h1 className="text-2xl lg:text-4xl text-amber-600 font-bold uppercase">at the best rates!</h1>
                <p className="text-neutral mt-5">Find Your Perfect Qurbani Animal — <br /> Trusted, Healthy, Ready.</p>
            </div>

            <div>
                <Image
                    src={bannerImage}
                    width={300}
                    height={300}
                    alt="Banner Cow"
                ></Image>
            </div>
            <div className="mt-5">
                <button className="btn btn-sm btn-neutral btn-outline">
                    <Link href={"/animals"}>View All Animals</Link>
                </button>
            </div>
        </div>
    );
};

export default Banner;