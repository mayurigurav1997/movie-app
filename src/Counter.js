import { useState } from "react";

import './App.css';
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      {/* all event listener should be in camelCase */}
      <button className="like-button" onClick={() => setLike(like + 1)}>👍 {like}</button> <br /><br />
      <button className="dislike-button" onClick={() => setDislike(dislike - 1)}>👎 {dislike}</button>

    </div>
  );
}
