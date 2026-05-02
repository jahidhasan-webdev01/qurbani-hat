export const getAnimals = async () => {
    // const res = await fetch("http://localhost:3000/animals.json");
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/animals.json`);
    // const res = await fetch("/animals.json");
    const data = await res.json();

    return data;

    // return ;
}