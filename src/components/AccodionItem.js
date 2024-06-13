export default function AccodionItem({
  num,
  title,
  text,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;
  function handleExpand() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : "item"}`} onClick={handleExpand}>
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <p className="content-box">{children}</p> : null}
    </div>
  );
}
