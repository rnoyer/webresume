'use client'
import type { HeroData } from "../types"
import { useState, useEffect } from "react"

type HeroProps = {
    heroData?: HeroData
}

export default function Hero({ heroData }: HeroProps) {
    if (!heroData) return null;

    return (
        <div id="section-hero" className="bg-red-200 grid">
            <h1>{heroData?.name}</h1>
            <h2>{heroData?.title}</h2>
            <h3>{heroData?.subtitle}</h3>
            {/* <canvas id="canvas" width="100%" height={vw - 64} className="superpose"></canvas> */}
        </div>)
}
