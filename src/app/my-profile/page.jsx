import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;

    return (
        <div className="h-[70vh] flex justify-center items-center py-5 bg-gray-100 px-5 md:px-0">
            <div className="w-lg bg-white border border-gray-100 px-2 md:px-5 py-10 rounded-md">
                <h1 className="text-center font-bold text-2xl">Your profile</h1>
                <div className="divider"></div>
                <div className="card-body text-center">
                    <Image src={user.image} alt={user?.name} width={100} height={100} className="mx-auto rounded-full border-2 border-purple-400"></Image>
                    <p className="italic text-xs">
                        User since {""}
                        {new Date(user?.createdAt).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <h1 className="font-bold text-lg">{user?.name}</h1>
                    <h1 className="text-gray-600 text-sm">{user?.email}</h1>

                    <Link href={"/my-profile/update"} className="btn btn-neutral text-center mt-5">Update Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;