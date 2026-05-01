"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
    const { data: session } = authClient.useSession();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleUpdateProfile = async (data) => {

        if (data.name === session.user.name && data.image === session.user.image) {
            return toast.error("No change detacted!");
        }

        await authClient.updateUser(data);
        reset();
        toast.success("Profile updated successfully");
        redirect("/my-profile")
    }

    return (
        <div className="h-[90vh] flex justify-center items-center py-5 bg-gray-100 px-5 md:px-0">
            <div className="w-lg bg-white border border-gray-100 px-2 md:px-5 py-10 rounded-md">
                <h1 className="text-center font-bold text-2xl">Update your profile</h1>
                <div className="card-body mt-5">
                    <form className="fieldset" onSubmit={handleSubmit(handleUpdateProfile)}>
                        <label className="label font-bold">Name</label>
                        <input
                            type="text"
                            className="input w-full bg-gray-100"
                            placeholder="Enter your full name"
                            defaultValue={session?.user.name}
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.name?.message}</p>

                        <label className="label font-bold mt-2">Image URL</label>
                        <input
                            type="text"
                            className="input w-full bg-gray-100"
                            placeholder="Add a valid image url"
                            defaultValue={session?.user.image}
                            {...register("image", {
                                required: "Image URL is required",
                                pattern: {
                                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                                    message: "Enter a valid image URL"
                                }
                            })}
                        />

                        <p className="text-red-500">{errors?.image?.message}</p>

                        <button className="btn btn-neutral mt-4">Confirm Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;