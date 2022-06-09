import { useState } from "react";
import { ColorBox } from "./ColorBox";
import Button from '@mui/material/Button';

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = {
    backgroundColor: color || "peach",
  };
  const INITIAL_COLOR_LIST = ["deepskyblue", "orange", "green"];
  // passing the array as an object
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);
  console.log(colorList);
  
  return (
    <div>
      {/* // value={color} */}
      <input style={styles} onChange={(event) => setColor(event.target.value)}  placeholder="Enter a color" />
       
       {/* Copy the color list and add the new color to it */}
      <Button variant="contained" size="small" onClick={() => { setColorList([...colorList, color]); }}>Add Color</Button>

      {colorList.map((clr, index) => <ColorBox key={index} color={clr} />)}
    </div>
  );
}
