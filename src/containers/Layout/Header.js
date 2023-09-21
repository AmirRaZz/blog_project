"use client";
import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { signout } from "src/redux/user/userActions";

const Header = () => {
    // const userInfo = useSelector((state) => state.userSignin);
    // const { user, loading } = userInfo;
    // const dispatch = useDispatch();

    return (
        <header className={`bg-white shadow-md py-2 mb-8 sticky top-0 z-40`}>
            <div
                className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all `}
            >
                <nav className="flex justify-between">
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <Link href="/" className="py-2 block">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="py-2 block">
                                Blogs
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-x-4">
                        <>
                            <Link href="/signup" className="block">
                                ثبت نام
                            </Link>
                            <Link href="/signin" className="block">
                                ورود
                            </Link>
                        </>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
