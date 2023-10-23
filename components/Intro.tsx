import { useState } from "react"

export const Intro = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    return (
        <div className={`absolute top-0 z-10 w-full h-full bg-black ${isVideoEnded && `animate-hide-intro`}`}>
            <video controls autoPlay className='w-full h-full' onEnded={() => setIsVideoEnded(true)}>
                <source src="/intro.mp4" />
            </video>
        </div>
    )
}
