"use client";

import Pagination from "@mui/material/Pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Paginate = ({ posts }) => {
    const pathname = usePathname();
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

    const pageHandler = (event, page) => {
        router.push(pathname + "?" + createQueryString("page", page),{scroll:false});
    };

    return (
        <>
            <Pagination
                count={posts.totalPages}
                page={posts.page}
                color="primary"
                onChange={pageHandler}
            />
        </>
    );
};

export default Paginate;
