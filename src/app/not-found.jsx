import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-5xl">404</h1>
            <h1 className="text-xl font-semibold">This page is not found!</h1>
            <Link href={"/"}>
                <button className="btn btn-sm btn-primary">Back to home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;