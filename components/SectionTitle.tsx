const SectionTitle = ({ title }: { title: string }) => {
    return (
      <div className="bg-gradient-to-r from-black via-cp0-600 to-black px-4 py-2 mb-16 text-4xl font-bold text-center text-black md:rounded-lg md:self-center lg:text-5xl font-lato border-cp0-500 bg-cp0-500 md:w-[600px]">
        {title}
      </div>
    )
}

export default SectionTitle;