export const About = () => {
    return (
        <section className="my-24">
            <div className="container relative mx-auto flex-col flex p-16 lg:h-[32rem] lg:flex-row lg:items-center text-cp3 bg-cp2 drop-shadow-xl rounded-xl">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-wide lg:text-4xl">
                            O mnie
                        </h1>

                        <div className="my-8 space-y-5 text-lg tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore mollitia exercitationem, nam aliquid provident odio optio, eum id iusto placeat quae dignissimos quos? Harum fuga magni tempore voluptatibus nobis vel cum cumque, doloribus totam necessitatibus non pariatur quibusdam perspiciatis maiores?
                        </div>
                    </div>
                </div>
                <img className="block object-cover mx-auto rounded-full drop-shadow-xl shrink-0 w-96 h-96" src="/slomkaProfile.jpg" alt="profile"/>
            </div>
        </section>
    )
}