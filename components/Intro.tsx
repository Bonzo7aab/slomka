"use client"

import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Intro = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        setIsMounted(true);
        
        if(pathName === '/admin') {
            setCookie("session_intro", "true");
            setShouldRender(false);
            return;
        }

        const introEnded = hasCookie('session_intro') || getCookie('session_intro');
        if(!introEnded) {
            setShouldRender(true);
        }
    }, [pathName]);

    useEffect(() => {
        if(isVideoEnded) {
            setCookie("session_intro", "true");
        }
    }, [isVideoEnded]);

    // Don't render on server or if intro has ended
    if(!isMounted || !shouldRender) return null;

    return (
        <div className={`absolute top-0 z-20 w-full h-full bg-black ${isVideoEnded ? 'animate-hideIntro' : ''}`} onClick={() => setIsVideoEnded(true)}>
            <video playsInline autoPlay muted className='w-full h-full' onEnded={() => setIsVideoEnded(true)}>
                <source src={"/intro.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Intro;