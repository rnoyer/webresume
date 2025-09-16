'use client'

import { useState } from "react";
import Tabs from "./Tabs";
import Link from "next/link";

export default function Header() {
    
    return (
        <header className="sticky top-0">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start flex-1">
                </div>
                <div className="navbar-center flex-1">
                    <Tabs />
                </div>
                <div className="navbar-end flex-1">
                    <Link href="/starter" className="btn group overflow-hidden">
                        Contact
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 -rotate-45 group-hover:animate-fly">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>

                    </Link>
                </div>
            </div>
        </header>
    )
}