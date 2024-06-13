import AccodionItem from "./AccodionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccodionItem title={el.title} text={el.text} num={i + 1} />
      ))}
    </div>
  );
}
