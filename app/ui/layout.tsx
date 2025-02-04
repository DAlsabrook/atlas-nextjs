import React from "react"
import Image from "next/image"
import Link from "next/link"
import SideNav from "@/components/Sidenav"

type uiProps = {
    children: React.ReactNode
}

export default function UILayout ({children}: uiProps) {
    return (
        <div className='flex flex-col md:flex-row h-screen w-screen'>
            <div className="md:w-82">
                <SideNav/>
            </div>
            {children}
        </div>
    )
}
