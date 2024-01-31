"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import Link from "next/link";
import { drone, videos, weddings } from "@/app/_data";
import SectionTitle from "./SectionTitle";

const VideoItem = (
    { 
        data: { id, url, thumbnail },
        currentlyPlaying,
        setCurrentlyPlaying
    } : {
        data: { id: number, url: string, thumbnail: string },
        currentlyPlaying: number,
        setCurrentlyPlaying: Dispatch<SetStateAction<number>>
    }) => {
    return (
        <div 
            className="relative border-2 cursor-pointer aspect-video border-cp0-300"
            onClick={() => setCurrentlyPlaying(id)}
        >
            <Image className='object-cover duration-300 opacity-50 hover:opacity-30' fill src={thumbnail} alt='thumbnail'/>
            {currentlyPlaying === id ? 
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

const VideoDivider = () => 
    <div className="w-full mx-auto my-8 md:my-16 md:w-2/3">
        <hr className="border-t border-cp0-500 opacity-20" />
        <hr className="my-4 border-t-2 opacity-30 border-cp0-500 animate-pulse" />
        <hr className="border-t border-cp0-500 opacity-20" />
    </div>

const Offer = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const [playDrone, setPlayDrone] = useState(false);
    const [playEditing, setPlayEditing] = useState(false);
    const [currentlyPlayingVideo, setCurrentlyPlayingVideo] = useState(0);
    const [currentlyPlayingDrone, setCurrentlyPlayingDrone] = useState(100);
    const [currentlyPlayingWedding, setCurrentlyPlayingWedding] = useState(200);
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);

    if(!hasWindow) return;
    
    return (
        <section id="offer" className="flex flex-col gap-4">
            <SectionTitle title="OFERTA" />

            <div id="video" className="flex flex-col gap-4 p-4 mx-auto lg:container border-x-4 border-cp0-600 lg:flex-row">
                <div
                    className="lg:w-1/2 aspect-video" 
                    onMouseEnter={() => setPlayVideo(true)} 
                    onMouseLeave={() => setPlayVideo(false)}
                >
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        playing={playVideo}
                        url={videos[currentlyPlayingVideo].url}
                    />
                </div>
                <div className='grid lg:grid-rows-2 lg:w-1/2'>
                    <div className="text-white">
                        <div className='flex justify-between mb-4 font-extrabold'>
                            <div className="flex items-center text-2xl title-font text-cp0-500">Video</div>
                            <Link href={'/filmy'} className='p-2 text-black duration-150 bg-cp0-500 hover:bg-cp0-600'>Więcej filmów</Link>
                        </div>
                        <span className="text-base leading-relaxed">Podczas realizowania treści video skupiam sie zarówno na detalach jak i ogólnym kształcie tego co mam ograć. Zawsze staram się omawiać z klientem jego wizję co do finałowego wyglądu danego projektu.
Jeżeli klient zostawia pełną kontrolę nagrań do mojej dyspozycji to kieruje się dewizą „zrób to tak jakbyś miał zrobić to najlepiej dla siebie”.</span>
                    </div>
                    <div className="grid items-end grid-cols-3 gap-2 mt-8 text-white">
                        {videos.slice(0, 3).map((video, i) => <VideoItem key={i} data={video} currentlyPlaying={currentlyPlayingVideo} setCurrentlyPlaying={setCurrentlyPlayingVideo} />)}
                    </div>
                </div>
            </div>

            <VideoDivider />

            <div id="drone" className="flex flex-col-reverse gap-4 p-4 mx-auto lg:container border-x-4 border-cp0-600 lg:flex-row">
                <div className='grid lg:grid-rows-2 lg:w-1/2'>
                    <div className="text-white">
                        <div className='flex justify-between mb-4 font-extrabold'>
                            <div className="flex items-center text-2xl title-font text-cp0-500">Dron</div>
                            <Link href={'/filmy'} className='p-2 text-black duration-150 bg-cp0-500 hover:bg-cp0-600'>Więcej filmów</Link>
                        </div>
                        <span className="text-base leading-relaxed">Dron to najmłodszy z moich usługowych doświadczeń ale już kilkukrotnie sprawdził się pozytywnie wśród klientów.
Latam obecnie dronem Mavic Mini, który pomimo swoich gabarytów spełnia swoją rolę.
Latając dronem wyobraźam sobie możliwie końcowy efekt jaki użyje w postprodukcji z danego ujęcia w powietrzu.
Analizuje zawsze miejsce w którym mam latać by maksymalnie wykorzystać ogrywany teren dla uzyskania najlepszych efektów.</span>
                    </div>
                    <div className="grid items-end grid-cols-3 gap-2 mt-8 text-white">
                        {drone.slice(0, 3).map((video, i) => <VideoItem key={i} data={video} currentlyPlaying={currentlyPlayingDrone} setCurrentlyPlaying={setCurrentlyPlayingDrone} />)}
                    </div>
                </div>
                <div
                    className="lg:w-1/2 aspect-video" 
                    onMouseEnter={() => setPlayDrone(true)} 
                    onMouseLeave={() => setPlayDrone(false)}
                >
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        playing={playDrone}
                        url={drone[drone.findIndex(vid => vid.id === currentlyPlayingDrone)].url}
                    />
                </div>
            </div>

            <VideoDivider />
            
            <div id="editing" className="flex flex-col gap-4 p-4 mx-auto lg:container border-x-4 border-cp0-600 lg:flex-row">
                <div
                    className="lg:w-1/2 aspect-video" 
                    onMouseEnter={() => setPlayEditing(true)} 
                    onMouseLeave={() => setPlayEditing(false)}
                >
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        playing={playEditing}
                        url={weddings[weddings.findIndex(vid => vid.id === currentlyPlayingWedding)].url}
                    />
                </div>
                <div className='grid lg:grid-rows-2 lg:w-1/2'>
                    <div className="text-white">
                        <div className='flex justify-between mb-4 font-extrabold'>
                            <div className="flex items-center text-2xl title-font text-cp0-500">Montaż</div>
                            <Link href={'/filmy'} className='p-2 text-black duration-150 bg-cp0-500 hover:bg-cp0-600'>Więcej filmów</Link>
                        </div>
                        <span className="text-base leading-relaxed">Jako absolwent Akademii Filmu i Telewizji z dyplomem zawodowym montażysty podejście do montażu, można w moim wypadku nazwać wręcz „przesadnym” w dobrym tego słowa znaczeniu.
Dbałość o każdy szczegół jest wręcz detaliczny.
Moim atutem w przypadku montażu jest słuch muzyczny jak i wyczucie rytmiki które bardzo często przydaje się podczas postprodukcji.
W montażu istotne jest zbudowanie odpowiedniego klimatu dla projektu a co za tym 
idzie, wprowadzenie odpowiednich emocji dla oglądającego co uważam za montażowy priorytet.</span>
                    </div>
                    <div className="grid items-end grid-cols-3 gap-2 mt-8 text-white">
                        {weddings.slice(0, 3).map((video, i) => <VideoItem key={i} data={video} currentlyPlaying={currentlyPlayingWedding} setCurrentlyPlaying={setCurrentlyPlayingWedding} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer;