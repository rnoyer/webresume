import { EducationData } from "../types"

type EducationProps = {
    EducationData?: EducationData
}

export default function Education({EducationData}:EducationProps){
    return(
        <p>Education and Trainings</p>
    )
}