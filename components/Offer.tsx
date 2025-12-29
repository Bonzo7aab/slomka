"use client"

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { VideoDivider } from "./ui/video-divider";
import { VideoSmall } from "./ui/video-small";
import { Skeleton } from "./ui/skeleton";
import { AllMovies } from "@/lib/databaseTypes";
import { urlParser } from "@/utils/helpers";
import { names } from "./AdminVideos";

const VideoItem = (
    {
        section
    }: { 
        section: AllMovies
    }) => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [playerVideo, setPlayerVideo] = useState<string>(section.videos![0]);

    
    return (
        <>
            <div id={section.name} className="flex flex-col gap-4 p-4 mx-auto lg:container border-x-4 border-cp0-600 lg:flex-row">
                <div
                    className="lg:w-1/2 aspect-video" 
                    onMouseEnter={() => setPlaying(true)}
                    onMouseLeave={() => setPlaying(false)}
                >
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        playing={playing}
                        url={urlParser(playerVideo)}
                    />
                </div>
                <div className='grid lg:grid-rows-2 lg:w-1/2'>
                    <div className="text-white">
                        <div className='flex justify-between mb-4 font-extrabold'>
                            <div className="flex items-center text-2xl title-font text-cp0-500">{names[section.name]}</div>
                            <Link href={'/filmy'} className='p-2 text-black duration-150 bg-cp0-500 hover:bg-cp0-600'>Więcej filmów</Link>
                        </div>
                        <span className="text-base leading-relaxed">{section.description}</span>
                    </div>
                    <div className="grid items-end grid-cols-3 gap-2 mt-8 text-white">
                        {section.videos!.slice(0, 3).map((video, i) => 
                            <VideoSmall key={i} video={video} playerVideo={playerVideo} setPlayerVideo={setPlayerVideo} />
                        )}
                    </div>
                </div>
            </div>
            <VideoDivider />
        </>
    )
}

const Offer = ({ data }: { data: AllMovies[] | null}) => {
    const [hasWindow, setHasWindow] = useState(false);
    
    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);

    if(!data) return <Skeleton />

    if(!hasWindow) return;
    
    return (
        <section id="offer" className="flex flex-col gap-4">
            <SectionTitle title="OFERTA" />
            {data.reverse().map(section =>
                section.videos 
                    ? 
                        <VideoItem 
                            key={section.id} 
                            section={section} 
                        />
                    : null
            )}
        </section>
    )
}

export default Offer;