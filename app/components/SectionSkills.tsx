import { SkillData } from "../types"

type SkillProps = {
    SkillData?: SkillData;
}

export default function Skills({ SkillData }: SkillProps) {
    if (!SkillData) return null
    return (
        <div id="section-skills" className="section">
            <h2>Skills section</h2>
            <ul>
                {SkillData.dev_skills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <ul>
                {SkillData.previous_experience_skills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <ul>
                {SkillData.languages?.map((language, index) => (
                    <li key={index}>{language.language} - {language.level}</li>
                ))}
            </ul>
        </div>
    )
}