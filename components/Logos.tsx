import { logos } from "@/app/_data"
import Marquee from "react-fast-marquee";

const Logos = () => {
  return (
    <Marquee autoFill className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {logos.map(logo =>
            <img src={logo} alt={logo} key={logo} className="mx-16"/>    
        )}
    </Marquee>
  )
}

export default Logos