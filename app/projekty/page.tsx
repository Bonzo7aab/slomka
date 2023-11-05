"use client"

import { motion, stagger } from "framer-motion"
import { SectionTitle } from "../helper";
import { useState } from "react";

const images = ['/mosaik1.jpg', '/mosaik2.jpg', '/mosaik3.jpg', '/mosaik4.jpg', '/mosaik5.jpg', '/mosaik6.jpg'];
const movies = ['https://www.youtube.com/embed/pq4CbeRKvT4?si=e5TCDmr2U4W02zG6', 'https://www.youtube.com/embed/TCCkRcdhP04?si=S2n9cAixX-zACs3K'];

const listVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
};
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -16
    },
    visible: {
      opacity: 1,
      x: 0
    }
};

export default function Projects(){
    const [filter, setFilter] = useState('movies');
    const [bigPhoto, setBigPhoto] = useState<string | null>(null);

    return (
        <section id="projects" className="flex flex-col justify-center">
            <SectionTitle title={"PROJEKTY"} />

            <div className="container px-6 mx-auto md:py-10">
                <div className="w-full text-center text-white">
                    <span onClick={() => setFilter('movies')} className="inline-block w-40 px-8 py-4 font-semibold duration-300 border-2 border-r-0 cursor-pointer border-cp0-400 hover:bg-cp0-400 hover:text-black">Filmy</span>
                    <span onClick={() => setFilter('photos')} className="inline-block w-40 px-8 py-4 font-semibold duration-300 border-2 cursor-pointer border-cp0-400 hover:bg-cp0-400 hover:text-black">Fotografia</span>
                </div>

                {filter === 'movies' && 
                    <motion.div 
                        variants={listVariants}
                        initial="hidden"
                        animate={filter === 'movies' ? 'visible' : 'hidden'}
                        className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2"
                    >
                        {movies.map((movie, i) =>
                            <motion.div
                                variants={itemVariants}
                                key={i}
                                className="flex items-center justify-center w-full h-96"
                            >
                                <iframe className="w-full h-full" src={movie} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </motion.div>
                        )}
                    </motion.div>
                }
                
                {filter === 'photos' && 
                    <motion.div 
                        variants={listVariants}
                        initial="hidden"
                        animate={filter === 'photos' ? 'visible' : 'hidden'}
                        className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-3 xl-gap-12"
                    >
                        {images.map((photo, i) => 
                            <motion.img 
                                key={i} 
                                variants={itemVariants}
                                onClick={() => setBigPhoto(photo)}
                                className="object-cover w-full transition-transform border-2 border-black h-96 cursor-zoom-in hover:border-2 hover:border-cp0-600" src={photo} alt="image" 
                            />
                        )}

                        {bigPhoto && 
                            <div
                                className="fixed w-11/12 transform -translate-x-1/2 -translate-y-1/2 border-2 sm:w-auto top-1/2 left-1/2 drop-shadow-md border-cp0-600"
                                onClick={() => setBigPhoto(null)}
                            >
                                <svg className="absolute p-1 cursor-pointer top-4 right-4 bg-cp0-500 rounded-xl" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                </svg>
                                <img src={bigPhoto} alt="Duze zdjecie" />
                            </div>
                        }

                    </motion.div>
                }
            </div>
        </section>
    )
}