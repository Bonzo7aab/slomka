import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import { thumbnailParser } from "@/utils/helpers"

export const VideoSmall = (
    { 
        video,
        playerVideo,
        setPlayerVideo
    } : {
        video: string,
        playerVideo: string,
        setPlayerVideo: Dispatch<SetStateAction<string>>
    }) => {
    return (
        <div 
            className="relative border-2 cursor-pointer aspect-video border-cp0-300"
            onClick={() => setPlayerVideo(video)}
        >
            <Image className='object-cover duration-300 opacity-50 hover:opacity-30' fill src={thumbnailParser(video)} alt='thumbnail'/>
            {playerVideo === video ? 
                <div className="absolute p-1 text-sm font-semibold text-black duration-300 transform -translate-x-1/2 -translate-y-1/2 rounded-sm md:text-lg top-1/2 left-1/2 bg-cp0-300 animate-pulse">Odtwarzanie</div>
            : 
                <div className='absolute duration-300 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fcd100" version="1.1" id="Capa_1" viewBox="0 0 408.221 408.221">
                        <g>
                            <g>
                                <path d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11    C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012    c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            }
        </div>
    )
}