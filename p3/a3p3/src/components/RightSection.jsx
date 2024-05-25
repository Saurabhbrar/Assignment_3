import { useContext } from "react";
import { BulbContext } from "../context/BulbContextProvider";

export default function RightSection() {
  // Consuming values from BulbContext
  const { isOn, switchOn, switchOff } = useContext(BulbContext);

  return (
    <div className="right-section">
      <p>Right Section ( Bulb ) </p>
      <div className="light-bulb-container">
        {/* Toggle class based on isOn state */}
        <div className={`light-bulb ${isOn ? "on" : "off"}`}></div>
        {/* Call switchOn function on click */}
        <button onClick={switchOn}>SWITCH ON</button>
        {/* Call switchOff function on click */}
        <button onClick={switchOff}>SWITCH OFF</button>
      </div>
    </div>
  );
}
