// styles
import { style } from "./style.js";
// css
import "./hero.css";
// inner components
import Timer from "./Timer/Timer.jsx";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <Timer />
      </div>
    </main>
  );
};

export default Hero;
