const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="px-4 py-2 mb-16 text-4xl font-bold text-center text-black border-t-2 border-b-2 md:rounded-lg md:self-center lg:text-5xl lg:border-0 font-rubik border-cp0-500 bg-cp0-500 md:w-[600px]">
      {title}
    </div>
  )
}

export { SectionTitle }