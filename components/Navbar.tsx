"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

      <nav className="fixed z-10 w-full py-4 mx-auto text-white bg-black font-rubik">
        <div className="relative flex justify-center text-xl">

          <ul className="items-center hidden gap-3 space-x-8 lg:flex md:flex">
            <li>
              <Link
                to="offer"
                spy={true}
                smooth={true}
                duration={500}
                title="Oferta"
                offset={-120}
                className="font-medium tracking-wide duration-200 cursor-pointer hover:text-cp0-400 hover:underline hover:underline-offset-8"
              >
                Oferta
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                title="O mnie"
                className="font-medium tracking-wide duration-200 cursor-pointer hover:text-cp0-400 hover:underline hover:underline-offset-8"
              >
                O mnie
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
              >
                  <Image alt='logoT' src={'/logoT.png'} width={70} height={100} className='animate-logoBlur'/>
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                title="Projekty"
                className="font-medium tracking-wide duration-200 cursor-pointer hover:text-cp0-400 hover:underline hover:underline-offset-8"
              >
                Projekty
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                title="Kontakt"
                className="font-medium tracking-wide duration-200 cursor-pointer hover:text-cp0-400 hover:underline hover:underline-offset-8"
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="w-full md:hidden">
            <div className='flex justify-between px-4'>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                title='Strona Główna'
              >
                  <Image alt='logoT' src={'/logoT.png'} width={60} height={60} />
              </Link>
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 text-white bg-black border rounded shadow-sm border-cp0-400">
                  <div className="flex items-center justify-between mb-4">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-120}
                      title='Strona Główna'
                    >
                      <Image alt='logoT' src={'/logoT.png'} width={60} height={60} />
                    </Link>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>

                    <ul className="p-2 space-y-4">
                      <li>
                        <Link
                          to="offer"
                          spy={true}
                          smooth={true}
                          duration={500}
                          title="Oferta"
                          offset={-120}
                          className="font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Oferta
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          title="O mnie"
                          className="font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          O mnie
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="projects"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          title="Projekty"
                          className="font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Projekty
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="contact"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          title="Kontakt"
                          className="font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Kontakt
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

    )
}

export default Navbar