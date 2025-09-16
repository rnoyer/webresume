'use client'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Career from "./components/SectionCareer";
import Projects from "./components/SectionProjects";
import Skills from "./components/SectionSkills";
import Education from "./components/SectionEducation"
import Footer from "./components/Footer";
import {useState, useEffect} from "react";
import type { ResumeData } from "./types";

export default function Home() {
  const [data, setData] = useState<ResumeData | null>(null)
  const getData = async () => {
    try{
      const response = await fetch(`/data.json`)
      const data = await response.json()
      setData(data)
      console.log(data)
    } catch (error) {
      if(error instanceof Error){
        console.log(error.message)
      }
    }
  }
  useEffect(()=>{
    getData()
  },[])


  return (
    <div id="container" className="flex flex-col">
      <main>
        <Hero heroData={data?.hero}/>
        <Skills SkillData={data?.skills}/>
        <Projects ProjectData={data?.projects}/>
        <Career CareerData={data?.career_path} />
        <Education EducationData={data?.education} />
      </main>
      <Footer />
    </div >
  );
}
