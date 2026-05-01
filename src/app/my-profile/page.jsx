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
        <div className="h-screen container mx-auto py-10 px-2 md:px-0">
            <h1 className="font-bold text-2xl">My Profile</h1>

            <div className="flex flex-col items-center mt-2">
                <div className="text-center">
                    <Image src={user.image} alt={user?.name} width={200} height={200} className="mx-auto"></Image>
                    <p className="italic text-sm">
                        User since{" "}
                        {new Date(user?.createdAt).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <h1 className="mt-2 text-xl font-bold">Name: {user?.name}</h1>
                    <h1 className="text-gray-600">Email: {user?.email}</h1>
                </div>

                <Link href={"/my-profile/update"} className="btn btn-info text-white btn-sm text-center mt-5">Update Profile</Link>

            </div>
        </div>
    );
};

export default MyProfilePage;