'use client'
import Link from "next/link"
import { useState } from "react"

const tabs = [
    { href: "#section-skills", label: "Skills" },
    { href: "#section-projects", label: "Projects" },
    { href: "#section-career", label: "Career" },
]

export default function Tabs() {
    const [currentHash, setCurrentHash] = useState('')

    return (
        <div role="tablist" className="tabs">
            {tabs.map(tab => (
                <Link key={tab.href}
                    onClick={() => setCurrentHash(tab.href)}
                    className={`tab px-8 ${currentHash === tab.href && 'tab-active'}`}
                    href={tab.href}
                >
                    {tab.label}
                </Link>
            ))}
        </div >
    )
}