"use client"

import { motion } from "framer-motion"

export default function Attributes(){
    return (
        <section className="max-w-6xl px-8 mx-auto md:py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-3xl font-bold text-white lg:text-4xl">
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
                                    <motion.span 
                                        animate={{ opacity: [1, 0.7, 1], color: ["#FFDD33", "#B89900", "#FFDD33"]}}
                                        transition={{ 
                                            duration: 2,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: Infinity
                                         }}
                                        className="font-bold text-cp0-400"
                                    >
                                        Bez zmartwień
                                    </motion.span>
                                    <span> – całkowita obsługa po mojej stronie</span>
                                </span>
                            </li>

                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 text-cp0-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>

                                <span className="text-sm text-gray-400 sm:text-base">
                                    <span>Wideo i zdjęcia w </span> 
                                    <motion.span 
                                        animate={{ opacity: [1, 0.7, 1], color: ["#FFDD33", "#B89900", "#FFDD33"]}}
                                        transition={{ 
                                            duration: 2,
                                            delay: 0.6,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: Infinity
                                        }}
                                        className="font-bold text-cp0-400"
                                    >
                                        najwyższej jakości
                                    </motion.span>
                                </span>
                            </li>

                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 text-cp0-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>

                                <span className="text-sm text-gray-400 sm:text-base">
                                    <span>Zawsze </span> 
                                    <motion.span 
                                        animate={{ opacity: [1, 0.7, 1], color: ["#FFDD33", "#B89900", "#FFDD33"]}}
                                        transition={{ 
                                            duration: 2,
                                            delay: 0.2,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: Infinity
                                        }}
                                        className="font-bold text-cp0-400"
                                    >
                                        w terminie
                                    </motion.span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="grid items-center grid-cols-12 gap-2 sm:gap-6 lg:-translate-x-10">
                        <motion.div
                            initial={{ rotateY: 540 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0 }}
                            className="col-span-4">
                            <img className="border-2 border-cp0-600 rounded-xl drop-shadow-md" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description" />
                        </motion.div>

                        <motion.div
                            initial={{ rotateY: 360 }}
                            transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0 }}
                            className="col-span-3">
                            <img className="border-2 border-cp0-600 rounded-xl drop-shadow-md" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                        </motion.div>

                        <motion.div
                            initial={{ rotateY: 180 }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0 }}
                            className="col-span-5">
                            <img className="border-2 border-cp0-600 rounded-xl drop-shadow-md" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}