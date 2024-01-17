"use client"

import { MotionImg, MotionSpan } from "@/components/Motion"
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"

const BlinkText = ({ delay, text }: { delay?: number, text: string }) =>
    <MotionSpan
        animate={{ opacity: [1, 0.7, 1], color: ["#FFDD33", "#B89900", "#FFDD33"]}}
        transition={{ 
            duration: 3,
            delay: delay,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity
        }}
        className="font-bold text-cp0-400"
        >
        {text}
    </MotionSpan>

const MosaicItem = ({ count, id, delay = 0.1, x = 0, y = 0 }: { count: number, id: number, delay?: number, x?: number, y?: number }) => 
    <AnimatePresence mode="wait">
        <MotionImg
            key={`/mosaic${count === 0 ? id : count === 1 ? id + 6 : id + 12}.jpg`}
            src={`/mosaic${count === 0 ? id : count === 1 ? id + 6 : id + 12}.jpg`}
            initial={{ opacity: 0, x: x, y: y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: x, y: y }}
            transition={{ delay: delay, duration: 1, ease: "easeInOut" }}
            className="block object-cover object-center w-full h-full"
        />
    </AnimatePresence>

export default function Attributes(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count === 0 ? 1 : count === 1 ? 2 : 0)
        }, 5000);
        return () => clearInterval(timer)
    })

    return (
        <section className="max-w-6xl px-8 mx-auto md:py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-3xl font-bold tracking-wide text-white lg:text-4xl">
                                Profesjonalne filmy od profesjonalisty
                            </h2>
                        </div>

                        <ul role="list" className="space-y-2 sm:space-y-4">
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 text-cp0-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>

                                <span className="text-sm text-gray-400 sm:text-base">
                                        <BlinkText text="Bez zmartwień" delay={3} />
                                    <span> - całkowita obsługa po mojej stronie</span>
                                </span>
                            </li>

                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 text-cp0-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>

                                <span className="text-sm text-gray-400 sm:text-base">
                                    <span>Wideo i zdjęcia w </span> 
                                    <BlinkText text="najwyższej jakości" delay={2} />
                                </span>
                            </li>

                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 text-cp0-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>

                                <span className="text-sm text-gray-400 sm:text-base">
                                    <span>Zawsze </span> 
                                    <BlinkText text="w terminie" delay={4} />
                                </span>
                            </li>

                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 text-cp0-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>

                                <span className="text-sm text-gray-400 sm:text-base">
                                    <BlinkText text="Indiwidualne" delay={3} />
                                    <span> podejście do klienta</span> 
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative flex lg:col-span-7">
                    <div className="flex flex-wrap h-60 sm:h-64 lg:h-[432px]">
                        <div className="flex flex-wrap w-40 h-60 sm:w-56 sm:h-64 lg:w-1/2">
                            <div className="w-20 h-20 p-1 sm:w-28 sm:h-28 lg:w-36 lg:h-36 md:p-2">
                                <MosaicItem id={1} count={count} delay={0.2} x={-10} y={-10}/>
                            </div>
                            <div className="w-20 h-20 p-1 sm:w-28 sm:h-28 lg:w-36 lg:h-36 md:p-2">
                                <MosaicItem id={2} count={count} delay={0.5} y={-20}/>
                            </div>
                            <div className="w-40 h-40 p-1 sm:w-56 sm:h-w-56 lg:w-72 lg:h-72 md:p-2">
                                <MosaicItem id={3} count={count} delay={0.1} x={-10} y={10}/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-40 h-60 sm:w-56 sm:h-64 lg:w-1/2">
                            <div className="w-40 h-40 p-1 sm:w-56 sm:h-w-56 lg:w-72 lg:h-72 md:p-2">
                                <MosaicItem id={4} count={count} delay={0.4} x={10} y={-10}/>
                            </div>
                            <div className="w-20 h-20 p-1 sm:w-28 sm:h-28 lg:w-36 lg:h-36 md:p-2">
                                <MosaicItem id={5} count={count} delay={0.7} y={20}/>
                            </div>
                            <div className="w-20 h-20 p-1 sm:w-28 sm:h-28 lg:w-36 lg:h-36 md:p-2">
                                <MosaicItem id={6} count={count} delay={0.2} x={10} y={10}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}