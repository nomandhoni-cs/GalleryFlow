export function Grid(props) {
  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridGap: 20,
      }}
    >
      {props.children}
    </div>
  );
}
