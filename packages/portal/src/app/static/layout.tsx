"use client";

import Image from "next/image";
import React, { useEffect } from "react";

export default function StaticPage({ children }) {
    return (
        <main className="flex min-h-screen flex-col items-center p-1">
            <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    欢迎来到 <a className="font-bold underline underline-offset-2" href="https://lilnong.top">lilnong.top</a>
                </p>
            </div>
            {children}
        </main>
    );
}
