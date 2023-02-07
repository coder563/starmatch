import { useState } from "react";
import utils from "../utils/math-utils"
import PlayNumber  from "./PlayNumber";
export default function App() {
  const [stars, setStars] = useState(0);
  return (
   <div> 
      <div className="help">
        Pick one or more numbers that sum up to the number of stars
      </div>
      <div className="body">
        <div className="left">

          
          {utils.range(1, stars).map(starId =>
              <div key={starId} className="star" />
            )}

        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
          	<button key={number} className="number">{number}</button>
          )}



        </div>
      </div>
    </div>
  );
}