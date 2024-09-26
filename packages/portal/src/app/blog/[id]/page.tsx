"use client";

const blogDetails = {
    1: {
        title: "如何使用 Next.js 构建网站",
        content: "详细介绍了如何使用 Next.js 创建现代化网站的步骤和最佳实践。",
    },
    2: {
        title: "使用 Tailwind CSS 快速实现响应式布局",
        content: "介绍了如何结合 Tailwind CSS 进行响应式布局设计，提升开发效率。",
    },
    // 继续添加其他博客详情
};
export default function Home() {
    const router = { query: { id: 1 } };
    const { id } = router.query;

    // 获取对应博客的详情数据
    const blog = blogDetails[id as keyof typeof blogDetails];

    if (!blog) {
        return <div>博客不存在</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
            <p className="text-lg text-gray-700">{blog.content}</p>
        </div>
    );

}
