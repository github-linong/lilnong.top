"use client";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-4">项目一</h1>
            <p className="text-gray-700 mb-8">这是项目一的详细描述。</p>
            <a href="/projects" className="text-blue-500 hover:underline">
                返回项目列表
            </a>
        </div>
    );
}
