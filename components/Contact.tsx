"use client"

import toast from 'react-hot-toast';
import SectionTitle from "./SectionTitle";
import { FormEvent, useState } from 'react';

export default function Contact(){
    const emptyData = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const [data, setData] = useState(emptyData)

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        if(response.status === 200) {
            setData(emptyData);
            toast.success('Wiadomość została wysłana!')
        } else {
            toast.error('Błąd wysłania wiadomości. Skontaktuj się ze mną inaczej.')
        }
    }

    return (
        <section id="contact" className="flex flex-col justify-center">
            <SectionTitle title={"KONTAKT"} />

            <div className="w-full px-4 pb-12 mx-auto text-gray-400 md:max-w-3xl">
                
                <form
                    onSubmit={(e) => sendEmail(e)}
                    className="space-y-5"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                            >
                            <input
                                type="name"
                                id="name"
                                placeholder="Name"
                                className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                            <span
                                className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                                Imię i nazwisko
                            </span>
                        </label>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                            >
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                            <span
                                className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                                Email
                            </span>
                        </label>
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                            >
                            <input
                                type="phone"
                                id="phone"
                                placeholder="Phone"
                                className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                            <span
                                className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                                Telefon kontaktowy
                            </span>
                        </label>
                    </div>
                    <div className="relative w-full min-w-[200px]">
                        <label
                            htmlFor="message"
                            className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
                            >
                            <textarea
                                id="message"
                                placeholder="Message"
                                className="w-full h-full min-h-[100px] p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                            <span
                                className="absolute text-xs transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                                Wiadomość
                            </span>
                        </label>
                    </div>
                    <button
                        className="w-full px-4 py-2 font-medium text-black duration-150 rounded-lg bg-cp0-600 hover:bg-cp0-600 active:bg-cp0-600"
                    >
                        Wyślij
                    </button>
                </form>
            </div>
        </section>
    )
}
