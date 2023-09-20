'use client'

import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {MdContentCopy} from "react-icons/md"

const Copy = ({post}) => {

    const [copied, setCopied] = useState(false);

    const copyHandler = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <div className="relative">
            <CopyToClipboard
                text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
                onCopy={copyHandler}
            >
                <div className="bg-gray-100 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2 cursor-pointer ">
                    <span className="text-sm md:text-base">کپی&nbsp;لینک</span>
                    <MdContentCopy size={24} />
                </div>
            </CopyToClipboard>
            {copied && (
                <span className="absolute -top-8 left-0 bg-blue-500 px-3 py-1 rounded-2xl text-white text-sm">
                    کپی شد
                </span>
            )}
        </div>
    );
}

export default Copy;