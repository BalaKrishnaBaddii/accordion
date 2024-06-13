import { useState } from "react";
import AccodionItem from "./AccodionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccodionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i + 1}
        >
          {el.text}
        </AccodionItem>
      ))}
      <AccodionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Open Me"
        num={10}
      >
        <p>Daily Goals</p>
        <ul>
          <li>Wake up at 5 A.M</li>
          <li>Learn React</li>
          <li>Apply Jobs 😍</li>
        </ul>
      </AccodionItem>
    </div>
  );
}
