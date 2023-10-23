export default function Testimonials(){

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Product designer",
            quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
    ]

    return (
        <section className="my-24">
            <div className="max-w-screen-xl px-4 pb-20 mx-auto md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-3xl font-semibold text-cp2 sm:text-4xl">
                        Opinie klientów
                    </h3>
                    <div className="mt-6">
                        <span className="inline-block w-1 h-1 rounded-full bg-cp2"></span>
                        <span className="inline-block w-3 h-1 mx-1 rounded-full bg-cp2"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-cp2"></span>
                        <span className="inline-block w-3 h-1 mx-1 rounded-full bg-cp2"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-cp2"></span>
                    </div>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="p-6 bg-cp5-dark rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block font-semibold text-gray-800">{item.name}</span>
                                                <span className="block text-cp1 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-cp1">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}