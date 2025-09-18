import { ProjectData } from "../types"
import Lorem from "./Lorem"

type ProjectsProps = {
    ProjectData?: ProjectData
}

export default function Projects({ ProjectData }: ProjectsProps) {
    if (!ProjectData) return null
    return (
        <div id="section-projects" className="section">
            <h2>Project section</h2>
            <ul>
                {ProjectData.map((project, index) => {
                    const concatenated = project.deprecated ? `${project.title} (deprecated)` : `${project.title}`
                    return (
                        <li key={index}>{concatenated}</li>
                    )
                }

                )}
            </ul>
        </div>
    )
}