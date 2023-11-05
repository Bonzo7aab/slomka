"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./helper"
import Contact from "./kontakt/page"
import About from "./omnie/page"
import Projects from "./projekty/page"
// import Testimonials from "./referencje/page"
import Attributes from "./cechy/page"

const Hero = () => {
    return (
        <section id="home" className="w-full mt-24">
            <img className="w-full" src="/tlo.png" alt="tlo" />
        </section>
    )
}

const MozaikItem = ({text, description, src}: {text: string, description: string, src: string}) => {
    return (
        <div className="relative block h-48 overflow-hidden duration-200 border-2 border-black md:h-auto group rounded-xl hover:drop-shadow-md hover:border-cp0-500">
            <img className="object-cover w-full transition-transform group-hover:scale-105 rounded-xl" src={src} alt="Image Description" />

            <div className="absolute top-0 right-0 p-2 duration-300 sm:p-4 group-hover:opacity-0">
                <div className="p-4 text-sm font-bold bg-black rounded-lg text-cp0-500 md:text-xl">
                    {text}
                </div>
            </div>

            <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col items-center justify-center px-4 duration-300 bg-gray-800 opacity-0 group-hover:opacity-90 group-click:opacity-90">
                <span className="mb-2 text-2xl font-bold text-cp0-300">{text}</span>
                <span className="text-center text-white">{description}</span>
            </div>

        </div>
    )
}
const MozaikGallery = () => {
    return (
        <section id="offer" className="flex flex-col max-w-6xl mx-auto">

            <SectionTitle title={"MOJA OFERTA"} />

            <div className="grid gap-8 px-4 sm:grid-cols-12 sm:px-6 lg:px-8 lg:py-14">
                <motion.div 
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="col-span-12 sm:self-end sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3"
                >
                    <MozaikItem text="Usługi dronem" description="Filmowanie z powietrza w wysokiej jakości plus montaż. Zarówno w dzień jak i w nocy." src="/mosaik6.jpg"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="col-span-12 sm:self-end sm:col-span-5 md:col-span-4 lg:col-span-3"
                >
                    <MozaikItem text="Edycja wideo" description="Edycja podesłanych materiałów oraz obróbka na potrzeby klienta." src="/mosaik4.jpg"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="col-span-12 md:col-span-4"
                >
                    <MozaikItem text="Eventy" description="Całościowa i kompletna obsługa różnych eventów zawierająca zaróno filmowanie, fotografia jak i filmowanie z drona. " src="/mosaik3.jpg"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }}
                    className="col-span-12 sm:col-span-6 md:col-span-4"
                >
                    <MozaikItem text="Wesela" description="Filmowanie oraz fotografia przyjęć weselnych, plus na życzenie filmowanie z drona." src="/mosaik1.jpg"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="col-span-12 sm:col-span-6 md:col-span-4"
                >
                    <MozaikItem text="Filmy produktowe" description="Montaż filmów produktowych od A do Z." src="/mosaik5.jpg"/>
                </motion.div>
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <div className="flex flex-col gap-16 bg-black lg:gap-32">
            <Hero />
            <MozaikGallery />
            <About />
            <Attributes />
            <Projects />
            {/* <Testimonials /> */}
            <Contact />
        </div>
    )
}
