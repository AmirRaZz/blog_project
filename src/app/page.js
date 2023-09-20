import Link from "next/link";

export default function Home() {
    return (
        <>
            <div>Home page</div>
            <Link href={"/blogs"}>Go to Blogs?</Link>
        </>
    );
}
