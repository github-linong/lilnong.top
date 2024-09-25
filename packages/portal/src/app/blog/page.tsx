"use client";
type BlogPost = {
    id: number;
    title: string;
    description: string;
    link: string;
    date: string;
    image: string;  // 新增图片字段
};
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "如何使用 Next.js 构建网站",
        description: "在这篇文章中，我将介绍如何使用 Next.js 创建一个现代化的网站。",
        link: "/blog/1",
        date: "2024-09-01",
        image: "https://picsum.photos/800/600?/images/nextjs.png",  // 假设有封面图
    },
    {
        id: 2,
        title: "使用 Tailwind CSS 快速实现响应式布局",
        description: "这篇文章将教你如何结合 Tailwind CSS 进行响应式布局设计。",
        link: "/blog/2",
        date: "2024-08-20",
        image: "https://picsum.photos/800/600?/images/tailwindcss.png",  // 假设有封面图
    },
    // 可以继续添加更多博客文章
];
export default function Home() {
    return (<div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-5xl font-extrabold mb-12 text-center">博客列表</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
                <div key={post.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
                    {/* <img src={post.image} alt={post.title} className="w-full h-48 object-cover" /> */}
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" src={`${"https://picsum.photos/800/600"}?${post.image}`} alt="Random Unsplash Image" />
                    <div className="p-6 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h2>
                            <p className="text-gray-600 mb-6">{post.description}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-500">发布日期: {post.date}</p>
                            <a
                                href={post.link}
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                阅读更多
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
