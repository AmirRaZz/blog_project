"use client";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const sortOptions = [
    { label: "پربازدید ترین", id: "most" },
    { label: "محبوب ترین", id: "popular" },
    { label: "جدید ترین", id: "newest" },
];

const SortBar = () => {
    const pathname = usePathname();
    const [sort, setSort] = useState("newest");
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const sortHandler = (id) => {
        setSort(id);
        router.push(pathname + "?" + createQueryString("sort", id));
    };

    return (
        <div className="bg-white rounded-3xl px-4 flex items-center">
            <div className="flex gap-x-2 items-center ml-4">
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                <span className="text-gray-700">مرتب سازی:</span>
            </div>
            <ul className="flex items-center gap-x-4">
                {sortOptions.map(({ id, label }) => {
                    return (
                        <li
                            key={id}
                            onClick={() => sortHandler(id)}
                            className={`cursor-pointer text-gray-700 relative py-4 ${
                                id === sort ? "text-purple-700 font-bold" : ""
                            }`}
                        >
                            {label}
                            {id === sort && (
                                <span className="h-[3px] bg-purple-700 w-8 rounded absolute bottom-0 right-0"></span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SortBar;
