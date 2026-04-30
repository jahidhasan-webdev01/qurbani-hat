import { getAnimals } from "@/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

const AnimalsPage = async () => {
    const animals = await getAnimals();

    return (
        <div className="min-h-screen container mx-auto py-10">
            <h1>ANIMALS PAGE {animals.length}</h1>

            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    animals.map((animal, index) =>
                        <div key={index} className="grid grid-cols-2 border border-gray-200 rounded-md">
                            <div className="bg-gray-50 p-10">
                                <Image
                                    src={animal.image}
                                    width={300}
                                    height={300}
                                    alt={animal.name}
                                    className="w-full h-full object-cover"
                                ></Image>
                            </div>
                            <div className="p-10">
                                <h1 className="text-xl font-bold">{animal.name}</h1>
                                <div className="mt-5 space-y-1">
                                    <h1><span className="font-bold">Price:</span> {animal.price} bdt</h1>
                                    <h1><span className="font-bold">Weight: </span>{animal.weight} kg</h1>
                                    <h1><span className="font-bold">Age: </span>{animal.age} years old</h1>
                                    <h1><span className="font-bold">Location: </span>{animal.location}</h1>
                                </div>

                                <p className="line-clamp-3 mt-2 text-gray-600">{animal.description}</p>

                                <Link href={`/animals/${animal.id}`} className="mt-5 btn btn-sm btn-neutral">View Details</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AnimalsPage;