"use client"

import Link from "next/link"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Image from "next/image"
import TextGradient from "./helper"
import { Contact } from "./kontakt/page"
import { About } from "./omnie/page"
import { Projects } from "./projekty/page"
import { Testimonials } from "./referencje/page"
import { MyFeatures } from "./cechy/page"

const Hero8 = () => {
    return (
        <section className="flex items-center h-screen">
            {/* <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <Image src='/wedding.jpg' alt="wedding" fill />
            </div> */}
            <div className="flex flex-col w-full ">
                <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">
                        <TextGradient text={"Filmy"} from="from-teal-500" via="via-indigo-500" to="to-sky-500"/>
                    </span>
                    <span className="text-cp5-normal">|</span>
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-cyan-500 via-orange-500 to-sky-500">
                        <TextGradient text={"Zdjęcia"} from="from-cyan-500" via="via-orange-500" to="to-sky-500"/>
                    </span>
                    <span className="text-cp5-normal">|</span>
                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">
                        <TextGradient text={"Montaż"} from="from-blue-500" via="via-pink-500" to="to-red-500"/>
                    </span>
                </h1>

                <p className="mx-auto my-10 text-lg text-center text-cp1 md:text-xl">
                    Profesjonalne usługi na bazie dużego doświadczenia.
                </p>


                <button className="px-6 py-3 mx-auto text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md bg-cp5-normal w-fit hover:bg-cp5-dark focus:bg-cp5-dark">
                    Kontakt
                </button>
            </div>
        </section>
    )
}

const MozaikGallery = () => {
    return (
        <div className="flex max-w-6xl px-4 mx-auto my-24 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid gap-8 sm:grid-cols-12">
                <div className="col-span-12 sm:self-end sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                    <a className="relative block overflow-hidden duration-200 group rounded-xl hover:drop-shadow-md" href="#">
                        <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                        <img className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl" src="/mosaik6.jpg" alt="Image Description" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                        <div className="p-4 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Usługi dronem
                        </div>
                        </div>
                    </a>
                </div>

                <div className="col-span-12 sm:self-end sm:col-span-5 md:col-span-4 lg:col-span-3">
                    <a className="relative block overflow-hidden duration-200 group rounded-xl hover:drop-shadow-md" href="#">
                        <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                        <img className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl" src="/mosaik4.jpg" alt="Image Description" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                        <div className="p-4 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Edycja wideo
                        </div>
                        </div>
                    </a>
                </div>

                <div className="col-span-12 md:col-span-4">
                    <a className="relative block overflow-hidden duration-200 group rounded-xl hover:drop-shadow-md" href="#">
                        <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                        <img className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl" src="/mosaik3.jpg" alt="Image Description" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                        <div className="p-4 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Eventy
                        </div>
                        </div>
                    </a>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <a className="relative block overflow-hidden duration-200 group rounded-xl hover:drop-shadow-md" href="#">
                        <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                        <img className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl" src="/mosaik1.jpg" alt="Image Description" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                        <div className="p-4 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Wesela
                        </div>
                        </div>
                    </a>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    <a className="relative block overflow-hidden duration-200 group rounded-xl hover:drop-shadow-md" href="#">
                        <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                        <img className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl" src="/mosaik5.jpg" alt="Image Description" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                        <div className="p-4 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-xl dark:bg-gray-800 dark:text-gray-200">
                            Filmy produktowe
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
  return (
    // <ParallaxProvider>
      <div className="bg-cp4">
        <MozaikGallery />
        <About />
        <MyFeatures />
        {/* <Parallax translateX={[-20, 0]}> */}
        {/* </Parallax> */}
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    // </ParallaxProvider>
  )
}


// napewno chciałbym  rozdzielić swoje uslugi jako:

// wesela:nagrywanie filmów wraz z nagrywaniem dronem oraz montaż 

// usługi dla klientów video komercyjne typu:
// -eventy
// -filmy produktowe
// -usługowe

// oraz
// uslugi dronem