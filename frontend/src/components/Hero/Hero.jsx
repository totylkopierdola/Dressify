import "./Hero.css";
import youngWomanClothes from "../assets/young-woman-clothes.png";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>new</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <ChevronRight />
        </div>
      </div>
      <div className="hero-right">
        <img src={youngWomanClothes} alt="" />
      </div>
    </div>
  );
};

export default Hero;
