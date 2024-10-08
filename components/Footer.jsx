import React from 'react'

const Footer = () => {
    return (
        <div className="pb-12">
            <ul className="flex flex-wrap w-full justify-center gap-8 font-semibold">
                <li><a href="https://github.com/vivekadapa" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/vivek-chaitanya-622049247/" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <li><a href="https://leetcode.com/u/Vivek_Chaitanya/" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Leetcode</a></li>
                <li><a href="https://x.com/viv1chaitanya" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.freecodecamp.org/VivekChaitanya" className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
            </ul>
        </div>
    )
}

export default Footer