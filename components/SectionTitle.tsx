const SectionTitle = ({ title }: { title: string }) => {
    return (
      <div className="bg-gradient-to-r from-black via-cp0-600 to-black py-1 mb-16 text-3xl font-bold text-center text-black md:rounded-lg md:self-center lg:text-3xl font-lato md:w-[500px]">
        {title}
      </div>
    )
}

export default SectionTitle;