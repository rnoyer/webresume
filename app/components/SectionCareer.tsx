import type { CareerData } from "../types"
import Lorem from "./Lorem"

type CareerProps = {
    CareerData?: CareerData;
}

export default function Career({CareerData}:CareerProps) {
    if (!CareerData) return null;
    
    return (
        <div id="section-career" className="section">
            <p>Career section</p>
            <Lorem />
        </div>)
}