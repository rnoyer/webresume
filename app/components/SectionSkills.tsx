import { SkillData } from "../types"
import Lorem from "./Lorem"

type SkillProps = {
    SkillData?: SkillData;
}

export default function Skills( {SkillData}: SkillProps) {
    if (!SkillData) return null
    return (
        <div id="section-skills" className="section">
            <p>Skills section</p>
            <Lorem />
        </div>
    )
}