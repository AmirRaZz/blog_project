'use client'
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const DesktopCategory = ({categories}) => {
    const [isOpen, setIsOpen] = useState(true);
    const {slug}=useParams()

    return (
        <div className="bg-white rounded-xl overflow-hidden sticky top-24">
            {/* accordion header */}
            <div
                className="flex items-center justify-between p-4 cursor-pointer bg-purple-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>دسته بندی مقالات</span>
                <ChevronDownIcon
                    className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </div>
            {/* accordion content */}
            <div className={`${isOpen ? "block" : "hidden"}`}>
                <Link
                    href="/blogs"
                    className={`block hover:bg-purple-50 pr-4 py-2 mb-1 ${
                        !slug
                            ? "bg-purple-700 text-white hover:bg-purple-500"
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
                            className={`block hover:bg-purple-50 pr-4 py-2 mb-1 ${
                                slug === category.englishTitle
                                    ? "bg-purple-700 text-white hover:bg-purple-500"
                                    : ""
                            }`}
                        >
                            {category.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default DesktopCategory;