import { useState } from 'react'

const resources = [
    {
        name: 'Elementary Math',
        href: 'https://docs.google.com/document/d/1qp_9K3XE4WjlNGHLpH18-P1x8bSxOmmlz2XytwKnue8/',
    },
    {
        name: 'Algebra 1',
        href: 'https://drive.google.com/drive/u/2/folders/1hQK-w0GnPqwTw5FNKVaPyNxQ_DvcwkRn/',
    },
    {
        name: 'Algebra 2',
        href: 'https://drive.google.com/drive/u/2/folders/1fiKA6rGu0bAfWwcHW6gwhVTtHDSOKCQj/',
    },
    {
        name: 'Geometry',
        href: 'https://docs.google.com/document/d/1VKXAq8l9l9ZavjxNoVopbY0JnhfQe0IU2TUXq-wXkTY/',
    },
    {
        name: 'Biology',
        href: 'https://docs.google.com/document/d/1ty_4jjMGsBOkWurZPIGrIpugOVXUGd6Cyfdggqz55_4/',
    },
    {
        name: 'AP Chemistry',
        href: 'https://drive.google.com/drive/u/2/folders/13ojXiRSUxns1f-0Pj0ZfhGDSwAMGx1oG/',
    },
    {
        name: 'AP Physics',
        href: 'https://drive.google.com/drive/u/2/folders/1U0Jp6wo8jFlKrnIgymVOYNpPA79oX8ZQ/',
    },
    {
        name: 'AP Computer Science',
        href: 'https://drive.google.com/drive/u/2/folders/1yme9OSj3WCvhS1epDg3tKf-l8rhVIa1V/',
    },
    {
        name: 'AP Calculus AB/BC',
        href: 'https://docs.google.com/document/d/1UBoSghmlaMvyX_g5PjJZl-_f34H2aS_83ScJi-ti_qQ/',
    },
    {
        name: 'ACT/SAT English/Writing',
        href: 'https://drive.google.com/drive/u/2/folders/1XhclKZjK497LnLkXDjNsPBXX5tHLn_pL/',
    },
    {
        name: 'ACT/SAT Math',
        href: 'https://drive.google.com/drive/u/2/folders/1RpJUmAnHoLnDgej2CEqHWFh3GZq2DQdH/',
    },
]

const ResourceForm = () => {
    const [values, setValues] = useState({
        query: '',
    })
    const _template = {
        resources: resources
            .filter(
                resource =>
                    resource.name
                        .toLowerCase()
                        .indexOf(values.query.toLowerCase()) > -1
            )
            .map(resource => (
                <a
                    className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2"
                    key={resource.name}
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                    <div className="text-xl md:text-2xl lg:text-3xl">
                        {resource.name}
                    </div>
                </a>
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
            <div className="h-80 overflow-auto border-2 border-amber-400 bg-primary-300 rounded-md py-2 px-4 space-y-2">
                {_template.resources}
            </div>
        </form>
    )
}

export default ResourceForm
