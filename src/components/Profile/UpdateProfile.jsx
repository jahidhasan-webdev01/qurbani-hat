"use client"

import { authClient } from "@/lib/auth-client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const modalRef = useRef(null);

    const openModal = () => modalRef.current?.showModal();
    const closeModal = () => modalRef.current?.close();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleUpdateProfile = async (data) => {
        await authClient.updateUser(data);

        toast.success("Profile updated successfully");
        closeModal()
    }
    return (
        <>
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
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