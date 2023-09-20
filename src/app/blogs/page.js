import CategoryDesktop from "@/components/posts/DesktopCategory";
import CategoryMobile from "@/components/posts/MobileCategory";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";

const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts?limit=6&page=1");
    const posts = await res.json();
    const { data } = posts;
    return data;
};

const fetchCategories = async () => {
    const categories = await fetch("http://localhost:5000/api/post-category");
    const { data } = await categories.json();
    return data;
};

const Blogs = async () => {
    const posts = await fetchPosts();
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;