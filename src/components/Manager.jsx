import React from "react";
import { useRef } from "react";

const Manager = () => {
    const ref = useRef()
    const showPassword = ()=>{
        alert("Show password")
        if(ref.current.src.includes("icons/eyecross.png")){

            ref.current.src = "icons/eye.png"
        }else{
            ref.current.src = "icons/eyecross.png"
        }
    }
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <div className="mycontainer">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-blue-700">&lt;</span>
                    Pass
                    <span className="text-blue-700">Byte/&gt;</span>
                </h1>
                <p className="text-blue-900 text-lg text-center">Your own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder="Enter webstie URL" className="rounded-full border border-purple-500 w-full p-4 py-1" type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder="Enter Username" className="rounded-full border border-purple-500 w-full p-4 py-1" type="text" name="" id="" />
                        <div className="relative">

                        <input placeholder="Enter Password" className="rounded-full border border-purple-500 w-full p-4 py-1" type="text" name="" id="" />
                        <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                            <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
                        </span>
                        </div>

                    </div>
                    <button className="flex justify-center items-center bg-purple-400 hover:bg-purple-500 rounded-full px-8 py-2 w-fit gap-2 border border-purple-700">
                    <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                        Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager