import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
    return (
        <div className="grid lg:grid-cols-2 border border-gray-300 rounded-md">
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

                <Link href={`/details-page/${animal.id}`} className="mt-5 btn btn-sm btn-neutral">View Details</Link>
            </div>
        </div>
    );
};

export default AnimalCard;