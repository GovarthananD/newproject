import { useState } from "react";
import { Movies } from "./Movies";
import { AddMovie } from "./AddMovie";

export function Movielist({movielist}) {
  return (
    <div>
      
      <div className="finaledit">
        {movielist.map((mv, index) => (
          <Movies movie={mv} key={index} id={index} />
        ))}
      </div>
    </div>
  );
}

