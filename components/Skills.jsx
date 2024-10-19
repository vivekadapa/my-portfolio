import React from 'react'
import Tech from './Tech'

const Skills = () => {

    const languages = [
        "C",
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "HTML",
        "CSS"
    ]

    const libraries = [
        "React",
        "Nextjs",
        "Redux Toolkit",
        "Tailwind",
        "Expressjs"
    ]
    const databases = [
        "Mongodb",
        "Postgresql",
        "MySql",
        "Redis"
    ]

    const tools = [
        "Git",
        "Aws",
        "Docker",
        "Linux",
        // "Postman",
        "Jira"
    ]

    return (
        <div className="mt-4 text-xl italic flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
                {
                    languages.map((s, index) => {
                        return <Tech title={s} key={index} />
                    })
                }
            </div>
            <div className="flex flex-wrap gap-4">
                {
                    libraries.map((s, index) => {
                        return <Tech title={s} key={index} />
                    })
                }
            </div>
            <div className="flex flex-wrap gap-4">
                {
                    databases.map((s, index) => {
                        return <Tech title={s} key={index} />
                    })
                }
            </div>
            <div className="flex flex-wrap gap-4">
                {
                    tools.map((s, index) => {
                        return <Tech title={s} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Skills
