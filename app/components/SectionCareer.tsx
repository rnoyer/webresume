import Link from "next/link";
import type { Job, CareerData } from "../types"
import { useState } from "react";

type CareerProps = {
    CareerData?: CareerData;
}

function JobListItems({ job }: { job: Job }) {
    return (
        <ul className="py-2">
            <li>{job.role}</li>
            <li>{job.company}</li>
            <li>{job.description}</li>
            <li>{job.location}</li>
            <li>{job.timeframe}</li>
        </ul>
    )
}

function JobUList({ jobs }: { jobs: CareerData }) {
    return (
        <>
            {
                jobs?.map((job, index) => {
                    return (<JobListItems key={index} job={job} />)
                })
            }
        </>
    )
}

export default function Career({ CareerData }: CareerProps) {
    const [displayPrevious, setDisplayPrevious] = useState<boolean>(false)

    if (!CareerData) return null;

    const recentJobs = CareerData.filter(job => job.recent)
    const oldJobs = CareerData.filter(job => !job.recent)

    function toggleDisplay() {
        setDisplayPrevious(!displayPrevious)
    }

    return (
        <div id="section-career" className="section">
            <p>Career section</p>
            <JobUList jobs={recentJobs} />
            <Link href={"/"} scroll={false} onClick={toggleDisplay}>
                {displayPrevious ? "Hide previous experiences" : "Show previous experiences"}
            </Link>
            {displayPrevious && <JobUList jobs={oldJobs} />}
        </div>)
}