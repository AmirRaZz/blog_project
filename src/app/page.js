"use client";

import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto lg:max-w-screen-xl">
                <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)] min-h-screen">
                    {/* category desktop */}
                    <div className="hidden md:block md:row-span-2 md:col-span-3">
                        <div className="bg-white rounded-xl overflow-hidden">
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
                                    href="#"
                                    className="block hover:bg-purple-50 pr-4 py-2 mb-1"
                                >
                                    همه مقالات
                                </Link>
                                <Link
                                    href="#"
                                    className="block hover:bg-purple-50 pr-4 py-2 mb-1"
                                >
                                    ری اکت
                                </Link>
                                <Link
                                    href="#"
                                    className="block hover:bg-purple-50 pr-4 py-2"
                                >
                                    جاوا اسکریپت
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* sortBar desktop */}
                    <div className="hidden md:block md:col-span-9">
                        <div className="bg-white rounded-3xl px-4 flex items-center">
                            <div className="flex gap-x-2 items-center ml-4">
                                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                                <span className="text-gray-700">
                                    مرتب سازی:
                                </span>
                            </div>
                            <ul className="flex items-center gap-x-4">
                                <li className="cursor-pointer text-gray-700 py-4">
                                    پربازدید ترین
                                </li>
                                <li className="cursor-pointer text-gray-700 py-4">
                                    محبوب ترین
                                </li>
                                <li className="cursor-pointer text-gray-700 py-4">
                                    جدید ترین
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* blogs section */}
                    <div className="md:col-span-9 grid grid-cols-6 gap-8">
                        {["nextjs.png","nodejs.jpg","nuxtjs.png","reactjs.png","tailwind.jpg","vuejs.png"].map((item,index) => {
                            return (
                                <div
                                    key={index}
                                    className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2"
                                >
                                    {/* cover image */}
                                    <div className="aspect-w-16 aspect-h-9">
                                        <Image src={`/images/${item}`} width={280} height={156} className="rounded-2xl w-full h-full object-center object-cover" alt=""/>
                                    </div>
                                    {/* blog content */}
                                    <div className="bg-gray-50 rounded-2xl">blog content</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
