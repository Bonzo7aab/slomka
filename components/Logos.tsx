import { logos } from "@/app/_data"

const Logos = () => {
  return (
    <div>
      <div className="space-x-6 text-3xl text-center text-white">Firmy z którymi współpracowałem</div>
      <div className="grid grid-cols-2">
        {logos.map(logo =>
            <img src={logo} alt={logo} key={logo} className="mx-16 w-28"/>    
        )}
      </div>
    </div>
  )
}

export default Logos