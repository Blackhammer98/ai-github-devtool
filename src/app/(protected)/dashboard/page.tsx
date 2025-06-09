"use client"

import { useUser } from "@clerk/nextjs"


const  DashboardPage = () => {
    const {user} = useUser()
    return (
        <>
        <div className="text-3xl text-red-600">
            {user?.firstName}
        </div>
        <div className="text-3xl text-red-600">
            {user?.lastName}
        </div>
        </>
        
    )
}

export default DashboardPage