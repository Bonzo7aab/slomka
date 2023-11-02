import { motion } from "framer-motion"
import { SectionTitle } from "../helper";

export default function About(){
    return (
        <section id="about" className="flex flex-col">
            <SectionTitle title={"O MNIE"} />

            <div className="container relative flex flex-col gap-8 px-8 mx-auto text-white bg-black md:p-16 lg:flex-row lg:items-center md:border-2 border-cp0-600 md:drop-shadow-md md:rounded-xl">
                <motion.div 
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }}
                    className="w-full lg:w-1/2"
                    >
                    <div className="space-y-5 text-lg leading-relaxed tracking-wide lg:max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore mollitia exercitationem, nam aliquid provident odio optio, eum id iusto placeat quae dignissimos quos? Harum fuga magni tempore voluptatibus nobis vel cum cumque, doloribus totam necessitatibus non pariatur quibusdam perspiciatis maiores?
                    </div>
                </motion.div>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="block object-cover mx-auto border-2 md:rounded-full drop-shadow-md shrink-0 w-96 h-96 border-cp0-600" src="/slomkaProfile.jpg" alt="profile"/>
            </div>
        </section>
    )
}