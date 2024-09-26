import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { checkAuthCookie } from "./lib/cookie/authCookie";
import React from "react"; import Script from 'next/script';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  checkAuthCookie();
  return (
    <html lang="en">
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <Script
        strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-SZZNDW21W6"></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SZZNDW21W6');
          `,
        }}>
      </Script>
      <Script
        id="aliyun-analytics"
        dangerouslySetInnerHTML={{
          __html: `
        !(function(c,b,d,a){c[a] || (c[a] = {});c[a].config={pid:"bthzxo624i@b8098d5c30312f3",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?"};
        with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)
		})(window,document,"https://retcode.alicdn.com/retcode/bl.js","__bl");
          `,
        }}>
      </Script>
      <Script
        id="baidu-analytics"
        dangerouslySetInnerHTML={{
          __html: `
        var _hmt = _hmt || [];
        (function() {
		  var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0b53b11d3930be87062f66b4b8ce2822";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
		})();
          `,
        }}>
      </Script>
      <body className={inter.className}>
        <div className="min-w-[960px]">

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
              <section className="text-center text-black">
                {children}
              </section>
            </main>

            {/* 页脚 */}
            <footer className="bg-gray-200 p-4 text-center">
              <p className="text-gray-600">
                {/* © 2024 我的个人网站. 保留所有权利. */}
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
