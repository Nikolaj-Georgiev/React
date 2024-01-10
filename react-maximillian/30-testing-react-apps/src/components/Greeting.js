import { useState } from "react";
import Output from "./Output";

export default function Greeting() {

  const [changedText, setChangedText] = useState(false);

  const handleTextChange = () => {
    setChangedText(true)
  }

  return <div>
    <h2>Hello World!</h2>
    {!changedText && <Output>It's good to see you!</Output>}
    {changedText && <Output>Changed!</Output>}
    <button onClick={handleTextChange}></button>
  </div>
}