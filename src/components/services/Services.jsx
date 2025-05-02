import { MingiModel } from "./mingi/MingiModel";
import MingiModelContainer from "./mingi/MingiModelContainer";
import "./services.css";

const Services = () => {
  return (
    <div className='services'>
      <div className="sSection left"></div>
      <div className="sSection right">
        <MingiModelContainer/>
      </div>
    </div>
  )
}

export default Services