"use client";

import Link from "next/link";

type Project = {
    id: number;
    name: string;
    description: string;
    link: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: "项目一",
        description: "这是项目一的描述，展示项目的主要功能和特色。",
        link: "/projects/1",
    },
    {
        id: 2,
        name: "项目二",
        description: "这是项目二的描述，展示项目的主要功能和特色。",
        link: "/projects/2",
    },
    // 可以继续添加更多项目
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* <h1 className="text-4xl font-bold mb-8 text-black">项目列表</h1> */}
            <h1 className="text-5xl font-extrabold mb-12 text-center">项目列表</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Link key={project.id} href={project.link} className="bg-white shadow-md rounded-lg p-6  transform transition duration-300  hover:scale-105 hover:shadow-2xl">
                        <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div
                            className="text-blue-500 hover:underline"
                        >
                            查看详情
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
