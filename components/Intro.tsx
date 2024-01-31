"use client"

import { useState } from "react"

const Intro = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    return (
        <div className={`absolute top-0 z-20 w-full h-full bg-black ${isVideoEnded && `animate-hideIntro`}`}>
            <video autoPlay muted className='w-full h-full' src="/intro.mp4" onEnded={() => setIsVideoEnded(true)} />
        </div>
    )
}

export default Intro;