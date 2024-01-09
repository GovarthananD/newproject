import { useState } from "react";
import { Colorbox } from "./Colorbox";


export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    backgroundColor: color,
  };
  const [colorList, setcolorList] = useState(["red", "green", "maroon"]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        value={color} />
      <button onClick={() => setcolorList([...colorList, color])}>Add color</button>
      {colorList.map((clr) => (
        <Colorbox color={clr} />
      ))}

    </div>
  );
}
