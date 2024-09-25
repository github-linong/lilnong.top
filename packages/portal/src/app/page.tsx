"use client";
export default function Home() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-black">欢迎来到我的网站！</h2>
      <p className="text-gray-700 mb-8">这里是我的个人信息和项目展示平台。</p>
      <a
        href="/projects"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        查看我的项目
      </a>
    </>
  );
}
