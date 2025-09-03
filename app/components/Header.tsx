'use client'

import { useState } from "react";
import Tabs from "./Tabs";
import Link from "next/link";

export default function Header() {
    const [coor, setCoor] = useState()
    return (
        <header className="sticky top-0">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                </div>
                <div className="navbar-center">
                    <Tabs />
                </div>
                <div className="navbar-end">
                    <Link href="/starter" className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    )
}