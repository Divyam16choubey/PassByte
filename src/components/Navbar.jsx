import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-purple-200  ">
            <div className="mycontainer flex justify-around items-center px-4 py-5 h-14">
                <div className="logo font-bold text-2xl">
                    <span className="text-purple-700">&lt;</span>
                    Pass
                    <span className="text-purple-700">Byte/&gt;</span>
                </div>
                <a href="https://github.com/Divyam16choubey/PassByte" target="_blank" rel="noopener noreferrer" className="text-white bg-purple-700 my-5 rounded-full flex justify-between items-center ring-white ring-1">
                    <img className="invert w-10 p-1" src="/icons/github.svg" alt="github logo" />
                    <span className="font-bold px-2">GitHub</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar