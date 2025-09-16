import { ProjectData } from "../types"
import Lorem from "./Lorem"

type ProjectsProps = {
    ProjectData?:ProjectData
}

export default function Projects({ProjectData}: ProjectsProps) {
    if (!ProjectData) return null
    return (
        <div id="section-projects" className="section">
            <p>Project section</p>
            <Lorem />
        </div>
    )
}