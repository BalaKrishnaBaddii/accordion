import AccodionItem from "./AccodionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el) => (
        <AccodionItem title={el.title} text={el.text} />
      ))}
    </div>
  );
}
