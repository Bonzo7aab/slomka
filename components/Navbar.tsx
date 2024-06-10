"use client"

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { MotionLi } from './Motion';

const NavListItem = ({ to, name }: { to: string, name: string}) => 
  <li>
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-120}
      className="font-medium tracking-wide uppercase duration-200 cursor-pointer hover:text-cp0-400 hover:underline hover:underline-offset-8"
    >
      {name}
    </ScrollLink>
  </li>

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()
    return (

      <nav className="fixed z-10 flex justify-center w-full h-24 py-4 mx-auto text-white uppercase bg-black font-lato drop-shadow-sm">
        <div className="relative w-full px-8 text-xl lg:container">

          {pathname === '/filmy'
            ? 
              <ul className='items-center justify-between hidden w-full gap-6 lg:flex'>
                <li>
                  <Link href={'/'}>
                    <Image alt='logoTransparent' src={'/logoTransparent.png'} width={70} height={100} className='animate-logoBlur'/>
                  </Link>
                </li>
                <li className='font-medium tracking-wide cursor-pointer hover:text-cp0-400 hover:underline hover:underline-offset-8'>
                  <Link href={'/'}>Powrót</Link>
                </li>
              </ul>
            :
            <div className='items-center justify-between hidden w-full lg:flex'>
              <Link href={'/'}>
                <Image alt='logoTransparent' src={'/logoTransparent.png'} width={70} height={100} 
                  className='animate-logoBlur'
                  />
              </Link>
              <ul className="flex space-x-8">
                <NavListItem to='video' name='video'/>
                <NavListItem to='drone' name='dron'/>
                <NavListItem to='editing' name='montaż'/>
                <NavListItem to='about' name='o mnie'/>
                <NavListItem to='pricing' name='cennik'/>
                <NavListItem to='contact' name='kontakt'/>
              </ul>
            </div>
          }
          <div className="w-full lg:hidden">
            <div className='flex items-center justify-between px-4'>
              <Link href={'/'}>
                <Image alt='logoTransparent' src={'/logoTransparent.png'} width={60} height={60} />
              </Link>
              {pathname === '/filmy'
                ? 
                  <div className='font-medium tracking-wide cursor-pointer hover:text-cp0-400 hover:underline hover:underline-offset-8'>
                    <Link href={'/'}>Powrót</Link>
                  </div>
                :
                  <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <svg className="w-10 text-gray-600" viewBox="0 0 24 24">
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
              }
            </div>

          </div>
        </div>
        {isMenuOpen && (
              <div className="absolute left-0 w-full -mt-4 top-4">
                <div className="p-8 text-white bg-black border rounded shadow-sm border-cp0-400">
                  <div className="flex items-center justify-between px-2 mb-4">
                    <Link href={'/'}>
                      <Image alt='logoTransparent' src={'/logoTransparent.png'} width={60} height={60} />
                    </Link>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-4 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-10 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav>
                    <ul className="flex flex-col gap-8 p-4 text-center">
                      <MotionLi
                        initial={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <ScrollLink
                          to="video"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          className="text-3xl font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Video
                        </ScrollLink>
                      </MotionLi>
                      <MotionLi
                        initial={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <ScrollLink
                          to="drone"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          className="text-3xl font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Dron
                        </ScrollLink>
                      </MotionLi>
                      <MotionLi
                        initial={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <ScrollLink
                          to="editing"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          className="text-3xl font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Montaż
                        </ScrollLink>
                      </MotionLi>
                      <MotionLi
                        initial={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <ScrollLink
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          title="O mnie"
                          className="text-3xl font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          O mnie
                        </ScrollLink>
                      </MotionLi>
                      <MotionLi
                        initial={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <ScrollLink
                          to="pricing"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          title="Cennik"
                          className="text-3xl font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Cennik
                        </ScrollLink>
                      </MotionLi>
                      <MotionLi
                        initial={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <ScrollLink
                          to="contact"
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-120}
                          title="Kontakt"
                          className="text-3xl font-medium tracking-wide transition-colors hover:text-cp0-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Kontakt
                        </ScrollLink>
                      </MotionLi>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
      </nav>

    )
}

export default Navbar