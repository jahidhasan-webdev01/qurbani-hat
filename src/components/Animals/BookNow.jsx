"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const BookNow = () => {
    const { data: session } = authClient.useSession();

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [errors, setErrors] = useState({});

    const openModal = () => {
        setFormData((prev) => ({
            ...prev,
            name: session?.user?.name || "",
            email: session?.user?.email || "",
        }));
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setErrors({});
        setFormData({ name: "", email: "", phone: "", address: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^(?:\+8801|01)[3-9]\d{8}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid Bangladesh phone number";
        }
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        } else if (formData.address.trim().length < 10) {
            newErrors.address = "Address must be at least 10 characters";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        toast.success("Your booking is confirmed. Thank You.");
        closeModal();
    };

    return (
        <div>
            <dialog open={isOpen} className="modal modal-bottom sm:modal-middle animate__animated animate__fadeIn">
                <div className="modal-box">
                    <div className="modal-action">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-sm text-red-500 font-bold"
                        >
                            X
                        </button>
                    </div>

                    <h1 className="font-bold text-xl">Confirm your booking</h1>

                    <form className="fieldset mt-2" onSubmit={handleSubmit}>
                        <label className="label font-bold">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input w-full bg-gray-100"
                            placeholder="Enter your full name"
                        />
                        <p className="text-red-500">{errors.name}</p>

                        <label className="label font-bold mt-2">Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input w-full bg-gray-100"
                            placeholder="Enter your email address"
                        />
                        <p className="text-red-500">{errors.email}</p>

                        <label className="label font-bold mt-2">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input w-full bg-gray-100"
                            placeholder="e.g. 017XXXXXXXX or +88017XXXXXXXX"
                        />
                        <p className="text-red-500">{errors.phone}</p>

                        <label className="label font-bold mt-2">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="textarea w-full bg-gray-100"
                            placeholder="Enter your full address"
                        ></textarea>
                        <p className="text-red-500">{errors.address}</p>

                        <button className="btn btn-neutral mt-4">Confirm</button>
                    </form>
                </div>

                <div className="modal-backdrop" onClick={closeModal} />
            </dialog>

            <div className="mt-5">
                <button onClick={openModal} className="btn btn-info text-white btn-sm">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BookNow;