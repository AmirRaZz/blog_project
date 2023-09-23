'use client'

import Link from "next/link";
import { useParams } from "next/navigation";

const MobileCategory = ({categories}) => {
    const { slug } = useParams();

    return (
        <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
            <Link
                href={`/blogs`}
                className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
                    !slug
                        ? "border-2 border-purple-700 text-purple-700 bg-purple-100"
                        : ""
                }`}
            >
                همه مقالات
            </Link>
            {categories.map((category) => {
                return (
                    <Link
                        key={category._id}
                        href={`/blogs/${category.englishTitle}`}
                        className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
                            slug === category.englishTitle
                                ? "border-2 border-purple-700 text-purple-700 bg-purple-100"
                                : ""
                        }`}
                    >
                        {category.title}
                    </Link>
                );
            })}
        </div>
    );
}

export default MobileCategory;