import Link from "next/link";

const TopBreeds = () => {
    const topBreeds = [
        {
            id: 1,
            category: "Cow",
            icon: "🐄",
            types: [
                {
                    id: 101,
                    name: "Deshi (Local)",
                    origin: "Bangladesh",
                    avgWeight: "200-350 kg"
                },
                {
                    id: 102,
                    name: "Sahiwal",
                    origin: "Pakistan/India",
                    avgWeight: "400-600 kg"
                },
                {
                    id: 103,
                    name: "Friesian Cross",
                    origin: "Crossbreed",
                    avgWeight: "500-700 kg"
                },
                {
                    id: 104,
                    name: "Red Chittagong",
                    origin: "Bangladesh",
                    avgWeight: "250-400 kg"
                }
            ]
        },
        {
            id: 2,
            category: "Goat",
            icon: "🐐",
            types: [
                {
                    id: 201,
                    name: "Black Bengal",
                    origin: "Bangladesh",
                    avgWeight: "20-30 kg",
                    popular: true
                },
                {
                    id: 202,
                    name: "Jamunapari",
                    origin: "India",
                    avgWeight: "40-60 kg"
                }
            ]
        },
        {
            id: 3,
            category: "Sheep",
            icon: "🐏",
            types: [
                {
                    id: 301,
                    name: "Garole",
                    origin: "West Bengal",
                    avgWeight: "15-25 kg"
                },
                {
                    id: 302,
                    name: "Local Sheep",
                    origin: "Bangladesh",
                    avgWeight: "20-35 kg"
                }
            ]
        }
    ];

    return (
        <div className="container mx-auto py-20 px-5 lg:px-0">
            <div className="text-center">
                <h1 className="font-bold text-2xl">Top Breeds</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    topBreeds.map((breed, index) =>
                        <div key={index} className="border border-purple-400 rounded-md flex flex-col h-full">
                            <div className="card-body flex flex-col h-full">
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">{breed.category}</h2>
                                    <span className="text-2xl">{breed.icon}</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 pb-5">
                                    {
                                        breed.types.map((type, index) =>
                                            <li key={index}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                <span>{type.name} - {type.origin}</span>
                                            </li>)
                                    }

                                </ul>
                                <div className="mt-auto">
                                    <Link href={"/animals"} className="btn bg-purple-500 text-white btn-block">See All</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>


        </div>
    );
};

export default TopBreeds;