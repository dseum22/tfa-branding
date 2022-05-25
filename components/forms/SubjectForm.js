import { useState } from 'react'

const subjects = [
    {
        name: 'Computer Science A',
        type: 'Computer Science',
        levels: ['Elementary School', 'Middle School', 'High School', 'AP'],
        available: true,
    },
    {
        name: 'Biology',
        type: 'Natural Science',
        levels: ['Elementary School', 'Middle School', 'High School', 'AP'],
        available: true,
    },
    {
        name: 'Chemistry',
        type: 'Natural Science',
        levels: ['Elementary School', 'Middle School', 'High School', 'AP'],
        available: true,
    },
    {
        name: 'Physics 1/2 (Algebra-Based)',
        type: 'Natural Science',
        levels: ['Elementary School', 'Middle School', 'High School', 'AP'],
    },
    {
        name: 'Physics C (Calculus-Based)',
        type: 'Natural Science',
        levels: ['Elementary School', 'Middle School', 'High School', 'AP'],
    },
    {
        name: 'Algebra 1 and Below',
        type: 'Math',
        levels: ['Elementary School', 'Middle School', 'High School'],
        available: true,
    },
    {
        name: 'Geometry',
        type: 'Math',
        levels: ['Middle School', 'High School'],
    },
    {
        name: 'Algebra 2 and Trigonometry',
        type: 'Math',
        levels: ['Middle School', 'High School'],
        available: true,
    },
    {
        name: 'Calculus AB/BC',
        type: 'Math',
        levels: ['Middle School', 'High School', 'AP'],
    },
    {
        name: 'Elementary and Middle School English',
        type: 'English',
        levels: ['Elementary School', 'Middle School'],
        available: true,
    },
    {
        name: 'Microeconomics',
        type: 'Social Science',
        levels: ['Middle School', 'High School', 'AP'],
    },
    {
        name: 'Macroeconomics',
        type: 'Social Science',
        levels: ['Middle School', 'High School', 'AP'],
    },
    {
        name: 'SAT/ACT English',
        type: 'College Preparation',
        levels: ['High School'],
    },
    {
        name: 'College Application Essay Writing',
        type: 'College Preparation',
        levels: ['High School'],
        available: true,
    },
    {
        name: 'SAT Math',
        type: 'College Preparation',
        levels: ['High School'],
        available: true,
    },
]

const SubjectForm = () => {
    const [values, setValues] = useState({
        query: '',
    })
    const _template = {
        subjects: subjects
            .filter(subject => {
                const query = values.query.toLowerCase()
                return (
                    subject.name.toLowerCase().indexOf(query) > -1 ||
                    subject.levels.filter(
                        level => level.toLowerCase().indexOf(query) > -1
                    ).length > 0 ||
                    subject.type.toLowerCase().indexOf(query) > -1
                )
            })
            .map(subject => (
                <div
                    key={subject.name}
                    className="text-xl md:text-2xl lg:text-3xl min-w-[40rem] py-2 grid grid-cols-6"
                >
                    <div className="flex items-center gap-4 col-span-3">
                        {subject.available ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        )}
                        <div>{subject.name}</div>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <div className="text-base px-3 h-min">
                            {subject.type}
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-wrap items-center gap-2">
                        {subject.levels.map(level => (
                            <div
                                key={subject.name + level}
                                className="rounded-full text-base bg-primary-100 px-3 whitespace-nowrap"
                            >
                                {level}
                            </div>
                        ))}
                    </div>
                </div>
            )),
    }
    return (
        <form className="space-y-4 sm:space-y-6 md:space-y-10">
            <input
                className="w-full bg-primary-300 py-2 px-4 text-xl md:text-2xl lg:text-3xl"
                type="text"
                placeholder="Search"
                value={values.query}
                onChange={event =>
                    setValues({
                        ...values,
                        query: event.target.value,
                    })
                }
            ></input>
            <div className="h-80 overflow-auto border-2 border-amber-400 bg-primary-300 rounded-md py-2 px-4 space-y-2 divide-y-2 divide-amber-400">
                {_template.subjects}
            </div>
        </form>
    )
}

export default SubjectForm
