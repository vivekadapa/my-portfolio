import React from 'react'

const LitUpButton = (props) => {
    return (
        <button className="p-[3px] relative" onClick={props.click}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                {props.title}
            </div>
        </button>
    )
}

export default LitUpButton