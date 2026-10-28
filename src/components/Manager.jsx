import React from "react";

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <div className="mycontainer">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-blue-700">&lt;</span>
                    Pass
                    <span className="text-blue-700">Byte/&gt;</span>
                </h1>
                <p className="text-blue-900 text-lg text-center">Your own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input className="rounded-full border border-purple-500 w-full p-4 py-1" type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input className="rounded-full border border-purple-500 w-full p-4 py-1" type="text" name="" id="" />
                        <input className="rounded-full border border-purple-500 w-full p-4 py-1" type="text" name="" id="" />

                    </div>
                    <button className="flex justify-center items-center bg-purple-400 hover:bg-purple-500 rounded-full px-4 py-2 w-fit">
                    <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                        Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager