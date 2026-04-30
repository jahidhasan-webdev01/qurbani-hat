"use client"

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const openModal = () => {
        document.getElementById('update_profile_modal').showModal()
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleUpdateProfile = async (data) => {
        await authClient.updateUser(data);
    }
    return (
        <>
            <dialog id="update_profile_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm text-red-500 font-bold">X</button>
                        </form>
                    </div>
                    <form className="fieldset" onSubmit={handleSubmit(handleUpdateProfile)}>
                        <label className="label font-bold">Name</label>
                        <input
                            type="text"
                            className="input w-full bg-gray-100"
                            placeholder="Enter your full name"
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
                            {...register("image", {
                                required: "Image URL is required",
                                pattern: {
                                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                                    message: "Enter a valid image URL"
                                }
                            })}
                        />

                        <p className="text-red-500">{errors?.image?.message}</p>

                        <button className="btn btn-neutral mt-4">Update</button>
                    </form>

                </div>
            </dialog>

            <div className="text-center mt-5">
                <button onClick={openModal} className="btn btn-info text-white btn-sm">Update Profile</button>
            </div>
        </>
    );
};

export default UpdateProfile;