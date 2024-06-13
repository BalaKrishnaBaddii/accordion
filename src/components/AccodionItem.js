import { useState } from "react";

export default function AccodionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleExpand() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : "item"}`} onClick={handleExpand}>
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <p className="content-box">{text}</p> : null}
    </div>
  );
}
