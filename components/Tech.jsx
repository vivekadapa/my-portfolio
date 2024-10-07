import React from 'react'

const Tech = ({ title }) => {
    return (
        <span className="dark:border-[1px] bg-gray-50 dark:bg-transparent rounded-md px-2 dark:border-zinc-700">
            {title}
        </span>
    )
}

export default Tech