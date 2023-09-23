import Paginate from "@/common/Paginate";
import CategoryDesktop from "@/components/posts/DesktopCategory";
import CategoryMobile from "@/components/posts/MobileCategory";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import http from "@/services/httpService";
import { cookies } from "next/headers";
import queryString from "query-string";

const fetchPost = async (slug,query) => {
    const res = await http.get(`/posts?limit=6&page=1&categorySlug=${slug}&${query || "newest"}`, {
        headers: {
            Cookie: `userToken=${cookies().get("userToken")?.value || ""}`,
            // Authorization:`Bearer ${cookies().get("userToken")?.value}`
        },
    });

    const { data } = res.data;
    return data;
};

const fetchCategories = async () => {
    // const categories = await fetch("http://localhost:5000/api/post-category");
    // const { data } = await categories.json();
    // return data;

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
const CategoryPage = async ({ params, searchParams }) => {
    const { slug } = params;
    const query=queryString.stringify(searchParams)
    const post = await fetchPost(slug,query);
    const categories = await fetchCategories();
    const blogsData = post.docs;

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
                            {post.totalPages > 1 && <Paginate posts={post} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
