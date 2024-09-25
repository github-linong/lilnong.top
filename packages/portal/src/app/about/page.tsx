"use client";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const jobs = [
    {
        time: "2023 - 今",
        company: "某技术公司",
        position: "前端工程师",
        description: "主要负责一站式研发平台相关的前端开发工作。",
    },
    {
        time: "2021 - 2023",
        company: "某技术公司",
        position: "前端工程师",
        description: "主要负责研发云，流水线等研发基础设施前端开发工作。",
    },
    {
        time: "2016 - 2021",
        company: "某技术公司",
        position: "前端工程师",
        description: "主要负责移动端混合开发，也负责部分基础设施的搭建。",
    },
];
const techStack = [
    { name: "JavaScript (ES6+)", icon: "🟨" },
    { name: "TypeScript", icon: "🔵" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "🌐" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Node.js", icon: "🟢" },
]; const TechStackSection = () => (<>
    <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">技术栈</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-blue-500 font-medium">{tech.name}</span>
                </div>
            ))}
        </div>
    </section></>

);

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-8">
                    {/* 个人简介部分 */}
                    <section className="mb-12">
                        <h1 className="text-5xl font-extrabold mb-6">关于我</h1>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            大家好！我是 linong，一名热衷于 Web 前端开发的工程师，拥有丰富的项目经验和技术背景。我擅长使用
                            <span className="text-blue-500 font-semibold"> Vue</span>、
                            <span className="text-blue-500 font-semibold"> React</span> 等前端技术。除了开发，我也喜欢探索新技术、分享我的学习成果。
                        </p>
                    </section>

                    {/* 职业经历部分 */}<section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">职业经历</h2>
                        <div className="space-y-6">
                            {jobs.map((job, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105">
                                    <div className="flex items-center mb-2">
                                        <span className="text-xl font-semibold text-blue-600">{job.position}</span>
                                        <span className="mx-2 text-gray-500">|</span>
                                        <span className="text-gray-500">{job.time}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{job.company}</h3>
                                    <p className="text-gray-600">{job.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* 技术栈部分 */}
                    <TechStackSection />


                    {/* 兴趣和爱好部分 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">兴趣爱好</h2>
                        <p className="text-gray-700 leading-relaxed">
                            除了写代码，我还喜欢阅读技术博客、研究开源项目，并且热爱健身和旅行。
                        </p>
                    </section>

                    {/* 社交链接部分 */}
                    <section id="contact" className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">联系我</h2>
                        <p className="text-gray-600 mb-4">通过以下社交平台与我联系：</p>
                        <div className="flex space-x-6">
                            {/* GitHub */}
                            <a
                                href="https://github.com/your-github"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-500 transition duration-200"
                            >
                                <FaGithub size={30} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/your-linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-500 transition duration-200"
                            >
                                <FaLinkedin size={30} />
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://twitter.com/your-twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-500 transition duration-200"
                            >
                                <FaTwitter size={30} />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
