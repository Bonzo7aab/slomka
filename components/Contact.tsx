"use client"

import { FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { MotionDiv } from "@/components/Motion";
import SectionTitle from "./SectionTitle";

export default function Contact(){
    const ref = useRef<HTMLFormElement>(null)
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonDisabled(true);
        const formData = new FormData(e.currentTarget);
        const form_values = Object.fromEntries(formData);

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form_values)
        })

        if(response.status === 200) {
            toast.success('Wiadomość została wysłana!')
        } else {
            toast.error('Błąd wysłania wiadomości. Skontaktuj się ze mną inaczej.')
        }
        setButtonDisabled(false);
    }

    return (
        <section id="contact" className="flex flex-col justify-center">
            <SectionTitle title={"KONTAKT"} />

            <div className="w-full px-4 pb-12 mx-auto text-gray-400 md:max-w-3xl">
                <form
                    ref={ref}
                    onSubmit={async (formData) => {
                        await sendEmail(formData)
                        ref.current?.reset()
                    }}
                    className="space-y-5"
                >
                    <label
                        htmlFor="username"
                        className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                    >
                        <input
                            type="text"
                            name="username"
                            id="username"
                            maxLength={50}
                            required
                            className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        <span
                            className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                        >
                            Imię i nazwisko
                        </span>
                    </label>
                    <label
                        htmlFor="email"
                        className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                        >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            maxLength={50}
                            required
                            className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        <span
                            className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                        >
                            Email
                        </span>
                    </label>
                    <label
                        htmlFor="phone"
                        className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                        >
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            maxLength={15}
                            required
                            className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        <span
                            className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                        >
                            Telefon kontaktowy
                        </span>
                    </label>
                    <label
                        htmlFor="message"
                        className="relative w-full min-w-[200px] block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                        >
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full h-full min-h-[100px] p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        <span
                            className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                        >
                            Wiadomość
                        </span>
                    </label>
                    <button
                        type='submit'
                        disabled={buttonDisabled}
                        className="w-full px-4 py-2 font-medium text-black duration-150 rounded-lg bg-cp0-600 hover:bg-cp0-600 active:bg-cp0-600"
                    >
                        Wyślij
                    </button>
                </form>
            </div>


            <div className="container px-6 pb-12 mx-auto">
                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2">
                    <MotionDiv
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <span className="p-3 rounded-full text-cp0-400 bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-white">Email</h2>
                        <span className="mt-2 text-cp0-400">smk.filmproduction@gmail.com</span>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 rounded-full text-cp0-400 bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-lg font-medium text-white">Telefon</h2>
                        <span className="mt-2 text-cp0-400">+48 697 504 228</span>
                    </MotionDiv>
                </div>
            </div>
        </section>
    )
}
