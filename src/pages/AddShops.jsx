import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const AddShops = () => {
    const [name, setName] = useState("");
    const [seller, setSeller] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");

    const navigate = useNavigate();

    const isValidate = () => {
        let errorMessage = "";

        if (name.length === 0) {
            errorMessage = "Please enter the value in shop name field";
        } else if (seller.length === 0) {
            errorMessage = "Please enter the value in seller name field";
        } else if (description.length === 0) {
            errorMessage = "Please enter the value in description field";
        } else if (email.length === 0) {
            errorMessage = "Please enter the value in email field";
        } else if (phone.length < 4) {
            errorMessage = "Phone must be longer than 3 characters";
        } else if (adress.length < 4) {
            errorMessage = "Address must be longer than 3 characters";
        } else if (district.length === 0) {
            errorMessage = "Please enter a valid district";
        }

        if (errorMessage) {
            toast.warn(errorMessage);
            return false; // Return false if there's an error
        }

        return true; // Return true if all validations pass
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let regObj = {
            id: nanoid(),
            name,
            description,
            seller,
            state,
            district,
            adress,
            phone,
            email,
            website: "www.abcshop.com",
            openingHours: {
                Monday: "9:00 AM - 6:00 PM",
                Tuesday: "9:00 AM - 6:00 PM",
                Wednesday: "9:00 AM - 6:00 PM",
                Thursday: "9:00 AM - 6:00 PM",
                Friday: "9:00 AM - 6:00 PM",
                Saturday: "9:00 AM - 6:00 PM",
                Sunday: "Closed"
            },
            rating: 4.8,
            totalReviewCount: 102,
            products: [
                {
                    id: 204525438,
                    name: "Nike Air Force 1 '07 sneakers in white and black",
                    category: "Shoes",
                    price: {
                        value: 110,
                        currency: "USD",
                        text: "$110.00"
                    },
                    imageUrl: "images.asos-media.com/products/nike-air-force-1-07-sneakers-in-white-and-black/204525438-1-black",
                    rating: 5,
                    reviews: [
                        {
                            username: "Errol Grabber",
                            rating: 1,
                            reviewText: "I am not happy with this product...!!!",
                            date: "January 31, 2022"
                        },
                        {
                            username: "Kristofer Comi",
                            rating: 5,
                            reviewText: "Excellent product...!!!",
                            date: "January 31, 2022"
                        },
                        {
                            username: "Luciano Haarman",
                            rating: 5,
                            reviewText: "I am very happy...!!!",
                            date: "January 31, 2022"
                        }
                    ]
                },
                {
                    id: 204525439,
                    name: "Adidas Originals Superstar sneakers in white and gold",
                    category: "Shoes",
                    price: {
                        value: 100,
                        currency: "USD",
                        text: "$100.00"
                    },
                    imageUrl: "images.asos-media.com/products/adidas-originals-superstar-sneakers-in-white-and-gold/204525439-1-gold",
                    rating: 4.5,
                    reviews: [
                        {
                            username: "Maria Smith",
                            rating: 5,
                            reviewText: "Love these shoes! Very comfortable and stylish.",
                            date: "February 15, 2022"
                        },
                        {
                            username: "John Doe",
                            rating: 4,
                            reviewText: "Good quality but a bit pricey.",
                            date: "February 10, 2022"
                        }
                    ]
                }
            ]
        };


        if (isValidate()) {
            fetch("http://localhost:8080/shops", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(regObj),
            })
                .then((res) => {
                    console.log("Response: ", res)
                    toast.success("Shop Registration Successful");
                    navigate("/become-seller");
                })
                .catch((err) => {
                    toast.error("Failed: " + err.message);
                });
        }
    };
    return (
        <>
            <SectionTitle title="Add Shops" path="Become a Seller | Add Shops" />
            <div className="flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
                        <form className="px-5 py-7" onSubmit={handleSubmit}>
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Shop Name
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Seller Name
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={seller}
                                onChange={(e) => setSeller(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Description
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                E-mail
                            </label>
                            <input
                                type="email"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Address
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                State
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                District
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                required={true}
                            />
                            <button
                                type="submit"
                                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">Register Shop</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 inline-block"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="py-5 text-center">
                        <Link
                            to="/add-products"
                            className="btn btn-neutral text-white"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Already have an shop? Please add products.
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddShops;