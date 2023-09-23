import Paginate from "@/common/Paginate";
import CategoryDesktop from "@/components/posts/DesktopCategory";
import CategoryMobile from "@/components/posts/MobileCategory";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import http from "@/services/httpService";
import { cookies } from "next/headers";
import queryString from "query-string";


const fetchPosts = async (query) => {
    const cookieValue = cookies().get("userToken")?.value;
    const res = await http.get(
        `/posts?${query || "newest"}`,
        {
            headers: {
                Cookie: `userToken=${cookieValue || ""}`,
                // Authorization:`Bearer ${cookies().get("userToken")?.value}`
            },
        }
    );
    // const posts = await res.json();
    const { data } = res.data;
    return data;
};

const fetchCategories = async () => {
    const cookieValue = cookies().get("userToken")?.value;
    const categories = await http.get(
        "/post-category",
        {
            headers: {
                Cookie: `userToken=${cookieValue || ""}`,
                // Authorization:`Bearer ${cookies().get("userToken")?.value}`
            },
        }
    );
    const { data } = categories.data;
    return data;
};

const Blogs = async ({searchParams}) => {

    const query = queryString.stringify(searchParams);
    const posts = await fetchPosts(query);
    const categories = await fetchCategories();
    const blogsData = posts.docs;

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
                <CategoryMobile categories={categories} />
                <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)] min-h-screen">
                    <div className="hidden md:block md:row-span-2 md:col-span-3">
                        <CategoryDesktop categories={categories} />
                    </div>

                    <div className="hidden md:block md:col-span-9">
                        <SortBar />
                    </div>

                    <div className="md:col-span-9 grid grid-cols-6 gap-8">
                        <PostList blogsData={blogsData} />
                        <div
                            dir="ltr"
                            className="col-span-6 flex justify-center"
                        >
                            {posts.totalPages > 1 && <Paginate posts={posts}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
