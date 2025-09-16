export type HeroData = {
    name: string;
    title: string;
    subtitle: string;
}

export type SkillData = {
    dev_skills: string[];
    previous_experience_skills: string[];
    languages: {language: string; level: string}[];
}

export type ProjectData = {
    title: string;
    link: string;
    deprecated: boolean;
}[];

export type CareerData = {
    role: string;
    company: string;
    location: string;
    description: string;
    timeframe: string;
    recent: boolean;
}[];

export type EducationData = {
    title: string;
    school: string;
    location: string;
    timeframe: string;
}[];

export type HobbieData = string[];

export type ContactData = {
    method: string;
    value: string;
    link: string;
    icon: string;
}[];

export type ResumeData = {
    hero: HeroData;
    skills: SkillData;
    career_path: CareerData;
    education: EducationData;
    projects: ProjectData;
    hobbies: HobbieData;
    contact: ContactData;
}