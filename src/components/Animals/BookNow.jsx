"use client"

import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookNow = () => {
    const modalRef = useRef(null);

    const openModal = () => modalRef.current?.showModal();
    const closeModal = () => modalRef.current?.close();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleUpdateProfile = async (data) => {
        if (data) {
            toast.success("Your booking in confirm. Thank You.");
            reset();
            closeModal()
        }
    }
    return (
        <div>
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

                        <label className="label font-bold mt-2">Email address</label>
                        <input
                            type="email"
                            className="input w-full bg-gray-100"
                            placeholder="Enter your your email address"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.email?.message}</p>

                        <label className="label font-bold mt-2">Phone Number</label>
                        <input
                            type="text"
                            className="input w-full bg-gray-100"
                            placeholder="e.g. 017XXXXXXXX or +88017XXXXXXXX"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^(?:\+8801|01)[3-9]\d{8}$/,
                                    message: "Enter a valid Bangladesh phone number"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.phone?.message}</p>

                        <label className="label font-bold mt-2">Address</label>
                        <textarea
                            className="textarea w-full bg-gray-100"
                            placeholder="Enter your full address"
                            {...register("address", {
                                required: "Address is required",
                                minLength: {
                                    value: 10,
                                    message: "Address must be at least 10 characters"
                                }
                            })}
                        ></textarea>
                        <p className="text-red-500">{errors?.address?.message}</p>

                        <button className="btn btn-neutral mt-4">Confirm</button>
                    </form>

                </div>
            </dialog>

            <div className="mt-5">
                <button onClick={openModal} className="btn btn-info text-white btn-sm">Book Now</button>
            </div>
        </div>
    );
};

export default BookNow;