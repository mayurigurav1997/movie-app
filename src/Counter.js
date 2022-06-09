import { useState } from "react";

import './App.css';
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(dislike - 1);
  return (
    <div className="counter-container">
      {/* all event listener should be in camelCase */}
      <button className="like-button" onClick={incrementLike}>👍 {like}</button> <br /><br />
      <button className="dislike-button" onClick={incrementDisLike}>👎 {dislike}</button>

    </div>
  );
}
