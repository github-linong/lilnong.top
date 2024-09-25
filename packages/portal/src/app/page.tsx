"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-black">欢迎来到我的网站！</h2>
      <p className="text-gray-700 mb-8">这里是我的个人信息和项目展示平台。</p>
      {/* <a
        href="/projects"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        查看我的项目
      </a> */}
      {/* 项目展示部分 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">我的项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 替换为你项目的链接和描述 */}
          <Link href="/projects/project1" className="block p-4 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">项目名称 1</h3>
            <p className="text-gray-600">简短的项目描述，介绍这个项目的目的和功能。</p>
          </Link>
          <Link href="/projects/project2" className="block p-4 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">项目名称 2</h3>
            <p className="text-gray-600">简短的项目描述，介绍这个项目的目的和功能。</p>
          </Link>
          {/* 继续添加更多项目 */}
        </div>
      </section>

      {/* 博客展示部分 */}
      <section>
        <h2 className="text-3xl font-bold mb-4">我的博客</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 替换为你博客的链接和描述 */}
          <Link href="/blog/blog1" className="block p-4 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">博客标题 1</h3>
            <p className="text-gray-600">简短的博客摘要，介绍文章的主要内容。</p>
          </Link>
          <Link href="/blog/blog2" className="block p-4 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">博客标题 2</h3>
            <p className="text-gray-600">简短的博客摘要，介绍文章的主要内容。</p>
          </Link>
          {/* 继续添加更多博客 */}
        </div>
      </section>
    </>
  );
}
