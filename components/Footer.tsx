import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-black">
            <div className="container flex flex-col items-center justify-between p-4 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <a href="#">
                    <Image alt='logoT' src={'/logoT.png'} width={60} height={100} />
                </a>

                <div className="flex">
                    <a href="https://www.facebook.com/michalslomkafilmbusters" className="mx-2 text-gray-300 transition-colors duration-300 hover:text-cp0-500" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="w-5 h-5 fill-current" viewBox="0 0 30 30" fill="none">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </a>

                    <a href="https://www.youtube.com/@SMKPRODUCTION" className="mx-2 text-gray-300 transition-colors duration-300 hover:text-cp0-500" aria-label="YouTube">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 30 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                            <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                        </svg>
                    </a>
                </div>

                <p className="text-sm text-gray-300">Made by Sadurski</p>
            </div>
        </footer>
    )
}

export default Footer