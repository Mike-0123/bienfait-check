import React from "react"
import { bg } from "../../assets"

const ContentsDiv = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="bg-auto bg-center px-2 md:px-5 lg:px-10" style={{ backgroundImage: `url(${bg})` }}>
            {children}
        </div>
    )
}

export default ContentsDiv