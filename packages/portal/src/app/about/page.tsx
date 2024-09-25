"use client";

import Image from "next/image";
import { useEffect } from "react";
import { checkAuthCookie } from "../lib/cookie/authCookie";

export default function Home() {
    useEffect(() => {
    }, [])
    checkAuthCookie();
    return (
        <div className="min-h-screen bg-gray-100">
            {/* 顶部导航 */}
            <header className="bg-white shadow">
                <div className="container mx-auto p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black">lilnong.top</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="/" className="text-blue-500 hover:underline">首页(Home)</a></li>
                            <li><a href="/projects" className="text-blue-500 hover:underline">项目(Projects)</a></li>
                            <li><a href="/blog" className="text-blue-500 hover:underline">博客(Blogs)</a></li>
                            <li><a href="/about" className="text-blue-500 hover:underline">关于(About)</a></li>
                            {/* <li><a href="/other" className="text-blue-500 hover:underline">其他(Other)</a></li> */}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* 主要内容 */}
            <main className="container mx-auto p-8">
                <section className="text-center">
                </section>
            </main>

            {/* 页脚 */}
            <footer className="bg-gray-200 p-4 text-center">
                <p className="text-gray-600">
                    {/* © 2024 我的个人网站. 保留所有权利. */}
                </p>
            </footer>
        </div>
    );
}
