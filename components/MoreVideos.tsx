"use client"

import { Dispatch, SetStateAction, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import { MotionDiv } from "@/components/Motion";
import { thumbnailParser, urlParser } from "@/utils/helpers";
import { AllMovies } from "@/lib/databaseTypes";
import { names } from "@/components/AdminVideos";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 ,
            duration: 1.5,
            ease: "easeInOut"
        }
    }
};
  
const listItem = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 }
};

const VideoItem = (
    { 
        videoId,
        currentlyPlaying,
        setCurrentlyPlaying
    } : {
        videoId: string,
        currentlyPlaying: string,
        setCurrentlyPlaying: Dispatch<SetStateAction<string>>
    }) => {
    return (
        <MotionDiv
            variants={listItem}
            className="relative border-2 cursor-pointer aspect-video border-cp0-300 group h-48 w-96"
            onClick={() => setCurrentlyPlaying(videoId)}
        >
            <Image className='object-cover duration-300 opacity-50 hover:opacity-30' fill src={thumbnailParser(videoId)} alt='thumbnail'/>
            {currentlyPlaying === videoId ? 
                <div className="absolute p-2 font-semibold duration-300 transform -translate-x-1/2 -translate-y-1/2 rounded-sm md:text-3xl top-1/2 left-1/2 bg-cp0-300">Odtwarzanie</div>
            : 
                <div className='absolute w-10 h-10 duration-300 transform -translate-x-1/2 -translate-y-1/2 md:w-16 md:h-16 top-1/2 left-1/2 group-hover:scale-110'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fcd100" version="1.1" id="Capa_1" viewBox="0 0 408.221 408.221">
                        <g>
                            <g>
                                <path d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11    C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012    c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            }
        </MotionDiv>
    )
}

const MoreVideos = ({ data }: { data: AllMovies[]}) => {
    const [currentlyPlaying, setCurrentlyPlaying] = useState(data[0].videos![0]);

    return (
        <section id="films" className="flex flex-col items-center bg-black">
            <div className="container my-28">
                <div className="mb-12 md:mb-24 aspect-video">
                    <ReactPlayer
                        controls
                        volume={0.2}
                        width="100%"
                        height="100%"
                        url={urlParser(currentlyPlaying)}
                    />
                </div>
                <MotionDiv
                    variants={container} initial="hidden" animate="show"
                    className="gap-4 flex flex-col items-center"
                >
                    {data.map((section, i) => 
                        <div key={i} className="max-w-7xl p-4 text-center">
                            <div className="font-bold text-cp0-500 text-2xl mb-4">{names[section.name]}</div>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {section.videos!.map((videoId) => 
                                    <VideoItem key={videoId} videoId={videoId} currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying} />
                                )}
                            </div>
                        </div>
                    )}
                </MotionDiv>
            </div>
        </section>
    )
}

export default MoreVideos;